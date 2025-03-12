import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NvsApp from './NvsApp';
import reportWebVitals from './reportWebVitals';

const nvs_root = ReactDOM.createRoot(document.getElementById('nvs_root'));
nvs_root.render(
  <React.StrictMode>
    <NvsApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
