import React from 'react';
import Menu from '../Menu/menu';
import Filter from '../Filter/filter';
import SearchBox from '../SearchBox/searchBox';
import BeerList from '../BeersList/beersList';
import InfiniteScroll from '../InfiniteScroll/infiniteScroll';

function LandingPage() {
  return (
    <div>
      {/* <Menu /> */}
      <SearchBox/>
      <Filter/>
      <BeerList/>
      <InfiniteScroll/>
    </div>
  );
}

export default LandingPage;