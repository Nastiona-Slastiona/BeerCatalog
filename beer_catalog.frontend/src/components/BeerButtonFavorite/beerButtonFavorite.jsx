import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setIsFavoriteBeer } from 'store/features/beers/beersSlice';


function BeerButtonFavorite({beer, onFavoriteClick=()=>undefined, className}) {
    const dispatch = useDispatch();
    let favoriteButton = beer.isFavorite ? 'Remove Favorite' : 'Add to Favorite'

    const handleFavoriteButton = () => {
        dispatch(setIsFavoriteBeer(beer));
        onFavoriteClick();
    }

    return (
        <button className={className} onClick={handleFavoriteButton}>{favoriteButton}</button>
   
    );
};

BeerButtonFavorite.propTypes = {
    beer: PropTypes.object,
    onFavoriteClick: PropTypes.func,
    className: PropTypes.string
}

export default BeerButtonFavorite;