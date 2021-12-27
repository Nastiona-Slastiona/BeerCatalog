import React from 'react';
import { useDispatch } from 'react-redux';

import { setIsFavoriteBeer } from 'Store/features/beers/beersSlice.jsx';

import './beerItemButtons.css';


export default function BeerItemButtons({beer}) {
    const dispatch = useDispatch();
    let favoriteButton = beer.isFavorite ? 'Remove Favorite' : 'Favorite'

    const handleFavoriteButton = () => {
        dispatch(setIsFavoriteBeer(beer));
    }

    return (
        <div className={'beer-item__buttons-container'}>
            <button className={'beer-item__button'}>Open</button>
            <button className={'beer-item__button'} onClick={handleFavoriteButton}>{favoriteButton}</button>
        </div>    
    );
};