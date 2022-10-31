// plugins
import useFetchPodcasts from '../../hooks/useFetchPodcasts';
import { useNavigate } from 'react-router-dom';
// imports
import { PodcastItemType } from '../../models/podcast.model';
// components
import PodcastItem from '../PodcastItem/podcast-item.component';
import Spinner from '../Spinner/spinner.component';
// images
// style
import styles from './podcast-list.module.css';

const PodcastList = (): JSX.Element => {
  const navigate = useNavigate();

  const { podcasts, isError, isLoading, refetchData } = useFetchPodcasts('/userlists/27998');

  const onPodcastClick = (id: number) => {
    navigate(`/podcast/${id}`);
  };

  return (
    <div className={styles.podcastlist_grid}>
      {isLoading
        ? <Spinner />
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
