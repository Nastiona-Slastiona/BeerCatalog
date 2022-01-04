/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'components/base/InfiniteScroll/infiniteScroll';
import List from 'components/base/List/list';
import SearchBox from 'components/base/SearchBox/searchBox';
import BeerItem from 'features/beersList/components/BeerItem/beerItem';
import Filter from 'features/beersList/components/Filter/filter';
import FilterValues from 'models/filterValues';
import ThunkStatus from 'models/thunkStatus';
import { fetchBeers } from 'store/beers/state/thunks/thunks';

import './landingPage.css';


export default function LandingPage() {
    const dispatch = useDispatch();
    const beers = useSelector(state => state.beers.beers);
    const status = useSelector(state => state.beers.status);
    const currentPage = useSelector(state => state.beers.currentPage);
    const [page, setPage] = useState(currentPage + 1);

    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [isScrollVisible, setIsScrollVisible] = useState(status === ThunkStatus.Loading);
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
        if (fetching) {
            dispatch(fetchBeers(page));
            setFetching(false);
            setPage(page + 1);
            setIsFilterVisible(false);
            setIsScrollVisible(status === ThunkStatus.Loading);
        }
    }, [fetching, dispatch, setFetching, page, status]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return () => {
            document.removeEventListener('scroll', scrollHandler);
        };
    });

    const scrollHandler = e => {
        const targetWindowState = e.target.documentElement;
        if (targetWindowState.scrollHeight - (targetWindowState.scrollTop + window.innerHeight) < 50) {
            setFetching(true);
        }
    };

    const onInputChange = e => {
        setFilter({
            searchQuery: e.target.value,
            filters: {
                abv: '4.6',
                ibu: '50',
                ebc: '60'
            }
        });

        setIsFilterVisible(true);
        setIsScrollVisible(false);

        if (e.target.value === '') {
            setIsFilterVisible(false);
            setFilter({
                searchQuery: '',
                filters: {
                    abv: '0',
                    ibu: '0',
                    ebc: '0'
                }
            });
        }
    };

    const searchedBeers = useMemo(() => {
        return beers.filter(beer => beer
            .name
            .toLowerCase()
            .includes(filter.searchQuery.toLowerCase()));
    }, [filter.searchQuery, beers]);

    const onFilterChange = event => {
        setFilter({
            ...filter,
            filters: {
                ...filter.filters,
                [event.target.name]: event.target.value
            }
        });
    };

    const filtredBeers = useMemo(() => {
        return searchedBeers.filter(beer => beer[FilterValues.Volume] >= filter.filters[FilterValues.Volume]
            && beer[FilterValues.Units] >= filter.filters[FilterValues.Units]
            && beer[FilterValues.Color] >= filter.filters[FilterValues.Color]);
    }, [filter.filters, searchedBeers]);

    if (!filtredBeers.length) {
        return (
            <div className="landing-page">
                <SearchBox onInputChange={onInputChange} />
                <Filter isVisible={isFilterVisible} onChange={onFilterChange} />
                <h2>There is nothing</h2>
            </div>
        );
    }

    const renderedRows = filtredBeers.map(beer => <BeerItem key={beer.id} beer={beer} />);

    return (
        <div className="landing-page">
            <SearchBox onInputChange={onInputChange} />
            <Filter isVisible={isFilterVisible} onChange={onFilterChange} />
            <List
                renderedItems={renderedRows}
                containerClassName="landing-page__list-container"
                listClassName="landing-page__list"
            />
            <InfiniteScroll isVisible={isScrollVisible} />
        </div>
    );
}
