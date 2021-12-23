import React from 'react';

import './searchBox.css';


export default function SearchBox({onInputChange}) {
    return (
        <div className={'search-box__container'}>
            <input 
                className={'search-box__input'} 
                type='text' 
                onChange={onInputChange}
                placeholder='Search beers...'></input>
            <button className={'search-box__button'}>
                <span className="icon-search1"></span>
            </button>
        </div>
    );
};