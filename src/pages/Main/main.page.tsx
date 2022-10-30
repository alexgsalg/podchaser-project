// plugins
// imports
// components
import PodcastList from '../../components/PodcastList/podcast-list.component';
import HeadingBlock from '../../components/HeadingBlock/heading-block.component';
// images
// style
import styles from './main.module.css';

const MainPage = (): JSX.Element => {
  return (
    <section className={styles.section_main}>
      <div className={styles.main_wrapper}>
        <article className={styles.grid_article}>
          <HeadingBlock
            title='All Podcasts'
            subtext='Browse the details of every podcast, ever.'
            spaceBottom='lg'
          />
          <PodcastList />
        </article>
      </div>
    </section>
  );
};

export default MainPage;
