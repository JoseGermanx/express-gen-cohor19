const express = require("express")
const morgan = require("morgan")
const router = require("../routes/routes")

// middleware (funciones que se ejecutan dentro de la cadena de responsabilidad)
// propios
// personalizados
// terceros --> morgan

const app = express()

// middlewares de uso general
app.use(morgan("dev"))  // --> middleware (terceros)
app.use(express.json())  // --> middleware (propio) para parsear el body de las peticiones a JSON
app.use((req, res, next) => {  // middleware (personalizado)
    console.log("Middleware personalizado")
    next()  // --> llama al siguiente middleware
})

app.use("/", router) // se inyentar todas las rutas definidas en el enrutador

module.exports = app