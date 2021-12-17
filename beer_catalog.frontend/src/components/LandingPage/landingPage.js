import React from 'react';
import Filter from '../Filter/filter';
import SearchBox from '../SearchBox/searchBox';
import BeerList from '../BeersList/beersList';
import InfiniteScroll from '../InfiniteScroll/infiniteScroll';
import cl from "./landingPage.module.css";

function LandingPage() {
  return (
    <div className={cl.landingPage}>
      <SearchBox/>
      <Filter/>
      <BeerList/>
      <InfiniteScroll/>
    </div>
  );
}

export default LandingPage;