import React from 'react';

import FavoriteBeerItemInfo from 'Components/FavoriteBeerItemInfo/favoriteBeerItemInfo.jsx';
import BeerItemImage from 'Components/BeerItemImage/beerItemImage.jsx';

import './favoriteBeerItem.css';


export default function FavoriteBeerItem({favoriteBeer}) {
    return (
        <div className={'favorite-beer__item'}>
          <FavoriteBeerItemInfo favoriteBeer={favoriteBeer}/>
          <BeerItemImage image={favoriteBeer["image_url"]}/>
        </div>
    );
};