import React, { useState, useEffect } from 'react';
import deleteIcon from '../assets/mdi-delete-icon.png';


import '../index.css';  // Estilo da animação de entrada e saída

function TransactionList({ transactions, deleteTransaction }) {
    const [currentTransactions, setCurrentTransactions] = useState([]);

    // Atualiza a lista de transações e marca para animação de entrada
    useEffect(() => {
        const addedTransactions = transactions.map((transaction) => ({
            ...transaction,
            entering: true,  // Marca para a animação de entrada
        }));
        setCurrentTransactions(addedTransactions);
    }, [transactions]);  // Atualiza sempre que a lista de transações mudar

    // Função para remover o item com animação de saída
    const handleDelete = (id) => {
        const updatedTransactions = currentTransactions.map((transaction) =>
            transaction.id === id
                ? { ...transaction, exiting: true }  // Marca para a animação de saída
                : transaction
        );

        setCurrentTransactions(updatedTransactions);

        // Usa setTimeout para excluir após a animação de saída
        setTimeout(() => {
            deleteTransaction(id);  // Remove o item após a animação
        }, 500);  // Tempo da animação (500ms)
    };

    return (
        <div className='transaction-graphic'>
            <h2>Transações</h2>
            <ul className="transaction-list">
                {currentTransactions.map((transaction) => (
                    <li
                        key={transaction.id}
                        className={`transaction ${transaction.entering ? 'transaction-enter-active' : ''} 
                        ${transaction.exiting ? 'transaction-exit-active' : ''}`}
                    >
                        <span>{transaction.description} - R$ {transaction.amount}</span>
                        <span>({transaction.category})</span>
                        <span> - {transaction.type === 'income' ? 'Entrada' : 'Despesa'}</span>
                        <button onClick={() => handleDelete(transaction.id)} className="delete-btn">

                        <img
                                src="https://www.v0.app/api/image/mdi-delete-icon.png?id=eyJmbiI6ImdldEljb25IZXJvSW1hZ2UiLCJhcmdzIjp7Imljb25TZXRTbHVnIjoibWRpIiwiaWNvblNsdWciOiJkZWxldGUifX0"
                                alt="Delete"
                                style={{ width: '24px', height: '24px' }} // Ajuste do tamanho do ícone
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;
