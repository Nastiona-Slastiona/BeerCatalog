import React from 'react';
import cl from './beerItemTitle.module.css';

function BeerItemTitle({children}) {
    return (
        <div className={cl.beerItemTitle}>
            {children}
        </div>   
    );
}

export default BeerItemTitle;