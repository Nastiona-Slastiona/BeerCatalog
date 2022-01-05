import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import MenuNavbar from 'features/common/components/MenuNavbar/menuNavbar';

import './menu.scss';


function Menu({ isVisible, setIsVisible }) {
    const classes = classNames('menu__container', { 'menu__container--active': isVisible });

    return (
        <div className={classes} onClick={setIsVisible}>
            <div className="menu">
                <span className="menu__header">Beer Catalog</span>
                <MenuNavbar />
            </div>
        </div>
    );
}

Menu.propTypes = {
    isVisible: PropTypes.bool,
    setIsVisible: PropTypes.func
};

export default Menu;
