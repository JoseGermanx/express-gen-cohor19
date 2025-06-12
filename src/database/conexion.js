

const mongoose = require('mongoose')

const dbConnection = async () => {

    try {
        // intenta ejecutar este bloque de código
        await mongoose.connect(process.env.MONGO_URI) // asíncrono
        console.log('Base de datos conectada correctamente')

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    dbConnection
}