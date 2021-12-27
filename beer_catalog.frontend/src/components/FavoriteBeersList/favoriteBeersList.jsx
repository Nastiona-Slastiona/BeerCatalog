import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import FavoriteBeerItem from 'Components/FavoriteBeerItem/favoriteBeerItem.jsx';
import Pagination from 'Components/base/Pagination/pagination.jsx';

import './favoriteBeersList.css';


export default function FavoriteBeersList() {
    const favoriteBeers = useSelector(state => state.beers.beers.filter(
        beer => beer.isFavorite
    ));

    const [pageShown, setPageShown] = useState(0);
    const amountOfFavoriteBeers = favoriteBeers.length;
    const [isPaginationVisible, setIsPaginationVisible] = useState(amountOfFavoriteBeers > 5);
    const pages = [];

    for (let i = 0; i < (amountOfFavoriteBeers / 5); i++) {
        pages[i] = i + 1;
    };

    if(!amountOfFavoriteBeers) {
        return (
            <h2>There is nothing</h2>
        );    
    };
    
    const renderedBeers = [];

    for (let i = 0, j = 0; j < amountOfFavoriteBeers; i+=5, j++) {
        renderedBeers[j] = Array.from(favoriteBeers.slice(i, i + 5).map((favoriteBeer) => {
            return (
                <FavoriteBeerItem favoriteBeer={favoriteBeer} key={favoriteBeer.id}/>
            )
        }));
    };

    const onPaginationClick = useCallback((event) => {
        const paginationValue = event.target.className.split(' ');
        if (paginationValue[0] != 'page__buttons') {
            const direction = paginationValue[paginationValue.length - 1].split('-');
            
            if (direction.includes('right') && pageShown < pages.length) {
                setPageShown(prevPage => prevPage + 1);
            } else if (pageShown > 0) {
                setPageShown(prevPage => prevPage - 1);
            }

        } else {
            setPageShown(event.target.innerHTML - 1);
        }
    });

    return (
        <div className={'favorite-beers-list__container'}>
            <div className={'favorite-beers-list'}>
                {renderedBeers[pageShown]}
                <Pagination pages={pages} isVisible={isPaginationVisible} onClick={onPaginationClick}/>
            </div>
        </div>
    );
};