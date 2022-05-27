import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./navBar.css";
import axios from 'axios';

export const Navbar = (props) => {

  let stateUser = false
  let val = localStorage.getItem('user')
  if(val){
    let user = JSON.parse(val)
    stateUser = true
    axios.get(`http://localhost:3000/users/${user.id}`)
          .then(res => {
            document.querySelector('#dropdownUser').innerHTML = res.data.data.name
          })
  }

  function logout() {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <div className="logo-title">
          <img src={logo} alt="logo" height="40" width="40"/>
          <h1 className="title-navbar">Mr. Foodie</h1>
        </div>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/nosotros"
              >
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/menu">
                Menú
              </Link>
            </li>
            {stateUser==true ? 
            <>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/reservas"
                >
                  Reserva
                </Link>
              </li>
              <li className="nav-item user">
                <i className="fas fa-user-circle" ></i>
                  <div class="dropdown">
                  <a 
                    type="button" 
                    id="dropdownUser"
                    data-bs-toggle="dropdown"
                    className="m-0 dropdown-toggle">
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdownUser">
                    <li>
                      <a 
                        id="reservations" 
                        type="button"
                        class="dropdown-item text-black" 
                        href="/reservaciones"
                        >
                        Reservaciones
                      </a>
                    </li>
                    <li>
                      <a 
                        id="logout" 
                        type="button"
                        class="dropdown-item text-black" 
                        href="/login"
                        onClick={()=>logout()}
                        >
                        Cerrar sesión
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              </>
              :
              <li className="nav-item">
                <Link 
                  className="nav-link active" 
                  aria-current="page" 
                  to="/login">
                  Iniciar sesión
                </Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};
