import React, { useState, useEffect } from 'react';


function TotalAmount({ transactions, handleDelete }) {
    const incomeTotal = transactions
        .filter((transaction) => transaction.type === 'income')
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const expenseTotal = transactions
        .filter((transaction) => transaction.type === 'expense')
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalBalance = incomeTotal - expenseTotal;

    const [animate, setAnimate] = useState(false);

    // Trigger a animação sempre que o totalBalance mudar
    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 500); // Duração da animação de 0.5s
        return () => clearTimeout(timer);
    }, [incomeTotal, expenseTotal, totalBalance]);

    return (
        <div className={`total-container ${animate ? 'animate' : ''}`}>
            <h2>Total</h2>
            <p>Entradas: R$ {incomeTotal.toFixed(2)}</p>
            <p>Saídas: R$ {expenseTotal.toFixed(2)}</p>
            <p>Saldo: R$ {totalBalance.toFixed(2)}</p>
            {totalBalance < 0 && <p style={{ color: 'red' }}>Atenção: Você está no negativo!</p>}
            {totalBalance > 0 && <p style={{ color: 'green' }}>Parabéns, você está no positivo!</p>}
            
            
        </div>
    );
}

export default TotalAmount;
