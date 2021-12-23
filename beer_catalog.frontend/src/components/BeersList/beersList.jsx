import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { fetchBeers } from 'Store/features/beers/beersSlice.jsx';
import BeerItemsRow from 'Components/BeerItemsRow/beerItemsRow.jsx';

import './beersList.css';


export default function BeersList() {
    const beers = useSelector(state => state.beers.beers);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBeers());
    }, [dispatch]);

    if(!beers.length) {
        return (
            <h2>There is nothing</h2>
        );
    }    

    const getVal = () => {
        const beersRows = [];

        for (let i = 0; i < beers.length - 3 ; i += 3 ) {
            beersRows.push(Array.from(beers.slice(i, i + 3)))  
        }

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