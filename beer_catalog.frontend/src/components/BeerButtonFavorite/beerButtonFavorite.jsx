/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setIsFavoriteBeer } from 'store/beers/state/thunks/thunks';


function BeerButtonFavorite({ beer = { isFavorite: true }, onFavoriteClick = () => undefined, className }) {
    const dispatch = useDispatch();
    const favoriteButton = beer.isFavorite ? 'Remove Favorite' : 'Add to Favorite';

    const handleFavoriteButton = () => {
        dispatch(setIsFavoriteBeer(beer));
        onFavoriteClick();
    };

    return (
        <button className={className} onClick={handleFavoriteButton}>{favoriteButton}</button>
    );
}

BeerButtonFavorite.propTypes = {
    beer: PropTypes.object,
    onFavoriteClick: PropTypes.func,
    className: PropTypes.string
};

export default BeerButtonFavorite;
