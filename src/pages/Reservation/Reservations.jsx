import React, { useEffect, useState } from "react";
import "./reservation.css"
import Swal from 'sweetalert2'
import axios from 'axios';

export default function Reservations(){

  useEffect(()=>document.title = 'Reservaciones')

  let [stateReservation, setState] = useState([])

  let val = localStorage.getItem('user')
  let user=[]
  if(val){
    user = JSON.parse(val)
  }

  function deleteRe(e) {
    // Swal.fire({
    //   text: `¿Desea eliminar la reserva de ${reservations[e].user}?`,
    //   icon: 'warning',
    //   showCancelButton: true,
    //   cancelButtonText: 'Cancelar',
    //   confirmButtonText: 'Aceptar',
    //   confirmButtonColor: '#db8f00',
    //   reverseButtons: true
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     reservations.splice(e,1);
    //     localStorage.setItem('reservations', JSON.stringify(reservations));
    //     window.location.reload(false)
    //   }
    // })
  }

  axios.get('http://localhost:3000/reservations')
      .then(res => {
        let list = []
        res.data.map((reservation, index)=>{
          if (reservation.customer.id === user.id) {
            list.push(reservation)
          }
        })
        setState(list)
      })

  return(
    <div className="container-fluid pt-5">
      <div className="row title-reservation pt-5 vstack">
        <h1>Reservaciones</h1>
        <div className="sub"></div>
      </div>
      <div className="row p-5 g-4" >
        {
          stateReservation.length ?
            stateReservation.map((reservation, index)=>{
              return (
                <div className="col-sm-3">
                  <div className="card-reservations mb-3" style={{maxWidth:'18rem'}}>
                    <div className="card-header">
                      <h6 className="m-0">
                        {reservation.customer.name}
                        {reservation.customer.lastname}
                        </h6>
                      {/* <i 
                        type="button"
                        title="Eliminar" 
                        className="fas fa-trash" 
                        style={{fontSize:'15px'}}
                        onClick={()=>deleteRe(index)}>
                      </i> */}
                    </div>
                    <div className="card-body">
                    <p className="card-text">
                        <b>Identificación :</b> {reservation.customer.identification}
                      </p>
                      <p className="card-text">
                        <b>Teléfono :</b> {reservation.customer.phonenumber}
                      </p>
                      <p className="card-text">
                        <b>Fecha :</b> {reservation.reservation_date}
                      </p>
                      <p className="card-text">
                        <b>Hora :</b> {reservation.hour_date}:00
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          :
          <h4 style={{fontFamily:'Gadugi', height:'50vh'}} >No hay mesas reservadas</h4>
        }
      </div>
    </div>
  )
}