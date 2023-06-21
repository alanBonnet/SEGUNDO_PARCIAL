const router = require('express').Router();
const mongodbConnection = require('../db/mongodb')
router.get('/check-mongodb-connection', async (req, res) => {
    try {
        
        return res.json({
            result:await mongodbConnection()
        })
    } catch (error) {
        return res.json({
            error
        })
    }
})
module.exports = router;
