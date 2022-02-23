import React, { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { signIn } from '../../features/authentication/helpers/serverConnectionHelper';

import './signin.scss';


export default function SignIn({ setName, setImage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authorized, setAuthorized] = useState(false);

    const onEmailChange = useCallback(e => {
        setEmail(e.target.value);
    }, []);

    const onPasswordChange = useCallback(e => {
        setPassword(e.target.value);
    }, []);

    const onFormSubmit = useCallback(async e => {
        e.preventDefault();

        const response = await signIn(password, email);

        if (response) {
            setName(response.name);
            setImage(response.image);
            setAuthorized(true);
        }
    }, [password, email, setName, setImage]);

    if (authorized) {
        return <Navigate to="/" />;
    }

    return (
        <div className="signin__container" onSubmit={onFormSubmit}>
            <form className="signin">
                <div className="signin__item">
                    <p className="signin__fieldname">Email</p>
                    <input
                        className="signin__input"
                        placeholder="Email"
                        type="email"
                        required
                        onChange={onEmailChange}
                    />
                </div>
                <div className="signin__item">
                    <p className="signin__fieldname">Password</p>
                    <input
                        className="signin__input"
                        placeholder="Password"
                        type="password"
                        required
                        onChange={onPasswordChange}
                    />
                </div>
                <hr />
                <button type="submit" className="signin__button">Sign in</button>
            </form>
        </div>
    );
}
