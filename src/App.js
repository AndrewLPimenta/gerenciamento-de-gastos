import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';  // Página principal
import TransactionPage from './pages/TransactionPage';  // Página de gestão de gastos

function App() {
  return (
    <Router>
      <div className="App">
        {/* Substituindo o Switch por Routes */}
        <Routes>
          {/* Página Principal */}
          <Route path="/" element={<HomePage />} />
          {/* Página de Gestão de Gastos */}
          <Route path="/gestao-gastos" element={<TransactionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
