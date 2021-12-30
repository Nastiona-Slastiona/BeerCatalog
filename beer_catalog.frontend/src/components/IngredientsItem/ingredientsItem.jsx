import React from 'react';

import './ingridientItem.css';


export default function IngridientsItem({children}) {
    return (
        <div className='ingridients__item'>
           {children}
        </div> 
    );
};