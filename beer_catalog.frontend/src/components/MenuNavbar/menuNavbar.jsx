import React from 'react';

import MenuNavbarItem from 'components/MenuNavbarItem/menuNavbarItem';

import './menuNavbar.css';


export default function MenuNavbar() {
    return (
        <nav className={'menu-navbar__container'}>
            <ul>
                <MenuNavbarItem link={'/'}>
                    <span className={'icon-drawer2 menu-navbar__icon'}></span>
                    Home
                </MenuNavbarItem>
                <MenuNavbarItem link={'/favorites'}>
                    <span className={'icon-star-full menu-navbar__icon'}></span>
                    Favorites
                </MenuNavbarItem>
            </ul>
        </nav>
    );
};