/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import 'src/styles/fonts/icomoon/style';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritesPage from 'components/FavoritesPage/favoritesPage';
import LandingPage from 'components/LandingPage/landingPage';
import PageHeader from 'components/PageHeader/pageHeader';

import './app.css';


export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <PageHeader />
                <Routes>
                    <Route path="/" element={<LandingPage />} exact />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
