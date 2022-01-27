import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from 'features/common/components/Menu/menu';

import './pageHeader.scss';


export default function PageHeader() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const hideMenu = useCallback(() => {
        setIsMenuVisible(false);
    }, []);

    const showMenu = useCallback(() => {
        setIsMenuVisible(true);
    }, []);

    return (
        <div>
            <div className="page-header">
                <div className="page-header__main">
                    <button
                        className="icon-menu page-header__menu"
                        label=" "
                        onClick={showMenu}
                    />
                    <span>
                        Beer catalog
                    </span>
                    <Menu
                        isVisible={isMenuVisible}
                        setIsVisible={hideMenu}
                    />
                </div>
                <ul className="page-header__authentification">
                    <li>
                        <Link className="page-header__authentification-item" to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="page-header__authentification-item" to="/register">Register</Link>
                    </li>
                </ul>
            </div>

        </div>
    );
}
