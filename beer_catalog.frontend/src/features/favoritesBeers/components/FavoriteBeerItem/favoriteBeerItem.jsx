import React from 'react';
import PropTypes from 'prop-types';

import BeerItemImage from 'features/common/components/BeerItemImage/beerItemImage';
import FavoriteBeerItemInfo from 'features/favoritesBeers/components/FavoriteBeerItemInfo/favoriteBeerItemInfo';

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
