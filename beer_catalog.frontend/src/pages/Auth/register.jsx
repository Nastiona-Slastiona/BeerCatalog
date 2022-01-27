import React from 'react';

import './auth.scss';


export default function Register() {
    return (
        <div className="auth__container">
            <form className="auth">
                <div className="auth__item">
                    <p>Email</p>
                    <input type="text" className="auth__input" placeholder="EMAIL" />
                </div>
                <div className="auth__item">
                    <p>Имя</p>
                    <input type="text" className="auth__input" placeholder="Enter your name" />
                </div>
                <hr />
                <div className="auth__item">
                    <p>Изображение</p>
                    <input type="file" className="auth__input" id="file-uploader" />
                </div>
                <div className="auth__item">
                    <p>Дата рождения</p>
                    <input type="date" className="auth__input" />
                </div>
                <button type="submit" className="auth__button">Submit</button>
            </form>
        </div>
    );
}
