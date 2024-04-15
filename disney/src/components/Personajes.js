/**
 * @module Personajes
 * @description Definición del componente personaje. Se conecta con la api de Disney y separa el resultado dependiendo de una clasificación ya realizada. 
 * @author Francisco Javier Luque Pardo.
 * @date 2024-30-03
 */

import React, { useState, useEffect } from 'react';

const Personajes = (props) => {
    const [fichas, setFichas] = useState({ villanos: [], princesas: [], heroes: [], todos: [], favoritos: [] });   // Estado inicial de las fichas de personajes divididas en diferentes categorías
    const [cargando, estaCargando] = useState(true);   // Estado para manejar la visualización del indicador de carga
    const [error, setError] = useState(null); // Estado para manejar la visualización de posibles errores en la carga de datos
    const [indiceActual, setIndiceActual] = useState(0); // Estado para manejar el índice del personaje actual mostrado

    // Lista estática de personajes de Disney con su nombre y rol que servirá para clasficar lo que nos llega de la api
    const personajesDisney = [
        // Villanos
        { nombre: ".GIFfany", rol: "villano" },
        { nombre: "Al Muddy Sultan", rol: "villano" },
        { nombre: "Aviarius", rol: "villano" },
        { nombre: "Baron Blitz", rol: "villano" },
        { nombre: "Beardini the Pirate Magician", rol: "villano" },
        { nombre: "Banshee", rol: "villano" },
        { nombre: "Alma", rol: "villano" },
        { nombre: "Amelia Duckworth", rol: "villano" },
        { nombre: "Captain Anderson", rol: "villano" },
        { nombre: "Erica Ange", rol: "villano" },
        { nombre: "Angela", rol: "villano" },
        { nombre: "Anthony Biddle", rol: "villano" },
        { nombre: "Apaches", rol: "villano" },
        { nombre: "Apothecary Gary", rol: "villano" },
        { nombre: "Aqua", rol: "villano" },
        { nombre: "Archibald Smelding", rol: "villano" },
        { nombre: "Mr. Arrow", rol: "villano" },

        // heroes
        { nombre: "90's Adventure Bear", rol: "heroe" },
        { nombre: "Ahadi", rol: "heroe" },
        { nombre: "Baloo", rol: "heroe" },
        { nombre: "Captain Amelia", rol: "heroe" },
        { nombre: "Michael Banks", rol: "heroe" },
        { nombre: "Butter Otter", rol: "heroe" },
        { nombre: "Baby Panda", rol: "heroe" },
        { nombre: "Aspen", rol: "heroe" },
        { nombre: "Astuto", rol: "heroe" },
        { nombre: "Aunt Em", rol: "heroe" },
        { nombre: "Prince Axel", rol: "heroe" },
        { nombre: "Marta Balatico", rol: "heroe" },
        { nombre: "Mr. Baldwin", rol: "heroe" },
        { nombre: "Sir Bart", rol: "heroe" },
        { nombre: "Bernice Beachmont", rol: "heroe" },
        { nombre: "Beheaded Knight", rol: "heroe" },
        { nombre: "Alan Coleman", rol: "heroe" },

        // Princesas
        { nombre: "Queen Ariel", rol: "princesa" },
        { nombre: "Athena", rol: "princesa" },
        { nombre: "Queen Athena", rol: "princesa" },
        { nombre: "Candace Adams", rol: "princesa" },
        { nombre: "Irwina Allen", rol: "princesa" },
        { nombre: "Ambrose", rol: "princesa" },
        { nombre: "Amos", rol: "princesa" },
        { nombre: "Arabella", rol: "princesa" },
        { nombre: "Arabella Smith", rol: "princesa" },
        { nombre: "Arthur and Cecil", rol: "princesa" },
        { nombre: "Fiona Ashbury", rol: "princesa" },
        { nombre: "Ashcan and Pete", rol: "princesa" },

    ];

     // Función para avanzar al siguiente personaje
    const avanzarPersonaje = () => {
        setIndiceActual(prevIndice => {
            const nuevoIndice = prevIndice + 1 < fichas.todos.length ? prevIndice + 1 : 0;
            return nuevoIndice;
        });
    };

     // Función para imprimir los elementos de un array separados por coma y alternando colores
    const imprimirSeparado = (array) => {
        return array.map((item, index) => (
            <span key={index} style={{ color: (index % 2 !== 0) ? 'blue' : 'black' }}>
                {item}{index < array.length - 1 && ', '}
            </span>
        ));
    }

    // Función para extraer solo la fecha de una cadena de texto
    const arregloFecha = (texto) => {
        return texto.substring(0, 10);
    }

    // Efecto para cargar los datos de los personajes desde una API externa al montar el componente
    useEffect(() => {
        fetch('https://api.disneyapi.dev/character')
            .then(response => {
                if (!response.ok) {
                    throw new Error('La respuesta de la red no fue ok');
                }
                return response.json();
            })
            .then(data => {
                let villanos = [], princesas = [], heroes = [], todos = [], favoritos = [];
                data.data.forEach(personajeApi => {
                    // Añade el personaje a la lista de todos los personajes
                    todos.push(personajeApi);

                    // Filtra los personajes de Disney para encontrar una coincidencia
                    let encontrado = personajesDisney.find(p => p.nombre === personajeApi.name);

                    // Si se encuentra una coincidencia, clasifica el personaje según su rol
                    if (encontrado) {
                        switch (encontrado.rol) {
                            case "villano":
                                villanos.push(personajeApi);
                                break;
                            case "heroe":
                                heroes.push(personajeApi);
                                break;
                            case "princesa":
                                princesas.push(personajeApi);
                                break;
                            default:
                                // Puedes manejar cualquier caso no esperado o simplemente no hacer nada
                                break;
                        }
                    }
                });

                // Actualiza el estado con los personajes clasificados
                setFichas({ villanos, princesas, heroes, todos, favoritos });
                estaCargando(false); // Indica que la carga ha terminado
            })
            .catch(error => {
                setError(error.message);
                estaCargando(false);
            });
    }, []); // El array vacío asegura que el efecto solo se ejecute una vez al montar el componente

    if (cargando) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;
    
    // Lógica para clasificar personajes y actualizar el estado
    return (
        <div>
            {cargando ? (
                <div>Cargando...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <>
                   <div className="d-flex flex-column justify-content-between align-items-center">
                        <div className='pt-5 pb-5'>
                            <h2 className="display-3">{fichas[props.grupo][indiceActual].name}</h2>
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            <div className='px-5'>
                                <img src={fichas[props.grupo][indiceActual].imageUrl} alt="Imagen del personaje"  width="200" height="auto" />

                            </div>
                            <div className='px-5'>
                                <ul>
                                    <li>
                                        Fecha de creación: {arregloFecha(fichas[props.grupo][indiceActual].createdAt)}
                                    </li>
                                    <li>
                                        Peliculas:  <span key={indiceActual} style={indiceActual % 2 === 0 ? {} : { color: 'gray' }}>{imprimirSeparado(fichas[props.grupo][indiceActual].films)}</span>

                                    </li>
                                    <li>

                                        Television:  <span key={indiceActual} style={indiceActual % 2 === 0 ? {} : { color: 'gray' }}>{imprimirSeparado(fichas[props.grupo][indiceActual].tvShows)}</span>

                                    </li>
                                    <li>
                                        Juegos:  <span key={indiceActual} style={indiceActual % 2 === 0 ? {} : { color: 'gray' }}>{imprimirSeparado(fichas[props.grupo][indiceActual].videoGames)}</span>
                                    </li>
                   
                                </ul>
                            </div>
                        </div>
                        <div>
                            <button className='m-5' onClick={avanzarPersonaje}>Siguiente Personaje</button>
                        </div>
                    </div>
                </>
            )}
        </div>

    );
};

export default Personajes;
