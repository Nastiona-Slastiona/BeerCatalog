import React from 'react';

import BeerItemButtons from 'Components/BeerItemButtons/beerItemButtons.jsx';
import BeerItemTagline from 'Components/BeerItemTagline/beerItemTagline.jsx';
import BeerItemTitle from 'Components/BeerItemTitle/beerItemTitle.jsx';

import './favoriteBeerItemInfo.css';


export default function FavoriteBeerItemInfo({favoriteBeer}) {
    return (
        <div className={'favorite-beer__item-info-container'}>
            <BeerItemTitle>{favoriteBeer.name}</BeerItemTitle>
            <BeerItemTagline>{favoriteBeer.tagline}</BeerItemTagline>
            <div className={'favorite-beer__item-info-description'}>{favoriteBeer.description}</div>    
            <BeerItemButtons beer={favoriteBeer}/>  
        </div>
    );
};