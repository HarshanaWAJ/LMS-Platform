const User = require('../models/User');

const router =  require('express').Router();
const bcrypt = require('bcrypt');

// Other Routes For Users!!!
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
router.route('/login').post(async(req, res) => {
    const {email, password} = req.body;
  
    try {
      const user = await User.findOne({email});
      if (!user) {
        return res.status(404).send({status: 404, msg: 'User not found.'});
      }
      const passwordCheck = await bcrypt.compare(password, user.password);
      if (!passwordCheck) {
        return res.status(401).send({status: 401, msg: 'Incorrect password.'});
      }
  
      // The password is valid and the user exists.
      res.status(200).send({status: 200, msg: 'Logged in.'});
    } catch (err) {
      return res.status(500).send({status: 500, msg: 'Error with fetching user data.'});
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