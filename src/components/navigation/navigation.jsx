import React from 'react';
import { Link } from 'react-router-dom';
import './nav.style.css';
const Navigation = () => {
    return (
      <nav id="nav">
        <div class='logo logo-menu'>
          <img src='/images/logos/logo-menu.svg' />
        </div>
        <ul id="menu">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
	    {/*<li><Link to="/error">Page d'erreur</Link></li>*/}
        </ul>
      </nav>
    );
  }
  
  export default Navigation;
