import PropTypes from 'prop-types';
import React from 'react';

import './beerPageHeader.scss';


function BeerPageHeader({ beer }) {
    return (
        <div className="beer-page__header">
            <span className="beer-page__header--title">{beer.name}</span>
            <span className="beer-page__header--tagline">{beer.tagline}</span>
        </div>
    );
}

BeerPageHeader.propTypes = {
    beer: PropTypes.object.isRequired
};

export default BeerPageHeader;
