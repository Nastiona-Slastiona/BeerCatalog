import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import AddToFavoriteButton from 'features/common/components/AddToFavoriteButton/addToFavoriteButton';
import BeerItemImage from 'features/common/components/BeerItemImage/beerItemImage';
import BeerPageHeader from 'features/singleBeer/components/BeerPageHeader/beerPageHeader';
import BrewingSection from 'features/singleBeer/components/BrewingSection/brewingSection';
import FoodPairingSection from 'features/singleBeer/components/FoodPairingSection/foodPairingSection';
import IngredientsSection from 'features/singleBeer/components/IngredientsSection/ingredientsSection';
import LoadingIndicator from 'components/base/LoadingIndicator/loadingIndicator';
import MethodSection from 'features/singleBeer/components/MethodSection/methodSection';
import PropertiesSection from 'features/singleBeer/components/PropertiesSection/propertiesSection';
import fetchOneBeer from 'features/common/store/beers/state/thunks/fetchBeerThunk';

import './beerPage.scss';


export default function BeerPage() {
    const location = useLocation();
    const beerId = +location.pathname.slice(10);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOneBeer(beerId));
    }, [beerId, dispatch]);

    const beer = useSelector(state => state.beers.selectedBeer);
    if (beer.id !== beerId) {
        return (
            <LoadingIndicator />
        );
    }

    return (
        <section className="beer-page__container">
            <div className="beer-page">
                <article className="beer-page__main">
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
                </article>
                <article className="beer-page__characteristics">
                    <PropertiesSection beer={beer} />
                    <FoodPairingSection foodPairing={beer.food_pairing} />
                </article>
                <BrewingSection brewingDescription={beer.brewers_tips} />
                <article className="beer-page__preparation-section">
                    <IngredientsSection beer={beer.ingredients} />
                    <MethodSection methods={beer.method} />
                </article>
            </div>
        </section>
    );
}
