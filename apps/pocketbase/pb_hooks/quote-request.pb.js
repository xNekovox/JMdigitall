/// <reference path="../pb_data/types.d.ts" />

const REQUIRED_ENV_VARS = [
    "MYSQL_HOST",
    "MYSQL_PORT",
    "MYSQL_DATABASE",
    "MYSQL_USER",
    "MYSQL_PASSWORD",
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASSWORD",
    "CONTACT_EMAIL",
];

function getEnv(name, fallback = "") {
    return ($os.getenv(name) || fallback).trim();
}

function ensureServerConfig() {
    const missing = REQUIRED_ENV_VARS.filter((name) => !getEnv(name));

    if (missing.length) {
        throw new ApiError(500, `Faltan variables de entorno: ${missing.join(", ")}`);
    }
}

function configureSmtpFromEnv() {
    const smtpHost = getEnv("SMTP_HOST");
    const smtpPort = parseInt(getEnv("SMTP_PORT", "465"), 10);
    const smtpUser = getEnv("SMTP_USER");
    const smtpPassword = getEnv("SMTP_PASSWORD");

    if (!smtpHost || !smtpUser || !smtpPassword || !smtpPort) {
        return;
    }

    const smtpSecure = getEnv("SMTP_SECURE", "ssl").toLowerCase();
    const settings = $app.settings().clone();

    settings.smtp.enabled = true;
    settings.smtp.host = smtpHost;
    settings.smtp.port = smtpPort;
    settings.smtp.username = smtpUser;
    settings.smtp.password = smtpPassword;
    settings.smtp.authMethod = "LOGIN";
    settings.smtp.tls = smtpSecure === "ssl" || smtpSecure === "tls" || smtpSecure === "true";

    if (!settings.meta.senderAddress) {
        settings.meta.senderAddress = getEnv("CONTACT_EMAIL", smtpUser);
    }

    if (!settings.meta.senderName) {
        settings.meta.senderName = "JMdigitall";
    }

    $app.save(settings);
}

function validatePayload(data) {
    const requiredFields = {
        client_name: "Nombre completo",
        email: "Correo electrónico",
        phone: "Teléfono",
        service_type: "Tipo de servicio",
    };

    for (const [field, label] of Object.entries(requiredFields)) {
        if (!String(data[field] || "").trim()) {
            throw new ApiError(400, `${label} es obligatorio.`);
        }
    }

    const email = String(data.email || "").trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new ApiError(400, "El correo electrónico no es válido.");
    }
}

function normalizePayload(data) {
    return {
        client_name: String(data.client_name || "").trim(),
        email: String(data.email || "").trim(),
        phone: String(data.phone || "").trim(),
        service_type: String(data.service_type || "").trim(),
        additional_service: String(data.additional_service || "").trim(),
        notes: String(data.notes || "").trim(),
        booking_date: String(data.booking_date || "").trim(),
        booking_time: String(data.booking_time || "").trim(),
    };
}

function openMysqlConnection() {
    const dsn = `${getEnv("MYSQL_USER")}:${getEnv("MYSQL_PASSWORD")}@tcp(${getEnv("MYSQL_HOST")}:${getEnv("MYSQL_PORT")})/${getEnv("MYSQL_DATABASE")}?charset=utf8mb4&parseTime=true&loc=Local`;
    return dbx.mustOpen("mysql", dsn);
}

function escapeHtml(value) {
    return String(value || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function ensureQuoteRequestsTable(mysqlDb) {
    mysqlDb.db().exec(`
        CREATE TABLE IF NOT EXISTS quote_requests (
            id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            client_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(100) NOT NULL,
            service_type VARCHAR(255) NOT NULL,
            additional_service VARCHAR(255) NULL,
            notes TEXT NULL,
            booking_date DATE NULL,
            booking_time TIME NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);
}

function insertQuoteRequest(mysqlDb, payload) {
    mysqlDb.db().exec(
        `
        INSERT INTO quote_requests (
            client_name,
            email,
            phone,
            service_type,
            additional_service,
            notes,
            booking_date,
            booking_time
        ) VALUES (?, ?, ?, ?, ?, ?, NULLIF(?, ''), NULLIF(?, ''))
        `,
        payload.client_name,
        payload.email,
        payload.phone,
        payload.service_type,
        payload.additional_service,
        payload.notes,
        payload.booking_date,
        payload.booking_time,
    );
}

function sendQuoteNotification(payload) {
    const contactEmail = getEnv("CONTACT_EMAIL");
    const senderEmail = getEnv("SMTP_USER");
    const safeClientName = escapeHtml(payload.client_name);
    const safeEmail = escapeHtml(payload.email);
    const safePhone = escapeHtml(payload.phone);
    const safeServiceType = escapeHtml(payload.service_type);
    const safeNotes = escapeHtml(payload.notes || "Sin notas adicionales");
    const safeAdditionalService = escapeHtml(payload.additional_service || "No especificado");
    const safeBookingDate = escapeHtml(payload.booking_date || "No especificada");
    const safeBookingTime = escapeHtml(payload.booking_time || "No especificada");

    const message = new MailerMessage({
        from: {
            address: senderEmail,
            name: "JMdigitall",
        },
        to: [{ address: contactEmail }],
        subject: `Nueva solicitud de cotización - ${payload.client_name}`,
        headers: {
            "Reply-To": `${payload.client_name} <${payload.email}>`,
        },
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
                <h2 style="margin-bottom: 16px;">Nueva solicitud de cotización</h2>
                <p>Se registró una nueva solicitud desde el formulario web.</p>
                <table style="border-collapse: collapse; width: 100%; margin-top: 20px;">
                    <tr><td style="padding: 8px; font-weight: bold;">Nombre</td><td style="padding: 8px;">${safeClientName}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold;">Correo</td><td style="padding: 8px;">${safeEmail}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold;">Teléfono</td><td style="padding: 8px;">${safePhone}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold;">Servicio principal</td><td style="padding: 8px;">${safeServiceType}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold;">Servicio adicional</td><td style="padding: 8px;">${safeAdditionalService}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold;">Fecha tentativa</td><td style="padding: 8px;">${safeBookingDate}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold;">Hora tentativa</td><td style="padding: 8px;">${safeBookingTime}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Notas</td><td style="padding: 8px;">${safeNotes}</td></tr>
                </table>
            </div>
        `,
    });

    $app.newMailClient().send(message);
}

onBootstrap(() => {
    configureSmtpFromEnv();
});

routerAdd("POST", "/api/quote-request", (e) => {
    ensureServerConfig();

    let data = {};

    try {
        data = JSON.parse(toString(e.request.body || "{}"));
    } catch (error) {
        throw new ApiError(400, "No se pudo procesar el formulario.", error);
    }

    validatePayload(data);

    const payload = normalizePayload(data);
    const mysqlDb = openMysqlConnection();

    try {
        ensureQuoteRequestsTable(mysqlDb);
        insertQuoteRequest(mysqlDb, payload);
        sendQuoteNotification(payload);

        return e.json(200, {
            success: true,
            message: "Cotización solicitada exitosamente.",
        });
    } catch (error) {
        $app.logger().error("Quote request failed", "error", error);
        throw new ApiError(500, "No fue posible registrar la solicitud en este momento.", error);
    } finally {
        mysqlDb.close();
    }
});
