import "./footer.css";
import logo from "../../assets/logo.png"

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container-fluid">
        <div className="row px-5">
          <div className="col-md-4">
            <div className="logo text-center">
              <img
                src={logo}
                width="100"
                height="100"
                className="mb-3"
              />
              <p className="px-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contacts px-5 h-100 text-justify">
              <h5 style={{fontFamily: "Oleo", marginBottom:'20px'}}>Contactos</h5>
              <p className="py-1">Tel: (5) 3225498</p>
              <p className="py-1">Horario : Todos los días de 10 AM - 11 PM</p>
              <p className="py-1">Dirección: Cl.60 #45-70, Barranquilla, Atlántico</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="register px-5 h-100">
              <h5 style={{fontFamily: "Oleo", marginBottom:'20px'}}>Registrarse</h5>
              <input type="email" className="form-control" placeholder="Correo electrónico" autoComplete="off" />
              <a className="btn" href="/registro">Registrarse</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="social">
            <a href="https://www.facebook.com/" className="text-white" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com/" className="text-white" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" className="text-white" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/" className="text-white" target="_blank">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
