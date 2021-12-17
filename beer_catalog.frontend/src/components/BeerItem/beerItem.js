import React from 'react';
import BeerItemDescription from '../BeerItemDescription/beerItemDescription';
import BeerItemImage from '../BeerItemImage/beerItemImage';
import cl from './beerItem.module.css';

function BeerItem() {
    return (
        <div className={cl.beerItem}>
          <BeerItemImage/>
          <BeerItemDescription/>
        </div>
    );
}

export default BeerItem;