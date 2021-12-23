import React from 'react';

import BeerItemButtons from 'Components/BeerItemButtons/beerItemButtons.jsx';
import BeerItemTagline from 'Components/BeerItemTagline/beerItemTagline.jsx';
import BeerItemTitle from 'Components/BeerItemTitle/beerItemTitle.jsx';

import './beerItemInfo.css';


export default function BeerItemInfo({beer}) {
    return (
        <div className={'beer-item-info__container '}>
            <BeerItemTitle>{beer.name}</BeerItemTitle>
            <BeerItemTagline>{beer.tagline}</BeerItemTagline>
            <BeerItemButtons beer={beer}/>  
        </div>
    );
};