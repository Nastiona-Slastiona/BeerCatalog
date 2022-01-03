/* eslint-disable import/no-unresolved */
import React from 'react';
import PropertiesItem from 'components/PropertiesItem/propertiesItem';

import './properties.css';


export default function Properties({ beer }) {
    return (
        <div className="properties">
            <div>
                <span className="properties__header">Properties</span>
            </div>
            <div className="properties__table">
                <PropertiesItem title="Alcohol by volume" propertyName="ABV" propertyValue={beer.abv} />
                <PropertiesItem title="International Bitterness Units" propertyName="IBU" propertyValue={beer.ibu} />
                <PropertiesItem title="Color by EBC" propertyName="EBC" propertyValue={beer.ebc} />
            </div>
        </div>
    );
}
