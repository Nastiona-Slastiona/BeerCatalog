import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './filterSlider.css';


function FilterSlider({minimum, maximum, defaultVal}) {
    let step = '1';
    const [val, setValue] = useState(defaultVal);

    if (!Number.isInteger(+defaultVal)) {
        step = '.1';
    }

    const onInputChange = (e) => setValue(e.target.value);

    return (
        <div className={'filter-slider__container'}>
            <label className={'filter-slider__label'}>{val}</label>
            <input 
                className={'filter-slider'} 
                type="range" 
                min={minimum} 
                max={maximum} 
                defaultValue={defaultVal} 
                step={step}
                onChange={onInputChange}
            />
        </div>
    );
};

FilterSlider.propTypes = {
    minimum: PropTypes.number,
    maximum: PropTypes.number,
    defaultVal: PropTypes.number
}

export default FilterSlider;