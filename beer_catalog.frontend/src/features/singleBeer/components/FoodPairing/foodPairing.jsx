import React from 'react';

import FoodPairingItem from 'features/singleBeer/components/FoodPairingItem/foodPairingItem';

import './foodPairing.css';


export default function FoodPairing({ foodPairing }) {
    return (
        <div className="food-pairing__container">
            <div className="food-pairing">
                <div>
                    <span className="food-pairing__header">Food Pairing</span>
                </div>
                <div className="food-pairing__table">
                    {
                        foodPairing.map((food, index) => {
                            return <FoodPairingItem key={index}>{food}</FoodPairingItem>;
                        })
                    }
                </div>
            </div>
        </div>
    );
}
