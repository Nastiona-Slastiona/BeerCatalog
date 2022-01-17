import PropTypes from 'prop-types';
import React from 'react';

import BeerItemActionsSection from 'features/common/components/BeerItemActionsSection/beerItemActionsSection';
import Label from 'components/base/Label/label';

import './beerItemInfo.scss';


function BeerItemInfo({ beer }) {
    return (
        <div className="beer-item-info">
            <Label className="beer-item-info--title">{beer.name}</Label>
            <Label>{beer.tagline}</Label>
            <BeerItemActionsSection beer={beer} />
        </div>
    );
}

BeerItemInfo.propTypes = {
    beer: PropTypes.object.isRequired
};

export default BeerItemInfo;
