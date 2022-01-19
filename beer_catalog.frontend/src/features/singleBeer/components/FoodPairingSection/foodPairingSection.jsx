import React from 'react';

import './foodPairingSection.scss';


export default function FoodPairingSection({ foodPairing }) {
    return (
        <div className="food-pairing">
            <div>
                <div>
                    <h2 className="food-pairing__header">Food Pairing</h2>
                </div>
                <div className="food-pairing__table">
                    {
                        foodPairing.map((food, index) => (
                            <div key={index} className="food-pairing__item">
                                {food}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
