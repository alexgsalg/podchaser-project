// plugins
import { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
// imports
import useFetchpodcast from '../../hooks/useFetchpodcast';
import { PodcastHeaderType } from '../../models/podcast.model';
import { Rating } from 'react-simple-star-rating';
// components
import PodcastList from '../../components/PodcastList/podcast-list.component';
import Spinner from '../../components/Spinner/spinner.component';
import PodcastHeader from '../../components/PodcastHeader/podcast-header.component';
// images
// style
import styles from './single-podcast.module.css';

const podcast = (): Promise<JSX.Element> => {
  const [rating, setRating] = useState<number>(0);
  const [rateHovering, setRateHovering] = useState<boolean>(false);
  const params = useParams();

  const podcastId = params['id'] || '';
  const { podcast, isError, isLoading } = useFetchpodcast(podcastId);

  // catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  // catch Rating value
  const handleRateBtnHover = () => {
    setRateHovering(true);
  };

  const handleRateBtnOut = () => {
    setRateHovering(false);
  };

  // format data for header component
  const headerData: PodcastHeaderType = {
    title: podcast?.title || '',
    image_url: podcast?.image_url || '',
    initial_rating: podcast?.initial_rating || '',
    rating: podcast?.rating || '',
    number_of_episodes: podcast?.number_of_episodes || '',
    follower_count: podcast?.follower_count || 0,
    review_count: podcast?.review_count || 0,
  };

  // format folowers count
  const followerTotal = (): string => {
    const followers = podcast?.follower_count || 0;
    return followers > 1000 ? `${followers}k followers` : `${followers} followers`;
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
                <button
                  className={`${styles.aside_actions__button} ${styles.button_secondary}`}
                  onMouseOver={handleRateBtnHover}
                  onMouseOut={handleRateBtnOut}>
                  {!rateHovering ? (
                    'Rate'
                  ) : (
                    <Rating
                      allowFraction
                      initialValue={0}
                      size={24}
                      fillColor='hsla(0, 0%, 0%, 0.75)'
                      emptyColor='hsl(0, 0%, 100%)'
                      onClick={handleRating}
                    />
                  )}
                </button>
                <div className={styles.aside_actions_footer}>
                  <span>{followerTotal.toString()}</span>
                  <span className={styles.aside_actions_footer_divisor}></span>
                  <span>{podcast.rating_count} ratings</span>
                </div>
              </div>
            </aside>
          </Fragment>
        ) : null}
        <aside className='podcast_aside'></aside>
      </div>
    </section>
  );
};

export default podcast;
