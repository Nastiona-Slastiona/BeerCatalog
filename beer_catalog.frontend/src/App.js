import React from 'react';
import './App.css';
import '../style/fonts/icomoon/style.css'
import LandingPage from './components/LandingPage/landingPage';
import PageHeader from './components/PageHeader/pageHeader';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <LandingPage/>
    
    </div>
  );
}

export default App;
