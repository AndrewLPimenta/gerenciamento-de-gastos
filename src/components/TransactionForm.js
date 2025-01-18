import React, { useState } from "react";
import '../index.css';

function TransactionForm({ addTransaction }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");  // Deixando o valor vazio inicialmente
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const [source, setSource] = useState("");  // Adicionando o estado para 'source'
    const [error, setError] = useState("");  // Para armazenar mensagens de erro

    // Função para tratar a entrada de valor no campo 'amount'
    const handleAmountChange = (e) => {
        let value = e.target.value;

        // Remover qualquer caractere não numérico (permitindo apenas números, vírgula e ponto)
        value = value.replace(/[^\d,\.]/g, '');
        // Permitir apenas um ponto ou vírgula como separador decimal
        value = value.replace(/(\..*)\./g, '$1');  // Permite apenas um ponto
        value = value.replace(/(\,\.*)/g, '$1');   // Permite apenas uma vírgula

        setAmount(value);  // Atualiza o valor no estado
    };

    // Função para enviar o formulário
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validação: Verificar se todos os campos obrigatórios foram preenchidos
        if (!description || !amount || !type || (type === "expense" && !category) || (type === "income" && !source)) {
            setError("Por favor, preencha todos os campos obrigatórios.");
            return;  // Não envia se algum campo estiver faltando
        }

        // Remover o valor formatado do "R$" caso tenha sido colocado, e preparar para ser salvo
        const formattedAmount = amount.replace(',', '.');  // Garantir que a vírgula seja convertida para ponto

        const newTransaction = {
            id: Date.now(),  // Usando o timestamp como ID
            description,
            amount: parseFloat(formattedAmount),  // Convertendo para número
            type,
            category: type === "expense" ? category : "Sem categoria",  // Categoria obrigatória apenas para 'expense'
            source: type === "income" ? source : "Sem origem",  // Fonte obrigatória apenas para 'income'
        };

        addTransaction(newTransaction);  // Envia a nova transação

        // Resetando os campos após o envio
        setDescription("");
        setAmount("");
        setType("");
        setCategory("");
        setSource("");
        setError("");  // Limpa a mensagem de erro
    };

    // Função que trata o campo 'source'
    const handleSourceChange = (e) => {
        const selectedSource = e.target.value;
        setSource(selectedSource);
    };

    // Função que trata o campo 'category'
    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
    };

    return (
        <div className="transaction-form-page">
            <form className="form-inputs" onSubmit={handleSubmit}>
                <h2>Cuide de suas Finanças!</h2>

                {/* Exibição de erro */}
                {error && <div className="error-message">{error}</div>}

                {/* Campo para a descrição */}
                <div className="inputGroup">
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="input-from"
                    />
                    <label htmlFor="description">Descrição</label>
                </div>

                {/* Campo para o valor (amount) */}
                <div className="inputGroup">
                    <input
                        type="text"  // Alterado para 'text' para controlar a entrada
                        id="amount"
                        value={amount}
                        onChange={handleAmountChange}  // Usando handleAmountChange
                        required
                        className="input-from"
                    />
                    <label htmlFor="amount">Valor</label>
                </div>

                {/* Select para "Gastei" ou "Ganhei" */}
                <div className="category-group">
                    <select
                        className="Select-Gest"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="" disabled>Tipo de Transação ▼</option>
                        <option value="expense">Gastei</option>
                        <option value="income">Ganhei</option>
                    </select>

                    {/* Select de categoria (Desabilitado se for "Ganhei") */}
                    <select
                        className="Select-Gest"
                        value={category}
                        onChange={handleCategoryChange}
                        disabled={type === "income"}  // Desabilitar se for ganho
                        style={{
                            backgroundColor: type === "income" ? "#e0e0e0" : "#fff",  // Estilo de campo desabilitado
                            color: type === "income" ? "#a0a0a0" : "#000"
                        }}
                    >
                        <option value="" disabled>Despesas (Saídas) ▼</option>
                        <option value="Outros">Outros</option>
                        <option value="Educação">Educação</option>
                        <option value="Roupas">Roupas</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Alimentação">Alimentação</option>
                        <option value="Saúde">Saúde</option>
                        <option value="Transporte">Transporte</option>
                    </select>

                    {/* Select de origem (Desabilitado se for "Gastei") */}
                    <select
                        className="Select-Gest"
                        value={source}
                        onChange={handleSourceChange}
                        disabled={type === "expense"}  // Desabilitar se for gasto
                        style={{
                            backgroundColor: type === "expense" ? "#e0e0e0" : "#fff",  // Estilo de campo desabilitado
                            color: type === "expense" ? "#a0a0a0" : "#000"
                        }}
                    >
                        <option value="" disabled>Receita (Entradas) ▼</option>
                        <option value="Trabalho Formal">Trabalho Formal</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Venda de Coisas Pessoais">Venda de Coisas Pessoais</option>
                        <option value="Presente">Presente</option>
                        <option value="Dinheiro de Ajuda">Dinheiro de Ajuda</option>
                        <option value="Investimentos">Investimentos</option>
                        <option value="Outros">Outros</option>
                    </select>

                    {/* Botão para adicionar a transação */}
                    <button className="Create-Gest" type="submit">
                        <span>
                            <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
                            </svg>
                            Adicionar
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TransactionForm;
