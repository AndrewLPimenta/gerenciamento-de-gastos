import React, { useState, useEffect } from "react";
import "../index.css"; // Inclua a estilização aqui

function Suggestion({ message, onClose }) {
    const [isVisible, setIsVisible] = useState(true);

    // Fechar a sugestão automaticamente após 5 segundos
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000); // Fechar após 5 segundos

        return () => clearTimeout(timer);
    }, []);

    // Função para fechar a sugestão manualmente
    const handleClose = () => {
        setIsVisible(false);
        if (onClose) {
            onClose(); // Chama a função de callback de fechamento (se fornecida)
        }
    };

    return (
        isVisible && (
            <div className="suggestion-container">
                <div className="suggestion">
                    <span>{message}</span>
                    <button onClick={handleClose} className="close-button">
                        <img
                            src="https://www.v0.app/api/image/mdi-delete-icon.png?id=eyJmbiI6ImdldEljb25IZXJvSW1hZ2UiLCJhcmdzIjp7Imljb25TZXRTbHVnIjoibWRpIiwiaWNvblNsdWciOiJkZWxldGUifX0"
                            alt="Close"
                            className="close-icon"
                        />
                    </button>
                </div>
            </div>
        )
    );
}

export default Suggestion;
