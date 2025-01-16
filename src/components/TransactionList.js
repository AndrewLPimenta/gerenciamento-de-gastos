import React from "react";

function TransactionList({ transactions, deleteTransaction }) {
    return (
        <div>
            <h2>Transações</h2>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        <span>{transaction.description} - {transaction.amount} </span>
                        <span>({transaction.category})</span>
                        <span> - {transaction.type === "income" ? "Entrada" : "Despesa"}</span>
                        <button onClick={() => deleteTransaction(transaction.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;
