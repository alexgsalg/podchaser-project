// plugins
import { FC } from 'react';
// imports
import { PodcastItemType } from '../../models/podcast.model';
import useDateFormat from '../../hooks/useDateFormat';
// components
// images
// style
import styles from './podcast-item.module.css';

const PodcastItem: FC<PodcastItemType> = (podcast): JSX.Element => {
  const { image_url, title, description, updated_at } = podcast.entity;

  const uploadDate = useDateFormat(updated_at);
  return (
    <article className={styles.podcast_card}>
      <picture className={styles.podcast_card__thumbnail}>
        <img src={image_url} alt={`Podcast ${title}`} />
      </picture>
      <div className={styles.podcast_card_info}>
        <h3 className={styles.podcast_card__title}>{title}</h3>
        <div className={styles.podcast_card_terms}>
          <span className={styles.podcast_card__upload}>{uploadDate}</span>
          <span className={styles.podcast_card__divisor}></span>
          <span className={styles.podcast_card__description}>{description}</span>
        </div>
      </div>
    </article>
  );
};

export default PodcastItem;
