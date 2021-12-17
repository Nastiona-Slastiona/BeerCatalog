import React from 'react';
import cl from "./pageHeaderMain.module.css"

function PageHeaderMain() {
    return (
        <div className={`${cl.pageHeaderMain} ${cl.pageHeaderMainContainer}`}>
            <span className={`icon-menu ${cl.pageHeaderMainMenu}`}></span>
            <span>Beer catalog</span>
        </div>
    );
}

export default PageHeaderMain;