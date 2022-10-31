// plugins
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
// imports
import useFetchSinglePodcast from '../../hooks/useFetchSinglePodcast';
import { PodcastHeaderType } from '../../models/podcast.model';
// components
import PodcastList from '../../components/PodcastList/podcast-list.component';
import Spinner from '../../components/Spinner/spinner.component';
import PodcastHeader from '../../components/PodcastHeader/podcast-header.component';
// images
// style
import styles from './single-podcast.module.css';

const SinglePodcast = (): JSX.Element => {
  const params = useParams();
  const podcastId = params['id'] || '';
  const { podcast, isError, isLoading, refetchData } = useFetchSinglePodcast(podcastId);

  const headerData: PodcastHeaderType = {
    title: podcast?.title,
    image_url: podcast?.image_url,
    initial_rating: podcast?.initial_rating,
    rating: podcast?.rating,
    number_of_episodes: podcast?.number_of_episodes,
  };
  return (
    <section className={styles.section_podcast}>
      <div className={styles.podcast_wrapper}>
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          'Error!'
        ) : podcast ? (
          <Fragment>
            {/* header */}
            <PodcastHeader {...(headerData as PodcastHeaderType)} />
            <article className={styles.podcast_article}>
              {/* Description */}
              <div className={styles.podcast_content}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: podcast?.description_sanitized as string,
                  }}></div>
              </div>
              {/* podcast list */}
              <PodcastList />
            </article>
            <aside className={styles.podcast_aside}>
              <div className={styles.podcast_aside_actions}>
                <button className={styles.aside_actions__button}>Follow</button>
                <button className={`${styles.aside_actions__button} ${styles.button_secondary}`}>
                  Rate
                </button>
                <div className={styles.aside_actions_footer}>
                  <span>number followers</span>
                  <span className={styles.aside_actions_footer_divisor}></span>
                  <span>200 ratings</span>
                </div>
              </div>
            </aside>
          </Fragment>
        ) : null}
        <aside className='podcast_aside'></aside>
      </div>
    </section>
  );
};;

export default SinglePodcast;
