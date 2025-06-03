const app = require('./src/app/app.js')

const port = 10000

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})
