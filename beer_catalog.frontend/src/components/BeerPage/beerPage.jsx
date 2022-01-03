/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import BeerButtonFavorite from 'components/BeerButtonFavorite/beerButtonFavorite';
import BeerItemImage from 'components/BeerItemImage/beerItemImage';
import BeerPageHeader from 'components/BeerPageHeader/beerPageHeader';
import Brewing from 'components/Brewing/brewing';
import FoodPairing from 'components/FoodPairing/foodPairing';
import Ingredients from 'components/Ingredients/ingredients';
import Properties from 'components/Properties/properties';

import './beerPage.css';


export default function BeerPage() {
    // const location = useLocation();
    const beerId = 1;
    // +location.pathname.slice(10,);
    const beer = useSelector(state => state.beers.beers.filter(b => b.id === beerId))[0];

    return (
        <div className="beer-page__container">
            <div className="beer-page">
                <div className="beer-page__main">
                    <div className="beer-page__info">
                        <BeerPageHeader beer={beer} />
                        <BeerButtonFavorite className="beer-page__button" beer={beer} />
                        <div>{beer.description}</div>
                    </div>
                    <BeerItemImage image={beer.image_url} />
                </div>
                <div className="beer-page__characteristics">
                    <Properties beer={beer} />
                    <FoodPairing foodPairing={beer.food_pairing} />
                </div>
                <Brewing brewingDescription={beer.brewers_tips} />
                <Ingredients ingredients={beer.ingredients} />
            </div>
        </div>
    );
}
