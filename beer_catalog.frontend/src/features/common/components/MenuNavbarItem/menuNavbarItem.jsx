import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './menuNavbarItem.css';


function MenuNavbarItem({ link, iconClassName, name }) {
    return (
        <div className="menu-navbar__item__container">
            <span className={iconClassName} />
            <Link className="menu-navbar__item" to={link}>{name}</Link>
        </div>
    );
}

MenuNavbarItem.propTypes = {
    link: PropTypes.string
};

export default MenuNavbarItem;
