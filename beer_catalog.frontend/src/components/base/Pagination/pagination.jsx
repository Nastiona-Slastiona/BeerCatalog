import React from 'react';

import classNames from 'classnames';

import './pagination.css';


export default function Pagination({pages, isVisible, onClick}) {
    const className = classNames('pagination__container',
        {'pagination__container--active': isVisible}
    )

    return (
        <div className={className}>
            <span 
                className='page__change-page icon-arrow-left' 
                onClick={onClick}>
            </span>
            {pages.map((page, index) => 
                <span 
                    className='page__button' 
                    key={index} 
                    onClick={onClick}>{page}
                </span>)
            }
            <span 
                className='page__change-page icon-arrow-right' 
                onClick={onClick}>
            </span>
        </div>
    );
};