/**
 * @module Favoritos
 * @description Definición la pagina de Home. 
 * @author Francisco Javier Luque Pardo.
 * @date 2024-30-03
 */

import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import Nav from "../components/Nav";

const grupo = "todos";

const Home = () => {
  return (
    <div id="myContenedor" className="App d-flex flex-column flex-grow-1">     
        <Header />
        <Nav />
        <Section grupo = {grupo}/>
        <Footer />
    </div>
  )
}

export default Home