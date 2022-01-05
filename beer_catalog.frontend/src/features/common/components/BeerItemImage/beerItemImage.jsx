import PropTypes from 'prop-types';
import React from 'react';

import './beerItemImage.scss';


function BeerItemImage({ image }) {
    return (
        <div className="beer-item-image__section">
            <div className="beer-item-image__container">
                <img className="beer-item-image" alt="PUNK IPA" src={image} />
            </div>
        </div>
    );
}

BeerItemImage.propTypes = {
    image: PropTypes.string
};

export default BeerItemImage;
