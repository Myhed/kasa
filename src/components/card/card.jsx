import React from 'react';
import { CardStyled } from './card.styled.js';

const Card = (props) => {
    return <CardStyled key={props.index} >{props.index}</CardStyled>
}


export default Card;