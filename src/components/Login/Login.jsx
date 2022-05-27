import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import logo from "../../assets/logo2.png"
import Swal from 'sweetalert2'
import axios from 'axios';

export default function Login(){

  useEffect(()=>{document.title = 'Iniciar sesión'})

  const history = useHistory();
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");

  async function logueo(e){
    e.preventDefault();
    await axios.post('http://localhost:3000/auth/login',
    {
      "phonenumber": phone,
      "password": password,
    })
    .then(async function() {
      await axios.get('http://localhost:3000/users')
      .then(res => {
        let id = res.data.data.findIndex(user => user.phonenumber === phone);
        localStorage.setItem('user', JSON.stringify({id:res.data.data[id].id,state:true}));
        history.push("/");
        window.location.reload()
      })
    })
    .catch(error => {
      if(error.response.status==401) {
        Swal.fire('','Contraseña incorrecta','error')
      }else{
        Swal.fire('','Usuario no registrado','error')
      }
    });
  }


  return(
    <>
    <img src={logo} alt="img-logo" height="150" width="150" />
    <p 
      className="title-login"> Restaurante <br /> 
      <span >
      Mr. Foodie
      </span> 
    </p>
    <form id="form" className="row g-3" style={{width:'70%'}} onSubmit={(e)=>logueo(e)}>
      <div className="col-12">
        <input 
          type="number" 
          id="inputPhone"
          autoComplete="off"
          className="form-control" 
          placeholder="Número de teléfono"
          onChange={(e)=>setPhone(e.target.value)}
          required
        />
      </div>
      <div className="col-12">
        <input 
          type="password" 
          id="inputPassword"
          className="form-control" 
          placeholder="Contraseña"
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
      </div>
      <div className="col-12 text-center py-2">
        <button className="btn btn-login rounded-pill">
          Iniciar sesión
        </button>
      </div>
      <div className="col-12 questions text-center">
        <p>
          ¿No tienes cuenta? <a href="/registro" style={{color:'#db8f00'}}>Registrate</a>
        </p> 
      </div>
    </form>
    </>
  )
}