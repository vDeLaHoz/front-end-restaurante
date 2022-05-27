import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';

export default function Register(){

  useEffect(()=>document.title = 'Registro')
  const history = useHistory();

  let [name, setName] = useState("");
  let [lastname, setLastname] = useState("");
  let [phone, setPhone] = useState("");
  let [identification, setIdentification] = useState("");
  let [password, setPassword] = useState("");
  let [confirmation, setConfirmation] = useState("");

  async function register(e){ 
    e.preventDefault();
    await axios.get('http://localhost:3000/users')
      .then(res => {
        let id = res.data.data.findIndex(user => user.phonenumber === phone);
        if(id == -1){
          if(password === confirmation){
            axios.post('http://localhost:3000/users',
            {
              "user_type_id": 2,
              "name": name,
              "lastname": lastname,
              "phonenumber": phone,
              "identification": identification,
              "password": password,
              "is_active": 1
            })
            .then(res => {
              console.log('Registrado' + res)
              Swal.fire('','Usuario registrado','success'); 
              history.push("/login");
              window.location.reload()
            })
          }else{
            Swal.fire('','Las contraseñas no coinciden','error')
          }
        }else{
          Swal.fire('','Ya existe un usuario registrado con el número de teléfono','error')
        }
      }
    )
  }
  
  return(
    <>
    <p className="title-register"> Mr. Foodie </p>
    <form className="row g-3" style={{width:'70%'}} onSubmit={(e)=>register(e)}>
      <div className="col-12">
        <input 
          type="text" 
          id="inputName" 
          minlength="2"
          maxlength="20"
          autoComplete="off"
          pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
          className="form-control" 
          placeholder="Nombre"
          onChange={(e)=>setName(e.target.value)}
          required
        />
      </div>
      <div className="col-12">
        <input 
          type="text" 
          id="inputLastname" 
          minlength="2"
          maxlength="20"
          autoComplete="off"
          pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
          className="form-control" 
          placeholder="Apellido"
          onChange={(e)=>setLastname(e.target.value)}
          required
        />
      </div>
      <div className="col-12">
        <input 
          type="tel" 
          id="inputPhone"
          minlength="7"
          maxlength="10"
          autoComplete="off"
          className="form-control" 
          placeholder="Número de teléfono"
          onChange={(e)=>setPhone(e.target.value)}
          required
        />
      </div>
      <div className="col-12">
        <input 
          type="tel" 
          minlength="6"
          maxlength="10"
          id="inputIdentification"
          autoComplete="off"
          className="form-control" 
          placeholder="Identificación"
          onChange={(e)=>setIdentification(e.target.value)}
          required
        />
      </div>
      <div className="col-12">
        <input 
          type="password" 
          id="inputPassword"
          minlength="6"
          className="form-control" 
          placeholder="Contraseña"
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
      </div>
      <div className="col-12">
        <input 
          type="password" 
          id="inputConfirmation"
          className="form-control" 
          placeholder="Confirmación"
          onChange={(e)=>setConfirmation(e.target.value)}
          required
        />
      </div>
      <div className="col-12 text-center py-2">
        <button type="submit" className="btn btn-login rounded-pill">
          Registrarse
        </button>
      </div>
      <div className="col-12 questions text-center">
        <p>
          ¿Tienes una cuenta? <a href="/login" style={{color:'#db8f00'}}>Inicia sesión</a>
        </p> 
      </div>
    </form>
    </>
  )
}