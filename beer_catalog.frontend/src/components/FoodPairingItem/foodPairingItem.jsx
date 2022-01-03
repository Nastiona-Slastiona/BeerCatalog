import React from 'react';

import './foodPairingItem.css';


export default function FoodPairingItem({ children }) {
    return (
        <div className="food-pairing__item">
            {children}
        </div>
    );
}
