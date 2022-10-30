// plugins
import { Outlet } from 'react-router-dom';
// imports
// components
// images
// style
import styles from './default.module.css';

const DefaultLayout = (): JSX.Element => {
  return (
    <main className={styles.main_Layout}>
      <Outlet />
    </main>
  );
};

export default DefaultLayout;
