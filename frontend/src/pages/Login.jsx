import React from 'react';
import "../css/LoginPage.css"

import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';

import { loginValidate } from '../helper/loginValidate';

const Login = () => {

    const formik = useFormik({
      initialValues : {
        email : '',
        password : '',
      },
      validate: loginValidate,
      validateOnBlur: false,
      validateOnChange: false,
      onSubmit: async values => {
         console.log(values);
      }
    });
  return (
    <div className='loginpage'>
      <Toaster className='toaster' position='top center'reverseOrder={false} />
        <div className="page-container">
            <div className="login-form">
                <h2 className='loginHeader'>LMS Login</h2>
                <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    
                    {...formik.getFieldProps('email')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    
                    {...formik.getFieldProps('password')}
                    />
                </div>
                <button className= "btn btn-outline-primary"type="submit">Login</button>
                </form>
                <hr/>
                <div className="forgetpw">
                    <a href="/forgot-password">Forgot Password</a>
                    <span className="separator">|</span>
                    <a href="/register">Register</a>
                </div>
            </div>
            </div>
    </div>
  )
}
export default Login;