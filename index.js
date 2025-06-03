
const express = require("express")

const app = express()

const port = 3000

//    ruta   función que se ejecuta
app.get("/", (req, res) => {
    res.json({
        message: "¡Hola, mundo!",
        timestamp: new Date().toISOString()
    })
    console.log("Recibida una solicitud GET en la ruta /")
    return
})


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})
