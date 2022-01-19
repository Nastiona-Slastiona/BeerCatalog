import React from 'react';

import IngredientsItem from 'features/singleBeer/components/IngredientsItem/ingredientsItem';

import './ingredientsSection.scss';


export default function IngredientsSection({ beer }) {
    const ingredients = [];
    ingredients.push(['water', { ...beer.boil_volume }]);
    Object.entries(beer.ingredients).forEach(ingr => ingredients.push([ingr[0], { ...ingr[1] }]));

    return (
        <div>
            <div>
                <h2 className="ingredients__header">Ingredients</h2>
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
