import React from 'react';

import './auth.scss';


export default function SignIn() {
    return (
        <div className="auth__container">
            <form className="auth">
                <div className="auth__item">
                    <p>Email</p>
                    <input type="text" className="auth__input" placeholder="EMAIL" />
                </div>
                <div className="auth__item">
                    <p>Имя</p>
                    <input type="text" className="auth__input" placeholder="Enter your name" />
                </div>
                <hr />
                <button type="submit" className="auth__button">Sign in</button>
            </form>
        </div>
    );
}
