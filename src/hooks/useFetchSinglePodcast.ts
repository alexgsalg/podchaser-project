import { SinglePodcastType } from '../models/podcast.model';
import { useQuery } from '@tanstack/react-query';

const useFetchSinglePodcast = (id: string) => {
  const baseUrl = 'https://api.podchaser.com';

  const {
    data: podcast,
    isLoading,
    isError,
    refetch,
  } = useQuery([id], async () => {
    const response = await fetch(new URL(`/podcasts/${id}`, baseUrl))
      .then((response) => response.json())
      .then((data: Promise<SinglePodcastType>) => data);
    return response || {};
  });

  const refetchData = () => {
    refetch();
  };
  return { podcast, isError, isLoading, refetchData };
};
export default useFetchSinglePodcast;
