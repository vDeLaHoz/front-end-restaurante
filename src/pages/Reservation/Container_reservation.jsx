import React, { useEffect } from "react";
import "./reservation.css"
import Form from "./Form";

export default function Container_reservation(){
  useEffect(()=>document.title = 'Reservas')
  return(
    <div className="container-fluid pt-5">
      <div className="row title-reservation pt-5 vstack">
        <h1>Reserva</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit veritatis totam 
          nihil nam fuga exercitationem molestiae odit nisi perferendis reprehenderit.
        </p>
        <div className="sub"></div>
      </div>
      <div className="row form px-5 py-2">
        <Form />
      </div>
    </div>
  )
}