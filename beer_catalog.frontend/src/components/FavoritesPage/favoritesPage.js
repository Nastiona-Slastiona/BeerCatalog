import React from 'react';
import FavoriteHeader from '../FavoriteHeader/favoriteHeader';
import FavoriteBeersList from '../FavoriteBeersList/favoriteBeersList';
import cl from "./favoritesPage.module.css";


function FavoritesPage() {
  return (
    <div className={cl.favoritesPage}>
        <FavoriteHeader/>
        <FavoriteBeersList/>
    </div>
  );
}

export default FavoritesPage;