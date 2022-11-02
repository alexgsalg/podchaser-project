// plugins
import { useNavigate } from 'react-router-dom';
// imports
// components
import HeadingBlock from '../../components/HeadingBlock/heading-block.component';
// images
// style
import styles from './not-found.module.css';

const NotFound = (): JSX.Element => {
  const navigate = useNavigate();
  const toNotFound = () => navigate('/');
  return (
    <section className={styles.section_notfound}>
      <div className={styles.notfound_wrapper}>
        <HeadingBlock
          title='This page does not exist'
          subtext='Sould this page show something?'
          spaceBottom='lg'
        />
        <button className={styles.notfound__button} onClick={toNotFound}>
          Report issue
        </button>
      </div>
    </section>
  );
};

export default NotFound;
