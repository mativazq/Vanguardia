// src/Componentes/Galeria/Galeria.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";  // 👈 importamos Link
import "./Galeria.css";

const Galeria = ({ productos, titulo }) => {
  return (
    <div className="galeria">
      <h2>{titulo}</h2>
      <div className="galeria-grid">
        {productos.map((p) => (
          <FlipCard key={p.id} producto={p} />
        ))}
      </div>

      {/* 👇 botón para volver al menú principal */}
      <div className="volver-menu">
        <Link to="/">
          <button className="btn-volver">Volver al menú principal</button>
        </Link>
      </div>
    </div>
  );
};

// Componente de tarjeta con flip
const FlipCard = ({ producto }) => {
  const [flipped, setFlipped] = useState(false);

  // Detectar si es mobile
  const isMobile = window.innerWidth <= 768;

  const toggleFlip = () => {
    if (isMobile) {
      setFlipped(!flipped); // solo en mobile permite toggle
    }
  };

  return (
    <div 
      className={`galeria-item ${isMobile ? "clickable" : ""}`} 
      onClick={toggleFlip}
    >
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="card-front">
          <img src={producto.img} alt={producto.nombre} />
          <h3>{producto.nombre}</h3>
          {producto.medida && <p>Medida: {producto.medida}</p>}
        </div>
        <div className="card-back">
          <p>{producto.descripcion}</p>
        </div>
      </div>
    </div>
  );
};


export default Galeria;
