import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import BeerPage from 'pages/BeerPage/beerPage';
import FavoritesPage from 'pages/FavoritesPage/favoritesPage';
import LandingPage from 'pages/LandingPage/landingPage';
import PageHeader from 'features/common/components/PageHeader/pageHeader';
import Register from 'pages/Auth/register';
import SignIn from 'pages/Auth/signIn';
import { getUser } from 'authentication/helpers/serverConnectionHelper';

import 'src/styles/fonts/icomoon/style';
import './app.scss';


export default function App() {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        (
            async () => {
                const user = await getUser();

                if (user) {
                    setName(user.name);
                    setImage(user.image);
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
                    <Route path="/signin" element={<SignIn setName={setName} setImage={setImage} />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
