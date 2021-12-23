import React from 'react';
import classNames from 'classnames';

import FilterSection from 'Components/FilterSection/filterSection.jsx';

import './filter.css';

export default function Filter({isVisible, onChange}) {
    const classes = classNames('filter__container', {'filter__container--active': isVisible})
    return (
        <div className={classes}>
            <div>
                <h1>
                    Filter results
                </h1>
                <FilterSection onChange={onChange}/>
            </div>
        </div>
    );
};