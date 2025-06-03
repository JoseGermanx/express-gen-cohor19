
const express = require("express")
const morgan = require("morgan")

const app = express()

const port = 3000

const middlewarePersonalizado = (req, res, next) => {
    console.log("Pasando por el middleware personalizado")
    next() // Llama al siguiente middleware o ruta
}
app.use(morgan("dev"))
// app.use(middlewarePersonalizado)
// app.get("/", middlewarePersonalizado, funciónQueManejaEsRuta)

//    ruta   función que se ejecuta
app.get("/", (req, res) => {
    res.json({
        message: "¡Hola, mundo!",
        timestamp: new Date().toISOString()
    })
})

app.get("/users", (req, res) => {
    res.send("Esta es la ruta de usuarios")
})

app.get("/products", (req, res) => {
    res.send("Esta es la ruta de productos")
})


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})
