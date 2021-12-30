import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'

import FilterSection from 'components/FilterSection/filterSection';

import './filter.css';

function Filter({isVisible, onChange}) {
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

Filter.propTypes = {
    isVisible: PropTypes.bool,
    onChange: PropTypes.func
}

export default Filter;