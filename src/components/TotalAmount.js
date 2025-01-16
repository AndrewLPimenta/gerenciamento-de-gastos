import React from "react";

function TotalAmount({ transactions }) {
    const incomeTotal = transactions
        .filter((transaction) => transaction.type === "income")
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const expenseTotal = transactions
        .filter((transaction) => transaction.type === "expense")
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalBalance = incomeTotal - expenseTotal;

    return (
        <div>
            <h2>Total</h2>
            <p>Entradas: R$ {incomeTotal.toFixed(2)}</p>
            <p>Saídas: R$ {expenseTotal.toFixed(2)}</p>
            <p>Saldo: R$ {totalBalance.toFixed(2)}</p>
            {totalBalance < 0 && <p style={{ color: "red" }}>Atenção: Você está no negativo!</p>}
            {totalBalance > 0 && <p style={{ color: "green" }}>Parabéns, você está no positivo!</p>}
        </div>
    );
}

export default TotalAmount;
