import PropTypes from 'prop-types';
import React from 'react';

import './table.scss';


function Table({
    caption,
    values,
    hasBorder = false,
    hasSubrows = false
}) {
    const itemClassName = hasBorder ? 'table__item--borders' : 'table__item';

    return (
        <table className="table__container">
            <thead>
                <tr>
                    <th className="table__header">
                        {caption}
                    </th>
                </tr>
            </thead>
            <tbody className="table__body">
                {
                    hasSubrows
                        ? values.map((value, index) => (
                            <tr key={index} className={itemClassName}>
                                <td className="table__item-header">
                                    {value[0]}
                                </td>
                                {
                                    value[1].map((row, rowIndex) => (
                                        <td key={rowIndex} className="table__item-body">
                                            {row}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                        : values.map((value, index) => (
                            <tr key={index} className={itemClassName}>
                                <td className="table__item-body">
                                    {value}
                                </td>
                            </tr>
                        ))
                }
            </tbody>
        </table>
    );
}

Table.propTypes = {
    caption: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired,
    hasBorder: PropTypes.bool,
    hasSubrows: PropTypes.bool
};

export default Table;
