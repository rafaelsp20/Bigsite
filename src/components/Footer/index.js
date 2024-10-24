import React from 'react';
import './Footer.css';  // Se você quiser estilizar o footer em um arquivo CSS separado

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} www.gordinhotur.com | Todos os direitos reservados.</p>
                <ul className="footer-links">
                    <li><a href="/about">Sobre</a></li>
                    <li><a href="/contact">Contato</a></li>
                    <li><a href="/privacy">Política de Privacidade</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
