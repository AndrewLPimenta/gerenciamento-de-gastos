import React, { useState, useEffect } from 'react';
import '../index.css'; // Certifique-se de que os estilos estão neste arquivo ou em um arquivo de CSS importado.

function TransactionList({ transactions, deleteTransaction }) {
    const [currentTransactions, setCurrentTransactions] = useState([]);

    // Atualiza a lista de transações e marca para animação de entrada
    useEffect(() => {
        const addedTransactions = transactions.map((transaction) => ({
            ...transaction,
            entering: true, // Marca para a animação de entrada
        }));
        setCurrentTransactions(addedTransactions);
    }, [transactions]);

    const handleDelete = (id) => {
        const updatedTransactions = currentTransactions.map((transaction) =>
            transaction.id === id
                ? { ...transaction, exiting: true } // Marca para a animação de saída
                : transaction
        );

        setCurrentTransactions(updatedTransactions);

        // Remove o item após a animação de saída
        setTimeout(() => {
            deleteTransaction(id);
        }, 500); // Tempo da animação (500ms)
    };

    return (
        <div className='transaction-graphic'>
            <h2>Controle Financeiro</h2>
            <ul className="transaction-list">
                {currentTransactions.map((transaction) => {
                    console.log(transaction); // Depuração

                    return (
                        <li
                            key={transaction.id}
                            className={`transaction ${transaction.entering ? 'transaction-enter-active' : ''} 
                                ${transaction.exiting ? 'transaction-exit-active' : ''} 
                                ${transaction.type === 'income' ? 'income' : 'expense'}`}
                        >
                            <div className="transaction-info">
                                <span className="transaction-description">{transaction.description}</span>
                                <div className="transaction-details">
                                    <span className="transaction-amount">R$ {transaction.amount.toFixed(2)}</span>
                                    <span className="transaction-category">({transaction.category || 'Sem categoria'})</span>
                                    <span className="transaction-type">
                                        {transaction.type === 'income' ? 'Entrada' : (transaction.type === 'expense' ? 'Despesa' : 'Tipo Desconhecido')}
                                    </span>
                                </div>
                            </div>
                            <button onClick={() => handleDelete(transaction.id)} className="delete-btn">
                                <img
                                    src="https://www.v0.app/api/image/mdi-delete-icon.png?id=eyJmbiI6ImdldEljb25IZXJvSW1hZ2UiLCJhcmdzIjp7Imljb25TZXRTbHVnIjoibWRpIiwiaWNvblNsdWciOiJkZWxldGUifX0"
                                    alt="Delete"
                                    style={{ width: '24px', height: '24px' }}
                                />
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default TransactionList;
