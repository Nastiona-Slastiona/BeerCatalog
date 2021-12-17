import React from 'react';
import cl from './beerItemButtons.module.css';

function BeerItemButtons() {
    return (
        <div className={cl.beerItemButtonsContainer}>
                <button className={cl.beerItemButton}>Open</button>
                <button className={cl.beerItemButton}>Favorite</button>
        </div>    
    );
}

export default BeerItemButtons;