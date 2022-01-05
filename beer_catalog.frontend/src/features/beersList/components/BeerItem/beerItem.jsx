import PropTypes from 'prop-types';
import React from 'react';

import BeerItemImage from 'features/common/components/BeerItemImage/beerItemImage';
import BeerItemInfo from 'features/beersList/components/BeerItemInfo/beerItemInfo';

import './beerItem.scss';


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
