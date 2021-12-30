import React from 'react';
import PropTypes from 'prop-types'

import BeerItem from 'components/BeerItem/beerItem';

import './beerItemsRow.css';


function BeerItemsRow({beersRow}) {
    return (
        <div className={'beer-items__row'}>
            {beersRow.map(beer =>
                <BeerItem beer={beer} key={beer.id}/>
            )}
        </div>
    )
};

BeerItemsRow.propTypes = {
    beersRow: PropTypes.array
}

export default BeerItemsRow;