import React, { useState } from 'react';
import '../css/RegisterPage.css'

const Register = () => {
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [isRegisterButtonEnabled, setIsRegisterButtonEnabled] = useState(false);

  const handleAgreementCheckboxChange = (event) => {
    setIsAgreementChecked(event.target.checked);
    setIsRegisterButtonEnabled(event.target.checked);
  };

  return (
    <div className='RegisterPage'>
      <div className='register-img'>
        <div className='reg-img'>
        </div>
      </div>
      <div className="register-page-container">
        <div className="register-form">
          <h2>Register As Students</h2>
          <form>
          <div className="register-form-group">
              <label htmlFor="student-name">Admission Number:</label>
              <input
                type="text"
                id="adnum"
                name="adnum"
                required
              />
            </div>
            <div className="register-form-group">
              <label htmlFor="student-name">Student Name:</label>
              <input
                type="text"
                id="stu-name"
                name="stu-name"
                required
              />
            </div>
            <div className="register-form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="register-form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <div className="register-form-group">
              <label htmlFor="password">Confirm Password:</label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                required
              />
            </div>
            <br />
            <div className='register-form-group'>
              <input className='agreement' type="checkbox" name="agreement" id="agreement" checked={isAgreementChecked} onChange={handleAgreementCheckboxChange} />
              <label htmlFor="agreement">I agree to the <a href="/terms-of-service">terms of service</a> and <a href="/privacy-policy">privacy policy</a> of KMV.</label>
            </div>

            <div className='register-form-button'>
              <button className= "btn btn-outline-primary" type="submit" name='register' disabled={!isRegisterButtonEnabled}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
