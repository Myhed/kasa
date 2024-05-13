import React from 'react';
//import { CardStyled } from './card.styled.js';
import './card.style.css';
const Card = (props) => {
    /*return <CardStyled key={props.index} >{props.index}</CardStyled>*/
    return (
	<div className="card" key={props.index}>{props.index}</div>
    )
}


export default Card;
