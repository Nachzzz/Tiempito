import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Tiempito </p>
            <div className="footer-links">
                <a href="mailto:nachosalto17@gmail.com" className="footer-link">📧 Contacto</a>
                <a href="https://www.linkedin.com/in/jorge-ignacio-salto-0b29221bb" target="_blank" rel="noopener noreferrer" className="footer-link">💻 LinkedIn</a>
                <a href="https://github.com/Nachzzz" target="_blank" rel="noopener noreferrer" className="footer-link">👨‍💻 GitHub</a>
            </div>
        </footer>
    );
};

export default Footer;
