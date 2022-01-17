import PropTypes from 'prop-types';
import React from 'react';

import ButtonFavorite from 'features/common/components/ButtonFavorite/buttonFavorite';
import { Link } from 'react-router-dom';

import './beerItemActionsSection.scss';


function BeerItemActionsSection({ beer, onFavoriteClick }) {
    return (
        <div className="beer-item-actions-section__container">
            <Link className="beer-item-actions-section" to={`/beers/id=${beer.id}`}>Open</Link>
            <ButtonFavorite
                className="beer-item-actions-section"
                beer={beer}
                buttonName="Favorite"
                onFavoriteClick={onFavoriteClick}
            />
        </div>
    );
}

BeerItemActionsSection.propTypes = {
    beer: PropTypes.object
};

export default BeerItemActionsSection;
