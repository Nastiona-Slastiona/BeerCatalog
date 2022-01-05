import React from 'react';

import './foodPairingItem.scss';


export default function FoodPairingItem({ children }) {
    return (
        <div className="food-pairing__item">
            {children}
        </div>
    );
}
