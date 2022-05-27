import React from "react";

export default function Menu({img, name, text, price}) {
  return(
    <div className="col-sm-3">
      <div className="card-menu shadow" style={{width: '15rem'}}>
        <img src={img} className="card-img-top" alt="img-menu" />
        <div className="card-body">
          <div className="header-card">
            <h5 className="card-title text-dark" style={{fontFamily:'Oleo'}}>{name}</h5>
            <div className="price-menu">
              <p className="m-0">${Intl.NumberFormat().format(price)}</p>
            </div>
          </div>
          <p className="card-text" style={{fontFamily:'Gadugi'}}>
            {text}
          </p>
          {<a className="btn btn-sm order rounded-pill">Ordenar</a>}
        </div>
      </div>
    </div>
  )
}