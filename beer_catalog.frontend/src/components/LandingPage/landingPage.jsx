import React, {useCallback, useMemo, useState } from 'react';
import { useSelector } from "react-redux";

import Filter from 'Components/Filter/filter.jsx';
import SearchBox from 'Components/base/SearchBox/searchBox.jsx';
import BeersList from 'Components/BeersList/beersList.jsx';
import InfiniteScroll from 'Components/base/InfiniteScroll/infiniteScroll.jsx';
import { FilterValues } from 'Models/FilterValues/filterValues.jsx';

import "./landingPage.css";


export default function LandingPage() {
    const beers = useSelector(state => state.beers.beers);
    const [filter, setFilter] = useState({ 
        searchQuery: '', 
        filters: {
            'abv': '4.6',
            'ibu': '50',
            'ebc': '60'
        }
    });
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const onInputChange = useCallback((e) => { 
        setFilter({searchQuery: e.target.value, ...filter});
        setIsFilterVisible(true);

        if (e.target.value === '') {
            setIsFilterVisible(false);
        }
    });

    const searchedBeers = useMemo(() => {
        return beers.filter(beer => beer
            .name
            .toLowerCase()
            .includes(filter.searchQuery.toLowerCase()));
    },[filter.searchQuery, beers]);

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
    },[filter.filters, searchedBeers]);

    return (
        <div className={'landing-page'}>
            <SearchBox onInputChange={onInputChange}/>
            <Filter isVisible={isFilterVisible} onChange={onFilterChange}/>
            <BeersList beers={filtredBeers}/>
            <InfiniteScroll/>
        </div>
    );
};