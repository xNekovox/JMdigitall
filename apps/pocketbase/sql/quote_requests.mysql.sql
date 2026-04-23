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
