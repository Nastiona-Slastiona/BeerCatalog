import React from 'react';
import BeerItemInfo from '../BeerItemInfo/beerItemInfo';
import BeerItemImage from '../BeerItemImage/beerItemImage';
import cl from './beerItem.module.css';

function BeerItem() {
    return (
        <div className={cl.beerItem}>
          <BeerItemImage/>
          <BeerItemInfo/>
        </div>
    );
}

export default BeerItem;