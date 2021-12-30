import React from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'react-router-dom';

import BeerButtonFavorite from 'components/BeerButtonFavorite/beerButtonFavorite';

import './beerItemButtons.css';


function BeerItemButtons({beer, onFavoriteClick}) {
   
    return (
        <div className={'beer-item__buttons'}>
            <Link className={'beer-item__button'} to={`/beers/id=${beer.id}`}>Open</Link>
            <BeerButtonFavorite className={'beer-item__button'} onFavoriteClick={onFavoriteClick}/>
        </div>    
    );
};

BeerItemButtons.propTypes = {
    beer: PropTypes.object
}

export default BeerItemButtons;