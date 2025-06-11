const app = require('./src/app/app.js')

const { dbConnection } = require('./src/database/conexion.js')

const port = 10000

dbConnection() // Conectar a la base de datos

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})
