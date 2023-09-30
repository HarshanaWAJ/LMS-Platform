const router =  require('express').Router();
let User = require('../models/User.js');
const bcrypt = require('bcrypt');
const {jwt} = require('jsonwebtoken');

const dotenv = require('dotenv').config();

const JWT = process.env.JWT_SECRET;

// Other Routes For Users!!!
/* --POST Methods-- */ 
/* -------------------------------------------------------------------------------------------- */
//Send Mail
router.route('/sendMail').post(async(req, res) => {
    res.json("Send Mail Route")
})

//Authontication
router.route('/authenticate').post(async(req, res) => {
    res.end('Authentication');
})

//Login 
router.route('/login').post(async(req, res) => {
    const {email, password} = req.body;
    try {
        await User.findOne({email})
            .then(user => {
                bcrypt.compare(password, user.password)
                    .then(password => {
                        
                        if (!password) return res.status(400).send({Error: "Don't have a password"})
                        
                         //JWT Token
                         const token = jwt.sign( {
                            userId :  user.id,
                            username : user.username,
                            role : user.role 
                         }, 'secret', {expiresIn: "1h"});

                         return res.status(200).send(
                            {msg: "Login successful",
                            username : user.username,
                            token}
                            )
                    })
                    .catch(err => {
                        return res.status(400).send({Error: "Password is incorrect"});
                    });
            })
            .catch(err => {
                return res.status(404).send({Error: "Email Not Found!"});
            })
    }
    catch (err) {
        return res.status(500).send({message: err.message, msg: "Section 1"});
    }
})

/* --GET Methods-- */
/* -------------------------------------------------------------------------------------------- */
//Generate OTP
router.route('/generateOTP').get(async(req, res) => {
    res.json("Generate OTP Route")
})

//Verify OTP
router.route('/verifyOTP').get(async(req, res) => {
    res.json("Verify OTP Route")
})

//Reset Sessions
router.route('/createResetSession').get(async(req, res) => {
    res.json("Reset Session Route")
})

/* --PUT Methods-- */
/* -------------------------------------------------------------------------------------------- */
//Update User
router.route('/updateUser').put(async(req, res) => {
    res.json("Update User Route")
})

//RESET Password
router.route('/resetPassword').put(async(req, res) => {
    res.json("Reset Password Route")
})

module.exports = router;