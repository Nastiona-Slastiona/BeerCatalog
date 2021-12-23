import React from 'react';

import './beerItemButtons.css';


export default function BeerItemButtons({beer}) {
    let favoriteButton = beer.isFavorite ? 'Remove Favorite' : 'Favorite'

    const handleFavoriteButton = () => {
        const sign = !beer.isFavorite;
        favoriteButton = sign ? 'Remove Favorite' : 'Favorite'
    }

    return (
        <div className={'beer-item__buttons-container'}>
            <button className={'beer-item__button'}>Open</button>
            <button className={'beer-item__button'} onClick={handleFavoriteButton}>{favoriteButton}</button>
        </div>    
    );
};