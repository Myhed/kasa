import React, { useEffect, useState } from 'react';

import { Toggler } from '../../components/toggler/toggler';

export const ToggleDetails = (props) => {
    const { details, type, keysToToggle } = props;
    //const triggerKeys = ['description', 'equipments'];
    const [toggled, setToggled] = useState(
        Array(keysToToggle.length).fill(false),
    );
    const [arrowsDirection, setArrowsDirection] = useState(
        Array(keysToToggle.length).fill({
            direction: 'up',
            image: '/images/arrow_back.svg',
        }),
    );
    const datasTriggered = Array(keysToToggle.length)
        .fill([keysToToggle, Object.values(details)])
        .reduce((acc, current, index) => {
            const keysDetails = Object.keys(details);
            const indexTriggeredDatas = keysDetails.indexOf(current[0][index]);
            acc[current[0][index]] = current[1][indexTriggeredDatas];
            return acc;
        }, {});
    const handleClick = (e, id) => {
        //console.log(e, id);
        const valuesToggled = toggled.map((value, index) =>
            index === id
                ? value
                    ? false
                    : true
                : type === 'OneToMany'
                  ? false
                  : value,
        );
        const arrowsDirectionChange = arrowsDirection.map(
            (arrowDirection, index) => {
                if (index === id) {
                    if (arrowDirection.direction === 'up') {
                        return {
                            direction: 'down',
                            image: '/images/arrow_down.svg',
                        };
                    } else {
                        return {
                            direction: 'up',
                            image: '/images/arrow_back.svg',
                        };
                    }
                }
                return arrowDirection;
            },
        );
        //console.log(valuesToggled);
        setToggled(valuesToggled);
        setArrowsDirection(arrowsDirectionChange);
    };
    console.log(datasTriggered);
    const Togglers = () => {
        return keysToToggle.map((key, index) => {
            return (
                <Toggler
                    key={index}
                    id={index}
                    titleHeader={key}
                    toggled={toggled[index]}
                    contents={datasTriggered[key]}
                    arrowDirection={arrowsDirection[index].image}
                    handleClickArrow={handleClick}
                />
            );
        });
    };
    //console.log('datasTriggered: ', datasTriggered);
    return <>{Togglers()}</>;
};
