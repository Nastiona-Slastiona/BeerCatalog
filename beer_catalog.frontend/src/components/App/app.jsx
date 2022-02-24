import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import BeerPage from 'pages/BeerPage/beerPage';
import FavoritesPage from 'pages/FavoritesPage/favoritesPage';
import LandingPage from 'pages/LandingPage/landingPage';
import PageHeader from 'features/common/components/PageHeader/pageHeader';
import Register from 'pages/Register/register';
import SignIn from 'pages/SignIn/signIn';
import requestHelper from 'src/helpers/requestHelper';
import serviceUrls from 'src/constants/serviceUrls';

import 'src/styles/fonts/icomoon/style';
import './app.scss';


export default function App() {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        (
            async () => {
                const user = await requestHelper.get(serviceUrls.getUser, {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });
                const userImage = await requestHelper.get(serviceUrls.getUserImage, {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                if (user) {
                    setName(user.name);
                    user.image = userImage;
                    setImage(userImage);
                }
            }
        )();
    });

    return (
        <div className="app">
            <BrowserRouter>
                <PageHeader image={image} name={name} setName={setName} />
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
