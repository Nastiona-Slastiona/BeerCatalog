import React, { useState } from 'react';
import Slider from '@mui/material/Slider'
import cl from './filterSlider.module.css';

function FilterSlider({minimum, maximum, defaultVal}) {
    let step = '1';
    const [val, setValue] = useState(defaultVal);

    if (!Number.isInteger(+defaultVal)) {
        step = '.1';
    }

    return (
        <div className={cl.filterSliderContainer}>
            <label className={cl.filterSliderLabel}>{val}</label>
            <input 
                className={cl.filterSlider} 
                type="range" 
                min={minimum} 
                max={maximum} 
                defaultValue={defaultVal} 
                step={step}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}

export default FilterSlider;