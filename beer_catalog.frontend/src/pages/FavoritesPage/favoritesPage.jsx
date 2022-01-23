import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BeerItem from 'features/common/components/BeerItem/beerItem';
import Pagination from 'components/base/Pagination/pagination';
import fetchOneBeer from 'features/common/store/beers/state/thunks/fetchBeerThunk';

import './favoritesPage.scss';


const ENTITIES_ON_PAGE = 5;

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

    let beersListLength = favoriteBeers.length;
    const [pageShown, setPageShown] = useState(0);

    const onRemoveFavoriteClick = useCallback(() => {
        beersListLength--; // because length is old
        const pageNumber = Math.floor(((beersListLength) / ENTITIES_ON_PAGE));
        const page = beersListLength % ENTITIES_ON_PAGE === 0 ? pageNumber - 1 : pageNumber;
        setPageShown(page);
    }, [beersListLength]);

    if (!beersListLength) {
        return (
            <h2 className="favorites-page__header">You have no favorite beers yet</h2>
        );
    }

    const renderedBeers = [];

    for (let i = 0; i < beersListLength; i += ENTITIES_ON_PAGE) {
        renderedBeers.push(Array.from(favoriteBeers.slice(i, i + ENTITIES_ON_PAGE).map(favoriteBeer => {
            return (
                <BeerItem
                    key={favoriteBeer.id}
                    beer={favoriteBeer}
                    itemClassName="favorite-page__beer-item"
                    isSimpleBeerMode={false}
                    onRemoveFavoriteClick={onRemoveFavoriteClick}
                />
            );
        })));
    }

    return (
        <section>
            <h2 className="favorites-page__header">Your Favorite beers</h2>
            <article className="favorites-page__container">
                <div className="favorites-page">
                    {renderedBeers[pageShown]}
                </div>
            </article>
            <Pagination
                list={favoriteBeers}
                setPage={setPageShown}
                pageShown={pageShown}
            />
        </section>
    );
}
