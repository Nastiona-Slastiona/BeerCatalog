import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from 'features/common/components/Menu/menu';

import './pageHeader.scss';


export default function PageHeader({ name }) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const hideMenu = useCallback(() => {
        setIsMenuVisible(false);
    }, []);

    const showMenu = useCallback(() => {
        setIsMenuVisible(true);
    }, []);

    const onSignOutClick = useCallback(async () => {
        await fetch('https://localhost:7192/signout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });
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
                {
                    name
                        ? (
                            <ul className="page-header__authentification">
                                <p>Hello {name}</p>
                                <li>
                                    <Link className="page-header__authentification-item" to="/signin" onClick={onSignOutClick}>Sign Out</Link>
                                </li>
                            </ul>
                        )
                        : (
                            <ul className="page-header__authentification">
                                <li>
                                    <Link className="page-header__authentification-item" to="/signin">Sign In</Link>
                                </li>
                                <li>
                                    <Link className="page-header__authentification-item" to="/register">Register</Link>
                                </li>
                            </ul>
                        )

                }
            </div>

        </div>
    );
}
