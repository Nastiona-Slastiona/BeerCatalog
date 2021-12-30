import React from 'react';
import PropTypes from 'prop-types';

import FilterSlider from 'components/FilterSlider/filterSlider';

import './filterItem.css';


function FilterItem({children, name, min, max, defaultValue, onChange}) {
    return (
        <div className={'filter__item'}>
            <span>{children}</span>
            <FilterSlider 
                minimum={min} 
                maximum={max} 
                defaultVal={defaultValue}
                onChange={onChange}
                name={name}
                />
        </div>
    );
};

FilterItem.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    defaultValue: PropTypes.number,
    onChange: PropTypes.func
};

export default FilterItem;