import React from 'react';
import BeerItem from '../BeerItem/beerItem';
import cl from './beerItemsRow.module.css';

function BeerItemsRow({beersRow}) {
    return (
        <div className={cl.beerItemsRow}>
            <BeerItem beer={beersRow[0]} key={beersRow[0].id}/>
            <BeerItem beer={beersRow[1]} key={beersRow[1].id}/>
            <BeerItem beer={beersRow[2]} key={beersRow[2].id}/>
        </div>
    )}

export default BeerItemsRow;