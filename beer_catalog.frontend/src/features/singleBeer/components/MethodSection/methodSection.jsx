import React from 'react';

import './methodSection.scss';


export default function MethodSection({ methods }) {
    return (
        <table className="method">
            <thead>
                <tr>
                    <th className="method__header">
                        Method
                    </th>
                </tr>
            </thead>
            <tbody className="method__table">
                {
                    methods.map((method, index) => (
                        <tr key={index} className="method__table-row">
                            <td className="method__table-header">
                                {method[0]}
                            </td>
                            {
                                method[1].map((step, stepIndex) => (
                                    <td key={stepIndex} className="method__table-row">
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
