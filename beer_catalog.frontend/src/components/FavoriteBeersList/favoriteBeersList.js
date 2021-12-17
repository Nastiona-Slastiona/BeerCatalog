import React from 'react';
import FavoriteBeerItem from '../FavoriteBeerItem/favoriteBeerItem';
import cl from './favoriteBeersList.module.css';
import CustomPagination from '../CustomPagination/customPagination';

function FavoriteBeersList() {
    return (
        <div className={cl.favoriteBeersListContainer}>
            <div className={cl.favoriteBeersList}>
                <FavoriteBeerItem/>
                <FavoriteBeerItem/>
                <FavoriteBeerItem/>
                <FavoriteBeerItem/>
                <FavoriteBeerItem/>
                <CustomPagination/>
            </div>
        </div>
    );
}

export default FavoriteBeersList;