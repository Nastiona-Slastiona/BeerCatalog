import React from 'react';

import MenuNavbarItem from 'features/common/components/MenuNavbarItem/menuNavbarItem';

import './menuNavbar.scss';


export default function MenuNavbar() {
    return (
        <nav className="menu-navbar">
            <li>
                <MenuNavbarItem
                    link="/"
                    iconClassName="icon-drawer2 menu-navbar__item__icon"
                    name="Home"
                />
                <MenuNavbarItem
                    link="/favorites"
                    iconClassName="icon-star-full menu-navbar__item__icon"
                    name="Favorites"
                />
            </li>
        </nav>
    );
}
