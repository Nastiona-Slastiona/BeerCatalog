import PropTypes from 'prop-types';
import React from 'react';

import './list.scss';


function Table({
    caption,
    values,
    icon,
    specifiedStyles,
    hasBorder = false,
    hasSubrows = false
}) {
    const itemClassName = hasBorder ? 'list__item--borders' : 'list__item';
    const itemHeaderClass = specifiedStyles ? 'specified__item' : '';
    const itemBodyClass = specifiedStyles ? 'specified__item-value' : 'list__item-body';

    return (
        <article className="list__container">
            <div className="list__header">
                {caption}
            </div>
            <div className="list__body">
                {
                    values.map((value, index) => {
                        return (
                            <ul key={index} className={itemClassName}>
                                {
                                    hasSubrows
                                        ? (
                                            <ul className={itemHeaderClass}>
                                                <li className="list__item-header">
                                                    {value[0]} {icon && <span title={value[2]} className={icon} />}
                                                </li>
                                                {
                                                    value[1].map((row, rowIndex) => (
                                                        <li key={rowIndex} className={itemBodyClass}>
                                                            {row}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        )
                                        : (
                                            <li className="list__item-body">
                                                {value}
                                            </li>
                                        )
                                }
                            </ul>
                        );
                    })
                }
            </div>
        </article>
    );
}

Table.propTypes = {
    caption: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired,
    hasBorder: PropTypes.bool,
    hasSubrows: PropTypes.bool,
    specifiedStyles: PropTypes.bool,
    icon: PropTypes.string
};

export default Table;
