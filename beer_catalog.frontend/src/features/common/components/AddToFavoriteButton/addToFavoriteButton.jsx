import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import setIsFavoriteBeer from 'features/common/store/beers/state/thunks/beerThunk';


function AddToFavoriteButton({
    beer,
    buttonClassName,
    buttonLabel
}) {
    const dispatch = useDispatch();
    const favoriteButton = beer.isFavorite ? 'Remove Favorite' : buttonLabel;

    const handleFavoriteButton = useCallback(() => {
        dispatch(setIsFavoriteBeer(beer));
    }, [beer, dispatch]);

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
