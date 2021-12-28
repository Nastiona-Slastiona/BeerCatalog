import React from 'react';
import PropTypes from 'prop-types'

import BeerItemInfo from 'Components/BeerItemInfo/beerItemInfo.jsx';
import BeerItemImage from 'Components/BeerItemImage/beerItemImage.jsx';

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