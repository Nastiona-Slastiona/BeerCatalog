import PropTypes from 'prop-types';
import React from 'react';

import BeerItemActionsSection from 'features/common/components/BeerItemActionsSection/beerItemActionsSection';
import Label from 'components/base/Label/label';

import './favoriteBeerItemInfo.scss';


function FavoriteBeerItemInfo({ favoriteBeer, onRemoveFavoriteClick }) {
    return (
        <div className="favorite-beer__item-info-container">
            <Label className="favorite-beer__item-info--title">{favoriteBeer.name}</Label>
            <Label>{favoriteBeer.tagline}</Label>
            <div className="favorite-beer__item-info-description">{favoriteBeer.description}</div>
            <BeerItemActionsSection beer={favoriteBeer} onFavoriteClick={onRemoveFavoriteClick} />
        </div>
    );
}

FavoriteBeerItemInfo.propTypes = {
    favoriteBeer: PropTypes.object.isRequired,
    onRemoveFavoriteClick: PropTypes.func
};

export default FavoriteBeerItemInfo;
