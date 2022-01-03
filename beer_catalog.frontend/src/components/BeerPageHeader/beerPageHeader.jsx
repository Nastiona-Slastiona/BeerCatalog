/* eslint-disable import/no-unresolved */
import React from 'react';
import BeerItemTagline from 'components/BeerItemTagline/beerItemTagline';
import BeerItemTitle from 'components/BeerItemTitle/beerItemTitle';

import './beerPageHeader.css';


export default function BeerPageHeader({ beer }) {
    return (
        <div className="beer-page__header">
            <BeerItemTitle>{beer.name}</BeerItemTitle>
            <BeerItemTagline className="beer-page__header-tagline">{beer.tagline}</BeerItemTagline>
        </div>
    );
}
