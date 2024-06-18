import React from 'react';
//import { CardStyled } from './card.styled.js';
//import datas from '../../datas.json';
import './card.style.css';
const Card = ({
    id,
    title,
    cover,
    location,
    equipments,
    description,
    host,
    pictures,
    rating,
    tags,
    index,
    onClick,
}) => {
    //    console.log('datas:',datas);
    /*return <CardStyled key={props.index} >{props.index}</CardStyled>*/
    const details = {
        id,
        title,
        location,
        equipments,
        host,
        description,
        pictures,
        rating,
        tags,
        index,
    };
    return (
        <div className="card" key={index}>
            <div className="mask-image"></div>
            <img src={cover} />
            <a
                href={`/hebergement/${id}`}
                onClick={(e) => onClick(e, details)}
            ></a>
            <p>{title}</p>
        </div>
    );
};

export default Card;
