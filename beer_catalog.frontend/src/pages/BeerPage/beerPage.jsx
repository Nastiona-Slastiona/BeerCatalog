import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import AddToFavoriteButton from 'features/common/components/AddToFavoriteButton/addToFavoriteButton';
import BeerItemImage from 'features/common/components/BeerItemImage/beerItemImage';
import BeerPageHeader from 'features/singleBeer/components/BeerPageHeader/beerPageHeader';
import BrewingSection from 'features/singleBeer/components/BrewingSection/brewingSection';
import List from 'src/components/base/List/list';
import LoadingIndicator from 'components/base/LoadingIndicator/loadingIndicator';
import fetchOneBeer from 'features/common/store/beers/state/thunks/fetchBeerThunk';

import './beerPage.scss';


export default function BeerPage() {
    const location = useLocation();
    const beerId = +location.pathname.slice(7);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOneBeer(beerId));
    }, [beerId, dispatch]);

    const beer = useSelector(state => state.beers.selectedBeer);

    if (beer.id !== beerId) {
        return (
            <LoadingIndicator isVisible={true} />
        );
    }

    return (
        <section className="beer-page__container">
            <div className="beer-page">
                <article className="beer-page__main">
                    <div className="beer-page__info">
                        <BeerPageHeader beer={beer} />
                        <AddToFavoriteButton
                            buttonClassName="beer-page__button"
                            beer={beer}
                            buttonLabel="Add to Favorite"
                        />
                        <div>{beer.description}</div>
                    </div>
                    <BeerItemImage imageUrl={beer.image_url} />
                </article>
                <article className="beer-page__characteristics">
                    <List
                        caption="Properties"
                        values={beer.properties}
                        hasBorder={true}
                        hasSubrows={true}
                        icon="icon-info"
                        specifiedStyles={true}
                    />
                    <List
                        caption="Food pairing"
                        values={beer.food_pairing}
                        hasBorder={true}
                    />
                </article>
                <BrewingSection brewingDescription={beer.brewers_tips} />
                <article className="beer-page__preparation-section">
                    <List
                        caption="Ingredients"
                        values={beer.ingredients}
                        hasBorder={true}
                        hasSubrows={true}
                    />
                    <List
                        caption="Method"
                        values={beer.method}
                        hasSubrows={true}
                    />
                </article>
            </div>
        </section>
    );
}
