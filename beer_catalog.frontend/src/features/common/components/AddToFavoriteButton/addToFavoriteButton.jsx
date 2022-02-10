import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import setIsFavoriteBeer from 'features/common/store/beers/state/thunks/beerThunk';
import setUserFavoriteBeers from 'features/common/store/users/state/thunks/usersThunk';


function AddToFavoriteButton({
    beer,
    buttonClassName,
    buttonLabel
}) {
    const dispatch = useDispatch();
    const authorized = useSelector(state => state.users.authorized);
    const email = useSelector(state => state.users.email);
    const favoriteBeers = useSelector(state => state.users.favoriteBeers);
    const favoriteButton = beer.id in favoriteBeers ? 'Remove Favorite' : buttonLabel;

    const handleFavoriteButton = useCallback(() => {
        if (authorized) {
            dispatch(setIsFavoriteBeer(beer));
            dispatch(setUserFavoriteBeers({ email, favoriteBeers }));
            console.log('here');
        } else {
            console.log('Unauthorized user');
        }
    }, [authorized, beer, dispatch, email, favoriteBeers]);

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
