import React from 'react';
import './App.css';
import '../style/fonts/icomoon/style.css'
import LandingPage from './components/LandingPage/landingPage';
import PageHeader from './components/PageHeader/pageHeader';
import FavoritesPage from './components/FavoritesPage/favoritesPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App({children}) {
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
}

export default App;
