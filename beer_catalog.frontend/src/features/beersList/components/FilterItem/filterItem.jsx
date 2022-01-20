import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import './filterItem.scss';


function FilterItem({
    filter,
    onChange
}) {
    let step = 1;
    const [value, setValue] = useState(filter.min);

    if (filter.name === 'abv') {
        step = 0.1;
    }

    const onInputChange = useCallback(e => {
        setValue(e.target.value);
        onChange(e);
    }, [onChange]);

    return (
        <div className="filter-item">
            <span>{filter.fullName}</span>
            <div>
                <label className="filter-item__label">{value}</label>
                <input
                    className="filter-item__slider"
                    type="range"
                    min={filter.min}
                    max={filter.max}
                    defaultValue={filter.min}
                    step={step}
                    name={filter.name}
                    onChange={onInputChange}
                />
            </div>
        </div>
    );
}

FilterItem.propTypes = {
    filter: PropTypes.object,
    onChange: PropTypes.func
};

export default FilterItem;
