/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from 'components/base/Pagination/pagination';
import FavoriteBeerItem from 'components/FavoriteBeerItem/favoriteBeerItem';

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
    }

    const pages = [];

    pages.forEach(page => page + 1);

    const renderedBeers = [];
    const onRemoveFavoriteClick = useCallback(() => {
        setIsPaginationVisible(amountOfFavoriteBeers > 6);
        setPageShown(Math.floor(((amountOfFavoriteBeers - 2) / 5)));
        setAmountOfFavoriteBeers(prev => prev - 1);
    }, [amountOfFavoriteBeers]);


    // renderedBeers.forEach(renderedBeer => Array.from())

    for (let i = 0, j = 0; j < amountOfFavoriteBeers; i += 5, j++) {
        renderedBeers[j] = Array.from(favoriteBeers.slice(i, i + 5).map(favoriteBeer => {
            return (
                <FavoriteBeerItem
                    key={favoriteBeer.id}
                    favoriteBeer={favoriteBeer}
                    onRemoveFavoriteClick={onRemoveFavoriteClick}
                />
            );
        }));
    }

    const onPaginationClick = event => {
        const paginationValue = event.target.className.split(' ');
        if (paginationValue[0] !== 'pagination__button') {
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
        <div className="favorite-beers-list__container">
            <div className="favorite-beers-list">
                {renderedBeers[pageShown]}
                <Pagination
                    pages={pages}
                    isVisible={isPaginationVisible}
                    onClick={onPaginationClick}
                />
            </div>
        </div>
    );
}
