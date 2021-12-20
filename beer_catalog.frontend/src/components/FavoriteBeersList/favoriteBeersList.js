import React from 'react';
import FavoriteBeerItem from '../FavoriteBeerItem/favoriteBeerItem';
import cl from './favoriteBeersList.module.css';
import CustomPagination from '../CustomPagination/customPagination';
import { useSelector } from 'react-redux';
import FilterItem from '../FilterItem/filterItem';

function FavoriteBeersList() {
    const favorites = useSelector(state => state.favoriteBeers.favoriteBeers);

    if(!favorites.length) {
        return (
            <h2>There is nothing</h2>
        );
    }  

    const renderedBeers = favorites.map((favoriteBeer) => {
        return (
            <FavoriteBeerItem favoriteBeer={favoriteBeer} key={favoriteBeer.id}/>
        )

    })

    return (
        <div className={cl.favoriteBeersListContainer}>
            <div className={cl.favoriteBeersList}>
                {renderedBeers}
                <CustomPagination/>
            </div>
        </div>
    );
}

export default FavoriteBeersList;