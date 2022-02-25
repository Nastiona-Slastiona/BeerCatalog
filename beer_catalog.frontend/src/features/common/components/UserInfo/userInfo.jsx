import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import './userInfo.scss';


function UserInfo({ name, image, onClick }) {
    const newImg = image ? `data:image/png;base64, ${image}` : false;

    return (
        <div className="userInfo__authentification">
            <p>Hello, {name}!</p>
            {
                newImg
                    ? <img alt="avatar" className="userInfo__avatar" src={newImg} />
                    : <span className="icon-user_svg1 userInfo__avatar--default" />
            }
            <Link
                className="userInfo__authentification-item"
                to="/signin"
                onClick={onClick}
            >
                Sign Out
            </Link>
        </div>
    );
}

UserInfo.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    onClick: PropTypes.func
};

export default UserInfo;
