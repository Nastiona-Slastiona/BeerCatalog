import React from 'react';

import BeerItemInfo from 'Components/BeerItemInfo/beerItemInfo.jsx';
import BeerItemImage from 'Components/BeerItemImage/beerItemImage.jsx';

import './beerItem.css';


export default function BeerItem({beer}) {
    return (
        <div className={'beer__item'}>
            <BeerItemImage image={beer["image_url"]}/>
            <BeerItemInfo beer={beer}/>
        </div>
    );
};