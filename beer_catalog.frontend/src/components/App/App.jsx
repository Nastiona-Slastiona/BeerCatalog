import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from 'components/LandingPage/landingPage';
import PageHeader from 'components/PageHeader/pageHeader';
import FavoritesPage from 'components/FavoritesPage/favoritesPage';
import BeerPage from 'components/BeerPage/beerPage';

import 'src/styles/fonts/icomoon/style.css'
import './app.css';



export default function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <PageHeader />
                {/* <Routes>
                    <Route exact path='/' element={<LandingPage/>}/>
                    <Route path='/favorites' element={<FavoritesPage/>}/>
                    <Route exact path='/beers/id=1' element={<BeerPage/>}/>
                </Routes> */}
                <BeerPage />
            </BrowserRouter>
        </div>
    );
};