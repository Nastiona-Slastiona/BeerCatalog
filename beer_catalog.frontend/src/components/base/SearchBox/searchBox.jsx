/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import './searchBox.css';


function SearchBox({ onInputChange }) {
    return (
        <div className="search-box">
            <input
                className="search-box__input"
                type="text"
                placeholder="Search beers..."
                onChange={onInputChange}
            />
            <button className="search-box__button">
                <span className="icon-search1" />
            </button>
        </div>
    );
}

SearchBox.propTypes = {
    onInputChange: PropTypes.func
};

export default SearchBox;
