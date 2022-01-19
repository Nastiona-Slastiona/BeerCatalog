import React from 'react';

import './beerPageHeader.scss';


export default function BeerPageHeader({ beer }) {
    return (
        <div className="beer-page__header">
            <span className="beer-page__header--title">{beer.name}</span>
            <span className="beer-page__header--tagline">{beer.tagline}</span>
        </div>
    );
}
