import PropTypes from 'prop-types';
import React from 'react';

import BeerItemButtons from 'features/common/components/BeerItemButtons/beerItemButtons';
import Label from 'components/base/Label/label';

import './beerItemInfo.scss';


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
    beer: PropTypes.object.isRequired
};

export default BeerItemInfo;
