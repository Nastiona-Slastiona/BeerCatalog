import { Link } from 'react-router-dom';
import React from 'react';

import './authentication.scss';


export default function Authentication() {
    return (
        <div className="authentification">
            <Link className="authentification__item" to="/signin">Sign In</Link>
            <Link className="authentification__item" to="/register">Register</Link>
        </div>
    );
}
