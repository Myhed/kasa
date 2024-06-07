import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../partials/header';
import Footer from '../partials/footer';
import { Caroussel } from '../components/caroussel/caroussel';
const Details = () => {
    const { state } = useLocation();
    console.log(state);
    return (
        <>
            <Header />
            <div className="details">
                <Caroussel pictures={state.pictures} />
            </div>
            <Footer />
        </>
    );
};

export default Details;
