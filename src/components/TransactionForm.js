import React, { useState } from "react";

function TransactionForm({ addTransaction }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("expense");
    const [category, setCategory] = useState("Outros");

    // Função para submeter o formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Date.now(), // Usando o timestamp como ID
            description,
            amount: parseFloat(amount),
            type,
            category,
        };
        addTransaction(newTransaction);
        setDescription("");
        setAmount("");
        setType("expense");
        setCategory("Outros");
    };

    return (
        <div>
            <h2>Adicionar Transação</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="expense">Gastei</option>
                    <option value="income">Ganhei</option>
                </select>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Outros">Outros</option>
                    <option value="Educação">Educação</option>
                    <option value="Roupas">Roupas</option>
                    <option value="Lazer">Lazer</option>
                    <option value="Alimentação">Alimentação</option>
                    <option value="Saúde">Saúde</option>
                    <option value="Transporte">Transporte</option>
                </select>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
}

export default TransactionForm;
