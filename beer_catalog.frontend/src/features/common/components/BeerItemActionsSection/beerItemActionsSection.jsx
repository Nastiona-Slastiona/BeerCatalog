import PropTypes from 'prop-types';
import React from 'react';

import AddToFavoriteButton from 'features/common/components/AddToFavoriteButton/addToFavoriteButton';
import { Link } from 'react-router-dom';

import './beerItemActionsSection.scss';


function BeerItemActionsSection({ beer, onFavoriteClick }) {
    return (
        <div className="beer-item-actions-section__container">
            <Link className="beer-item-actions-section" to={`/beers/${beer.id}`}>Open</Link>
            <AddToFavoriteButton
                className="beer-item-actions-section"
                beer={beer}
                buttonLabel="Favorite"
                onFavoriteClick={onFavoriteClick}
            />
        </div>
    );
}

BeerItemActionsSection.propTypes = {
    beer: PropTypes.object
};

export default BeerItemActionsSection;
