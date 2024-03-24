import React from 'react';
import { CardsWrapper } from './cards.styled.js';
import Card from '../../components/card/card.jsx';
const Cards = function() {
    const cards = () => {
        return Array(6).fill().map((__,index) => <Card key={index} index={index} />)
    }

    return (
        <CardsWrapper>{cards()}</CardsWrapper>
    )
}


export default Cards;