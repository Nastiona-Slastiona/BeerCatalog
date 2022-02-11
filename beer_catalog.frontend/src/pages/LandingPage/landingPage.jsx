import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BeerItem from 'features/common/components/BeerItem/beerItem';
import Filter from 'features/beersList/components/Filter/filter';
import LoadingIndicator from 'components/base/LoadingIndicator/loadingIndicator';
import SearchBox from 'components/base/SearchBox/searchBox';
import ThunkStatus from 'features/common/models/thunkStatus';
import fetchBeers from 'features/beersList/store/beersThunk';
import setUserFavoriteBeers from 'features/common/store/users/state/thunks/usersThunk';

import './landingPage.scss';


export default function LandingPage() {
    const dispatch = useDispatch();
    const beers = useSelector(state => state.beers.beersList);
    const status = useSelector(state => state.beers.status);
    const email = useSelector(state => state.users.email);
    const authorized = useSelector(state => state.users.isAuthorized);
    const favoriteBeers = useSelector(state => state.beers.favoritesBeersIds);
    const currentPage = useSelector(state => state.beers.currentPage);
    const [page, setPage] = useState(currentPage + 1);

    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [isLoadingVisible, setIsLoadingVisible] = useState(status === ThunkStatus.Loading);
    const [fetching, setFetching] = useState(page === 1);
    const [filter, setFilter] = useState({
        searchQuery: '',
        filters: {
            abv: '0',
            ibu: '0',
            ebc: '0'
        }
    });

    useEffect(() => {
        if (authorized) {
            dispatch(setUserFavoriteBeers({ email, favoriteBeers }));
        }
    });

    useEffect(() => {
        if (fetching) {
            dispatch(fetchBeers(page));
            setFetching(false);
            setPage(page + 1);
            setIsFilterVisible(filter.searchQuery !== '');
        }
        setIsLoadingVisible(status === ThunkStatus.Loading);
    }, [fetching, dispatch, setFetching, page, status, filter]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return () => {
            document.removeEventListener('scroll', scrollHandler);
        };
    });

    const scrollHandler = useCallback(e => {
        const targetWindowState = e.target.documentElement;
        if (targetWindowState.scrollHeight - (targetWindowState.scrollTop + window.innerHeight) < 50) {
            setFetching(true);
        }
    }, []);

    const searchedBeers = useMemo(() => {
        return beers.filter(beer => beer
            .name
            .toLowerCase()
            .includes(filter.searchQuery.toLowerCase()));
    }, [filter.searchQuery, beers]);

    const onFilterChange = useCallback(event => {
        setFilter({
            ...filter,
            filters: {
                ...filter.filters,
                [event.target.name]: event.target.value
            }
        });
    }, [filter]);

    const filtredBeers = useMemo(() => {
        return searchedBeers.filter(beer => beer.abv >= filter.filters.abv
            && beer.ibu >= filter.filters.ibu
            && beer.ebc >= filter.filters.ebc);
    }, [filter.filters, searchedBeers]);

    const onInputChange = useCallback(e => {
        setFilter({
            ...filter,
            searchQuery: e.target.value
        });

        if (filtredBeers.length < 5) {
            setFetching(true);
        }

        setIsLoadingVisible(false);

        if (e.target.value === '') {
            setFilter({
                ...filter,
                searchQuery: ''
            });
            setFetching(false);
        }
        setIsFilterVisible(e.target.value !== '');
    }, [filter, filtredBeers.length]);

    const renderedBeers = filtredBeers.map(beer => <BeerItem key={beer.id} beer={beer} isSimpleBeerMode={true} />);

    return (
        <section>
            <SearchBox onInputChange={onInputChange} />
            <Filter isVisible={isFilterVisible} onChange={onFilterChange} />
            {
                filtredBeers.length
                    ? (
                        <article className="landing-page__container">
                            <div className="landing-page">
                                {renderedBeers}
                            </div>
                        </article>
                    ) : <h2>There is nothing to display</h2>
            }
            <LoadingIndicator isVisible={isLoadingVisible} />
        </section>
    );
}
