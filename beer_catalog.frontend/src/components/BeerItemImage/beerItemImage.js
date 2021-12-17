import React from 'react';
import cl from './beerItemImage.module.css';
import img from './cat.jpg';

function BeerItemImage() {
    return (
        <div className={cl.beerItemImageContainer}>
            <img className={cl.beerItemImage} alt="PUNK IPA" src={img}></img>
        </div>
    );
}

export default BeerItemImage;