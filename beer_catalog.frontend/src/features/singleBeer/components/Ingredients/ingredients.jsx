/* eslint-disable import/no-unresolved */
import React from 'react';
import IngredientsItem from 'features/singleBeer/components/IngredientsItem/ingredientsItem';

import './ingredients.css';


export default function Ingredients({ beer }) {
    const ingredients = [];
    ingredients.push(['water', { ...beer.boil_volume }]);
    Object.entries(beer.ingredients).forEach(ingr => ingredients.push([ingr[0], { ...ingr[1] }]));

    return (
        <div>
            <div>
                <span className="ingredients__header">Ingredients</span>
            </div>
            <div className="ingredients__table">
                {
                    ingredients.map((ingredient, index) => {
                        return <IngredientsItem key={index} ingredient={ingredient} />;
                    })
                }
            </div>
        </div>
    );
}
