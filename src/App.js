import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';  // Página inicial
import TransactionPage from './pages/TransactionPage';  // Página de gestão de gastos

function App() {
  return (
    <Router> {/* Envolvendo todo o conteúdo com Router */}
      <Routes> {/* Configurando as rotas */}
        <Route path="/" element={<HomePage />} /> {/* Página inicial */}
        <Route path="TransactionPage" element={<TransactionPage />} /> {/* Página de gestão de gastos */}
      </Routes>
    </Router>
  );
}

export default App;
