import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import ButtonFavorite from 'features/common/components/ButtonFavorite/buttonFavorite';

import './beerItemButtons.css';


function BeerItemButtons({ beer, onFavoriteClick }) {
    return (
        <div className="beer-item__buttons">
            <Link className="beer-item__button" to={`/beers/id=${beer.id}`}>Open</Link>
            <ButtonFavorite
                className="beer-item__button"
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
