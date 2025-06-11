

const User = require('../models/model.js')

// controlador para registrar un usuario 
// recibir los datos del nuevo usuario: name, email, password
// almacenar los datos en la base de datos
// ---> !!! reponder al cliente el resultado de la operación: satisfactorio o no

const registerUser = async (req, res) => {
    // Aquí se recibirían los datos del usuario desde el cuerpo de la solicitud
    const { name, email, password } = req.body

    // posibles validaciones
    if (!name || !email || !password) {
        res.status(400).json({
            message: "Faltan datos para registrar el usuario",
        })
        return
    }
    
    // acá la lógica para almacenar en la BD
    try{
        // asíncrono ---> por que evalúa una promesa que se envía a Mongo
        await User.create({
            name,
            email,
            password
        })

        res.status(201).json({
            message: "Usuario registrado correctamente",
        })
        return


    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: "Error al registrar el usuario",
            error: error.message
        })
    }

}

//controlador para iniciar sesión
//recibir los datos para hacer el login: email, password
// Consultar en la base datos la información que entrega el usuario
//  verificando si el email esta registrado en la DB
// comprobar si el campo de contraseña coincide (encriptando la contraseña)
// ---> !!! responder al cliente el resultado de la operación: satisfactorio o no

const loginUser = (req, res) => {
    // Aquí se recibirían los datos del usuario desde el cuerpo de la solicitud
    const {email, password} = req.body
    // posibles validaciones
    if (!email || !password) {
        res.status(400).json({
            message: "Faltan datos para iniciar sesión",
        })
        return
    }

    // lógica para consultar en la BD (email)

    // verificar contraseña

    // respuesta
    res.status(200).json({
        message: "Usuario logueado correctamente",
        data: {
            email,
        }
    })
}

//controlador para obtener los datos de un usuario
// recibir el id de usuario a consultar
// consultar en la base de datos (id) la información del usuario
// ---> !!! responder al cliente el resultado de la operación: satisfactorio o no

const getUser = (req, res) => {
    // Aquí se recibiría el id del usuario desde los parámetros de la solicitud
    const { id } = req.params
    // posibles validaciones
    if (!id) {
        res.status(400).json({
            message: "Falta el id del usuario a consultar",
        })
        return
    }

    // consultar en la base de datos (id) la información del usuario

    res.status(200).json({
        message: "Usuario encontrado correctamente",
        data: {
            id,
        }})
}



module.exports = { registerUser, loginUser, getUser }


