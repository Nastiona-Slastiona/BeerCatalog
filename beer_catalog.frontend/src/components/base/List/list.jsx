import React from 'react';


export default function List({
    containerClassName,
    listClassName,
    renderedItems
}) {
    return (
        <div className={containerClassName}>
            <div className={listClassName}>
                {renderedItems}
            </div>
        </div>
    );
}
