/**
 * @module Section
 * @description Definición del componente section. 
 * @author Francisco Javier Luque Pardo.
 * @date 2024-30-03
 */

import Personajes from "./Personajes";


const Section = (props) => {

    const grupo = props.grupo 
    return (
        <section id="mySection" className="d-flex flex-column justify-content-between align-items-center ">
        
            <Personajes grupo={grupo} />

           
        </section>
    );
};

export default Section;