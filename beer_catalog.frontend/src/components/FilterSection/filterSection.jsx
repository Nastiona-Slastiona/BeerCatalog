import React from 'react';

import FilterItem from 'Components/FilterItem/filterItem.jsx';

import './filterSection.css';


export default function FilterSection({onChange}) {
    return (
        <div className={'filter-section__container'}>
            <FilterItem name='abv' min={2} max={14} defaultValue={4.6} onChange={onChange}>Alcohol by volume</FilterItem>
            <FilterItem name='ibu' min={0} max={120} defaultValue={50} onChange={onChange}>International Bitterness Units</FilterItem>
            <FilterItem name='ebc' min={4} max={80} defaultValue={60} onChange={onChange}>Color by EBC</FilterItem>
        </div>
    );
};