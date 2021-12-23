import React, { useState } from 'react';

import Menu from 'Components/Menu/menu.jsx';

import "./pageHeaderMain.css";


export default function PageHeaderMain() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const closeMenu = () => {
        setIsMenuVisible(false)
    };

    const setMenuVisible = () => {
        setIsMenuVisible(true)
    };

    const stayingVisible = () => {
        e => e.stopPropagation()
    };

    return (
        <div className={'page-header-main page-header-main__container'}>
            <span className={'icon-menu page-header-main__menu'} onClick={setMenuVisible}></span>
            <span>Beer catalog</span>
            <Menu isVisible={isMenuVisible} setIsVisible={closeMenu} stopClosing={stayingVisible}>Beer catalog</Menu>
        </div>  
    );
};