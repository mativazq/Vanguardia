import React from "react";
import "./Productos.css";

const Productos = () => {
  return (
    <>
      <h2 className="font-productos">PRODUCTOS</h2>
      <div className="container-button">
      <button 
        className="btn-imagen font-productos" 
        onClick={() => alert("Botón presionado")}
      >
  <span className="texto-recuadro">Mesadas</span>
      </button>

      <button 
        className="btn-imagen font-productos bachas" 
        onClick={() => alert("Botón presionado")}
      >
  <span className="texto-recuadro">Bachas</span>
      </button>
      
            <button 
        className="btn-imagen font-productos melaminas" 
        onClick={() => alert("Botón presionado")}
      >
        <span className="texto-recuadro">Melaminas</span>
      </button>
      </div>
    </>
  );
};

export default Productos;
