import logo from './logo.svg';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import {  Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/general.css"

import  Home  from './pages/Home';
import  Villanos  from './pages/Villanos';
import  Heroes  from './pages/Heroes';
import  Princesas  from './pages/Princesas';
import  Favoritos  from './pages/Favoritos';


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/villanos" element={<Villanos />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/princesas" element={<Princesas />} />
          <Route path="/favoritos" element={<Favoritos />} />
   
        </Routes>

    </div>
  );
}

export default App;
