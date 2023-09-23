import React from 'react'
import '../css/RegisterPage.css'

export default function Register() {
  return (
    <div className='RegisterPage'>
        <span className='register-img'>
            <div className='reg-img'>
            </div>
        </span>
        <div className="register-page-container">
            <div className="register-form">
                <h2 className='register-Header'>Register As Students</h2>
                <form>
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
                <div className='register-form-button'>
                    <button className= "btn btn-outline-primary"type="submit" name='register'>Register</button>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}
