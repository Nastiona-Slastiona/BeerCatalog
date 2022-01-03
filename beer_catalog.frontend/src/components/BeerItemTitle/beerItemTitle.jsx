import React from 'react';

import './beerItemTitle.css';


export default function BeerItemTitle({ children }) {
    return (
        <div className="beer-item__title">
            {children}
        </div>
    );
}
