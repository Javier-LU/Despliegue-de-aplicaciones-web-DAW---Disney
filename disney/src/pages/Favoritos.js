/**
 * @module Favoritos
 * @description Definición la pagina de favoritos. 
 * @author Francisco Javier Luque Pardo.
 * @date 2024-30-03
 */

import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import Nav from "../components/Nav";

const web = "tus personajes";  
const color = "text-info";
const grupo = "favoritos";

function favoritos() {
  return (
    <div id="myContenedor" className="App d-flex flex-column flex-grow-1">    
        <Header web={web} color={color}/>
        <Nav />
        <Section grupo = {grupo}/>
        <Footer />
    </div>
  )
}

export default favoritos