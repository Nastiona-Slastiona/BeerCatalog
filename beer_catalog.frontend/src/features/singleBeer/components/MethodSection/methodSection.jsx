import React from 'react';

import './methodSection.scss';


export default function MethodSection({ methods }) {
    return (
        <div className="method">
            <div>
                <h2 className="method__header">Method</h2>
            </div>
            <div className="method__table">
                {
                    methods.map((method, index) => (
                        <div key={index}>
                            <div className="method__table-header">{method[0]}</div>
                            {
                                method[1].map((step, stepIndex) => <div key={stepIndex}>{step}</div>)
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
