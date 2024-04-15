/**
 * @module Footer
 * @description Definición del componente footer. 
 * @author Francisco Javier Luque Pardo.
 * @date 2024-30-03
 */

const Footer = () => {
    return (
        <footer id="myFooter" className="d-flex flex-column  border-top  text-white text-center " style={{ paddingTop: '20px', paddingbottom: '20px', backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
         <p style={{ fontSize: '11px' }}>Web realizada por el alumno Javier Luque Pardo.</p>
         <p style={{ fontSize: '11px' }}>En esta web se ha utilizado Bootstrap / *Nota: la clasificación esta hecha al azar, al desconocer que rol juegan los personajes</p>

      </footer>
    );
  };

export default Footer;
