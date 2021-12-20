import React from 'react';
import BeerItemInfo from '../BeerItemInfo/beerItemInfo';
import BeerItemImage from '../BeerItemImage/beerItemImage';
import cl from './beerItem.module.css';

function BeerItem({beer}) {
    return (
        <div className={cl.beerItem}>
          <BeerItemImage image={beer["image_url"]}/>
          <BeerItemInfo beer={beer}/>
        </div>
    );
}

export default BeerItem;