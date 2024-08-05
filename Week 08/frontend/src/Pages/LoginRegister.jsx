import React from 'react'
import './Css/LoginRegister.css'

const LoginRegister = () => {
  return (
    <div className='loginregister'>
      <div className="loginregister-cont">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="login">Already have an account? <span>Login Here</span></p>
        <div className="agree">
          <input type="checkbox" name='' id='' />
          <p>By continue, i agree the terms and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginRegister
