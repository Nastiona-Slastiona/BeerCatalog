import React from 'react';

// import IngridientsItem from 'components/IngridientsItem/ingridientsItem';
import './ingredients.css';


export default function Ingredients({ ingredients }) {
    // ingredients = Array.from(ingredients);

    return (
        <div>
            <div>
                <span className="ingredients__header">Ingredients</span>
            </div>
            <div className="ingredients__table">
                {
                    /* {ingridients.map((ingridient, index) => {
                   return <IngridientsItem key={index}>{ingridient}</IngridientsItem>
                })} */}
            </div>
        </div>
    );
}
