//Import Dependencies
const express =  require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 8000;

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const URL = process.env.MONGODB_URL;

mongoose.connect(URL); 

const connection = mongoose.connection;
connection.once ("open", ()=> {
    console.log("Mongo_DB connection success!!!");
})

//Routes for Users
const userRouter = require('./routes/users.js');
app.use("/user", userRouter);

//Login Router
const loginRouter = require('./routes/login.js');
app.use("/login", loginRouter);

app.listen(PORT, () => {
    console.log(`Server is Running on Port: ${PORT}`);
})

