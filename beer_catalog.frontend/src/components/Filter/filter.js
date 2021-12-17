import React from 'react';
import cl from './filter.module.css';
import FilterSection from '../FilterSection/filterSection';

function Filter() {
    return (
        <div className={cl.filterContainer}>
            <div>
                <h3>
                    Filter results
                </h3>
                <FilterSection/>
            </div>
        </div>
    );
}

export default Filter;