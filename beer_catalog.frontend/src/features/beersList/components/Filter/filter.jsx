import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import FilterItem from 'features/beersList/components/FilterItem/filterItem';

import './filter.scss';


function Filter({ isVisible, onChange }) {
    const classes = classNames('filter__container', { 'filter__container--active': isVisible });
    const filters = [{
        name: 'abv', fullName: 'Alcohol by volume', min: 2, max: 14
    }, {
        name: 'ibu', fullName: 'International Bitterness Units', min: 0, max: 120
    }, {
        name: 'ebc', fullName: 'Color by EBC', min: 4, max: 80
    }];

    return (
        <div className={classes}>
            <div>
                <h2 className="filter__header">
                    Filter results
                </h2>
                <div>
                    {
                        filters.map((filter, index) => (
                            <FilterItem
                                key={index}
                                filter={filter}
                                onChange={onChange}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

Filter.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onChange: PropTypes.func
};

export default Filter;
