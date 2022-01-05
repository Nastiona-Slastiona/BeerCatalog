import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './filterItem.scss';


function FilterItem({
    fullName, name, min, max, defaultValue, onChange
}) {
    let step = '1';
    const [value, setValue] = useState(defaultValue);

    if (!Number.isInteger(+defaultValue)) {
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
                    defaultValue={defaultValue}
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
    defaultValue: PropTypes.number,
    onChange: PropTypes.func
};

export default FilterItem;
