import React from 'react';

import './input.scss';


export default function Input({
    placeholder, type, name, onChange, required = true
}) {
    return (
        <div className="input__item">
            <p className="input__fieldname">{name}</p>
            <input
                className="input__input"
                placeholder={placeholder}
                type={type}
                required={required}
                onChange={onChange}
            />
        </div>
    );
}
