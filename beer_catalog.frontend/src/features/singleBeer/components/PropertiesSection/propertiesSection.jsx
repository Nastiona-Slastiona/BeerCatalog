import PropTypes from 'prop-types';
import React from 'react';

import './propertiesSection.scss';


function PropertiesSection({ beer }) {
    const properties = [{
        title: 'Alcohol by volume', name: 'ABV', value: beer.abv
    }, {
        title: 'International Bitterness Units', name: 'IBU', value: beer.ibu
    }, {
        title: 'Color by EBC', name: 'EBC', value: beer.ebc
    }];

    return (
        <table className="properties">
            <thead>
                <tr className="properties__header">
                    <td>
                        Properties
                    </td>
                </tr>
            </thead>
            <tbody className="properties__table">
                {
                    properties.map((property, index) => (
                        <tr key={index} className="properties__item">
                            <td className="properties__item-name">
                                {property.name} <span title={property.title} className="icon-info" />
                            </td>
                            <td className="properties__item-value">{property.value}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}


PropertiesSection.propTypes = {
    beer: PropTypes.object
};

export default PropertiesSection;
