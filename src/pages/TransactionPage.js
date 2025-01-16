import React, { useState } from 'react';
import TransactionForm from '../components/TransactionForm';  // Componente de formulário
import TransactionList from '../components/TransactionList';  // Componente de lista de transações
import TotalAmount from '../components/TotalAmount';  // Componente de total de gastos

function TransactionPage() {
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
                    <h1>Gestão de Gastos</h1>
                </header>
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
            </div>
        </main>
    );
}

export default TransactionPage;