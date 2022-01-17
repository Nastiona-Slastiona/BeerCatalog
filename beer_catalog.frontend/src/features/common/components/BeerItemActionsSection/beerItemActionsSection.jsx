import PropTypes from 'prop-types';
import React from 'react';

import ButtonFavorite from 'features/common/components/ButtonFavorite/buttonFavorite';
import { Link } from 'react-router-dom';

import './beerItemActionsSection.scss';


function BeerItemButtons({ beer, onFavoriteClick }) {
    return (
        <div className="beer-item-buttons__container">
            <Link className="beer-item-buttons" to={`/beers/id=${beer.id}`}>Open</Link>
            <ButtonFavorite
                className="beer-item-buttons"
                beer={beer}
                buttonName="Favorite"
                onFavoriteClick={onFavoriteClick}
            />
        </div>
    );
}

BeerItemButtons.propTypes = {
    beer: PropTypes.object
};

export default BeerItemButtons;
