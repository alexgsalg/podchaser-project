// plugins
import useFetchPodcasts from '../../hooks/useFetchPodcasts';
import { useNavigate } from 'react-router-dom';
// imports
import { PodcastItemType } from '../../models/podcast.model';
import PodcastItem from '../PodcastItem/podcast-item.component';
// components
// images
// style
import styles from './podcast-list.module.css';

const PodcastList = (): JSX.Element => {
  const navigate = useNavigate();

  const { podcasts, isError, isLoading, refetch } = useFetchPodcasts('/userlists/27998');

  const onPodcastClick = (id: number) => {
    navigate(`/podcast/${id}`);
    // TODO: refetch data and reloa the page
    refetch();
    console.log('id: ', id);
  };

  return (
    <div className={styles.podcastlist_grid}>
      {isLoading
        ? 'Loading...'
        : isError
        ? 'Error!'
        : podcasts
        ? podcasts?.map((podcast: PodcastItemType) => (
            <PodcastItem
              podcast={podcast}
              clickedPodcast={onPodcastClick}
              key={podcast.entity.id}
            />
          ))
        : null}
    </div>
  );
};

export default PodcastList;
