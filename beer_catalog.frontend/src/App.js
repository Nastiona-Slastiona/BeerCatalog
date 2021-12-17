import React from 'react';
import './App.css';
import '../style/fonts/icomoon/style.css'
import LandingPage from './components/LandingPage/landingPage';
import PageHeader from './components/PageHeader/pageHeader';
import FavoritesPage from './components/FavoritesPage/favoritesPage';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      {/* <LandingPage/> */}
      <FavoritesPage/>    
    </div>
  );
}

export default App;
