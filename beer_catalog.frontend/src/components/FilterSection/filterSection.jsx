import React from 'react';

import FilterItem from 'Components/FilterItem/filterItem.jsx';

import './filterSection.css';


export default function FilterSection() {
    return (
        <div className={'filter-section__container'}>
            <FilterItem min={2} max={14} defaultValue={4.6}>Alcohol by volume</FilterItem>
            <FilterItem min={0} max={120} defaultValue={50}>International Bitterness Units</FilterItem>
            <FilterItem min={4} max={80} defaultValue={60}>Color by EBC</FilterItem>
        </div>
    );
};