import React from 'react';
//import { CardsWrapper } from './cards.styled.js';
import Card from '../../components/card/card.jsx';
import './cards.style.css';
const Cards = function() {
    const cards = () => {
        return Array(6).fill().map((__,index) => <Card key={index} index={index} />)
    }
    
    return (
	<div className='cards'>{cards()}</div>
    )
    /*return (
        <CardsWrapper>{cards()}</CardsWrapper>
    )*/
}


export default Cards;
