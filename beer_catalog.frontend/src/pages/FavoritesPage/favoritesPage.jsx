import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BeerItem from 'features/common/components/BeerItem/beerItem';
import List from 'components/base/List/list';
import Pagination from 'components/base/Pagination/pagination';
import fetchOneBeer from 'features/favoritesBeers/store/beers/state/thunks/thunks';

import './favoritesPage.scss';


export default function FavoritesPage() {
    const favoriteBeersIds = useSelector(state => state.beers.favoritesBeersIds);
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.beers.favoriteBeers);
    const [fetching, setFetching] = useState(favorites.length < favoriteBeersIds.length);
    useEffect(() => {
        favoriteBeersIds.forEach(beerId => {
            if (fetching) {
                dispatch(fetchOneBeer(beerId));
            }

            setFetching(false);
        });
    }, [favoriteBeersIds, dispatch, fetching]);

    const favoriteBeers = useSelector(state => state.beers.favoriteBeers);

    const amountOfFavoriteBeers = favoriteBeers.length;
    const [pageShown, setPageShown] = useState(0);

    const onRemoveFavoriteClick = useCallback(() => {
        setPageShown(Math.floor(((amountOfFavoriteBeers - 2) / 5)));
    }, [amountOfFavoriteBeers]);

    if (!amountOfFavoriteBeers) {
        return (
            <h2 className="favorites-page__header">You have no favorite beers yet</h2>
        );
    }

    const renderedBeers = [];
    for (let i = 0, j = 0; j < amountOfFavoriteBeers; i += 5, j++) {
        renderedBeers[j] = favoriteBeers.slice(i, i + 5).map(favoriteBeer => {
            return (
                <BeerItem
                    key={favoriteBeer.id}
                    beer={favoriteBeer}
                    itemClassName="favorite-page__beer-item"
                    isSimpleBeerMode={false}
                    onRemoveFavoriteClick={onRemoveFavoriteClick}
                />
            );
        });
    }

    return (
        <div>
            <h2 className="favorites-page__header">Your Favorite beers</h2>
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
