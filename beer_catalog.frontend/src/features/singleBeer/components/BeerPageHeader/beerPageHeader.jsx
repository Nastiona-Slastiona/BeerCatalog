import React from 'react';

import Label from 'components/base/Label/label';

import './beerPageHeader.scss';


export default function BeerPageHeader({ beer }) {
    return (
        <div className="beer-page__header">
            <Label className="beer-page__header--title">{beer.name}</Label>
            <Label className="beer-page__header--tagline">{beer.tagline}</Label>
        </div>
    );
}
