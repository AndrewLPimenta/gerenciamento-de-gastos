import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';  // Página principal
import TransactionPage from './pages/TransactionPage';  // Página de gestão de gastos

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Página Principal */}
          <Route path="./pages/HomePage.js" element={<HomePage />} />
          {/* Página de Gestão de Gastos */}
          <Route path="./pages/TransactionPage.js" element={<TransactionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
