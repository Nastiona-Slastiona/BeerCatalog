import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

import setIsFavoriteBeer from 'features/common/store/beers/state/thunks/thunks';


function BeerButtonFavorite({
    beer,
    className,
    buttonName,
    onFavoriteClick = () => undefined
}) {
    const dispatch = useDispatch();
    const favoriteButton = beer.isFavorite ? 'Remove Favorite' : buttonName;

    const handleFavoriteButton = () => {
        dispatch(setIsFavoriteBeer(beer));
        onFavoriteClick();
    };

    return (
        <button className={className} onClick={handleFavoriteButton}>{favoriteButton}</button>
    );
}

BeerButtonFavorite.propTypes = {
    beer: PropTypes.object,
    onFavoriteClick: PropTypes.func,
    className: PropTypes.string
};

export default BeerButtonFavorite;
