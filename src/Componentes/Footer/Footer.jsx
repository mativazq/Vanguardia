import React from "react";
import "./Footer.css";
import ImgLogo from "../../Imagenes/Vanguardia-png.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-left">
        <Link to='/'>
          <img src= {ImgLogo} alt="Logo" className="logo" />
        </Link>
      <a className="foot-by" href="https://www.linkedin.com/in/mativazq/">Designed by Matias Vazquez</a>
      </div>

      <div className="footer-right">
        <h4>INFO</h4>
        <ul>
          <li>
            <p>TELEFONO:</p>
            <p>+54 9 01 2345 6789</p>
          </li>
          <li>
            <p>EMAIL:</p>
            <p>info@vanguardiamuebles.com.ar</p>
          </li>
          <li>
            <p>UBICACION:</p>
            <a className="foot-by" href="https://maps.app.goo.gl/xKQ9raUida8SkvfL7">Paseo de las Acacias. Santa Fe, Argentina</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
