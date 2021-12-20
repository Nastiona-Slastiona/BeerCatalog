import React from 'react';
import BeerItemButtons from '../BeerItemButtons/beerItemButtons';
import BeerItemTagline from '../BeerItemTagline/beerItemTagline';
import BeerItemTitle from '../BeerItemTitle/beerItemTitle';
import cl from './beerItemInfo.module.css';

function BeerItemInfo({beer}) {
    return (
        <div className={cl.beerItemInfoContainer}>
            <BeerItemTitle>{beer.name}</BeerItemTitle>
            <BeerItemTagline>{beer.tagline}</BeerItemTagline>
            <BeerItemButtons beer={beer}/>  
        </div>
    );
}

export default BeerItemInfo;