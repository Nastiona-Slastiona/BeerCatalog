import React from 'react';

import './propertiesItem.scss';


export default function PropertiesItem({ propertyName, propertyValue, title }) {
    return (
        <div className="properties__item">
            <div className="properties__item-name">
                {propertyName} <span title={title} className="icon-info properties__item-icon" />
            </div>
            <div className="properties__item-value">{propertyValue}</div>
        </div>
    );
}
