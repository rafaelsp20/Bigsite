import React from 'react';
/*import { Link } from 'react-router-dom';
import styles from './Header.module.css';*/
import Menu from './../../Menu';

/*    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/servico">Serviço</Link></li>
        <li><Link to="/galeria">Galeria de Fotos</Link></li>     
      </ul>
    </nav>**/

function Header() {
  return (<>
    <Menu />
 </>);
}

export default Header;


