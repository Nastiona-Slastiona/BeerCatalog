import PropTypes from 'prop-types';
import React from 'react';

import './beerItemImage.scss';


function BeerItemImage({ imageUrl }) {
    return (
        <div className="beer-item-image__container">
            <div className="beer-item-image__background">
                <img
                    className="beer-item-image"
                    alt="PUNK IPA"
                    src={imageUrl}
                />
            </div>
        </div>
    );
}

BeerItemImage.propTypes = {
    imageUrl: PropTypes.string
};

export default BeerItemImage;
