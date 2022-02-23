import React, { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { registrate } from 'authentication/helpers/serverConnectionHelper';

import './register.scss';


export default function Register() {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState('');
    const [formWarning, setFormWarning] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [register, setRegister] = useState(false);

    const onNameChange = useCallback(e => {
        setName(e.target.value);
    }, []);

    const onEmailChange = useCallback(e => {
        setEmail(e.target.value);
    }, []);

    const onImageChange = useCallback(e => {
        setImage(e.target.files[0]);
    }, []);

    const onDateChange = useCallback(e => {
        setBirthDate(e.target.value);
    }, []);

    const onPasswordChange = useCallback(e => {
        setPassword(e.target.value);
    }, []);

    const onConfirmPasswordChange = useCallback(e => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setWarning('This password differs from the previous one');
        } else {
            setWarning('');
        }
    }, [password]);

    const onFormSubmit = useCallback(async e => {
        e.preventDefault();
        if (confirmPassword === password) {
            setFormWarning('');
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
        } else {
            setFormWarning('Passwords differ one from another');
        }
    }, [birthDate, confirmPassword, email, image, name, password]);

    if (register) {
        return <Navigate to="/signin" />;
    }

    return (
        <div className="register__container">
            <form className="register" encType="multipart/form-data" onSubmit={onFormSubmit}>
                <p className="register__warning">{formWarning}</p>
                <div className="register__item">
                    <p className="register__fieldname">Email</p>
                    <input
                        className="register__input"
                        placeholder="Enter your email"
                        type="email"
                        required
                        onChange={onEmailChange}
                    />
                </div>
                <div className="register__item">
                    <p className="register__fieldname">Name</p>
                    <input
                        className="register__input"
                        placeholder="Enter your name"
                        required
                        onChange={onNameChange}
                    />
                </div>
                <hr />
                <div className="register__item">
                    <p className="register__fieldname">Image</p>
                    <input
                        type="file"
                        className="register__input"
                        onChange={onImageChange}
                    />
                </div>
                <div className="register__item">
                    <p className="register__fieldname">Birth Date</p>
                    <input
                        type="date"
                        className="register__input"
                        required
                        onChange={onDateChange}
                    />
                </div>
                <hr />
                <div className="register__item">
                    <p className="register__fieldname">Password</p>
                    <input
                        className="register__input"
                        placeholder="Enter your password"
                        type="password"
                        required
                        onChange={onPasswordChange}
                    />
                </div>
                <p>{warning}</p>
                <div className="register__item">
                    <p className="register__fieldname">Password</p>
                    <input
                        className="register__input"
                        placeholder="Confirm your password"
                        type="password"
                        required
                        onChange={onConfirmPasswordChange}
                    />
                </div>
                <button type="submit" className="register__button">Submit</button>
            </form>
        </div>
    );
}
