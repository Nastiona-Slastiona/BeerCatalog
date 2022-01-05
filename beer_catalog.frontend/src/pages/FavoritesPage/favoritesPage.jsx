import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import FavoriteBeerItem from 'features/favoritesBeers/components/FavoriteBeerItem/favoriteBeerItem';
import List from 'components/base/List/list';
import Pagination from 'components/base/Pagination/pagination';

import './favoritesPage.scss';


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
    // useCallback() error

    const renderedBeers = [];

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

    return (
        <div className="favorites-page">
            <div className="favorites-page__header">Your Favorite beers</div>
            <List
                renderedItems={renderedBeers[pageShown]}
                containerClassName="favorites-page__list-container"
                listClassName="favorites-page__list"
            />
            <Pagination
                beers={favoriteBeers}
                setPage={setPageShown}
                pageShown={pageShown}
            />
        </div>
    );
}
