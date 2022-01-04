import React from 'react';

import './brewing.css';


export default function Brewing({ brewingDescription }) {
    return (
        <div>
            <div>
                <span className="brewing__header">Brewing</span>
            </div>
            <div className="brewing__description">
                {brewingDescription}
            </div>
        </div>
    );
}
