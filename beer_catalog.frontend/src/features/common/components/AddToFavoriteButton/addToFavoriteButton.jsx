import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

import setIsFavoriteBeer from 'features/common/store/beers/state/thunks/beerThunk';


function AddToFavoriteButton({
    beer,
    className,
    buttonLabel,
    onFavoriteClick = () => undefined
}) {
    const dispatch = useDispatch();
    const favoriteButton = beer.isFavorite ? 'Remove Favorite' : buttonLabel;

    const handleFavoriteButton = () => {
        dispatch(setIsFavoriteBeer(beer));
        onFavoriteClick();
    };

    return (
        <button className={className} onClick={handleFavoriteButton}>{favoriteButton}</button>
    );
}

AddToFavoriteButton.propTypes = {
    beer: PropTypes.object,
    buttonLabel: PropTypes.string,
    onFavoriteClick: PropTypes.func,
    className: PropTypes.string
};

export default AddToFavoriteButton;
