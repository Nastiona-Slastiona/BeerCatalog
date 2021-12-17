import React from 'react';
import Slider from '@mui/material/Slider'
import cl from './filterSection.module.css';
import FilterItem from '../FilterItem/filterItem';

function FilterSection() {
    return (
        <div className={cl.filterSectionContainer}>
            <FilterItem min={2} max={14} defaultValue={4.6}>Alcohol by volume</FilterItem>
            <FilterItem min={0} max={120} defaultValue={50}>International Bitterness Units</FilterItem>
            <FilterItem min={4} max={80} defaultValue={60}>Color by EBC</FilterItem>
        </div>
    );
}

export default FilterSection;