// plugins
import { useNavigate } from 'react-router-dom';
// imports
import { PodcastItemType } from '../../models/podcast.model';
// components
import PodcastItem from '../PodcastItem/podcast-item.component';
import Spinner from '../Spinner/spinner.component';
// images
// style
import styles from './podcast-list.module.css';

const PodcastList = (props: {
  podList: PodcastItemType[];
  isError: boolean;
  isLoading: boolean;
}): JSX.Element => {
  const navigate = useNavigate();

  const onPodcastClick = (id: number) => {
    navigate(`/podcast/${id}`);
  };

  return (
    <div className={styles.podcastlist_grid}>
      {props.isLoading ? (
        <Spinner />
      ) : props.isError ? (
        'Error!'
      ) : props.podList ? (
        props.podList?.map((podcast: PodcastItemType) => (
          <PodcastItem podcast={podcast} clickedPodcast={onPodcastClick} key={podcast.entity.id} />
        ))
      ) : null}
    </div>
  );
};

export default PodcastList;
