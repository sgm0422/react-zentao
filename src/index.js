import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header/index.js';
import Main from './component/Main/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App">
    <Header />
    <Main />
  </div>
);