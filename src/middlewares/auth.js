
const jwt = require('jsonwebtoken');



const authJWT = (req, res, next) => {

    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({
            message: "Acceso denegado. No se proporcionó un token."
        });
    }

    try {
        // método para validar el token
        // si el token no es falido, se lanzará un error
        const decodedToken = jwt.verify(token, process.env.SECRET_JWT)
        
        // decodedToken contiene la información del usuario en payload
        //crear una propiedad en el objeto req para almacenar el id del usuario
        req.userId = decodedToken.id;
        
        next()
    
    } catch (error) {
        return res.status(400).json({
            message: "Token inválido.",
            error: error.message
        });
    }


    

}



module.exports = authJWT