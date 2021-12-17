import React from 'react';
import BeerItemButtons from '../BeerItemButtons/beerItemButtons';
import BeerItemTagline from '../BeerItemTagline/beerItemTagline';
import BeerItemTitle from '../BeerItemTitle/beerItemTitle';
import cl from './beerItemInfo.module.css';

function BeerItemInfo() {
    return (
        <div className={cl.beerItemInfoContainer}>
            <BeerItemTitle>Title</BeerItemTitle>
            <BeerItemTagline>Tagline</BeerItemTagline>
            <BeerItemButtons/>  
        </div>
    );
}

export default BeerItemInfo;