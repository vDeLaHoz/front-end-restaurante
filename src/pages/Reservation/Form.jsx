import React, { useState } from "react";
import Swal from 'sweetalert2'
import axios from 'axios';

export default function Form(){

  let [email, setEmail] = useState("");
  let [number, setNumber] = useState(1);
  let [date, setDate] = useState("");
  let [time, setTime] = useState("");
  let [message, setMessage] = useState("");
  let idTable = 1

  let val = localStorage.getItem('user')
  let user=[]
  if(val){
    user = JSON.parse(val)
  }

  (function(){aux()})()

  function aux() {
    axios.get(`http://localhost:3000/users/${user.id}`)
        .then(res => {
          let nameUser = document.querySelector('#inputName')
          nameUser.value = res.data.data.name + res.data.data.lastname
          let phoneUser = document.querySelector('#inputTel')
          phoneUser.value = res.data.data.phonenumber
        })
  }

  async function reservation(e){ 
    e.preventDefault();
    await axios.post('http://localhost:3000/reservations',
    {
      "customer_id": user.id,
      "reservation_status_id": 1,
      "reservation_date": date,
      "hour_date": time.substr(0,2)
    })
    .then(res => {
        document.getElementById('form-reservarion').reset();
        aux()
        Swal.fire('', 'Reservación exitosa!','success')
        
        axios.post('http://localhost:3000/reservation-tables',
        {
          "reservation_id":res.data.id,
          "table_id": idTable++
        })
        .then(resp => {
            console.log('Mesa creada')
          }
        )
      }
    )
  }

  return(
    <form className="row g-3" id="form-reservarion" style={{width:'60%'}} onSubmit={(e)=>reservation(e)}>
      <div className="col-12">
        <input 
          type="text" 
          id="inputName"
          className="form-control" 
          disabled
        />
      </div>
      <div className="col-12">
        <input 
          type="email" 
          id="inputEmail" 
          minlength="5"
          maxlength="40"
          autoComplete="off"
          className="form-control" 
          placeholder="Correo electrónico"
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <input 
          type="tel" 
          id="inputTel" 
          className="form-control" 
          disabled
        />
      </div>
      <div className="col-md-6">
        <input 
          type="number" 
          id="inputNumber" 
          min="1"
          max="8"
          autoComplete="off"
          className="form-control" 
          placeholder="Número de personas"
          onChange={(e)=>setNumber(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <input 
          type="date" 
          id="inputDate" 
          className="form-control" 
          onChange={(e)=>setDate(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <input 
          type="time" 
          id="inputTime" 
          className="form-control" 
          onChange={(e)=>setTime(e.target.value)}
          required
        />
      </div>
      <div className="col-12">
        <textarea 
          rows="5" 
          id="message" 
          minlength="5"
          maxlength="200"
          className="form-control" 
          placeholder="Solicitud especial"
          onChange={(e)=>setMessage(e.target.value)}>
        </textarea>
      </div>
      <div className="col-12 text-center py-2 pb-5">
        <button className="btn btn-reservation rounded-pill">
          Reservar mesa
        </button>
      </div>
    </form>
  )
}