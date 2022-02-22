import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BeerItem from 'features/common/components/BeerItem/beerItem';
import Pagination from 'components/base/Pagination/pagination';
import fetchOneBeer from 'features/common/store/beers/state/thunks/fetchBeerThunk';

import './favoritesPage.scss';


export default function FavoritesPage() {
    const favoriteBeersIds = useSelector(state => state.beers.favoritesBeersIds);
    const dispatch = useDispatch();
    // const favorites = useSelector(state => state.beers.favoriteBeers);
    // const [fetching, setFetching] = useState(favorites.length < favoriteBeersIds.length);
    useEffect(() => {
        favoriteBeersIds.forEach(beerId => {
            // if (fetching) {
            dispatch(fetchOneBeer(beerId));
            // }

            // setFetching(false);
        });
    }, [favoriteBeersIds, dispatch]);

    const favoriteBeers = useSelector(state => state.beers.favoriteBeers);

    const beersListLength = favoriteBeers.length;

    if (!beersListLength) {
        return (
            <h2 className="favorites-page__header">You have no favorite beers yet</h2>
        );
    }

    const renderedBeers = favoriteBeers.map(favoriteBeer => {
        return (
            <BeerItem
                key={favoriteBeer.id}
                beer={favoriteBeer}
                itemClassName="favorite-page__beer-item"
                isSimpleBeerMode={false}
            />
        );
    });

    return (
        <section>
            <h2 className="favorites-page__header">Your Favorite beers</h2>
            <article className="favorites-page__container">
                <div className="favorites-page">
                    <Pagination list={renderedBeers} />
                </div>
            </article>
        </section>
    );
}
