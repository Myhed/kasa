import React, { useEffect, useState } from 'react';
import './style/toggler.style.css';

export const Toggler = (props) => {
    const {
        handleClickArrow,
        titleHeader,
        contents,
        toggled,
        id,
        arrowDirection,
    } = props;
    const [contentToggle, setContentToggle] = useState(toggled);
    const [arrowSrc, setArrowSrc] = useState(arrowDirection);
    const contentsMap = () =>
        contents.map((content, index) => <p key={index}>{content}</p>);
    let classUsed = 'container';
    useEffect(() => {
        setContentToggle(toggled);
        console.log('arrowDirection: ', arrowDirection);
        // return () => contentToggle;
    }, [toggled]);
    const initContent = () => {
        if (Array.isArray(contents)) {
            return contentsMap();
        }
        return <p>{contents}</p>;
    };
    //console.log('contentToggled:', contentToggle, classUsed);
    return (
        <div className="toggler" key={id}>
            <header>
                <h3>{titleHeader}</h3>
                <img
                    class="arrow-back"
                    src={arrowDirection}
                    onClick={(e) => handleClickArrow(e, id)}
                />
            </header>
            <div className={`container ${contentToggle ? 'toggled' : ''}`}>
                {toggled ? initContent() : ''}
            </div>
        </div>
    );
};
