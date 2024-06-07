import React from 'react';
import Header from '../partials/header';
import Footer from '../partials/footer';
import Cards from '../containers/cards/cards.container.jsx';
import {Banner} from '../components/banner/banner.jsx';

const Home = (props) => {
  // console.log(props.width)
  return (
    <>
    <Header />
    <Banner />
    <Cards />
    <Footer />
    </>
  );
}

export default Home;
