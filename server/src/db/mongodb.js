const mongoose = require('mongoose');

const connectionMongoDB = async () => {
    const DB = process.env.MONGODB_URI
    try {
        await mongoose.connect(DB)
        console.log('Conectado a la base de datos: ',DB)
        return `Conectado a la base de datos de MongoDB`
    } catch (error) {
        const msjError = `No se pudo conectar a la base de datos: ${error.message} ---- ${DB}`
        console.log(msjError)
        return msjError
    }
}

module.exports = connectionMongoDB;