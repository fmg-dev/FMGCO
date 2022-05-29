import { Button } from '@mui/material'
import React from 'react'
import "./sign.scss"
function SignUp() {
  return (
    <div className="signUp">
      <div className="signUp__container">
        <h1>FMG E-CO</h1>
        <div className="signUp__container__form">
          <input
            type="text"
            placeholder="First and last name"
            className="signUp__container__form__input"
          />
          <input
            type="text"
            placeholder="Enter Email"
            className="signUp__container__form__input"
          />
          <input
            type="password"
            placeholder="Password"
            className="signUp__container__form__input"
          />
          <input
            type="password"
            placeholder="Re-enter Password"
            className="signUp__container__form__input"
          />
          <Button variant="contained" color="success">SIGN UP</Button>
        </div>
      </div>
    </div>
  )
}

export default SignUp