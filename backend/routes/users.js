/* --CRUD Operation for Users-- */
/* ------------------------------------------------------------------------------------------------ */
const router =  require('express').Router();
const bcrypt = require('bcrypt');

//User Model
let User = require('../models/User.js');

//Add User Data
router.route("/add").post( async (req, res) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const role = req.body.role;

        //Check if the email already exists
        const existingUserEmail = new Promise((resolve, reject) => {
            User.findOne({email}, function (err, user) {
                if (err) reject(new Error(err))
                if (user) reject({error: "Email address already exists"});
                resolve();
            })
        });

        //Check if the username already exists
        const existingUsername = new Promise((resolve, reject) => {
            User.findOne({username}, function (err, user) {
                if (err) reject(new Error(err))
                if (user) reject({error: "Username already exists"});
                resolve();
            })
        });

        const promises = [existingUsername, existingUserEmail];

        Promise.all(promises)
            .then(() => {
                if (password) {
                    bcrypt.hash(password, 10)
                        .then(hashedPassword => {
                            const newUser = new User({
                                username,
                                email,
                                password: hashedPassword,
                                role
                            })
                            newUser.save()
                                .then( ()=> {
                                    res.status(200).send({status: "User Added"})
                                })
                                .catch( (err)=> {
                                    res.status(500).send({status: err.status, msg:"Failed to add user"});
                                    console.log(err);
                                }) 
                        })
                        .catch((err) => {
                            res.status(500).send({status: "Unable to hashed password"});
                        });

                }
            })
            .catch(err => {
                res.status(500).send({status: err.status, msg: "Section 2"});
            })

    }
    catch (error) {
        res.status(500).send({status: error.status, msg: "Section 3"});
    }
    
})

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