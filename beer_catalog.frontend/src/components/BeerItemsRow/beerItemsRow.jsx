/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import BeerItem from 'components/BeerItem/beerItem';
import PropTypes from 'prop-types';

import './beerItemsRow.css';


function BeerItemsRow({ beersRow }) {
    return (
        <div className="beer-items__row">
            {
                beersRow.map(beer => <BeerItem key={beer.id} beer={beer} />)
            }
        </div>
    );
}

BeerItemsRow.propTypes = {
    beersRow: PropTypes.instanceOf(Array)
};

export default BeerItemsRow;
