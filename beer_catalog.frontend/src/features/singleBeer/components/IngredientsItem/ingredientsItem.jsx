import React from 'react';

import './ingredientsItem.scss';


export default function IngridientsItem({ name, values }) {
    return (
        <tr className="ingredients-item">
            <td className="ingredients-item__header">
                {name}
            </td>
            {
                values.map((value, index) => (
                    <td key={index} className="ingredients-item__component">
                        {value}
                    </td>
                ))
            }
        </tr>
    );
}
