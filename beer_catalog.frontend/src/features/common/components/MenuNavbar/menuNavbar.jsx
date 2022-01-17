import React from 'react';

import MenuNavbarItem from 'features/common/components/MenuNavbarItem/menuNavbarItem';

import './menuNavbar.scss';


export default function MenuNavbar() {
    return (
        <nav className="menu-navbar">
            <li>
                <MenuNavbarItem
                    link="/"
                    iconClassName="icon-drawer2"
                    name="Home"
                />
                <MenuNavbarItem
                    link="/favorites"
                    iconClassName="icon-star-full"
                    name="Favorites"
                />
            </li>
        </nav>
    );
}
