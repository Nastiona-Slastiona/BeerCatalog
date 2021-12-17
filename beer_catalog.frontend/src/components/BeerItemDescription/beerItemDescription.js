import React from 'react';
import cl from './beerItemDescription.module.css';

function BeerItemDescription() {
    return (
        <div className={cl.beerItemDescriptionContainer}>
            <div className={cl.beerItemDescriptionTitle}>Title</div>
            <div className={cl.beerItemDescriptionTagline}>Tagline</div>
            <div className={cl.beerItemDescriptionButtonContainer}>
                <button className={cl.beerItemDescriptionButton}>Open</button>
                <button className={cl.beerItemDescriptionButton}>Favorite</button>
            </div>    
        </div>
    );
}

export default BeerItemDescription;