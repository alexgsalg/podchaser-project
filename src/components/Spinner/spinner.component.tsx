import styles from './spinner.module.css';

const Spinner = () => (
  <div className={styles.spinner_overlay}>
    <div className={styles.spinner_container} />
  </div>
);

export default Spinner;
