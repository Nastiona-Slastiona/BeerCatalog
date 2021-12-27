import React from 'react';

import classNames from 'classnames';

import './pagination.css';


export default function Pagination({pages, isVisible, onClick}) {
    const className = classNames('pagination__conatiner page__buttons', {'pagination__conatiner--active page__buttons--active': isVisible})

    return (
        <div className={className}>
            <span className='page-change-direction icon-arrow-left' onClick={onClick}></span>
            {pages.map((page, index) => 
                <span className='page__button' key={index} onClick={onClick}>{page}</span>)
            }
            <span className='page-change-direction icon-arrow-right' onClick={onClick}></span>
        </div>
    );
};