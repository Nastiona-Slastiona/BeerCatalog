import PropTypes from 'prop-types';
import React from 'react';

import BeerItemActionsSection from 'features/common/components/BeerItemActionsSection/beerItemActionsSection';

import './favoriteBeerItemInfo.scss';


function FavoriteBeerItemInfo({ favoriteBeer, onRemoveFavoriteClick }) {
    return (
        <div className="favorite-beer-item-info__container">
            <span className="favorite-beer-item-info__title">{favoriteBeer.name}</span>
            <span className="favorite-beer-item-info__tagline">{favoriteBeer.tagline}</span>
            <div className="favorite-beer-item-info__description">{favoriteBeer.description}</div>
            <BeerItemActionsSection beer={favoriteBeer} onFavoriteClick={onRemoveFavoriteClick} />
        </div>
    );
}

FavoriteBeerItemInfo.propTypes = {
    favoriteBeer: PropTypes.object.isRequired,
    onRemoveFavoriteClick: PropTypes.func
};

export default FavoriteBeerItemInfo;
