import React, { useEffect } from "react";
import Menu from "./Menu"
import "./menu.css"
import listMenus from "../../data/data.json"

export default function Container_menu() {
  useEffect(()=>document.title = 'Menú')
  return(
    <div className="container-fluid pt-5">
      <div className="row title-menu pt-5 vstack">
        <h1>Menú</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit veritatis totam 
          nihil nam fuga exercitationem molestiae odit nisi perferendis reprehenderit.
        </p>
        <div className="sub"></div>
      </div>
      <div className="row p-5 g-4">
        {
          listMenus.menus.map((menu)=>{
            return (
              <Menu img={menu.img} name={menu.name} text={menu.text} price={menu.price} />
            )
          })
        }
      </div>
      {/* <div className="row justify-content-center pb-5">
        <a type="button" className="btn explore-menu rounded-pill" href="#">
          Explorar Menús
        </a>
      </div> */}
      
    </div>
  ) 
}