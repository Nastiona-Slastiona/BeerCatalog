import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import './menuNavbarItem.scss';


function MenuNavbarItem({ link, iconClassName, name }) {
    return (
        <div className="menu-navbar-item__container">
            <span className={`${iconClassName} menu-navbar-item__icon`} />
            <Link className="menu-navbar-item" to={link}>{name}</Link>
        </div>
    );
}

MenuNavbarItem.propTypes = {
    link: PropTypes.string.isRequired,
    iconClassName: PropTypes.string,
    name: PropTypes.string.isRequired
};

export default MenuNavbarItem;
