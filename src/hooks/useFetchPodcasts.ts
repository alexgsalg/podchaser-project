import { PodcastItemType } from '@/models/podcast.model';
import { useQuery } from '@tanstack/react-query';

interface UseFetchPodcastsType {
  podcasts: PodcastItemType[];
  isError: boolean;
  isLoading: boolean;
  refetchData: () => Promise<any> | void;
}

const useFetchPodcasts = (routeParam: string): UseFetchPodcastsType => {
  const baseUrl = 'https://api.podchaser.com';

  const {
    data: podcasts,
    isLoading,
    isError,
    refetch,
  } = useQuery(['podcasts'], async () => {
    return fetch(new URL(routeParam, baseUrl))
      .then((response) => response.json())
      .then((getPodcastsList) => getPodcastsList.list)
      .then((getPodcasts) => getPodcasts.items.sort((a: any, b: any) => a.position - b.position));
  });

  const refetchData = () => {
    refetch();
  };

  return { podcasts, isError, isLoading, refetchData };
};
export default useFetchPodcasts;
