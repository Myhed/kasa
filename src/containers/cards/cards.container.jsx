import React from 'react';
//import {useEffect} from 'react';
//import { CardsWrapper } from './cards.styled.js';
import Card from '../../components/card/card.jsx';
import json from '../../datas.json';
import { useNavigate } from "react-router-dom";
import './cards.style.css';

const Cards = function () {
  const navigate = useNavigate();
  const { datas } = json;
  const handleClick = (e, details) => {
    e.preventDefault();
    navigate(`/hebergement/${details.id}`, { state: details })
  }

  const cards = () => {
    return Array(datas.length).fill().map((__, index) => {
      const cardDatas = datas[index];
      return <Card key={index} index={index} onClick={handleClick} {...cardDatas} />
    })
  }

  return (
    <div className='cards'>{cards()}</div>
  )
  /*return (
      <CardsWrapper>{cards()}</CardsWrapper>
  )*/
}


export default Cards;
