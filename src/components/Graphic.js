import React from 'react';
import "../index.css"; // Inclua a estilização aqui

export default function Graphic() {
    return (
        <div className="total-container">
            <h2 className="animated-text">Sugestões com IA Em Breve.</h2>
            <div className="loader">
                <div className="modelViewPort">
                    <div className="eva">
                        <div className="head">
                            <div className="eyeChamber">
                                <div className="eye"></div>
                                <div className="eye"></div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="hand"></div>
                            <div className="hand"></div>
                            <div className="scannerThing"></div>
                            <div className="scannerOrigin"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
