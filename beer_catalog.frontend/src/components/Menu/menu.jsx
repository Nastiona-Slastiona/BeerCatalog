import React from 'react';

import MenuNavbar from 'Components/MenuNavbar/menuNavbar.jsx';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './menu.css';


function Menu({isVisible, setIsVisible, children, stopClosing}) {
    const classes = classNames('menu__container', {'menu__container--active': isVisible});

    return (
        <div className={classes} onClick={setIsVisible}>
            <div className={'menu'} onClick={stopClosing}>
                <span className={'menu__header'} >{children}</span>
                <MenuNavbar/>
            </div>
        </div>
    );
}

Menu.propTypes = {
    isVisible: PropTypes.bool,
    setVisible: PropTypes.func,
    stopClosing: PropTypes.func,

};

export default Menu;
