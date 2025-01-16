import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';  // Página principal
import TransactionPage from './pages/TransactionPage';  // Página de gestão de gastos

function App() {
  return (
    <HomePage />
  );
}

export default App;
