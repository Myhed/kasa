import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/navigation/navigation';
import './style/error.style.css';
const Error = ({ included }) => {
    return (
        <div class="error">
            {included ? null : <Navigation />}
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'Accueil</Link>
        </div>
    );
};

export default Error;
