import styles from './spinner.module.css';

const Spinner = () => (
  <div className={styles.spinner_overlay}>
    <div className={styles.spinner_container} id='spinner' />
  </div>
);

export default Spinner;
