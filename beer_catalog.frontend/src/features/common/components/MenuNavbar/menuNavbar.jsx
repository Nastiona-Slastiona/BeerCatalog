import React from 'react';

import MenuNavbarItem from 'features/common/components/MenuNavbarItem/menuNavbarItem';

import './menuNavbar.scss';


export default function MenuNavbar() {
    const menuItems = [{
        link: '/', iconClassName: 'icon-drawer2', name: 'Home'
    }, {
        link: '/favorites', iconClassName: 'icon-star-full', name: 'Favorites'
    }];

    return (
        <nav className="menu-navbar">
            <li>
                {
                    menuItems.map((menuItem, index) => (
                        <MenuNavbarItem
                            key={index}
                            link={menuItem.link}
                            iconClassName={menuItem.iconClassName}
                            name={menuItem.name}
                        />
                    ))
                }
            </li>
        </nav>
    );
}
