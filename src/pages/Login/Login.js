import { Button } from "@mui/material";
import React from "react";
import "./login.scss";
function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <h1>FMG E-CO</h1>
        <div className="login__container__form">
          <input
            type="text"
            placeholder="Email"
            className="login__container__form__input"
          />
          <input
            type="password"
            placeholder="Password"
            className="login__container__form__input"
          />
          <Button variant="contained" color="success">LOGIN</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
