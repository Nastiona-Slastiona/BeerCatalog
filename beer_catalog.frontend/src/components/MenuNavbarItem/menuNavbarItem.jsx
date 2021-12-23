import React from 'react';

import {Link}  from 'react-router-dom';
import PropTypes from 'prop-types';

import './menuNavbarItem.css';


function MenuNavbarItem({children, link}) {
    return (
        <div>
            <Link className={'menu-navbar__item'} to={link}>{children}</Link>
        </div>
    );
};

MenuNavbarItem.propTypes = {
    link: PropTypes.string,
}

export default MenuNavbarItem;