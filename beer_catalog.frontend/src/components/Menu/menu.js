import React from 'react';
import MenuNavbar from '../MenuNavbar/menuNavbar';
import cl from './menu.module.css';

function Menu() {
    return (
        <div className={cl.menuContainer}>
            <span className={cl.menuHeader}>Beer Catalog</span>
            <MenuNavbar/>
        </div>
    );
}

export default Menu;
