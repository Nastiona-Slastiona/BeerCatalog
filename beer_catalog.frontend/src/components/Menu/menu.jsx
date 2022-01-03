/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import classNames from 'classnames';
import MenuNavbar from 'components/MenuNavbar/menuNavbar';
import PropTypes from 'prop-types';

import './menu.css';


function Menu({ isVisible, setIsVisible, children }) {
    const classes = classNames('menu__container', { 'menu__container--active': isVisible });

    return (
        <div className={classes} onClick={setIsVisible}>
            <div className="menu">
                <span className="menu__header">{children}</span>
                <MenuNavbar />
            </div>
        </div>
    );
}

Menu.propTypes = {
    isVisible: PropTypes.bool,
    setVisible: PropTypes.func
};

export default Menu;
