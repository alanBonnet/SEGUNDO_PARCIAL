const mariadbConnection = require('../db/mariadb')
const ctrl_Connection={};

ctrl_Connection.conectedDB_MARIADB = async () => {
    let dbConnected;
    try {
        dbConnected = await mariadbConnection.getConnection()
        return ({
            result: `Conectado a la base de datos MariaDB`
        })
    } catch (error) {
        console.log("no se pudo conectar a la db: " + error.message)
        console.error(`http://${DB_HOST_MARIADB}:${DB_PORT_MARIADB}`)
        return 0
    } finally {
        if (dbConnected) dbConnected.end()
    }
}


module.exports = ctrl_Connection