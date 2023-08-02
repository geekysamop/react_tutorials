import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';


export default function Navbar(props) {


  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.Mode} bg-${props.Mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <BrowserRouter>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                {props.about}
              </Link>
            </li>
            
          </ul>
          </BrowserRouter>
          
            <ul className="colors">
              <li onClick={()=>props.handleColor('red')} id="red"></li>
              <li onClick={()=>props.handleColor('green')} id="green"></li>
              <li onClick={()=>props.handleColor('blue')} id="blue"></li>
            </ul>

          <form className="d-flex" role="search">
            <div className="form-check form-switch" style={{fontSize:'20px'}}>
              {props.Mode==='light'?
            <ion-icon  name="sunny-outline"  ></ion-icon>:<ion-icon name="moon-outline"></ion-icon>}
                
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
  about: "about text here",
};
// Navbar.defaultProps = {
//   // title: 'Set title here',
//   about: 'about text here'
// }
