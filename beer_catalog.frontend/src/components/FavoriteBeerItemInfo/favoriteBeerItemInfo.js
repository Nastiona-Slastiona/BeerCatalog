import React from 'react';
import BeerItemButtons from '../BeerItemButtons/beerItemButtons';
import BeerItemTagline from '../BeerItemTagline/beerItemTagline';
import BeerItemTitle from '../BeerItemTitle/beerItemTitle';
import cl from './favoriteBeerItemInfo.module.css';

function FavoriteBeerItemInfo({favoriteBeer}) {
    return (
        <div className={cl.favoriteBeerItemInfoContainer}>
            <BeerItemTitle>Title</BeerItemTitle>
            <BeerItemTagline>Tagline</BeerItemTagline>
            <div className={cl.favoriteBeerItemInfoDescription}>Description store.

Since any React component in a React Redux app can be connected to the store, most applications will render a store.

Since any React component in a React Redux app can be connected to the store, most applications will render a  at the top level, with the entire app’s component tree inside of iat the top level, with the entire app’s component tree inside of i</div>
            <BeerItemButtons/>  
        </div>
    );
}

export default FavoriteBeerItemInfo;