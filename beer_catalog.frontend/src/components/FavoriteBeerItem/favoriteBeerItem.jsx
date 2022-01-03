/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import BeerItemImage from 'components/BeerItemImage/beerItemImage';
import FavoriteBeerItemInfo from 'components/FavoriteBeerItemInfo/favoriteBeerItemInfo';
import PropTypes from 'prop-types';

import './favoriteBeerItem.css';


function FavoriteBeerItem({ favoriteBeer, onRemoveFavoriteClick }) {
    return (
        <div className="favorite-beer__item">
            <FavoriteBeerItemInfo favoriteBeer={favoriteBeer} onRemoveFavoriteClick={onRemoveFavoriteClick} />
            <BeerItemImage image={favoriteBeer.image_url} />
        </div>
    );
}

FavoriteBeerItem.propTypes = {
    favoriteBeer: PropTypes.object,
    onRemoveFavoriteClick: PropTypes.func
};

export default FavoriteBeerItem;
