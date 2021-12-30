import React from 'react';

import './brewing.css';


export default function Brewing({brewing_description}) {
    return (
        <div>
            <div>
                <span className='brewing__header'>Brewing</span>
            </div>
            <div className='brewing__description'>
                {brewing_description}
            </div>
        </div> 
    );
};