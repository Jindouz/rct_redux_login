import React from 'react';
import './App.css';
import Nav from './Nav';
import Main from './features/counter/Main';
import Footer from './features/counter/Footer';

function App() {
  return (
    <div className="App">
        <Nav />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
