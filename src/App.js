import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Error from './pages/error';
import Details from './pages/details';
import './App.css';

function App() {
    const [windowWidth, setWidth] = useState(window.innerWidth);
    const handleWindowResize = function (e) {
        console.log(e);
        setWidth(e.target.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    //console.log(windowWidth);
    return (
        <Router>
            <Routes>
                <Route index path="/" element={<Home width={windowWidth} />} />
                <Route path="/about" element={<About width={windowWidth} />} />
                <Route
                    path="/hebergement/:id"
                    element={<Details width={windowWidth} />}
                />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
