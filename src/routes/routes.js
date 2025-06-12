const { registerUser, loginUser, getUser } = require('../controllers/controllers');
const authJWT = require('../middlewares/auth');

const router = require('express').Router();

router.post('/registro', registerUser );

router.post('/login', loginUser)

router.get('/user', authJWT, getUser ) // ruta protegida


module.exports = router