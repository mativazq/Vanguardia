import React, { useRef, useEffect } from "react";
import "./Productos.css";

const Productos = () => {
  const btnRefs = [useRef(), useRef(), useRef()];

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    btnRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, [btnRefs]);

  return (
    <>
      <h2 className="font-productos">PRODUCTOS</h2>
      <div className="container-button">
        <button
          ref={btnRefs[0]}
          className="btn-imagen font-productos from-left"
          onClick={() => alert("Plasty Gay")}
        >
          <span className="texto-recuadro">Mesadas</span>
        </button>

        <button
          ref={btnRefs[1]}
          className="btn-imagen font-productos from-right"
          onClick={() => alert("Plasty Gay")}
        >
          <span className="texto-recuadro">Bachas</span>
        </button>

        <button
          ref={btnRefs[2]}
          className="btn-imagen font-productos from-left"
          onClick={() => alert("Plasty Gay")}
        >
          <span className="texto-recuadro">Melaminas</span>
        </button>
      </div>
    </>
  );
};

export default Productos;