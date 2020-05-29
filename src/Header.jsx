import React from 'react';
import './styles/Header.css';

export default function Header({ signOut }) {
    return (
        <div className="header-container">
            <header className="header">
                <span>COOP Web App</span>
                <div className="btn-header-container">
                    <button className="btn-header" onClick={signOut}>Signout</button>
                </div>
            </header>
        </div>
    )
}
