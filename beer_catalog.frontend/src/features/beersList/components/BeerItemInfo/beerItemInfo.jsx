import React from 'react';
import PropTypes from 'prop-types';

import Label from 'components/base/Label/label';
import BeerItemButtons from 'features/common/components/BeerItemButtons/beerItemButtons';

import './beerItemInfo.css';


function BeerItemInfo({ beer }) {
    return (
        <div className="beer-item-info__container ">
            <Label className="beer-item-info--title">{beer.name}</Label>
            <Label>{beer.tagline}</Label>
            <BeerItemButtons beer={beer} />
        </div>
    );
}

BeerItemInfo.propTypes = {
    beer: PropTypes.object
};

export default BeerItemInfo;
