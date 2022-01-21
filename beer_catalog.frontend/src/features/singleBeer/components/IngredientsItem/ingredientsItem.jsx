import React from 'react';

import './ingredientsItem.scss';


export default function IngridientsItem({ name, values }) {
    return (
        <div className="ingredients-item">
            <div className="ingredients-item__header">
                {name}
            </div>
            {
                values.map((value, index) => (
                    <div key={index}>
                        {value}
                    </div>
                ))
            }
        </div>
    );
}
