import React, { useEffect, useState } from 'react';

import { Toggler } from '../../components/toggler/toggler';

export const ToggleDetails = (props) => {
    const { details, type } = props;
    const triggerKeys = ['description', 'equipments'];
    const [toggled, setToggled] = useState(
        Array(triggerKeys.length).fill(false),
    );
    const datasTriggered = Array(triggerKeys.length)
        .fill([triggerKeys, Object.values(details)])
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
        //console.log(valuesToggled);
        setToggled(valuesToggled);
    };
    const Togglers = () => {
        return triggerKeys.map((key, index) => {
            return (
                <Toggler
                    key={index}
                    id={index}
                    titleHeader={key}
                    toggled={toggled[index]}
                    contents={datasTriggered[key]}
                    handleClickArrow={handleClick}
                />
            );
        });
    };
    //console.log('datasTriggered: ', datasTriggered);
    return <>{Togglers()}</>;
};
