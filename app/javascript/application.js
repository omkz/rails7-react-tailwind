import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Home name="World" />);
});
