import React from 'react';

import FavoriteHeader from 'Components/FavoriteHeader/favoriteHeader.jsx';
import FavoriteBeersList from 'Components/FavoriteBeersList/favoriteBeersList.jsx';


export default function FavoritesPage() {
    return (
        <div className={'favorites-page'}>
            <FavoriteHeader/>
            <FavoriteBeersList/>
        </div>
    );
};