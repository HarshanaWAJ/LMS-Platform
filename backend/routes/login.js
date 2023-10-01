const User = require('../models/User');

const router =  require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


const dotenv = require('dotenv').config();

// Other Routes For Users!!!

//Veryfy User



/* --POST Methods-- */ 
/* -------------------------------------------------------------------------------------------- */
//Send Mail
router.route('/sendMail').post(async(req, res) => {
    res.json("Send Mail Route")
})

//Authontication
router.route('/authenticate').post(async(req, res) => {
    res.json("Authontication Route")
})

//Login 
router.post('/login', async (req, res) => {
    const secretKey = crypto.randomBytes(32).toString('hex');
    
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send({ error: "Email Not Found!" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).send({ error: "Password is incorrect" });
        }
        else {
            const token = jwt.sign({ userId: user.id, username: user.username, role: user.role}, secretKey, { expiresIn: "1h" });

            return res.status(200).send({ msg: "Login successful", username: user.username, token });
        }
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
});

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