import React from 'react';
import FavoriteBeerItemInfo from '../FavoriteBeerItemInfo/favoriteBeerItemInfo';
import BeerItemImage from '../BeerItemImage/beerItemImage';
import cl from './favoriteBeerItem.module.css';

function FavoriteBeerItem() {
    return (
        <div className={cl.favoriteBeerItem}>
          <FavoriteBeerItemInfo/>
          <BeerItemImage/>
        </div>
    );
}

export default FavoriteBeerItem;