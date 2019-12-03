require('dotenv').config()

module.exports = {
  client: process.env.DB_TYPE,
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST || '127.0.0.1',
    schema: process.env.DB_SCHEMA || 'public',
    database: process.env.DB_NAME,
    charset: process.env.DB_CHARSET || 'utf8mb4'
  },
  pool: {
    min: parseInt(process.env.DB_POOL_MIN) || 2,
    max: parseInt(process.env.DB_POOL_MAX) || 10
  },
  migrations: {
    tableName: process.env.DB_MIGRATION_TABLENAME || '_migrations'
  },
  debug: false
}
