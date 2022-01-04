import React from 'react';


export default function Label({ children, className }) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}
