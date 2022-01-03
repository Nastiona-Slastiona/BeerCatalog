/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from 'components/base/Pagination/pagination';
import FavoriteBeersList from 'components/FavoriteBeersList/favoriteBeersList';

import './favoritesPage.css';


export default function FavoritesPage() {
    const favoriteBeers = useSelector(state => state.beers.beers.filter(
        beer => beer.isFavorite
    ));
    const amountOfFavoriteBeers = favoriteBeers.length;
    const [pageShown, setPageShown] = useState(0);

    if (!amountOfFavoriteBeers) {
        return (
            <h2>There is nothing</h2>
        );
    }

    const onRemoveFavoriteClick = () => {
        setPageShown(Math.floor(((amountOfFavoriteBeers - 2) / 5)));
    };

    return (
        <div className="favorites-page">
            <div className="favorites-page__header">Your Favorite beers</div>
            <FavoriteBeersList
                pageShown={pageShown}
                favoriteBeers={favoriteBeers}
                amountOfFavoriteBeers={amountOfFavoriteBeers}
                onRemoveFavoriteClick={onRemoveFavoriteClick}
            />
            <Pagination
                beers={favoriteBeers}
                setPage={setPageShown}
                pageShown={pageShown}
            />
        </div>
    );
}
