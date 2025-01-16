import React, { useState, useEffect } from 'react';
import '../index.css';  // Estilo da animação de entrada e saída

function TransactionList({ transactions, deleteTransaction }) {
    const [currentTransactions, setCurrentTransactions] = useState([]);

    // Atualiza a lista de transações
    useEffect(() => {
        // Transição de entrada para cada novo item
        const addedTransactions = transactions.map((transaction) => ({
            ...transaction,
            entering: true, // Marca para a animação de entrada
        }));
        setCurrentTransactions(addedTransactions);
    }, [transactions]);  // Atualiza sempre que a lista de transações mudar

    // Função para remover o item com animação
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
        <div>
            <h2>Transações</h2>
            <ul className="transaction-list">
                {currentTransactions.map((transaction) => (
                    <li
                        key={transaction.id}
                        className={`transaction ${transaction.entering ? 'transaction-enter-active' : ''} ${transaction.exiting ? 'transaction-exit-active' : ''
                            }`}
                    >
                        <span>{transaction.description} - R$ {transaction.amount}</span>
                        <span>({transaction.category})</span>
                        <span> - {transaction.type === 'income' ? 'Entrada' : 'Despesa'}</span>
                        <button onClick={() => handleDelete(transaction.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;
