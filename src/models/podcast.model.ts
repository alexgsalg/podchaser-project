export interface PodcastItemType {
  id?: number;
  position?: number;
  entity: {
    id: number;
    image_url: string;
    created_at?: string;
    updated_at: string;
    description: string;
    title: string;
    rating?: number;
    review_count?: number;
  };
}

export interface PodcastItemProps {
  podcast: PodcastItemType;
  clickedPodcast: (id: number) => any;
}

export type SinglePodcastType = {
  title: string;
  description: string;
  description_sanitized: string;
  image_url: string;
  feed_url: string;
  initial_rating: string;
  rating: string;
  rating_count: string;
  number_of_episodes: string;
  review_count: number;
};

export type PodcastHeaderType = Pick<
  SinglePodcastType,
  'title' | 'image_url' | 'initial_rating' | 'rating' | 'number_of_episodes' | 'review_count'
>;

export type LatestPodcastType = Pick<PodcastItemType, 'entity'>;