import React, { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import getUserFavoriteBeersHelper from 'authentication/helpers/getUserFavoriteBeersHelper';
import { signIn } from 'authentication/helpers/serverConnectionHelper';

import './auth.scss';


export default function SignIn({ setName, setImage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authorized, setAuthorized] = useState(false);
    const dispatch = useDispatch();


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
            const favoriteBeers = getUserFavoriteBeersHelper(response);

            dispatch({ type: 'beers/favoriteBeersSet', payload: favoriteBeers });
            setName(response.name);
            setImage(response.image);
            dispatch({
                type: 'users/setUserData',
                payload: {
                    isAuthorized: true,
                    email: response.email
                }
            });
            setAuthorized(true);
        }
    }, [password, email, setName, setImage, dispatch]);

    if (authorized) {
        return <Navigate to="/" />;
    }

    return (
        <div className="auth__container" onSubmit={onFormSubmit}>
            <form className="auth">
                <div className="auth__item">
                    <p className="auth__fieldname">Email</p>
                    <input
                        className="auth__input"
                        placeholder="Email"
                        type="email"
                        required
                        onChange={onEmailChange}
                    />
                </div>
                <div className="auth__item">
                    <p className="auth__fieldname">Password</p>
                    <input
                        className="auth__input"
                        placeholder="Password"
                        type="password"
                        required
                        onChange={onPasswordChange}
                    />
                </div>
                <hr />
                <button type="submit" className="auth__button">Sign in</button>
            </form>
        </div>
    );
}
