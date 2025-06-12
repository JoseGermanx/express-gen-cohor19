

const User = require('../models/model.js')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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
    try {

        // encriptar la contraseña
        const salt = bcrypt.genSaltSync() //define la dificultad de encriptado
        const passHash = bcrypt.hashSync(password, salt) //encripta la contraseña


        // asíncrono ---> por que evalúa una promesa que se envía a Mongo
        await User.create({
            name,
            email,
            password: passHash
        })

        res.status(201).json({
            message: "Usuario registrado correctamente",
        })
        return


    } catch (error) {
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

const loginUser = async (req, res) => {
    // Aquí se recibirían los datos del usuario desde el cuerpo de la solicitud
    const { email, password } = req.body
    // posibles validaciones
    if (!email || !password) {
        res.status(400).json({
            message: "Faltan datos para iniciar sesión",
        })
        return
    }
    try{
       
        // lógica para consultar en la BD (email)
        const findUser = await User.findOne({ email: email })

        // respuesta si el usuario no existe
        if(!findUser){
             res.status(404).json({
                message: "Usuario no encontrado",   
            })
            return
        }    
    
        // verificar contraseña
        const passVerify = bcrypt.compareSync(password, findUser.password) // true o false

        if(!passVerify){
            res.status(401).json({
                message: "Contraseña incorrecta",
            })
            return
        }

        // generar un token para el usuario
        const token = jwt.sign({id: findUser._id}, process.env.SECRET_JWT)
    
        // respuesta si el usuario existe y la contraseña es correcta
        res.status(200).json({
            message: "Usuario logueado correctamente",
            token: token,
        })

    } catch(error){
        console.log(error)
        res.status(500).json({
            message: "Error al iniciar sesión",
            error: error.message
        })
        return
    }

}

//controlador para obtener los datos de un usuario
// recibir el id de usuario a consultar
// consultar en la base de datos (id) la información del usuario
// ---> !!! responder al cliente el resultado de la operación: satisfactorio o no

const getUser = async (req, res) => {
    // Aquí se recibiría el id del usuario desde los parámetros de la solicitud
    
 
    try {

        // consultar en la base de datos (id) la información del usuario
    
        const user = await User.findById(req.userId)

        if(!user){
            res.status(404).json({
                message: "Usuario no encontrado",
            })
            return
        }
    
        res.status(200).json({
            message: "Usuario encontrado correctamente",
            data: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error al consultar datos del usuario",
            error: error.message
        })
        return
    }

}



module.exports = { registerUser, loginUser, getUser }


