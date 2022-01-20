import PropTypes from 'prop-types';
import React from 'react';

import BeerItemActionsSection from 'features/common/components/BeerItemActionsSection/beerItemActionsSection';

import './beerItemInfo.scss';


function BeerItemInfo({ beer }) {
    return (
        <div className="beer-item-info">
            <span className="beer-item-info__text--title">{beer.name}</span>
            <span className="beer-item-info__text--tagline">{beer.tagline}</span>
            <BeerItemActionsSection beer={beer} />
        </div>
    );
}

BeerItemInfo.propTypes = {
    beer: PropTypes.object.isRequired
};

export default BeerItemInfo;
