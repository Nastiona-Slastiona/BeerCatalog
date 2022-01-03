/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setIsFavoriteBeer } from 'store/beers/state/thunks/thunks';

import './beerItemButtons.css';


function BeerItemButtons({ beer, onFavoriteClick = () => undefined }) {
    const dispatch = useDispatch();
    const favoriteButton = beer.isFavorite ? 'Remove Favorite' : 'Favorite';

    const handleFavoriteButton = () => {
        dispatch(setIsFavoriteBeer(beer));
        onFavoriteClick();
    };

    return (
        <div className="beer-item__buttons-container">
            <button className="beer-item__button">Open</button>
            <button className="beer-item__button" onClick={handleFavoriteButton}>{favoriteButton}</button>
        </div>
    );
}

BeerItemButtons.propTypes = {
    beer: PropTypes.object.isRequired,
    onFavoriteClick: PropTypes.func
};

export default BeerItemButtons;
