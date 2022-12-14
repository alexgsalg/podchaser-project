// plugins
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// imports
import useFetchSinglePodcast from '../../hooks/useFetchSinglePodcast';
import { LatestPodcastType, PodcastHeaderType } from '../../models/podcast.model';
import { Rating } from 'react-simple-star-rating';
// components
import PodcastList from '../../components/PodcastList/podcast-list.component';
import Spinner from '../../components/Spinner/spinner.component';
import PodcastHeader from '../../components/PodcastHeader/podcast-header.component';
import HeadingBlock from '../../components/HeadingBlock/heading-block.component';
// images
// style
import styles from './single-podcast.module.css';

const podcast = (): JSX.Element => {
  const [followerTotal, setFollowerTotal] = useState<string | number>(0);
  const [rateHovering, setRateHovering] = useState<boolean>(false);
  const params = useParams();

  const podcastId = params['id'] || '';
  const { podcast, isError, isLoading } = useFetchSinglePodcast(podcastId);

  // format folowers count
  useEffect(() => {
    const followers = Math.floor(Math.random() * (100000 - 0 + 1) + 1);
    const formatedFollowers =
      followers > 1000 ? followers.toString().slice(0, -3) + 'k' : followers;
    setFollowerTotal(formatedFollowers);
  }, []);

  // // catch Rating value
  const handleRateBtnHover = (state: boolean) => {
    setRateHovering(state);
  };

  // format data for header component
  const headerData: PodcastHeaderType = {
    title: podcast?.title,
    image_url: podcast?.image_url,
    initial_rating: podcast?.initial_rating,
    rating: podcast?.rating,
    number_of_episodes: podcast?.number_of_episodes,
    review_count: podcast?.review_count,
  };

  // format last episode
  const lastEpisode: LatestPodcastType = {
    entity: {
      id: podcast?.latest_episode?.id as number,
      title: podcast?.latest_episode?.title as string,
      description: podcast?.description as string,
      image_url: podcast?.image_url as string,
      updated_at: podcast?.latest_episode?.air_date,
    },
  };

  return (
    <section className={styles.section_podcast}>
      <div className={styles.podcast_wrapper}>
        {isLoading ? (
          // loading
          <Spinner />
        ) : podcast.status_code === 404 ? (
          // has some error
          <HeadingBlock
            title='404 error. Hmm... Something went wrong'
            subtext='Should this page show something? Check your internet connection and try again'
          />
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
                  }}
                  data-id='podcast_description'></div>
              </div>
              {/* podcast list */}
              <h2 className={styles.podcast_latest__title}>Recent Episodes</h2>
              <PodcastList {...{ podList: [lastEpisode], isError, isLoading }} />
            </article>
            <aside className={styles.podcast_aside}>
              <div className={styles.podcast_aside_actions}>
                <button className={styles.aside_actions__button}>Follow</button>
                <button
                  className={`${styles.aside_actions__button} ${styles.button_secondary}`}
                  onMouseOver={() => handleRateBtnHover(true)}
                  onMouseOut={() => handleRateBtnHover(false)}>
                  {!rateHovering ? (
                    'Rate'
                  ) : (
                    <Rating
                      allowFraction
                      initialValue={0}
                      size={24}
                      className={styles.btn_rating}
                      fillColor='hsla(0, 0%, 0%, 0.75)'
                      emptyColor='hsl(0, 0%, 100%)'
                    />
                  )}
                </button>
                <div className={styles.aside_actions_footer}>
                  <span>
                    <span data-id='podcast_followers'>{followerTotal}</span> followers
                  </span>
                  <span className={styles.aside_actions_footer_divisor}></span>
                  <span>
                    <span data-id='podcast_rating'>{podcast?.rating_count}</span> ratings
                  </span>
                </div>
              </div>
            </aside>
          </Fragment>
        ) : null}
      </div>
    </section>
  );
};

export default podcast;
