import { DESKTOP_MAX_WIDTH } from '../constants.js';

export const width = (number, unite) => {
    console.log(window.innerWidth);
    if (unite === 'percent') {
        return (DESKTOP_MAX_WIDTH * (number / 100) * 100) / DESKTOP_MAX_WIDTH;
    }
    return DESKTOP_MAX_WIDTH * (number / 100);
};
