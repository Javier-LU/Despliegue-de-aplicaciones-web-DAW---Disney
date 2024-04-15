/**
 * @module Header
 * @description Definición del componente header. 
 * @author Francisco Javier Luque Pardo.
 * @date 2024-30-03
 */

import logo from '../imagenes/logo.svg';








const Header = (props) => (
  <header id="myHeader" className="text-white p-4 mb-4 d-flex col-100 justify-content-between align-items-center text-center border-bottom" style={{ height: "880%" }}>
    <img src={logo} className="App-logo img-fluid " alt="logo" style={{ maxWidth: '10%' }} />
    <div>
      <h1 className="h2 display-4">Tu mundo Disney</h1>
      <h4>Todos <span className={props.color}>{props.web}</span> están reunidos aquí.</h4>
    </div>
    <img src={logo} className="App-logo img-fluid " alt="logo" style={{ maxWidth: '10%' }} />
  </header>
);

export default Header;