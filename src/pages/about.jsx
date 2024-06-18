import React from 'react';
import { Banner } from '../components/banner/banner';
import { ToggleDetails } from '../containers/toggle-details/toggleDetails';
import * as details from '../about.json';
import './style/page.style.css';

const About = () => {
    const togglerKeys = ['Fiabilité', 'Respect', 'Service', 'Sécurité'];
    return (
        <>
            <Banner uriBanner="/images/banner-about.svg" />
            <div className="container-space about">
                <ToggleDetails details={details} keysToToggle={togglerKeys} />
            </div>
        </>
    );
};
export default About;
