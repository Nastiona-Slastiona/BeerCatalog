/* eslint-disable import/no-unresolved */
import React from 'react';
import FavoriteBeersList from 'components/FavoriteBeersList/favoriteBeersList';

import './favoritesPage.css';


export default function FavoritesPage() {
    return (
        <div className="favorites-page">
            <div className="favorites-page__header">Your Favorite beers</div>
            <FavoriteBeersList />
        </div>
    );
}
