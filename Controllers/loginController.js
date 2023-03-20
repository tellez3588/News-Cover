const express = require('express');
const { tokenSign } = require('../helpers/generateToken')
const { compare } = require('../helpers/passwordBcrypt')
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

        const checkPassword = await compare(password, user.password)
        //const checkPassword = true;
        //JWT 
        const tokenSession = await tokenSign(user)

        if (checkPassword) { 
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