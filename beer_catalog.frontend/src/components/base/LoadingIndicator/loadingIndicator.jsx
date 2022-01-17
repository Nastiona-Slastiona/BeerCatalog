import React from 'react';

import img from './giphy.gif';


function LoadingIndicator({ isVisible }) {
    return (
        !isVisible ? null : <div><img alt="loader" src={img} /></div>
    );
}

export default LoadingIndicator;
