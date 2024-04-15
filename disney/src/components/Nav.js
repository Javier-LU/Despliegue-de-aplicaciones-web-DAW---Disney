/**
 * @module Nav
 * @module CalculoProduccion
 * @description Definición del componente nav. 
 * @date 2024-30-03
 */

import React, { useState} from 'react'
import { Link, Outlet } from 'react-router-dom';

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Villanos", path: "/villanos" },
    { name: "Heroes", path: "/heroes" },
    { name: "Princesas", path: "/princesas" },   
];

const Nav = () => {
    const [variableEstado, funcionPuntero] = useState('');

    return (
        
            <nav id="myNav" className="d-flex justify-content-center align-items-center">
                <ul className="nav border border-light rounded">
                    {navLinks.map(link => (
                        <li 
                        key={link.name}
                        className={`nav-item bg-primary rounded ${variableEstado === link.name ? 'bg-info' : ''}`}
                        onMouseEnter={() => funcionPuntero(link.name)}
                        onMouseLeave={() => funcionPuntero('')}
                    >
                            <Link  className="nav-link text-white" to={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <hr />
                <Outlet />
            </nav>
        
    )
};



export default Nav