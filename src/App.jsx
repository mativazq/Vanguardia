import React from 'react'
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Componentes/Header/Header'
import Productos from './Componentes/Productos/Productos'
import Footer from './Componentes/Footer/Footer'

function App() {


  return (
    <>
      <Header />
      <Productos />
      <Footer />
    </>
  )
}

export default App
