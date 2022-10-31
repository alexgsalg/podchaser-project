// plugins
import { useParams } from 'react-router-dom';
// imports
import useFetchSinglePodcast from '../../hooks/useFetchSinglePodcast';
import { Rating } from 'react-simple-star-rating';

// components
import PodcastList from '../../components/PodcastList/podcast-list.component';
import Spinner from '../../components/Spinner/spinner.component';
// images
// style
import styles from './single-podcast.module.css';

const SinglePodcast = (): JSX.Element => {
  const params = useParams();
  const podcastId = params['id'] || '';
  const { podcast, isError, isLoading, refetchData } = useFetchSinglePodcast(podcastId);

  //   title,
  //   description,
  //   image_url,
  //   feed_url,
  //   initial_rating,
  //   rating,
  //   rating_count,
  //   number_of_episodes,

  return (
    <section className={styles.section_podcast}>
      <div className={styles.podcast_wrapper}>
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          'Error!'
        ) : podcast ? (
          <article className={styles.podcast_article}>
            {/* header */}
            <div className={styles.podcast_header}>
              <picture className={styles.podcast_header__thumbnail}>
                <img src={podcast?.image_url} alt={`Podcast ${podcast.title}`} />
              </picture>
              <div className={styles.podcast_header_info}>
                <h3 className={styles.podcast_header__title}>{podcast?.title}</h3>
                <p className={styles.podcast_header__total_episodes}>
                  A podcast with {podcast?.number_of_episodes} episodes
                </p>
                <Rating
                  allowFraction
                  readonly
                  initialValue={podcast?.initial_rating * 1}
                  fillColor='hsl(336, 96%, 49%)'
                />
              </div>
            </div>
            {/* Description */}
            <div className={styles.podcast_content}>
              <div dangerouslySetInnerHTML={{ __html: podcast?.description_sanitized }}></div>
            </div>
            {/* podcast list */}
            <PodcastList />
          </article>
        ) : null}
        <aside className='podcast_aside'></aside>
      </div>
    </section>
  );
};;

export default SinglePodcast;
