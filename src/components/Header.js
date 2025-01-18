import React, { useState } from "react";
import "../index.css";
import { Link } from 'react-router-dom';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Função para alternar o estado do menu
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav>
            {/* Links visíveis no desktop */}
            <div className="links">
                <a className="links-nav" href=".">Sobre</a>
                <Link className="links-nav" to="/">Home</Link>
                <a className="links-nav" to="../HomePage">Contato</a>
            </div>

            {/* Menu hambúrguer visível no mobile */}
            <div className="burger-container">
                {/* Remove o checkbox e usa o clique para alternar o estado */}
                <label className="burger" onClick={toggleMenu}>
                    <span className={`bar ${menuOpen ? "open" : ""}`}></span>
                    <span className={`bar ${menuOpen ? "open" : ""}`}></span>
                    <span className={`bar ${menuOpen ? "open" : ""}`}></span>
                </label>

                {/* Links do menu que aparecem quando o hambúrguer é clicado */}
                <div className={`burger-links ${menuOpen ? "open" : ""}`}>
                <Link className="links-nav" to="/">Sobre</Link>
                    <Link className="links-nav" to="/">Home</Link>
                    <Link className="links-nav" to="/">Contato</Link>
                    <Link className="links-nav" to="/">Desenvolvido por Andrew</Link>

                </div>
            </div>
        </nav>
    );
}
