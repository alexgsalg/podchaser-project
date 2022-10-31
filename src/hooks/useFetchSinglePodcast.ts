import { PodcastItemType } from '@/models/podcast.model';
import { useQuery } from '@tanstack/react-query';

// interface UseFetchSinglePodcastType {
//   podcast: PodcastItemType | undefined;
//   isError: boolean;
//   isLoading: boolean;
//   refetchData: () => Promise<void> | void;
// }

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
      .then((data) => data);
    return await response;
  });

  const refetchData = () => {
    refetch();
  };
  return { podcast, isError, isLoading, refetchData };
};
export default useFetchSinglePodcast;
