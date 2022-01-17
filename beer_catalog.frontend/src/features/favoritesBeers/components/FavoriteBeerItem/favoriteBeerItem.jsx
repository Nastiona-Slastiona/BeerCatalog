import PropTypes from 'prop-types';
import React from 'react';

import BeerItemImage from 'features/common/components/BeerItemImage/beerItemImage';
import FavoriteBeerItemInfo from 'features/favoritesBeers/components/FavoriteBeerItemInfo/favoriteBeerItemInfo';

import './favoriteBeerItem.scss';


function FavoriteBeerItem({ favoriteBeer, onRemoveFavoriteClick }) {
    return (
        <div className="favorite-beer-item">
            <FavoriteBeerItemInfo favoriteBeer={favoriteBeer} onRemoveFavoriteClick={onRemoveFavoriteClick} />
            <BeerItemImage imageUrl={favoriteBeer.image_url} />
        </div>
    );
}

FavoriteBeerItem.propTypes = {
    favoriteBeer: PropTypes.object,
    onRemoveFavoriteClick: PropTypes.func
};

export default FavoriteBeerItem;
