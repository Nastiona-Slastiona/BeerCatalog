import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './pagination.scss';


const LIST_LENGTH = 5;

function Pagination({
    list,
    setPage,
    pageShown
}) {
    const listLength = list.length;
    const isVisible = listLength > LIST_LENGTH;

    const className = classNames(
        'pagination',
        { 'pagination--active': isVisible }
    );
    const length = Math.ceil(listLength / LIST_LENGTH);
    const pages = Array(length);
    for (let i = 1; i <= length; i++) {
        pages.push(i);
    }
    const onPaginationClick = useCallback(event => {
        if (event.target.textContent === '>') {
            if (pageShown < length - 1) {
                setPage(prevPage => prevPage + 1);
            }
        } else if (event.target.textContent === '<') {
            if (pageShown > 0) {
                setPage(prevPage => prevPage - 1);
            }
        } else {
            setPage(+event.target.innerHTML - 1);
        }
    }, [length, pageShown, setPage]);

    return (
        <div className="pagination__container">
            <div className={className}>
                <span
                    className="pagination__button"
                    onClick={onPaginationClick}
                >
                    {'<'}
                </span>
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
                    className="pagination__button"
                    onClick={onPaginationClick}
                >
                    {'>'}
                </span>
            </div>
        </div>
    );
}

Pagination.propTypes = {
    list: PropTypes.array.isRequired,
    setPage: PropTypes.func.isRequired,
    pageShown: PropTypes.number.isRequired
};

export default Pagination;
