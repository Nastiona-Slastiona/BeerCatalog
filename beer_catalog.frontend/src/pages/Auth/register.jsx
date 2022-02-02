import React, { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { registrate } from 'authentication/helpers/serverConnectionHelper';

import './auth.scss';


export default function Register() {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [register, setRegister] = useState(false);

    const onNameChange = useCallback(e => {
        setName(e.target.value);
    }, []);

    const onEmailChange = useCallback(e => {
        setEmail(e.target.value);
    }, []);

    const onImageChange = useCallback(e => {
        setImage(e.target.files);
    }, []);

    const onDateChange = useCallback(e => {
        setBirthDate(e.target.value);
    }, []);

    const onPasswordChange = useCallback(e => {
        setPassword(e.target.value);
    }, []);

    const onFormSubmit = useCallback(async e => {
        e.preventDefault();

        const response = await registrate({
            name,
            password,
            email,
            image,
            birthDate
        });

        if (response) {
            setRegister(true);
        }
    }, [birthDate, email, image, name, password]);

    if (register) {
        return <Navigate to="/signin" />;
    }

    return (
        <div className="auth__container">
            <form className="auth" onSubmit={onFormSubmit}>
                <div className="auth__item">
                    <p className="auth__fieldname">Email</p>
                    <input
                        className="auth__input"
                        placeholder="Enter your email"
                        required
                        onChange={onEmailChange}
                    />
                </div>
                <div className="auth__item">
                    <p className="auth__fieldname">Name</p>
                    <input
                        className="auth__input"
                        placeholder="Enter your name"
                        required
                        onChange={onNameChange}
                    />
                </div>
                <hr />
                <div className="auth__item">
                    <p className="auth__fieldname">Image</p>
                    <input
                        type="file"
                        className="auth__input"
                        onChange={onImageChange}
                    />
                </div>
                <div className="auth__item">
                    <p className="auth__fieldname">Birth Date</p>
                    <input
                        type="date"
                        className="auth__input"
                        required
                        onChange={onDateChange}
                    />
                </div>
                <hr />
                <div className="auth__item">
                    <p className="auth__fieldname">Password</p>
                    <input
                        className="auth__input"
                        placeholder="Enter your password"
                        required
                        onChange={onPasswordChange}
                    />
                </div>
                <button type="submit" className="auth__button">Submit</button>
            </form>
        </div>
    );
}
