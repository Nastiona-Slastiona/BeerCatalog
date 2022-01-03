/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import BeerItemButtons from 'components/BeerItemButtons/beerItemButtons';
import BeerItemTagline from 'components/BeerItemTagline/beerItemTagline';
import BeerItemTitle from 'components/BeerItemTitle/beerItemTitle';
import PropTypes from 'prop-types';

import './beerItemInfo.css';


function BeerItemInfo({ beer }) {
    return (
        <div className="beer-item-info__container ">
            <BeerItemTitle>{beer.name}</BeerItemTitle>
            <BeerItemTagline>{beer.tagline}</BeerItemTagline>
            <BeerItemButtons beer={beer} />
        </div>
    );
}

BeerItemInfo.propTypes = {
    beer: PropTypes.object.isRequired
};

export default BeerItemInfo;
