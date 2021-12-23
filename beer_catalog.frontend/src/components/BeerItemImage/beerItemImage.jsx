import React from 'react';

import './beerItemImage.css';


export default function BeerItemImage({image}) {
    return (
        <div className={'beer-item-image__section'}>
            <div className={'beer-item-image__container'}>
                <img className={'beer-item-image'} alt="PUNK IPA" src={image}></img>
            </div>
        </div>
    );
};