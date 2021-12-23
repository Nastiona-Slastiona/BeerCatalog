import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from 'Components/LandingPage/landingPage.jsx';
import PageHeader from 'Components/PageHeader/pageHeader.jsx';
import FavoritesPage from 'Components/FavoritesPage/favoritesPage.jsx';

import 'Src/styles/fonts/icomoon/style.css'
import './App.css';


export default function App({children}) {
    return (
        <div className="App">
            <BrowserRouter>
                <PageHeader/>
                <Routes>
                    <Route exact path='/' element={<LandingPage/>}/>
                    <Route path='/favorites' element={<FavoritesPage/>}/>
                </Routes>
            </BrowserRouter>
            {children}
        </div>
    );
};