import React from "react";
import "./Productos.css";
import ImgVanguardia from "../../Imagenes/VanguardiaNegro.png";

const Productos = () => {
  return (
    <>
      <h2 className="font-productos">PRODUCTOS</h2>
      <img src={ImgVanguardia} alt="Mesadas" className="img-productos" />
      

    </>
  );
};

export default Productos;
