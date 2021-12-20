import React from 'react';
import cl from './beerItemButtons.module.css';

function BeerItemButtons({beer}) {
    let favoriteButton = beer.isFavorite ? 'Remove Favorite' : 'Favorite'

    const handleFavoriteButton = () => {
        const sign = !beer.isFavorite;
        favoriteButton = sign ? 'Remove Favorite' : 'Favorite'
    }

    return (
        <div className={cl.beerItemButtonsContainer}>
                <button className={cl.beerItemButton}>Open</button>
                <button className={cl.beerItemButton} onClick={handleFavoriteButton}>{favoriteButton}</button>
        </div>    
    );
}

export default BeerItemButtons;