import React from 'react';

import BeerItem from 'Components/BeerItem/beerItem.jsx';

import './beerItemsRow.css';


export default function BeerItemsRow({beersRow}) {
    return (
        <div className={'beer-items__row'}>
            <BeerItem beer={beersRow[0]} key={beersRow[0].id}/>
            <BeerItem beer={beersRow[1]} key={beersRow[1].id}/>
            <BeerItem beer={beersRow[2]} key={beersRow[2].id}/>
        </div>
    )
};