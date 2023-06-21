const router = require('express').Router();

const { conectedDB_MARIADB } = require('../controllers/connectionDB.controller')

router.get('/check-mariadb-connection', async (req, res) => {
    try {
        const dbConnected = await conectedDB_MARIADB();
        if (!dbConnected) {
            return res.status(444).json({
                result: "No se pudo conectar a la base de datos MariaDB"
            })
        }
        return res.json(dbConnected)
    } catch (error) {
        return res.status(500).json({
            result: "Error interno con el servidor."
        })
    }
})

module.exports = router;
