import React from 'react';
import PropTypes from 'prop-types';

import BeerItemButtons from 'Components/BeerItemButtons/beerItemButtons.jsx';
import BeerItemTagline from 'Components/BeerItemTagline/beerItemTagline.jsx';
import BeerItemTitle from 'Components/BeerItemTitle/beerItemTitle.jsx';

import './favoriteBeerItemInfo.css';


function FavoriteBeerItemInfo({favoriteBeer, onRemoveFavoriteClick}) {
    return (
        <div className={'favorite-beer__item-info-container'}>
            <BeerItemTitle>{favoriteBeer.name}</BeerItemTitle>
            <BeerItemTagline>{favoriteBeer.tagline}</BeerItemTagline>
            <div className={'favorite-beer__item-info-description'}>{favoriteBeer.description}</div>    
            <BeerItemButtons beer={favoriteBeer} onFavoriteClick={onRemoveFavoriteClick}/>  
        </div>
    );
};

FavoriteBeerItemInfo.propTypes = {
    favoriteBeer: PropTypes.object,
    onRemoveFavoriteClick: PropTypes.func
  }
  
  export default  FavoriteBeerItemInfo;