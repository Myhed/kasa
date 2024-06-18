import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../partials/header';
import Footer from '../partials/footer';
import { Caroussel } from '../components/caroussel/caroussel';
import { Stars } from '../components/stars/stars';
import { ToggleDetails } from '../containers/toggle-details/toggleDetails';
import './style/page.style.css';
import Error from './error';

const Details = (props) => {
    const { width } = props;
    const { state } = useLocation();
    const [template, setTemplate] = useState(<></>);
    const idUri = window.location.pathname.split('/')[2];
    console.log(idUri);
    useEffect(() => {
        if (state) {
            setTemplate(render());
        } else {
            setTemplate(<Error included />);
        }
    }, [state]);
    const render = () => {
        return (
            <>
                <div className="details container-space">
                    <Caroussel pictures={state.pictures} />
                    <div className="content">
                        <div className="location">
                            <h1>{state.title}</h1>
                            <p>{state.location}</p>
                        </div>
                        {width <= 892 ? null : (
                            <div className="host">
                                <img
                                    className="profile"
                                    alt="lorem"
                                    src={state.host.picture}
                                />
                                <p className="hostname">{state.host.name}</p>
                            </div>
                        )}
                    </div>
                    <div className="content">
                        <div id="tags">
                            {state.tags.map((tag, index) => (
                                <p key={index} class="tag">
                                    {tag}
                                </p>
                            ))}
                        </div>
                        {width <= 892 ? null : (
                            <Stars number={5} filled={state.rating} />
                        )}
                    </div>
                    {width <= 892 ? (
                        <div className="mobile-content">
                            <Stars number={5} filled={state.rating} />
                            <div className="host">
                                <img
                                    className="profile"
                                    alt="lorem"
                                    src={state.host.picture}
                                />
                                <p className="hostname">{state.host.name}</p>
                            </div>
                        </div>
                    ) : null}
                    <div className="content">
                        <ToggleDetails
                            details={state}
                            keysToToggle={['Equipments', 'Description']}
                            type="ManyToMany"
                        />
                    </div>
                </div>
            </>
        );
    };
    return template;
};

export default Details;
