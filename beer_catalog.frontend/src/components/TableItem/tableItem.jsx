/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';

import './ingridientItem.css';


export default function TableItem({ children, className }) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}
