import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../partials/header';
import Footer from '../partials/footer';
import { Caroussel } from '../components/caroussel/caroussel';
import { Stars } from '../components/stars/stars';
import { ToggleDetails } from '../containers/toggle-details/toggleDetails';
import './style/page.style.css';

const Details = () => {
    const { state } = useLocation();
    console.log(state);
    return (
        <>
            <Header />
            <div className="details">
                <Caroussel pictures={state.pictures} />
                <div className="content">
                    <div className="location">
                        <h1>{state.title}</h1>
                        <p>{state.location}</p>
                    </div>
                    <div className="host">
                        <img
                            className="profile"
                            alt="lorem"
                            src={state.host.picture}
                        />
                        <p className="hostname">{state.host.name}</p>
                    </div>
                </div>
                <div className="content">
                    <div id="tags">
                        {state.tags.map((tag, index) => (
                            <p key={index} class="tag">
                                {tag}
                            </p>
                        ))}
                    </div>
                    <Stars number={5} filled={state.rating} />
                </div>
                <div className="content">
                    <ToggleDetails details={state} type="ManyToMany" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Details;
