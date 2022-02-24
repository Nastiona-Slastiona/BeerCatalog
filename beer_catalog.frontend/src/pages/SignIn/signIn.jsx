import React, { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Input from 'components/base/Input/input';
import requestHelper from 'src/helpers/requestHelper';
import serviceUrls from 'src/constants/serviceUrls';

import './signin.scss';


function SignIn({ setName }) {
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

        const response = await requestHelper.get(serviceUrls.signIn, {
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

        if (response) {
            setName(response.name);
            setAuthorized(true);
        }
    }, [password, email, setName]);

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

SignIn.propTypes = {
    setName: PropTypes.func
};

export default SignIn;
