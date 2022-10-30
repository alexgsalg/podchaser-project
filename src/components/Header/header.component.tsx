// plugins
// imports
// components
// images
import Logo from '../../assets/images/Logo_light.svg';
// style
import styles from './header.module.css';

const Header = (): JSX.Element => {
  return (
    <header className={styles.main_header}>
      <div className={styles.header_wrapper}>
        <img src={Logo} alt='Podchaser logo' className={styles.header__logo} />
      </div>
    </header>
  );
};

export default Header;
