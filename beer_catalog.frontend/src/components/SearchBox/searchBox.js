import React from 'react';
import cl from './searchBox.module.css';

function SearchBox() {
    return (
        <div className={cl.searchBoxContainer}>
            <input className={cl.searchBoxInput} type='text' placeholder='Search beers...'></input>
            <button className={cl.searchBoxButton}><span className="icon-search1"></span></button>
        </div>
    );
}

export default SearchBox;