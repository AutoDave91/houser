import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';

function App() {
  return (
    <main className="App">
      <Header />
      <Dashboard />
      <Wizard />
    </main>
  );
}

export default App;
