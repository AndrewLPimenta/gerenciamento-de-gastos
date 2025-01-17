import React, { useState } from "react";
import "../index.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Função para alternar o estado do menu
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav>
            {/* Links visíveis no desktop */}
            <div className="links">
                <a className="links-nav" href="#">Sobre</a>
                <a className="links-nav" href="#">Home</a>
                <a className="links-nav" href="#">Contato</a>
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
                    <a className="nav-links-" href="#">Sobre</a>
                    <a className="nav-links-" href="#">Home</a>
                    <a className="nav-links-" href="#">Contato</a>
                </div>
            </div>
        </nav>
    );
}
