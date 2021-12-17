import React from 'react';
import Slider from '@mui/material/Slider'
import cl from './filterSlider.module.css';

function FilterSlider({minimum, maximum, defaultVal}) {
    return (
        <div className={cl.filterSliderContainer}>
            <Slider
                size="small"
                defaultValue={defaultVal}
                aria-label="Small"
                valueLabelDisplay="auto"
                min={minimum}
                max={maximum}
            />
        </div>
    );
}

export default FilterSlider;