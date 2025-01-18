import React, { useState } from 'react';
import TransactionForm from '../components/TransactionForm'; 
import TransactionList from '../components/TransactionList'; 
import TotalAmount from '../components/TotalAmount'; 
import Header from '../components/Header';
import Suggestion from '../components/Suggestion'; 
import '../index.css';
import Graphic from '../components/Graphic';

function TransactionPage() {
    const [transactions, setTransactions] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);  
    const [showSuggestion, setShowSuggestion] = useState(true); 

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter((transaction) => transaction.id !== id));
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <main>
            <div className='page-two'>
                <Header />
                <div className="transaction-form-page">
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <TransactionForm addTransaction={addTransaction} />
                                </div>
                                <div className="col-md-6">
                                    <TransactionList
                                        transactions={transactions}
                                        deleteTransaction={deleteTransaction}
                                    />
                                </div>
                            </div>
                            <div className="row-2">
                                <div className="col-md-12">
                                    <TotalAmount transactions={transactions} />
                                    <Graphic />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Exibindo o componente Suggestion */}
                {showSuggestion && (
                    <Suggestion
                        message="Lembre-se de adicionar suas despesas!"
                        onClose={() => setShowSuggestion(false)} // Fecha a sugestão ao clicar no botão de fechar
                    />
                )}
            </div>
        </main>
    );
}

export default TransactionPage;
