import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import BeerItem from 'features/common/components/BeerItem/beerItem';
import Pagination from 'components/base/Pagination/pagination';

import './favoritesPage.scss';


const ENTITIES_ON_PAGE = 5;

export default function FavoritesPage() {
    const favoriteBeers = useSelector(state => state.beers.beersList.filter(
        beer => beer.isFavorite
    ));
    const amountOfFavoriteBeers = favoriteBeers.length;
    const [pageShown, setPageShown] = useState(0);

    const onRemoveFavoriteClick = useCallback(() => {
        setPageShown(Math.floor(((amountOfFavoriteBeers - 2) / ENTITIES_ON_PAGE)));
    }, [amountOfFavoriteBeers]);

    if (!amountOfFavoriteBeers) {
        return (
            <h1>You have no favorite beers yet</h1>
        );
    }

    const renderedBeers = [];

    for (let i = 0; i < amountOfFavoriteBeers; i += ENTITIES_ON_PAGE) {
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
            <h2>Your Favorite beers</h2>
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
