import React from 'react';
import PropTypes from 'prop-types'

import BeerItemInfo from 'components/BeerItemInfo/beerItemInfo';
import BeerItemImage from 'components/BeerItemImage/beerItemImage';

import './beerItem.css';


function BeerItem({beer}) {
    return (
        <div className={'beer__item'}>
            <BeerItemImage image={beer["image_url"]}/>
            <BeerItemInfo beer={beer}/>
        </div>
    );
};

BeerItem.propTypes = {
    beer: PropTypes.object
}

export default BeerItem;