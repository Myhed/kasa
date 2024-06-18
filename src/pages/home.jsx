import React from 'react';
import Cards from '../containers/cards/cards.container.jsx';
import { Banner } from '../components/banner/banner.jsx';

const Home = (props) => {
    // console.log(props.width)
    return (
        <>
            <Banner
                title="Chez vous, partout et ailleurs"
                uriBanner="/images/banner.svg"
            />
            <Cards />
        </>
    );
};

export default Home;
