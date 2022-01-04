/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BeerItemInfo from 'features/beersList/components/BeerItemInfo/beerItemInfo';
import BeerItemImage from 'features/common/components/BeerItemImage/beerItemImage';
import PropTypes from 'prop-types';

import './beerItem.css';


function BeerItem({ beer }) {
    return (
        <div className="beer__item">
            <BeerItemImage image={beer.image_url} />
            <BeerItemInfo beer={beer} />
        </div>
    );
}

BeerItem.propTypes = {
    beer: PropTypes.object
};

export default BeerItem;
