import React from 'react';
import {HashRouter} from 'react-router-dom'

import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';

function App() {
  return (
    <main className="App">
      <header className='App-header'>
        <img src='' alt='logo'/>
        <Header />
      </header>
      <section className='Center'>
        <HashRouter>
          <Dashboard />
          <Wizard />
        </HashRouter>
      </section>
    </main>
  );
}

export default App;
