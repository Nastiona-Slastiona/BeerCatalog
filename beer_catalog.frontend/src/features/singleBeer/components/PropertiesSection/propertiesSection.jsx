import React from 'react';

import './propertiesSection.scss';


export default function PropertiesSection({ beer }) {
    const properties = [{
        title: 'Alcohol by volume', name: 'ABV', value: beer.abv
    }, {
        title: 'International Bitterness Units', name: 'IBU', value: beer.ibu
    }, {
        title: 'Color by EBC', name: 'EBC', value: beer.ebc
    }];

    return (
        <div className="properties">
            <div>
                <h2 className="properties__header">Properties</h2>
            </div>
            <div className="properties__table">
                {
                    properties.map((property, index) => (
                        <div key={index} className="properties__item">
                            <div className="properties__item-name">
                                {property.name} <span title={property.title} className="icon-info" />
                            </div>
                            <div className="properties__item-value">{property.value}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
