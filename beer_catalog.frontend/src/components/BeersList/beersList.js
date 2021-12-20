import React, { useEffect } from 'react';
import { fetchBeers } from '../../features/beers/beersSlice';
import cl from './beersList.module.css';
import { useDispatch, useSelector } from "react-redux";
import BeerItemsRow from '../BeerItemsRow/beerItemsRow';

function BeersList() {
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
        <div className={cl.beersListContainer}>
            <div className={cl.beersList}>
                {renderedRows}
            </div>
        </div>

    );
}

export default BeersList;