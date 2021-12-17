import React from 'react';
import MenuNavbar from '../MenuNavbar/menuNavbar';
import cl from './menu.module.css';

function Menu({visible, setVisible, children}) {
    const classes = [cl.menuContainer];

    if(visible) {
        classes.push(cl.active);
    }

    return (
        <div className={classes.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.menu} onClick={e => e.stopPropagation()}>
                <span className={cl.menuHeader} >{children}</span>
                <MenuNavbar/>
            </div>
        </div>
    );
}

export default Menu;
