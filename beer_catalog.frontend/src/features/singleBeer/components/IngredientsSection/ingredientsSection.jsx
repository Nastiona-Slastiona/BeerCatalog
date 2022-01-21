import React from 'react';

import IngredientsItem from 'features/singleBeer/components/IngredientsItem/ingredientsItem';

import './ingredientsSection.scss';


export default function IngredientsSection({ beer }) {
    return (
        <table className="ingredients">
            <thead>
                <tr>
                    <th className="ingredients__header">Ingredients</th>
                </tr>
            </thead>
            <tbody className="ingredients__table">
                {
                    beer.ingredients.map((ingredient, index) => {
                        return <IngredientsItem key={index} name={ingredient[0]} values={ingredient[1]} />;
                    })
                }
            </tbody>
        </table>
    );
}
