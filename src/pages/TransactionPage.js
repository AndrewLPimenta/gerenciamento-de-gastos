import React, { useState } from 'react';
import TransactionForm from '../components/TransactionForm'; // Componente de formulário
import TransactionList from '../components/TransactionList'; // Componente de lista de transações
import TotalAmount from '../components/TotalAmount'; // Componente de total de gastos
import Header from '../components/Header';
import Suggestion from '../components/Suggestion'; // Importe o componente Suggestion
import '../index.css';

function TransactionPage() {
    const [transactions, setTransactions] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);  // Estado para controlar o menu
    const [showSuggestion, setShowSuggestion] = useState(true); // Controle de visibilidade da sugestão

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter((transaction) => transaction.id !== id));
    };

    // Função para alternar o estado do menu
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
                            <div className="row">
                                <div className="col-md-12">
                                    <TotalAmount transactions={transactions} />
                                </div>
                            </div>
                        </div>
                        <div >
                                <div >
                                </div>
                            </div>
                    </section>
                </div>
            </div>

            {/* Componente de sugestão */}
            {showSuggestion && (
                <Suggestion
                    message="Lembre-se de adicionar suas despesas!"
                    onClose={() => setShowSuggestion(false)} // Fecha a sugestão ao clicar no botão de fechar
                />
            )}
        </main>
    );
}

export default TransactionPage;
