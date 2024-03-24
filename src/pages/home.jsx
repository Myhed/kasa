import React from 'react';
import Header from '../partials/header';
import Footer from '../partials/footer';
import Cards from '../containers/cards/cards.container.jsx';
const Home = (props) => {
  // console.log(props.width)
  return (
    <>
    <Header />
    <Cards />
    <div>
      {/* <Navigation /> */}
      <h2>Page d'accueil</h2>
      <p>Bienvenue sur notre site!</p>
    </div>
    <Footer />
    </>
  );
}

export default Home;
