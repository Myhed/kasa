import React, { useEffect, useState } from 'react';
import './style/stars.style.css';
export const Stars = (props) => {
    let { filled, number } = props;
    filled = parseInt(filled);
    const [unfilled, setUnFilled] = useState(number - filled);
    const [stars, setStars] = useState([]);
    useEffect(() => {
        const buildFilledStars = () =>
            Array(filled)
                .fill(null)
                .map((__, index) => (
                    <img
                        key={`filled-${index}`}
                        src="/images/star-active.svg"
                    />
                ));
        const buildUnFilledStars = () =>
            Array(unfilled)
                .fill(null)
                .map((__, index) => (
                    <img
                        key={`unfilled-${index}`}
                        src="/images/star-inactive.svg"
                    />
                ));
        return () => {
            const stars = [...buildFilledStars(), ...buildUnFilledStars()];
            setStars(stars);
            return stars;
        };
    }, [filled, unfilled]);
    console.log('stars Map:', stars);
    return <div className="stars">{stars.map((star) => star)}</div>;
};
