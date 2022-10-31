// plugins
// imports
import { PodcastHeaderType } from '../../models/podcast.model';
import { Rating } from 'react-simple-star-rating';
// components
// images
// style
import styles from './single-podcast.module.css';

const PodcastHeader = (data: PodcastHeaderType): JSX.Element => {
  return (
    <header className={styles.podcast_header}>
      <picture className={styles.podcast_header__thumbnail}>
        <img src={data?.image_url} alt={`Podcast ${data?.title}`} />
      </picture>
      <div className={styles.podcast_header_info}>
        <h3 className={styles.podcast_header__title}>{data?.title}</h3>
        <p className={styles.podcast_header__total_episodes}>
          A podcast with {data?.number_of_episodes} episodes
        </p>
        <Rating
          allowFraction
          readonly
          initialValue={Number(data?.initial_rating)}
          fillColor='hsl(336, 96%, 49%)'
        />
      </div>
    </header>
  );
};

export default PodcastHeader;
