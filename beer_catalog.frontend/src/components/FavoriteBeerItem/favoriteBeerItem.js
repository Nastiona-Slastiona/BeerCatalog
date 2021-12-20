import React from 'react';
import FavoriteBeerItemInfo from '../FavoriteBeerItemInfo/favoriteBeerItemInfo';
import BeerItemImage from '../BeerItemImage/beerItemImage';
import cl from './favoriteBeerItem.module.css';

function FavoriteBeerItem({favoriteBeer}) {
    return (
        <div className={cl.favoriteBeerItem}>
          <FavoriteBeerItemInfo favoriteBeer={favoriteBeer}/>
          <BeerItemImage image={favoriteBeer["image_url"]}/>
        </div>
    );
}

export default FavoriteBeerItem;