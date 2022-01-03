/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import BeerItem from 'components/BeerItem/beerItem';
import BeerItemsRow from 'components/BeerItemsRow/beerItemsRow';
import PropTypes from 'prop-types';

import './beersList.css';


function BeersList({ beers }) {
    if (!beers.length) {
        return (
            <h2>There is nothing</h2>
        );
    }

    const getVal = () => {
        const beersRows = [];
        let i;

        if (beers.length <= 3) {
            return beers.map(beer => <BeerItem key={beer.id} beer={beer} />);
        }

        for (i = 0; i < beers.length - 3; i += 3) {
            beersRows.push(Array.from(beers.slice(i, i + 3)));
        }
        beersRows.push(Array.from(beers.slice(i)));

        const rows = beersRows.map((beersRow, index) => <BeerItemsRow key={index} beersRow={beersRow} />);

        return rows;
    };

    const renderedRows = getVal();

    return (
        <div className="beers-list__container">
            <div className="beers-list">
                {renderedRows}
            </div>
        </div>
    );
}

BeersList.propTypes = {
    beers: PropTypes.array
};

export default BeersList;
