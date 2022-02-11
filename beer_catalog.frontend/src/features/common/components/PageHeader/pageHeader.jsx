import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Menu from 'features/common/components/Menu/menu';
import { signOut } from 'authentication/helpers/serverConnectionHelper';
import user from 'src/static/user';

import './pageHeader.scss';


export default function PageHeader({ image, name, setName }) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const dispatch = useDispatch();
    const isAuthorized = useSelector(state => state.users.isAuthorized);

    const hideMenu = useCallback(() => {
        setIsMenuVisible(false);
    }, []);

    const showMenu = useCallback(() => {
        setIsMenuVisible(true);
    }, []);

    const onSignOutClick = useCallback(() => {
        signOut();

        setName('');
        dispatch({
            type: 'users/setUserData',
            payload: {
                isAuthorized: false,
                email: ''
            }
        });
        dispatch({ type: 'beers/initialStateSet' });
    }, [dispatch, setName]);
    const newImg = image ? `data:image/png;base64, ${image}` : false;

    return (
        <div>
            <div className="page-header">
                <div className="page-header__main">
                    <button
                        className="icon-menu page-header__menu"
                        label=" "
                        onClick={showMenu}
                    />
                    <Link className="page-header__logo" to="/">
                        Beer catalog
                    </Link>
                    <Menu
                        isVisible={isMenuVisible}
                        setIsVisible={hideMenu}
                    />
                </div>
                {
                    isAuthorized
                        ? (
                            <ul className="page-header__authentification">
                                <p>Hello, {name}!</p>
                                <img alt="avatar" className="page-header__avatar" src={newImg || user} />
                                <li>
                                    <Link
                                        className="page-header__authentification-item"
                                        to="/signin"
                                        onClick={onSignOutClick}
                                    >
                                        Sign Out
                                    </Link>
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
