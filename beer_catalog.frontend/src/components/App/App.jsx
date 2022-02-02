import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import BeerPage from 'pages/BeerPage/beerPage';
import FavoritesPage from 'pages/FavoritesPage/favoritesPage';
import LandingPage from 'pages/LandingPage/landingPage';
import PageHeader from 'features/common/components/PageHeader/pageHeader';
import Register from 'pages/Auth/register';
import SignIn from 'pages/Auth/signIn';

import 'src/styles/fonts/icomoon/style';
import './app.scss';


export default function App() {
    const [authorized, setAuthorized] = useState(false);
    const [name, setName] = useState('');
    useEffect(() => {
        if (!authorized) {
            (
                async () => {
                    const response = await fetch('http://localhost:7192/user', {
                        headers: { 'Content-Type': 'application/json' },
                        credentials: 'include'
                    });

                    if (response.ok) {
                        const user = await response.json();
                        setName(user.name);
                    }
                    if (name) {
                        setAuthorized(true);
                    }
                }
            )();
        }
    });

    return (
        <div className="app">
            <BrowserRouter>
                <PageHeader name={name} setName={setName} />
                <Routes>
                    <Route path="/" element={<LandingPage />} exact />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/beers/:id" element={<BeerPage />} exact />
                    <Route path="/signin" element={<SignIn setName={setName} />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
