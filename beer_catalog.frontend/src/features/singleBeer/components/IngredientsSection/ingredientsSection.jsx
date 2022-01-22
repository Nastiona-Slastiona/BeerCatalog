import React from 'react';

import './ingredientsSection.scss';


export default function IngredientsSection({ ingredients }) {
    return (
        <table className="ingredients">
            <thead>
                <tr>
                    <th className="ingredients__header">
                        Ingredients
                    </th>
                </tr>
            </thead>
            <tbody className="ingredients__table">
                {
                    ingredients.map((ingredient, index) => (
                        <tr key={index} className="ingredients-item">
                            <td className="ingredients-item__header">
                                {ingredient[0]}
                            </td>
                            {
                                ingredient[1].map((step, stepIndex) => (
                                    <td key={stepIndex} className="ingredients-item__component">
                                        {step}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}
