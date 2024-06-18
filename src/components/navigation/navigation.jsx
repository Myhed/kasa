import React, { useState, useEffect } from 'react';
import { Link, useMatch } from 'react-router-dom';
import './nav.style.css';

const Navigation = function () {
    const [menu, setMenuActive] = useState([
        {
            pathname: '/',
            page: 'Accueil',
            active: Boolean(useMatch('/')),
        },
        {
            pathname: '/about',
            page: 'A propos',
            active: Boolean(useMatch('/about')),
        },
    ]);

    useEffect(() => {
        const whichMenuIsActive = menu.map((data) => {
            if (data.pathname === window.location.pathname) {
                data.active = true;
            } else {
                data.active = false;
            }
            return data;
        });
        setMenuActive(whichMenuIsActive);
    }, [window.location.pathname]);

    return (
        <nav id="nav">
            <div class="logo logo-menu">
                <img src="/images/logos/logo-menu.svg" />
            </div>
            <ul id="menu">
                {menu.map((data, index) => (
                    <li key={index}>
                        <Link
                            className={`${data.active ? 'active' : ''}`}
                            to={data.pathname}
                        >
                            {data.page}
                        </Link>
                    </li>
                ))}
                {/*<li><Link to="/error">Page d'erreur</Link></li>*/}
            </ul>
        </nav>
    );
};

export default Navigation;
