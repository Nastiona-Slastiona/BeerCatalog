/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHeader from 'features/common/components/PageHeader/pageHeader';
import BeerPage from 'pages/BeerPage/beerPage';
import FavoritesPage from 'pages/FavoritesPage/favoritesPage';
import LandingPage from 'pages/LandingPage/landingPage';

import 'src/styles/fonts/icomoon/style.css';
import './app.css';


export default function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <PageHeader />
                <Routes>
                    <Route path="/" element={<LandingPage />} exact />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/beers/id=:id" element={<BeerPage />} exact />
                </Routes>
                {/* <BeerPage /> */}
            </BrowserRouter>
        </div>
    );
}
