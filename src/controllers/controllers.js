

// controlador para registrar un usuario 
// recibir los datos del nuevo usuario: name, email, password
// almacenar los datos en la base de datos
// ---> !!! reponder al cliente el resultado de la operación: satisfactorio o no

const registerUser = (req, res) => {
    const { name, email, password } = req.body

    // posibles validaciones
    if (!name || !email || !password) {
        res.status(400).json({
            message: "Faltan datos para registrar el usuario",
        })
        return
    }
    
    // acá la lógica para almacenar en la BD


    // respuesta al cliente
    res.status(201).json({
        message: "Usuario registrado correctamente",
        data: {
        name,
        email,
        password
    }
    })
}

//controlador para iniciar sesión
// recibir los datos para hacer el login 
const loginUser = (req, res) => {
    res.send("Acá tendremos el controlador de login")
}

const getUser = (req, res) => {
    res.send("Acá tendremos el controlador de user")
}



module.exports = { registerUser, loginUser, getUser }


