import React from 'react';
import MenuNavbarItem from '../MenuNavbarItem/menuNavbarItem.js';
import cl from './menuNavbar.module.css';

function MenuNavbar() {
    return (
        <nav className={cl.menuNavbarContainer}>
            <ul>
                <MenuNavbarItem link={'/'}><span className={`icon-drawer2 ${cl.menuNavbarIcon}`}></span>Home</MenuNavbarItem>
                <MenuNavbarItem link={'/favorites'}><span className={`icon-star-full ${cl.menuNavbarIcon}`}></span>Favorites</MenuNavbarItem>
            </ul>
        </nav>
    );
}

export default MenuNavbar;