import React from 'react';
import BeerItem from '../BeerItem/beerItem';
import cl from './beersList.module.css';

function BeerList() {
    return (
        <div className={cl.beersList}>
            <BeerItem/>
            <BeerItem/>
            <BeerItem/>
        </div>
    );
}

export default BeerList;