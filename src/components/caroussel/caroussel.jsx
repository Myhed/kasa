import React, { useState, useEffect } from 'react';
import { ItemCaroussel } from '../item-caroussel/itemCaroussel';
import './caroussel.style.css';

export const Caroussel = (props) => {
    const { pictures } = props;
    let [count, setCount] = useState(0);
    let [position, setPosition] = useState(0);
    let [direction, setDirection] = useState('');
    let [className, setClassName] = useState('');
    const renderPictures = () => {
        return pictures.map((path, index) => {
            const current = index === count ? 'current' : false;
            return (
                <ItemCaroussel
                    key={index}
                    index={index}
                    path={path}
                    isActive={current}
                    direction={direction}
                />
            );
        });
    };
    let picturesDom = renderPictures();
    useEffect(() => {
        console.log(count);
        console.log(position);
        console.log(direction);
    }, [count, direction, position]);

    const handlePrevPicture = (e) => {
        if (count === 0) {
            setCount(picturesDom.length - 1);
            //console.log('count: ', count)
        } else {
            setCount((count - 1) % picturesDom.length);
        }
        setDirection('Prev');
    };
    const handleNextPicture = (e) => {
        if (count === 0) {
            setCount(picturesDom.length);
        }
        setCount((count + 1) % picturesDom.length);
        setDirection('Next');
        const index = count % picturesDom.length;
        //console.log("nombre de pictures: ", picturesDom.length)
        //console.log("Boucle Next:", index)
        //console.log(picturesDom)
    };
    return (
        <div className="wrapper-caroussel">
            {picturesDom.length > 1 ? (
                <>
                    <img
                        src="/images/arrow_forward_caroussel.svg"
                        className="right"
                        onClick={handleNextPicture}
                    />
                    <img
                        src="/images/arrow_back_caroussel.svg"
                        className="left"
                        onClick={handlePrevPicture}
                    />
                </>
            ) : null}
            {/*<div className={`pictures ${className}`} style={{transform: `translateX(${position + 'px'})`}}>
	  </div> */}
            <ItemCaroussel path={pictures[count]} />
            <p class="cursor-caroussel">
                {count + 1}/{picturesDom.length}
            </p>
        </div>
    );
};
