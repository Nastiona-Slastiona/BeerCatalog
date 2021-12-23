import React from 'react';

import BeerItem from 'Components/BeerItem/beerItem.jsx';

import './beerItemsRow.css';


export default function BeerItemsRow({beersRow}) {
    return (
        <div className={'beer-items__row'}>
            {beersRow.map(beer =>
                <BeerItem beer={beer} key={beer.id}/>
            )}
        </div>
    )
};