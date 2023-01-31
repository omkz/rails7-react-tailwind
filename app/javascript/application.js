import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductList from './components/ProductList';

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ProductList />);
});
