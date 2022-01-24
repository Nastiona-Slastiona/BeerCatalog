import PropTypes from 'prop-types';
import React from 'react';

import img from 'src/static/giphy';


function LoadingIndicator({ isVisible }) {
    return (
        isVisible
            ? <div><img alt="loader" src={img} /></div>
            : null
    );
}

LoadingIndicator.propTypes = {
    isVisible: PropTypes.bool
};

export default LoadingIndicator;
