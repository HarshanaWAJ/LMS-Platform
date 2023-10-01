/* --CRUD Operation for Users-- */
/* ------------------------------------------------------------------------------------------------ */
const router =  require('express').Router();
const bcrypt = require('bcrypt');

//User Model
let User = require('../models/User.js');

//Add User Data
router.route('/add').post(async (req, res) => {
    try {
      const username = req.body.username;
      const email = req.body.email;
      const password = req.body.password;
      const role = req.body.role;
  
      // Check if the email already exists
      const existingUserEmail = await User.findOne({ email });
      if (existingUserEmail) {
        throw new Error('Email address already exists');
      }
  
      // Check if the username already exists
      const existingUsername = await User.findOne({ username });
      if (existingUsername) {
        throw new Error('Username already exists');
      }
  
      // If all of the checks passed, create a new user
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10)
  
        const newUser = new User({
          username,
          email,
          password: hashedPassword,
          role,
        });
  
        await newUser.save();
  
        // Send a success response to the client
        res.status(200).send({ status: 'User Added' });
      }
    } catch (error) {
      // Handle any errors that occur
      res.status(500).send({ status: error.status, msg: error.message });
    }
  });
  
//Get User List
router.route("/").get( async (req, res)=> {
   await User.find()
        .then( (users)=> {
            res.json(users);
        })
        .catch ((err)=> {
            console.log(err);
        })
})

//Update User Using Id
router.route("/update/:id").put( async (req, res) => {
    let userId = req.params.id;
    const {username, email, password, role} = req.body;
    const updateUser = {
        username,
        email,
        password,
        role
    }
    const update = await User.findByIdAndUpdate(userId, updateUser)
        .then((update)=> {
            res.status(200).send({status: "User Updated", user: update});
        })
        .catch ((err) => {
            console.log(err);
        })
})

//Delete User
router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;
    await User.findByIdAndDelete(userId)
        .then(()=> {
            res.status(200).send({status: "User Deleted"})
        })
        .catch ((err) => {
            console.log(err);
        })
})

//Get one user
router.route("/get/:id").get(async(req, res) => {
    let userId = req.params.id;
    const user = await User.findById(userId)
        .then(() => {
            res.status(200).send({status: "User Found", user: user})
        })
        .catch ((err)=> {
            res.status(500).send({status: "Error with fetch user"})
            console.log(err);
        })
})

module.exports = router;