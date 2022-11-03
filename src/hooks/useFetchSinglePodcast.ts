import { useQuery } from '@tanstack/react-query';

const useFetchSinglePodcast = (id: string) => {
  const baseUrl = 'https://api.podchaser.com';

  const {
    data: podcast,
    isLoading,
    isError,
    refetch,
  } = useQuery([id], () => {
    return fetch(new URL(`/podcasts/${id}`, baseUrl))
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  });

  const refetchData = () => {
    refetch();
  };
  return { podcast, isError, isLoading, refetchData };
};
export default useFetchSinglePodcast;
