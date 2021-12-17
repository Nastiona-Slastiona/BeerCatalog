import React, { useState } from 'react';
import cl from "./pageHeaderMain.module.css"
import Menu from '../Menu/menu';

function PageHeaderMain() {
    const [menu, setMenu] = useState(false);
    return (
        <div className={`${cl.pageHeaderMain} ${cl.pageHeaderMainContainer}`}>
            <span className={`icon-menu ${cl.pageHeaderMainMenu}`} onClick={() => setMenu(true)}></span>
            <span>Beer catalog</span>
            <Menu visible={menu} setVisible={setMenu}>Beer catalog</Menu>
        </div>
        
    );
}

export default PageHeaderMain;