import React from 'react';

import img from './giphy.gif';


function InfiniteScroll({isVisible})  {
    if(!isVisible) {
        return (
            <div></div>
        )
    }

    return (
        <div>
            <img alt="loader" src={img}/>
        </div>
    )
};

export default InfiniteScroll;