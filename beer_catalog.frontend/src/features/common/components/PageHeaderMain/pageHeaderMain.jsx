import React, { useState } from 'react';

import Menu from 'features/common/components/Menu/menu';

import './pageHeaderMain.scss';


export default function PageHeaderMain() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const setMenuUnvisible = () => {
        setIsMenuVisible(false);
    };

    const setMenuVisible = () => {
        setIsMenuVisible(true);
    };

    return (
        <div className="page-header-main">
            <span
                className="icon-menu page-header-main__menu"
                onClick={setMenuVisible}
            />
            <span>Beer catalog</span>
            <Menu
                isVisible={isMenuVisible}
                setIsVisible={setMenuUnvisible}
            >Beer catalog
            </Menu>
        </div>
    );
}
