import React from 'react';

import './methodSection.scss';


export default function MethodSection({ beer }) {
    const { method } = beer;
    const mashTemp = method.mash_temp;
    const { fermentation } = method;

    const getDegrees = unit => unit === 'celsius' ? '°C' : '';

    const mashTempRendered = mashTemp.map(((each, index) => {
        const { duration, temp } = each;
        const { value, unit } = temp;

        return (
            <div key={index}>{duration} minutes at {value} {getDegrees(unit)}</div>
        );
    }));


    return (
        <div className="method">
            <div>
                <h2 className="method__header">Method</h2>
            </div>
            <div className="method__table">
                <div className="method__table-header">Mash</div>
                {mashTempRendered}
                <div className="method__table-header">Fermentation</div>
                <div>Perform at {fermentation.temp.value} {getDegrees(fermentation.temp.unit)}</div>
                <div className="method__table-header">Twist</div>
                <div>{method.twist}</div>
            </div>
        </div>
    );
}
