/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import FavoriteBeerItem from 'components/FavoriteBeerItem/favoriteBeerItem';
import PropTypes from 'prop-types';

import './favoriteBeersList.css';


function FavoriteBeersList({
    pageShown,
    favoriteBeers,
    amountOfFavoriteBeers,
    onRemoveFavoriteClick
}) {
    const renderedBeers = [];

    for (let i = 0, j = 0; j < amountOfFavoriteBeers; i += 5, j++) {
        renderedBeers[j] = Array.from(favoriteBeers.slice(i, i + 5).map(favoriteBeer => {
            return (
                <FavoriteBeerItem
                    key={favoriteBeer.id}
                    favoriteBeer={favoriteBeer}
                    onRemoveFavoriteClick={onRemoveFavoriteClick}
                />
            );
        }));
    }

    return (
        <div className="favorite-beers-list__container">
            <div className="favorite-beers-list">
                {renderedBeers[pageShown]}
            </div>
        </div>
    );
}

FavoriteBeersList.propTypes = {
    pageShown: PropTypes.number.isRequired,
    favoriteBeers: PropTypes.array.isRequired,
    amountOfFavoriteBeers: PropTypes.number,
    onRemoveFavoriteClick: PropTypes.func
};

export default FavoriteBeersList;
