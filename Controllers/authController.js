const { tokenSign } = require('../helpers/generateToken')
const { compare, encrypt } = require('../helpers/passwordBcrypt')
const userModel = require('../Models/userModel');

const loginCtrl = async (req, res) => {
    
    try {
        const { email, password } = req.body

        const user = await userModel.model.findOne({ email })

        if (!user) {
            res.status(404)
            res.send({ error: 'User not found' })
        }

        const checkPassword = await compare(password, user.password)

        const tokenSession = await tokenSign(user)

        if (checkPassword) { 
            res.send({
                tokenSession,
                data: user
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

    
};

const registerCtrl = async (req, res) => {
    let userRole = 'user'
    try {
        const { email, password, firstName, lastName, role } = req.body;
        const passwordHash = await encrypt(password)
        const newUser = new userModel.model({
                                            email,
                                            password: passwordHash,
                                            firstName,
                                            lastName,
                                            role: userRole
                                        });
    const tokenSession = await tokenSign(newUser);
    newUser.save((error) => {
        if (error) {
            return res.status(500).send(error);
        }

        res.status(201).send({
            data: newUser,
            tokenSession           
        }
            
        );
    });

    } catch (e) {
        (res, e)
    }

    
};


module.exports = {loginCtrl, registerCtrl};