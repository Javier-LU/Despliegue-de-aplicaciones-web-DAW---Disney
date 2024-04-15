/**
 * @module Favoritos
 * @description Definición la pagina de Heros. 
 * @author Francisco Javier Luque Pardo.
 * @date 2024-30-03
 */

import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import Nav from "../components/Nav";

const web = "los heroes";
const color = "text-success";
const grupo = "heroes";
function heroes() {
  return (
    <div id="myContenedor" className="App d-flex flex-column flex-grow-1">   
        <Header web={web} color={color}/>
        <Nav />
        <Section grupo = {grupo}/>
        <Footer />
    </div>
  )
}

export default heroes