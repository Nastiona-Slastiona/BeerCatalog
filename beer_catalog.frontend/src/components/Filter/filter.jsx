import React from 'react';

import FilterSection from 'Components/FilterSection/filterSection.jsx';

import './filter.css';

export default function Filter() {
    return (
        <div className={'filter__container'}>
            <div>
                <h3>
                    Filter results
                </h3>
                <FilterSection/>
            </div>
        </div>
    );
};