/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';

import './ingridientItem.css';


export default function IngridientsItem({ children }) {
    return (
        <div className="ingridients__item">
            {children}
        </div>
    );
}
