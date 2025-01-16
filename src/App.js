import { useState } from 'react'; // Adicione esta linha
import './index.css';
import Header from './components/Header';
import React from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import TotalAmount from './components/TotalAmount';

function App() {

  // Agora o useState está funcionando corretamente
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <main>
      <div className="App">
        <header>
          <Header />
        </header>
        <h1>Gestão de Gastos!</h1>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <TransactionForm addTransaction={addTransaction} />
            </div>
            <div className="col-md-6">
              <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <TotalAmount transactions={transactions} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
