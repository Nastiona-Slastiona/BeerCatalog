import React, { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { registrate } from 'authentication/helpers/serverConnectionHelper';

import Input from 'components/base/Input/input';

import './register.scss';


export default function Register() {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState('');
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
            setWarning('Passwords differ one from another');
        } else {
            setWarning('');
        }
    }, [password]);

    const fields = [{
        type: '', name: 'Name', onChange: onNameChange, placeholder: 'Name'
    }, {
        type: 'email', name: 'Email', onChange: onEmailChange, placeholder: 'Email'
    }, {
        type: 'date', name: 'BirthDate', onChange: onDateChange, placeholder: 'BirthDate'
    }, {
        type: 'file', name: 'Image', onChange: onImageChange, placeholder: 'Image', required: false
    }, {
        type: 'password', name: 'Password', onChange: onPasswordChange, placeholder: 'Password'
    }, {
        type: 'password', name: 'Password', onChange: onConfirmPasswordChange, placeholder: 'Confirm your password'
    }];

    const onFormSubmit = useCallback(async e => {
        e.preventDefault();
        if (confirmPassword === password) {
            setWarning('');
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
            setWarning('Passwords differ one from another');
        }
    }, [birthDate, confirmPassword, email, image, name, password]);

    if (register) {
        return <Navigate to="/signin" />;
    }

    return (
        <div className="register__container">
            <form className="register" encType="multipart/form-data" onSubmit={onFormSubmit}>
                {
                    fields.map((field, index) => {
                        return (
                            <Input
                                key={index}
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                required={field.required}
                                onChange={field.onChange}
                            />
                        );
                    })
                }
                <p className="register__warning">{warning}</p>
                <button type="submit" className="register__button">Submit</button>
            </form>
        </div>
    );
}
