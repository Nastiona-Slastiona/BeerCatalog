import PropTypes from 'prop-types';
import React from 'react';

import AddToFavoriteButton from 'features/common/components/AddToFavoriteButton/addToFavoriteButton';
import { Link } from 'react-router-dom';

import './beerItemActionsSection.scss';
import { useSelector } from 'react-redux';


function BeerItemActionsSection({ beer }) {
    const isAuthorized = useSelector(state => state.users.isAuthorized);

    return (
        <div className="beer-item-actions-section__container">
            <Link className="beer-item-actions-section" to={`/beers/${beer.id}`}>Open</Link>
            {
                isAuthorized && (
                    <AddToFavoriteButton
                        buttonClassName="beer-item-actions-section"
                        beer={beer}
                        buttonLabel="Favorite"
                    />
                )
            }
        </div>
    );
}

BeerItemActionsSection.propTypes = {
    beer: PropTypes.object
};

export default BeerItemActionsSection;
