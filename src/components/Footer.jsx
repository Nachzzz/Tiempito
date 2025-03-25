import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Tiempito - Todos los derechos reservados</p>
            <div className="footer-links">
                <a href="nachosalto17@gmail.com" className="footer-link">📧 Contacto</a>
                <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer" className="footer-link">🐦 Twitter</a>
                <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="footer-link">📸 Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;
