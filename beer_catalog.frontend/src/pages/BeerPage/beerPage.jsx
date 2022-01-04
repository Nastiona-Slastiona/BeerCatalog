/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import BeerItemImage from 'features/common/components/BeerItemImage/beerItemImage';
import ButtonFavorite from 'features/common/components/ButtonFavorite/buttonFavorite';
import BeerPageHeader from 'features/singleBeer/components/BeerPageHeader/beerPageHeader';
import Brewing from 'features/singleBeer/components/Brewing/brewing';
import FoodPairing from 'features/singleBeer/components/FoodPairing/foodPairing';
import Ingredients from 'features/singleBeer/components/Ingredients/ingredients';
import Method from 'features/singleBeer/components/Method/method';
import Properties from 'features/singleBeer/components/Properties/properties';

import './beerPage.css';


export default function BeerPage() {
    const location = useLocation();
    const beerId = +location.pathname.slice(10);
    const beer = useSelector(state => state.beers.beers.filter(b => b.id === beerId))[0];

    return (
        <div className="beer-page__container">
            <div className="beer-page">
                <div className="beer-page__main">
                    <div className="beer-page__info">
                        <BeerPageHeader beer={beer} />
                        <ButtonFavorite
                            className="beer-page__button"
                            beer={beer}
                            buttonName="Add to Favorite"
                        />
                        <div>{beer.description}</div>
                    </div>
                    <BeerItemImage image={beer.image_url} />
                </div>
                <div className="beer-page__characteristics">
                    <Properties beer={beer} />
                    <FoodPairing foodPairing={beer.food_pairing} />
                </div>
                <Brewing brewingDescription={beer.brewers_tips} />
                <div className="beer-page__preparation-section">
                    <Ingredients beer={beer} />
                    <Method beer={beer} />
                </div>
            </div>
        </div>
    );
}
