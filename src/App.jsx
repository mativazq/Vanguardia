import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Componentes/Header/Header";
import Productos from "./Componentes/Productos/Productos";
import Footer from "./Componentes/Footer/Footer";
import Galeria from "./Componentes/Galeria/Galeria";

// Arrays de productos
import { mesadas, bachas, melaminas } from "./Componentes/Productos/ListaProd";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Página principal con los botones */}
        <Route path="/" element={<Productos />} />

        {/* Páginas de galerías */}
        <Route
          path="/mesadas"
          element={<Galeria productos={mesadas} titulo="Mesadas" />}
        />
        <Route
          path="/bachas"
          element={<Galeria productos={bachas} titulo="Bachas" />}
        />
        <Route
          path="/melaminas"
          element={<Galeria productos={melaminas} titulo="Melaminas" />}
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;