import React from 'react';
import cl from './menuNavbarItem.module.css';

function MenuNavbarItem({children}) {
    return (
        <div>
            <a className={cl.menuNavbarItem} href="#">{children}</a>
        </div>
    );
}

export default MenuNavbarItem;