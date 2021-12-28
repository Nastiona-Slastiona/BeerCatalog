import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setIsFavoriteBeer } from 'Store/features/beers/beersSlice.jsx';

import './beerItemButtons.css';


function BeerItemButtons({beer, onFavoriteClick=()=>undefined}) {
    const dispatch = useDispatch();
    let favoriteButton = beer.isFavorite ? 'Remove Favorite' : 'Favorite'

    const handleFavoriteButton = () => {
        dispatch(setIsFavoriteBeer(beer));
        onFavoriteClick();
    }

    return (
        <div className={'beer-item__buttons-container'}>
            <button className={'beer-item__button'}>Open</button>
            <button className={'beer-item__button'} onClick={handleFavoriteButton}>{favoriteButton}</button>
        </div>    
    );
};

BeerItemButtons.propTypes = {
    beer: PropTypes.object,
    onFavoriteClick: PropTypes.func
}

export default BeerItemButtons;