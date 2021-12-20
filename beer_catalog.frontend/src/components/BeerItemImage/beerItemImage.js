import React from 'react';
import cl from './beerItemImage.module.css';

function BeerItemImage({image}) {
    return (
        <div className={cl.beerItemImageSection}>
            <div className={cl.beerItemImageContainer}>
                <img className={cl.beerItemImage} alt="PUNK IPA" src={image}></img>
            </div>
        </div>
    );
}

export default BeerItemImage;