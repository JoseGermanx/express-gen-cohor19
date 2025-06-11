

const mongoose = require('mongoose')

const dbConnection = async () => {

    try {
        // intenta ejecutar este bloque de código
        await mongoose.connect("mongodb://localhost:27017/registro_usuarios_19") // asíncrono
        console.log('Base de datos conectada correctamente')

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    dbConnection
}