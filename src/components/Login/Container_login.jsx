import React from "react";
import "./login.css"
import Login from "./Login";
import Register from "./Register";
import imgLogin from "../../assets/login.png";

export default function Container_login(props) {

  const login = props.login;
  
  return (
    <div className="container-fluid p-5">
      <div className="row shadow mx-5 mt-5 mb-3">
        <div 
          className="col-sm-7 img-login p-0" 
          style={{backgroundImage: `url(${imgLogin})`}}> 
        </div>
        <div className="col-sm-5 form-login vstack border py-4">
          {
            login ? <Login /> : <Register />
          }
        </div>
      </div>
    </div>
  );
}
