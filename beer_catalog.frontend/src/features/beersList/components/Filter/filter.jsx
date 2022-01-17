import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import FilterItem from 'features/beersList/components/FilterItem/filterItem';

import './filter.scss';


function Filter({ isVisible, onChange }) {
    const classes = classNames('filter__container', { 'filter__container--active': isVisible });

    return (
        <div className={classes}>
            <div>
                <h1 className="filter__header">
                    Filter results
                </h1>
                <div>
                    <FilterItem
                        name="abv"
                        fullName="Alcohol by volume"
                        min={2}
                        max={14}
                        onChange={onChange}
                    />
                    <FilterItem
                        name="ibu"
                        fullName="International Bitterness Units"
                        min={0}
                        max={120}
                        onChange={onChange}
                    />
                    <FilterItem
                        name="ebc"
                        fullName="Color by EBC"
                        min={4}
                        max={80}
                        onChange={onChange}
                    />
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
