/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './pagination.css';


function Pagination({ pages, isVisible, onClick }) {
    const className = classNames(
        'pagination',
        { 'pagination--active': isVisible }
    );

    return (
        <div className={className}>
            <span
                className="pagination__change-page icon-arrow-left"
                onClick={onClick}
            />
            {
                pages.map((page, index) => (
                    <span
                        key={index}
                        className="pagination__button"
                        onClick={onClick}
                    >{page}
                    </span>
                ))
            }
            <span
                className="pagination__change-page icon-arrow-right"
                onClick={onClick}
            />
        </div>
    );
}

Pagination.propTypes = {
    pages: PropTypes.instanceOf(Array),
    isVisible: PropTypes.bool,
    onClick: PropTypes.func
};

export default Pagination;
