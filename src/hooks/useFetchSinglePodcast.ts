import { PodcastItemType } from '@/models/podcast.model';
import { useQuery } from '@tanstack/react-query';

interface UseFetchSinglePodcastType {
  podcast: PodcastItemType | undefined;
  isError: boolean;
  isLoading: boolean;
}

const useFetchSinglePodcast = (id: string) => {
  const baseUrl = 'https://api.podchaser.com';

  const {
    data: podcast,
    isLoading,
    isError,
    refetch,
  } = useQuery([], async () => {
    const response = await fetch(new URL(`/podcasts/${id}`, baseUrl))
      .then((response) => response.json())
      .then((data) => data);
    return await response;
  });
  return { podcast, isError, isLoading, refetch };
};
export default useFetchSinglePodcast;
