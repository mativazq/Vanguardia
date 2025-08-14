import React from "react";
import "./Footer.css";
import ImgLogo from "../../Imagenes/Vanguardia-png.png"

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-left">
      <img src= {ImgLogo} alt="Logo" className="logo" />
      <a className="foot-by" href="#">Designed by Matias Vazquez</a>
      </div>

      <div className="footer-right">
        <h4>INFO</h4>
        <ul>
          <li>
            <p>TELEFONO:</p>
            <p>+54 9 11 2345 6789</p>
          </li>
          <li>
            <p>EMAIL:</p>
            <p>info@vanguardiamuebles.com.ar</p>
          </li>
          <li>
            <p>UBICACION:</p>
            <p>Santa Fe, Argentina</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
