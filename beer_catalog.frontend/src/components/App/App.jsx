import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import BeerPage from 'pages/BeerPage/beerPage';
import FavoritesPage from 'pages/FavoritesPage/favoritesPage';
import LandingPage from 'pages/LandingPage/landingPage';
import PageHeader from 'features/common/components/PageHeader/pageHeader';

import 'src/styles/fonts/icomoon/style';
import './app.scss';


export default function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <PageHeader />
                <Routes>
                    <Route path="/" element={<LandingPage />} exact />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/beers/:id" element={<BeerPage />} exact />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
