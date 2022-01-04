/* eslint-disable guard-for-in */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';

import './ingredientsItem.css';


export default function IngridientsItem({ ingredient }) {
    ingredient[1] = Object.values(ingredient[1]);
    ingredient[0] = ingredient[0].split('');
    ingredient[0][0] = ingredient[0][0].toUpperCase();
    ingredient[0] = ingredient[0].join('');


    if (ingredient[0] !== 'Malt' && ingredient[0] !== 'Hops') {
        return (
            <div className="ingredients-item">
                <div className="ingredients-item__header">
                    {ingredient[0]}
                </div>
                <div>
                    {ingredient[0] === 'Water' ? ingredient[1].join(' ') : ingredient[1].join('')}
                </div>
            </div>

        );
    }

    const rendered = [];

    for (const each in ingredient[1]) {
        rendered.push(ingredient[1][each]);
    }

    const render = rendered.map((value, index) => {
        return (
            <div key={index} className="ingredients-item__component">
                "{value.name}" - {value.amount.value} {value.amount.unit} {value.add ? `add when ${value.add}` : '' }
            </div>
        );
    });

    return (
        <div className="ingredients-item">
            <div className="ingredients-item__header">
                {ingredient[0]}
            </div>
            {render}
        </div>
    );
}
