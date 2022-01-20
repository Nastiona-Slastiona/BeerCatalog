import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AddToFavoriteButton from 'features/common/components/AddToFavoriteButton/addToFavoriteButton';
import BeerItemImage from 'features/common/components/BeerItemImage/beerItemImage';
import BeerPageHeader from 'features/singleBeer/components/BeerPageHeader/beerPageHeader';
import BrewingSection from 'features/singleBeer/components/BrewingSection/brewingSection';
import FoodPairingSection from 'features/singleBeer/components/FoodPairingSection/foodPairingSection';
import IngredientsSection from 'features/singleBeer/components/IngredientsSection/ingredientsSection';
import MethodSection from 'features/singleBeer/components/MethodSection/methodSection';
import PropertiesSection from 'features/singleBeer/components/PropertiesSection/propertiesSection';

import './beerPage.scss';


export default function BeerPage() {
    const location = useLocation();
    const beerId = +location.pathname.slice(10);
    const beer = useSelector(state => state.beers.beersList.filter(b => b.id === beerId))[0];

    return (
        <div className="beer-page__container">
            <div className="beer-page">
                <section className="beer-page__main">
                    <div className="beer-page__info">
                        <BeerPageHeader beer={beer} />
                        <AddToFavoriteButton
                            className="beer-page__button"
                            beer={beer}
                            buttonLabel="Add to Favorite"
                        />
                        <div>{beer.description}</div>
                    </div>
                    <BeerItemImage imageUrl={beer.image_url} />
                </section>
                <section className="beer-page__characteristics">
                    <PropertiesSection beer={beer} />
                    <FoodPairingSection foodPairing={beer.food_pairing} />
                </section>
                <BrewingSection brewingDescription={beer.brewers_tips} />
                <section className="beer-page__preparation-section">
                    <IngredientsSection beer={beer} />
                    <MethodSection beer={beer} />
                </section>
            </div>
        </div>
    );
}
