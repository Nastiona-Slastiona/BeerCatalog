import React, { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';

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
        setImage(e.target.value);
    }, []);

    const onDateChange = useCallback(e => {
        setBirthDate(e.target.value);
    }, []);

    const onPasswordChange = useCallback(e => {
        setPassword(e.target.value);
    }, []);

    const onFormSubmit = async e => {
        e.preventDefault();

        const response = await fetch('http://localhost:7192/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                password,
                email,
                image,
                birthDate
            })
        });

        if (response.ok) {
            const content = await response.json();
            setRegister(true);
            console.log(content);
        }
    };

    if (register) {
        return <Navigate to="/signin" />;
    }

    return (
        <div className="auth__container">
            <form className="auth" onSubmit={onFormSubmit}>
                <div className="auth__item">
                    <p>Email</p>
                    <input
                        className="auth__input"
                        placeholder="Enter your email"
                        required
                        onChange={onEmailChange}
                    />
                </div>
                <div className="auth__item">
                    <p>Name</p>
                    <input
                        className="auth__input"
                        placeholder="Enter your name"
                        required
                        onChange={onNameChange}
                    />
                </div>
                <hr />
                <div className="auth__item">
                    <p>Image</p>
                    <input
                        type="file"
                        className="auth__input"
                        onChange={onImageChange}
                    />
                </div>
                <div className="auth__item">
                    <p>Birth Date</p>
                    <input
                        type="date"
                        className="auth__input"
                        required
                        onChange={onDateChange}
                    />
                </div>
                <hr />
                <div className="auth__item">
                    <p>Password</p>
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
