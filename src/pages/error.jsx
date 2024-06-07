import React from 'react';
import Navigation from '../components/navigation/navigation';

const Error = () => {
    return (
        <div>
            <Navigation />
            <h2>Page non trouvée</h2>
            <p>Désolé, la page que vous recherchez n'existe pas.</p>
        </div>
    );
};

export default Error;
