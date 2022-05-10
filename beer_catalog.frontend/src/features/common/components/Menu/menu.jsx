import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import MenuNavbar from 'features/common/components/MenuNavbar/menuNavbar';

import './menu.scss';


function Menu({ isVisible, setIsVisible }) {
    const containerClassNames = classNames('menu__container', { 'menu__container--active': isVisible });

    return (
        <div className={containerClassNames} onClick={setIsVisible}>
            <div className="menu">
                <span className="menu__header">Beer Catalog</span>
                <MenuNavbar />
            </div>
        </div>
    );
}

Menu.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    setIsVisible: PropTypes.func
};

export default Menu;
