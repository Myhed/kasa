import React from 'react';
import './banner.style.css';

export const Banner = (props) => {
    const { uriBanner, title } = props;
    return (
        <>
            <div id="banner">
                <span class="mask"></span>
                <img src={uriBanner} />
                {title ? <h1>{title}</h1> : null}
            </div>
        </>
    );
};
