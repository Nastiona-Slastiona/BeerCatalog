import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Authentication from 'features/common/components/Authentication/authentication';
import Menu from 'features/common/components/Menu/menu';
import UserInfo from 'features/common/components/UserInfo/userInfo';
import requestHelper from 'src/helpers/requestHelper';
import serviceUrls from 'src/constants/serviceUrls';

import './pageHeader.scss';


function PageHeader({ image, name, setName }) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const dispatch = useDispatch();
    const isAuthorized = useSelector(state => state.users.isAuthorized);

    const hideMenu = useCallback(() => {
        setIsMenuVisible(false);
    }, []);

    const showMenu = useCallback(() => {
        setIsMenuVisible(true);
    }, []);

    const onSignOutClick = useCallback(async () => {
        await requestHelper.get(serviceUrls.signOut, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });

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

    return (
        <div>
            <div className="page-header">
                <div className="page-header__main">
                    <button
                        className="icon-menu page-header__menu"
                        label=" "
                        onClick={showMenu}
                    />
                    <Link className="page-header__logo" to="/">Beer catalog</Link>
                    <Menu isVisible={isMenuVisible} setIsVisible={hideMenu} />
                </div>
                {
                    isAuthorized
                        ? (
                            <UserInfo name={name} image={image} onClick={onSignOutClick} />
                        )
                        : (
                            <Authentication />
                        )
                }
            </div>
        </div>
    );
}

PageHeader.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    setName: PropTypes.func
};

export default PageHeader;
