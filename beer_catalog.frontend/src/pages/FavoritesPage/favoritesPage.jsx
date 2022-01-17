import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import FavoriteBeerItem from 'features/favoritesBeers/components/FavoriteBeerItem/favoriteBeerItem';
import List from 'components/base/List/list';
import Pagination from 'components/base/Pagination/pagination';

import './favoritesPage.scss';


export default function FavoritesPage() {
    const favoriteBeers = useSelector(state => state.beers.beersList.filter(
        beer => beer.isFavorite
    ));
    const amountOfFavoriteBeers = favoriteBeers.length;
    const [pageShown, setPageShown] = useState(0);

    const onRemoveFavoriteClick = useCallback(() => {
        setPageShown(Math.floor(((amountOfFavoriteBeers - 2) / 5)));
    }, [amountOfFavoriteBeers]);

    if (!amountOfFavoriteBeers) {
        return (
            <h2>You have no favorite beers yet</h2>
        );
    }

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
        <div>
            <h2>Your Favorite beers</h2>
            <List
                renderedItems={renderedBeers[pageShown]}
                containerClassName="favorites-page__container"
                listClassName="favorites-page"
            />
            <Pagination
                beers={favoriteBeers}
                setPage={setPageShown}
                pageShown={pageShown}
            />
        </div>
    );
}
