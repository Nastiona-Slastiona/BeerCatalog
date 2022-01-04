/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import classNames from 'classnames';
import FilterItem from 'features/beersList/components/FilterItem/filterItem';

import './filter.css';


export default function Filter({ isVisible, onChange }) {
    const classes = classNames('filter__container', { 'filter__container--active': isVisible });

    return (
        <div className={classes}>
            <div className="filter">
                <h1 className="filter__header">
                    Filter results
                </h1>
                <div className="filter-section__container">
                    <FilterItem
                        name="abv"
                        fullName="Alcohol by volume"
                        min={2}
                        max={14}
                        defaultValue={4.6}
                        onChange={onChange}
                    />
                    <FilterItem
                        name="ibu"
                        fullName="International Bitterness Units"
                        min={0}
                        max={120}
                        defaultValue={50}
                        onChange={onChange}
                    />
                    <FilterItem
                        name="ebc"
                        fullName="Color by EBC"
                        min={4}
                        max={80}
                        defaultValue={60}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    );
}
