const express = require('express');
const { tokenSign } = require('../helpers/generateToken')
const router = express.Router();
const userModel = require('../Models/userModel');

router.post('/login', async (req, res) => {
    
    try {
        const { email, password } = req.body

        const user = await userModel.model.findOne({ email })

        if (!user) {
            res.status(404)
            res.send({ error: 'User not found' })
        }

        //const checkPassword = await compare(password, user.password) //TODO: Contraseña!
        const checkPassword = true;
        //TODO JWT 👉
        const tokenSession = await tokenSign(user) //TODO: 2d2d2d2d2d2d2

        if (checkPassword) { //TODO Contraseña es correcta!
            res.send({
                tokenSession
            })
            return
        }

        if (!checkPassword) {
            res.status(409)
            res.send({
                error: 'Invalid password'
            })
            return
        }

    } catch (e) {
        (res, e)
    }

    
});


module.exports = router;