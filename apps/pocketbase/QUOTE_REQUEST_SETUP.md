# Quote Request Setup

## Required environment variables

Set these in the environment where PocketBase runs:

```env
PB_ENCRYPTION_KEY=replace-with-a-secure-random-string

MYSQL_HOST=your-mysql-host
MYSQL_PORT=3306
MYSQL_DATABASE=your_database_name
MYSQL_USER=your_database_user
MYSQL_PASSWORD=your_database_password

SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=contacto@jmdigitall.com
SMTP_PASSWORD=your_smtp_password
SMTP_SECURE=ssl

CONTACT_EMAIL=contacto@jmdigitall.com
```

## MySQL table

The hook will create the `quote_requests` table automatically if it doesn't exist.

If you prefer to create it manually, use:

```sql
SOURCE sql/quote_requests.mysql.sql;
```

## Form flow

The web form now sends a `POST` request to:

```txt
/hcgi/platform/api/quote-request
```

The PocketBase hook:

1. Validates the payload
2. Stores it in the external MySQL table `quote_requests`
3. Sends an email notification to `CONTACT_EMAIL`
