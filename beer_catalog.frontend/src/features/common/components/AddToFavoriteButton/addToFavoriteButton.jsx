import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import setIsFavoriteBeer from 'features/common/store/beers/state/thunks/beerThunk';


function AddToFavoriteButton({
    beer,
    buttonClassName,
    buttonLabel
}) {
    const dispatch = useDispatch();
    const authorized = useSelector(state => state.users.isAuthorized);
    const favoriteBeers = useSelector(state => state.beers.favoritesBeersIds);
    const favoriteButton = favoriteBeers.includes(beer.id) ? 'Remove Favorite' : buttonLabel;

    const handleFavoriteButton = useCallback(() => {
        if (authorized) {
            dispatch(setIsFavoriteBeer(beer));
        } else {
            console.log('Unauthorized user');
        }
    }, [authorized, beer, dispatch]);


    return (
        <button className={buttonClassName} onClick={handleFavoriteButton}>
            {favoriteButton}
        </button>
    );
}

AddToFavoriteButton.propTypes = {
    beer: PropTypes.object,
    buttonLabel: PropTypes.string,
    buttonClassName: PropTypes.string
};

export default AddToFavoriteButton;
