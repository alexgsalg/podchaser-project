import { PodcastItemType } from '@/models/podcast.model';
import { useQuery } from '@tanstack/react-query';

interface UseFetchPodcastsType {
  podcasts: PodcastItemType[] | undefined;
  isError: boolean;
  isLoading: boolean;
}

const useFetchPodcasts = (routeParam: string): UseFetchPodcastsType => {
  const baseUrl = 'https://api.podchaser.com';

  const {
    data: podcasts,
    isLoading,
    isError,
  } = useQuery(['podcasts'], async () => {
    const response: Promise<PodcastItemType[]> = fetch(new URL(routeParam, baseUrl))
      .then((response) => response.json())
      .then((getPodcastsList) => getPodcastsList.list)
      .then((getPodcasts) => getPodcasts.items.sort((a: any, b: any) => a.position - b.position));
    return response;
  });
  return { podcasts, isError, isLoading };
};
export default useFetchPodcasts;
