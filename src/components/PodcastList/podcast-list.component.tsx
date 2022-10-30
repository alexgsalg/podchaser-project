// plugins
import { useQuery } from '@tanstack/react-query';
// imports
import { PodcastItemType } from '../../models/podcast.model';
import PodcastItem from '../PodcastItem/podcast-item.component';
// components
// images
// style
import styles from './podcast-list.module.css';

const PodcastList = (): JSX.Element => {
  const uri = 'https://api.podchaser.com/';
  const fetchPodcasts = (): Promise<PodcastItemType[]> => {
    return fetch(`${uri}userlists/27998`)
      .then((response) => response.json())
      .then((getPodcastsList) => getPodcastsList.list)
      .then((getPodcasts) => getPodcasts.items.sort((a: any, b: any) => a.position - b.position));
  };

  const { data: podcasts, isLoading, isError } = useQuery(['todos'], fetchPodcasts);
  console.log(podcasts);

  return (
    <div className={styles.podcastlist_grid}>
      {isLoading
        ? 'Loading...'
        : isError
        ? 'Error!'
        : podcasts
        ? podcasts.map((podcast: PodcastItemType) => <PodcastItem {...podcast} key={podcast.id} />)
        : null}
    </div>
  );
};

export default PodcastList;
