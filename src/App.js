import React from 'react';
import {HashRouter} from 'react-router-dom'

import './App.css';
import Header from './Components/Header/Header';
import routes from './routes'

function App() {
  return (
    <main className="App">
      <header className='App-header'>
        <img src='' alt='logo'/>
        <Header />
      </header>
      <section className='Center'>
        <HashRouter>
          {routes}
        </HashRouter>
      </section>
    </main>
  );
}

export default App;
