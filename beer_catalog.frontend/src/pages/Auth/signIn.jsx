import React, { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';

import './auth.scss';


export default function SignIn({ setName }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authorized, setAuthorized] = useState(false);

    const onEmailChange = useCallback(e => {
        setEmail(e.target.value);
    }, []);

    const onPasswordChange = useCallback(e => {
        setPassword(e.target.value);
    }, []);

    const onFormSubmit = async e => {
        e.preventDefault();

        const response = await fetch('http://localhost:7192/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                password,
                email
            })
        });

        if (response.ok) {
            const content = await response.json();
            setName(content.name);
            setAuthorized(true);
        }
    };

    if (authorized) {
        return <Navigate to="/" />;
    }

    return (
        <div className="auth__container" onSubmit={onFormSubmit}>
            <form className="auth">
                <div className="auth__item">
                    <p>Email</p>
                    <input
                        className="auth__input"
                        placeholder="Email"
                        onChange={onEmailChange}
                    />
                </div>
                <div className="auth__item">
                    <p>Password</p>
                    <input
                        className="auth__input"
                        placeholder="Password"
                        onChange={onPasswordChange}
                    />
                </div>
                <hr />
                <button type="submit" className="auth__button">Sign in</button>
            </form>
        </div>
    );
}
