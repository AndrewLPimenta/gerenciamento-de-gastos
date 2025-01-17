import React, { useState, useEffect } from 'react'; // Importando corretamente useState e useEffect
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../index.css';

function HomePage() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <main>
            <div className="home-page">
                <Header />
                <div className={`banner ${isVisible ? 'show' : ''}`}>
                    <div className="banner-content">
                        <h2>Bem-vindo à Gestão de Gastos!</h2>
                        <p>Essa é a página inicial do aplicativo. Clique abaixo para acessar a página de Gestão de Gastos.</p>
                        {/* Usando Link ao invés de window.location.href */}
                        <Link to="TransactionPage">
                            <button className="link-software">
                                Ir para a Gestão de Gastos
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default HomePage;
