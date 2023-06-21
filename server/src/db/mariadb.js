const mariadb = require('mariadb');

const connectionMariaDB = mariadb.createPool({
    host: process.env.DB_HOST_MARIADB,
    port: process.env.DB_PORT_MARIADB,
    user: process.env.DB_USER_MARIADB,
    password: process.env.DB_PASSWORD_MARIADB,
    database: process.env.DB_DATABASE_MARIADB,
    connectionLimit:32
})

module.exports = connectionMariaDB