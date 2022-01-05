import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import './pagination.scss';


function Pagination({ beers, setPage, pageShown }) {
    const amountOfFavoriteBeers = beers.length;
    const isVisible = amountOfFavoriteBeers > 5;

    const className = classNames(
        'pagination',
        { 'pagination--active': isVisible }
    );
    const pages = [];

    for (let i = 0; i < (beers.length / 5); i++) {
        pages[i] = i + 1;
    }

    const onPaginationClick = event => {
        const paginationValue = event.target.className.split(' ');
        if (paginationValue[0] !== 'pagination__button') {
            const direction = paginationValue[paginationValue.length - 1].split('-');

            if (direction.includes('right') && pageShown < pages.length - 1) {
                setPage(prevPage => prevPage + 1);
            } else if (direction.includes('left') && pageShown > 0) {
                setPage(prevPage => prevPage - 1);
            }
        } else {
            setPage(event.target.innerHTML - 1);
        }
    };

    return (
        <div className="pagination__container">
            <div className={className}>
                <span
                    className="pagination__change-page icon-arrow-left"
                    onClick={onPaginationClick}
                />
                {
                    pages.map((page, index) => (
                        <span
                            key={index}
                            className="pagination__button"
                            onClick={onPaginationClick}
                        >{page}
                        </span>
                    ))
                }
                <span
                    className="pagination__change-page icon-arrow-right"
                    onClick={onPaginationClick}
                />
            </div>
        </div>
    );
}

Pagination.propTypes = {
    beers: PropTypes.array,
    setPage: PropTypes.func,
    pageShown: PropTypes.number
};

export default Pagination;
