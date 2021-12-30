import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import FavoriteBeerItem from 'components/FavoriteBeerItem/favoriteBeerItem';
import Pagination from 'components/base/Pagination/pagination';

import './favoriteBeersList.css';


export default function FavoriteBeersList() {
    const favoriteBeers = useSelector(state => state.beers.beers.filter(
        beer => beer.isFavorite
    ));

    const [amountOfFavoriteBeers, setAmountOfFavoriteBeers] = useState(favoriteBeers.length);
    const [pageShown, setPageShown] = useState(0);
    const [isPaginationVisible, setIsPaginationVisible] = useState(amountOfFavoriteBeers > 5);

    if (!amountOfFavoriteBeers) {
        return (
            <h2>There is nothing</h2>
        );    
    };

    const pages = [];
   
    for (const i = 0; i < (amountOfFavoriteBeers / 5); i++) {
        pages[i] = i + 1;
    };

    const renderedBeers = [];
    const onRemoveFavoriteClick = useCallback(() => {
        setIsPaginationVisible(amountOfFavoriteBeers > 6);
        console.log(Math.floor(((amountOfFavoriteBeers)/ 6)));
        setPageShown(Math.floor(((amountOfFavoriteBeers - 2)/ 5)));
        setAmountOfFavoriteBeers(prev => prev - 1);
    });

    for (const i = 0, j = 0; j < amountOfFavoriteBeers; i+=5, j++) {
        renderedBeers[j] = Array.from(favoriteBeers.slice(i, i + 5).map((favoriteBeer) => {
            return (
                <FavoriteBeerItem 
                    favoriteBeer={favoriteBeer} 
                    key={favoriteBeer.id}
                    onRemoveFavoriteClick={onRemoveFavoriteClick}
                />
            )
        }));
    };

    const onPaginationClick = (event) => {
        const paginationValue = event.target.className.split(' ');
        if (paginationValue[0] != 'pagination__button') {
            const direction = paginationValue[paginationValue.length - 1].split('-');
            
            if (direction.includes('right') && pageShown < pages.length - 1) {
                setPageShown(prevPage => prevPage + 1);
            } else if (direction.includes('left') && pageShown > 0) {
                setPageShown(prevPage => prevPage - 1);
            }

        } else {
            setPageShown(event.target.innerHTML - 1);
        }
    };
 
    return (
        <div className={'favorite-beers-list__container'}>
            <div className={'favorite-beers-list'}>
                {renderedBeers[pageShown]}
                <Pagination 
                    pages={pages} 
                    isVisible={isPaginationVisible} 
                    onClick={onPaginationClick}/>
            </div>
        </div>
    );
};