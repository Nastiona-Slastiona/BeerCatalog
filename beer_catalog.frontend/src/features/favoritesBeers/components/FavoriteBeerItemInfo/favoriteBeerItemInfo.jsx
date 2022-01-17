import PropTypes from 'prop-types';
import React from 'react';

import BeerItemButtons from 'features/common/components/BeerItemButtons/beerItemButtons';
import Label from 'components/base/Label/label';

import './favoriteBeerItemInfo.scss';


function FavoriteBeerItemInfo({ favoriteBeer, onRemoveFavoriteClick }) {
    return (
        <div className="favorite-beer__item-info-container">
            <Label className="favorite-beer__item-info--title">{favoriteBeer.name}</Label>
            <Label>{favoriteBeer.tagline}</Label>
            <div className="favorite-beer__item-info-description">{favoriteBeer.description}</div>
            <BeerItemButtons beer={favoriteBeer} onFavoriteClick={onRemoveFavoriteClick} />
        </div>
    );
}

FavoriteBeerItemInfo.propTypes = {
    favoriteBeer: PropTypes.object.isRequired,
    onRemoveFavoriteClick: PropTypes.func
};

export default FavoriteBeerItemInfo;
