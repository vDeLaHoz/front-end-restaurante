import React, { useEffect } from "react";
import Information from "./Information"
import "./about.css"
import img1 from "../../assets/about-1.png"
import img2 from "../../assets/about-2.png"
import img3 from "../../assets/about-3.png"

export default function Container_about(){
  useEffect(()=>document.title = 'Nosotros')
  return(
    <div className="container-fluid p-5">
      <div className="row pt-5">
        <div className="col-sm-6 d-flex">
          <img src={img1} alt="img-about"/>
          <div className="vstack ps-2">
            <img src={img2} alt="img-about" className="pb-2"/>
            <img src={img3} alt="img-about" className="pt-2"/>
          </div>
        </div>
        <div className="col-sm-6 p-5">
          <Information />
        </div>
      </div>
    </div>
    
  )
}