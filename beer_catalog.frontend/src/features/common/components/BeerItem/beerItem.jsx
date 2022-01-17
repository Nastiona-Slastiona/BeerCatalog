import PropTypes from 'prop-types';
import React from 'react';

import BeerItemImage from 'features/common/components/BeerItemImage/beerItemImage';
import BeerItemInfo from 'features/beersList/components/BeerItemInfo/beerItemInfo';
import FavoriteBeerItemInfo from 'features/favoritesBeers/components/FavoriteBeerItemInfo/favoriteBeerItemInfo';


function BeerItem({
    beer,
    isSimpleBeerMode,
    itemClassName,
    onRemoveFavoriteClick = () => undefined
}) {
    return (
        <div className={itemClassName}>
            {
                !isSimpleBeerMode &&
                <FavoriteBeerItemInfo favoriteBeer={beer} onRemoveFavoriteClick={onRemoveFavoriteClick} />
            }
            <BeerItemImage imageUrl={beer.image_url} />
            {
                isSimpleBeerMode &&
                <BeerItemInfo beer={beer} />
            }
        </div>
    );
}

BeerItem.propTypes = {
    beer: PropTypes.object.isRequired,
    onRemoveFavoriteClick: PropTypes.func,
    itemClassName: PropTypes.string,
    isSimpleBeerMode: PropTypes.bool
};

export default BeerItem;
