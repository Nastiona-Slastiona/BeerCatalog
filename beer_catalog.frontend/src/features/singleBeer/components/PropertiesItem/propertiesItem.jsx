import React from 'react';

import './propertiesItem.scss';


export default function PropertiesItem({ propertyName, propertyValue, title }) {
    return (
        <div className="properties-item">
            <div className="properties-item__name">
                {propertyName} <span title={title} className="icon-info" />
            </div>
            <div className="properties-item__value">{propertyValue}</div>
        </div>
    );
}
