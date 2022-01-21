import React from 'react';

import IngredientsItem from 'features/singleBeer/components/IngredientsItem/ingredientsItem';

import './ingredientsSection.scss';


export default function IngredientsSection({ beer }) {
    return (
        <div>
            <div>
                <h2 className="ingredients__header">Ingredients</h2>
            </div>
            <div className="ingredients__table">
                {
                    beer.ingredients.map((ingredient, index) => {
                        return <IngredientsItem key={index} name={ingredient[0]} values={ingredient[1]} />;
                    })
                }
            </div>
        </div>
    );
}
