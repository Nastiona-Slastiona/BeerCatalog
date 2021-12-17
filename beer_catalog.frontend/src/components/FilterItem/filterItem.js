import React from 'react';
import cl from './filterItem.module.css';
import FilterSlider from '../FilterSlider/filterSlider';

function FilterItem({children, min, max, defaultValue}) {
    return (
        <div className={cl.filterItemContainer}>
            <span>{children}</span>
            <FilterSlider 
                minimum={min} 
                maximum={max} 
                defaultVal={defaultValue}
                />
        </div>
    );
}

export default FilterItem;