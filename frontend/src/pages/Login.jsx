import React, { useState } from 'react';
import "../css/LoginPage.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      //Check the email and password are filled.
      const errors = {};
      if (!email) {
        errors.email = 'Required';
      }
      if (!password) {
        errors.password = 'Required';
      }
      setErrors(errors);

      // If the validation is successful, navigate to the home page
      if (Object.keys(errors).length === 0) {
        window.location.href = '/admindashboard';
      }
    };

  return (
    <div className='loginpage'>
        <div className="page-container">
            <div className="login-form">
                <h2 className='loginHeader'>LMS Login</h2>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
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