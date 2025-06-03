const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.json({
        message: "¡Hola, cohorte 19!",
        timestamp: new Date().toISOString()
    })
})

module.exports = app