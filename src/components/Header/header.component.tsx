// plugins
import { useNavigate } from 'react-router-dom';
// imports
// components
// images
import Logo from '../../assets/images/Logo_light.svg';
// style
import styles from './header.module.css';

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  const onLogoClick = () => navigate('/');

  return (
    <header className={styles.main_header}>
      <div className={styles.header_wrapper}>
        <img
          src={Logo}
          id='logo'
          alt='Podchaser logo'
          className={styles.header__logo}
          onClick={onLogoClick}
        />
      </div>
    </header>
  );
};

export default Header;
