import styled from 'styled-components';
import { width } from '../../helpers/winow.js';

export const CardsWrapper = styled.div`
    margin: 0 auto;
    width: ${width(70, 'percent')}%;
    background-color: #cbc9c9;
    padding: 15px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-radius: 20px;
`;
