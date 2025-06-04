const { registerUser, loginUser, getUser } = require('../controllers/controllers');

const router = require('express').Router();

router.post('/registro', registerUser );

router.post('/login', loginUser)

router.get('/user/:id', getUser )


module.exports = router