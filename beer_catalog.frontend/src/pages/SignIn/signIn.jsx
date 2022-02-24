import React, { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { signIn } from 'features/authentication/helpers/serverConnectionHelper';

import Input from 'components/base/Input/input';

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

    const fields = [{
        type: 'email', name: 'Email', onChange: onEmailChange
    }, { type: 'password', name: 'Password', onChange: onPasswordChange }];

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
                {
                    fields.map((field, index) => {
                        return (
                            <Input
                                key={index}
                                name={field.name}
                                type={field.type}
                                placeholder={field.name}
                                onChange={field.onChange}
                            />
                        );
                    })
                }
                <hr />
                <button type="submit" className="signin__button">Sign in</button>
            </form>
        </div>
    );
}
