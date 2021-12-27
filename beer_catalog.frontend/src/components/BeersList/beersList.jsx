import React from 'react';

import BeerItemsRow from 'Components/BeerItemsRow/beerItemsRow.jsx';
import BeerItem from 'Components/BeerItem/beerItem.jsx';

import './beersList.css';


export default function BeersList({beers}) {
    if(!beers.length) {
        return (
            <h2>There is nothing</h2>
        );
    }    

    const getVal = () => {
        const beersRows = [];
        let i;

        if (beers.length <= 3) {
            return beers.map(beer => 
                <BeerItem beer={beer} key={beer.id}/>
            )
        }

        for (i = 0; i < beers.length - 3; i += 3 ) {
            beersRows.push(Array.from(beers.slice(i, i + 3)))  
        }
        beersRows.push(Array.from(beers.slice(i,)))

        const rows = beersRows.map((beersRow, index) => 
            <BeerItemsRow beersRow={beersRow} key={index}/>
        )

        return rows;
    }

    const renderedRows = getVal();

    return (
        <div className={'beers-list__container'}>
            <div className={'beers-list'}>
                {renderedRows}
            </div>
        </div>
    );
};