

const mongoose = require('mongoose')

const { model, Schema} = mongoose

// crear el schema del modelo

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Asegura que el email sea único
    },
    password: {
        type: String,
        required: true,
    }
})



// crear la instacia del modelo

const User = model("User", userSchema)

// mongoose         mongodb
// User        -->> users

module.exports = User