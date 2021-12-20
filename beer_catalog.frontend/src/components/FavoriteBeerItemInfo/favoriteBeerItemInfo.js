import React from 'react';
import BeerItemButtons from '../BeerItemButtons/beerItemButtons';
import BeerItemTagline from '../BeerItemTagline/beerItemTagline';
import BeerItemTitle from '../BeerItemTitle/beerItemTitle';
import cl from './favoriteBeerItemInfo.module.css';

function FavoriteBeerItemInfo({favoriteBeer}) {
    return (
        <div className={cl.favoriteBeerItemInfoContainer}>
            <BeerItemTitle>{favoriteBeer.name}</BeerItemTitle>
            <BeerItemTagline>{favoriteBeer.tagline}</BeerItemTagline>
            <div className={cl.favoriteBeerItemInfoDescription}>{favoriteBeer.description}</div>    
            <BeerItemButtons beer={favoriteBeer}/>  
        </div>
    );
}

export default FavoriteBeerItemInfo;