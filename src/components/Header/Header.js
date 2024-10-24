import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/servico">Serviço</Link></li>
        <li><Link to="/galeria">Galeria de Fotos</Link></li>
        <li><Link to="/contato1">Contato</Link></li>
        <li><Link to="/teste">Teste</Link></li>

      </ul>
    </nav>
  );
}

export default Header;
