import React from 'react';


export default function BeerItemTagline({children, className}) {
    return (
        <div className={className}>
            {children}
        </div>  
    );
};