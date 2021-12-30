import React from 'react';

import './propertiesItem.css';


export default function PropertiesItem({propertyName, propertyValue}) {
    return (
        <div className='properties__item'>
            <div className='properties__item-name'>{propertyName} <span className="icon-info properties__item-icon"></span></div>
            <div className='properties__item-value'>{propertyValue}</div>
        </div>
    );
};