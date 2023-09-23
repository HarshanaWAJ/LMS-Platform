const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

//User Object
const userSchema = new Schema({
    username : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'student'],
        default: 'student'
      }
    }, {
      methods: {
        comparePassword(password) {
          return bcrypt.compare(password, this.password);
        }
      }
})

const User = mongoose.model("User", userSchema);
module.exports = User;