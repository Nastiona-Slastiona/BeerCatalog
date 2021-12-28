import React from 'react';
import PropTypes from 'prop-types'

import classNames from 'classnames';

import './pagination.css';


function Pagination({pages, isVisible, onClick}) {
    const className = classNames('pagination',
        {'pagination--active': isVisible}
    )

    return (
        <div className={className}>
            <span 
                className='pagination__change-page icon-arrow-left' 
                onClick={onClick}>
            </span>
            {pages.map((page, index) => 
                <span 
                    className='pagination__button' 
                    key={index} 
                    onClick={onClick}>{page}
                </span>)
            }
            <span 
                className='pagination__change-page icon-arrow-right' 
                onClick={onClick}>
            </span>
        </div>
    );
};

Pagination.propTypes = {
    pages: PropTypes.array,
    isVisible: PropTypes.bool,
    onClick: PropTypes.func
}

export default Pagination;