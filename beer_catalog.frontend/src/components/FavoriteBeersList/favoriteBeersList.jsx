import React from 'react';
import { useSelector } from 'react-redux';

import FavoriteBeerItem from 'Components/FavoriteBeerItem/favoriteBeerItem.jsx';
import CustomPagination from 'Components/base/Pagination/pagination.jsx';

import './favoriteBeersList.css';


export default function FavoriteBeersList() {
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
        <div className={'favorite-beers-list__container'}>
            <div className={'favorite-beers-list'}>
                {renderedBeers}
                <CustomPagination/>
            </div>
        </div>
    );
};