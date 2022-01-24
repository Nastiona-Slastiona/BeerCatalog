import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './pagination.scss';


const ENTITIES_ON_PAGE = 5;

function Pagination({
    list
}) {
    const listLength = list.length;
    const isVisible = listLength > ENTITIES_ON_PAGE;
    const [pageShown, setPage] = useState(0);
    const length = Math.ceil(listLength / ENTITIES_ON_PAGE);
    const pages = Array(length);
    const className = classNames(
        'pagination',
        { 'pagination--active': isVisible }
    );

    for (let i = 1; i <= length; i++) {
        pages.push(i);
    }
    // In cases where delete the last entity on the page, we should be directed on previous one
    useEffect(() => {
        if (listLength % ENTITIES_ON_PAGE === 0 && pageShown !== 0) {
            setPage(prevValue => prevValue - ENTITIES_ON_PAGE);
        }
    }, [listLength, pageShown]);

    const onPaginationClick = useCallback(event => {
        if (event.target.textContent === '>') {
            if (pageShown < length - 1) {
                setPage(prevPage => prevPage + ENTITIES_ON_PAGE);
            }
        } else if (event.target.textContent === '<') {
            if (pageShown > 0) {
                setPage(prevPage => prevPage - ENTITIES_ON_PAGE);
            }
        } else {
            setPage((+event.target.innerHTML - 1) * ENTITIES_ON_PAGE);
        }
    }, [length, pageShown, setPage]);

    return (
        <div>
            {list.slice(pageShown, pageShown + ENTITIES_ON_PAGE)}
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
        </div>
    );
}

Pagination.propTypes = {
    list: PropTypes.array.isRequired
};

export default Pagination;
