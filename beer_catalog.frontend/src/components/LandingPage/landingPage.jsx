import React from 'react';

import Filter from 'Components/Filter/filter.jsx';
import SearchBox from 'Components/base/SearchBox/searchBox.jsx';
import BeersList from 'Components/BeersList/beersList.jsx';
import InfiniteScroll from 'Components/base/InfiniteScroll/infiniteScroll.jsx';

import "./landingPage.css";


export default function LandingPage() {
    return (
        <div className={'landing-page'}>
            <SearchBox/>
            <Filter/>
            <BeersList/>
            <InfiniteScroll/>
        </div>
    );
};