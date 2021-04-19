import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import './style/global.styl';

window.onload = () => {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('react')
  );
};
