import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './filterItem.scss';


function FilterItem({
    fullName,
    name,
    min,
    max,
    onChange
}) {
    let step = '1';
    const [value, setValue] = useState(+min);

    if (name === 'abv') {
        step = '.1';
    }

    const onInputChange = e => {
        setValue(e.target.value);
        onChange(e);
    };

    return (
        <div className="filter__item">
            <span>{fullName}</span>
            <div className="filter-slider__container">
                <label className="filter__slider__label">{value}</label>
                <input
                    className="filter__slider"
                    type="range"
                    min={min}
                    max={max}
                    defaultValue={min}
                    step={step}
                    name={name}
                    onChange={onInputChange}
                />
            </div>
        </div>
    );
}

FilterItem.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func
};

export default FilterItem;
