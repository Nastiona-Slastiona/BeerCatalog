/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BeerItemImage from 'components/BeerItemImage/beerItemImage';
import BeerItemInfo from 'components/BeerItemInfo/beerItemInfo';
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
    beer: PropTypes.object.isRequired
};

export default BeerItem;
