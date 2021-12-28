import React, { useEffect, useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import Filter from 'Components/Filter/filter.jsx';
import SearchBox from 'Components/base/SearchBox/searchBox.jsx';
import BeersList from 'Components/BeersList/beersList.jsx';
import InfiniteScroll from 'Components/base/InfiniteScroll/infiniteScroll.jsx';
import { FilterValues } from 'Models/FilterValues/filterValues.jsx';
import { fetchBeers } from 'Store/features/beers/beersSlice.jsx';
import { ThunkStatus } from 'Models/ThunkStatus/thunkStatus.jsx';


export default function LandingPage() {
    const dispatch = useDispatch();
    const beers = useSelector(state => state.beers.beers);
    const status = useSelector(state => state.beers.status);
    const page = useSelector(state => state.beers.currentPage);

    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [isScrollVisible, setIsScrollVisible] = useState(status === ThunkStatus.Loading);
    const [fetching, setFetching] = useState(true);
    const [currentPage, setCurrentPage] = useState(page);
    const [filter, setFilter] = useState({ 
        searchQuery: '', 
        filters: {
            'abv': '0',
            'ibu': '0',
            'ebc': '0'
        }
    });
   
    useEffect(() => {
        if (fetching) {
            dispatch(fetchBeers([`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=12`, currentPage]));
            setFetching(false);
            setCurrentPage(prevValue => prevValue + 1);
            setIsFilterVisible(false);
            setIsScrollVisible(status === ThunkStatus.Loading)
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function () {
            document.removeEventListener('scroll', scrollHandler) 
        };
    })

    const scrollHandler = (e) => {
        const targetWindowState = e.target.documentElement;
        if (targetWindowState.scrollHeight - (targetWindowState.scrollTop + window.innerHeight) < 50){
            setFetching(true);
        }
    };

    const onInputChange = (e) => { 
        setFilter({searchQuery: e.target.value, 
            filters: {
                'abv': '4.6',
                'ibu': '50',
                'ebc': '60'
            }
        });

        setIsFilterVisible(true);
        setIsScrollVisible(false);

        if (e.target.value === '') {
            setIsFilterVisible(false);
            setFilter({searchQuery: '', 
                filters: {
                    'abv': '0',
                    'ibu': '0',
                    'ebc': '0'
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

    const onFilterChange = (event) => {
        setFilter({
            ...filter,
            filters: {
                ...filter.filters,
                [event.target.name]: event.target.value,
            }
        })
    }

    const filtredBeers = useMemo(() => {
        return searchedBeers.filter(beer => 
            beer[FilterValues.Volume] >= filter.filters[FilterValues.Volume]
            &&  beer[FilterValues.Units] >= filter.filters[FilterValues.Units]
            && beer[FilterValues.Color] >= filter.filters[FilterValues.Color]
        )
    }, [filter.filters, searchedBeers]);

    return (
        <div className={'landing-page'}>
            <SearchBox onInputChange={onInputChange}/>
            <Filter isVisible={isFilterVisible} onChange={onFilterChange}/>
            <BeersList beers={filtredBeers}/>
            <InfiniteScroll isVisible={isScrollVisible}/>
        </div>
    );
};