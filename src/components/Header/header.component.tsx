// plugins
import { useNavigate } from 'react-router-dom';
// context
// components
// imports
// images
import { ReactComponent as Logo } from '../../assets/images/logo_light.svg';
// styles
import styles from './header.module.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_logo}>
          <Logo onClick={() => navigate('/')} />
        </div>
      </div>
    </header>
  );
}

export default Header;
