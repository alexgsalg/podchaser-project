// plugins
import useFetchPodcasts from '../../hooks/useFetchPodcasts';
import { useQuery } from '@tanstack/react-query';
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

  const { podcasts, isError, isLoading } = useFetchPodcasts('/userlists/27998');

  const onPodcastClick = (id: number) => {
    navigate(`/podcast/${id}`);
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
            <PodcastItem podcast={podcast} clickedPodcast={onPodcastClick} key={podcast.id} />
          ))
        : null}
    </div>
  );
};

export default PodcastList;
