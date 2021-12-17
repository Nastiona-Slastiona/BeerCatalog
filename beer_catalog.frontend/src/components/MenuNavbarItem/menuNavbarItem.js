import React from 'react';
import cl from './menuNavbarItem.module.css';
import {Link}  from 'react-router-dom';

function MenuNavbarItem({children, link}) {
    return (
        <div>
            <Link className={cl.menuNavbarItem} to={link}>{children}</Link>
        </div>
    );
}

export default MenuNavbarItem;