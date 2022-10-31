export interface PodcastItemType {
  id: number;
  entity_type: string;
  position: number;
  entity: {
    id: number;
    image_url: string;
    created_at: string;
    updated_at: string;
    description: string;
    title: string;
    rating: number;
  };
}

export interface PodcastItemProps {
  podcast: PodcastItemType;
  clickedPodcast: (id: number) => void;
}

export type SinglePodcastType = {
  title: string | undefined;
  description: string | undefined;
  description_sanitized: string | undefined;
  image_url: string | undefined;
  feed_url: string | undefined;
  initial_rating: string | undefined;
  rating: string | undefined;
  rating_count: string | undefined;
  number_of_episodes: string | undefined;
};

export type PodcastHeaderType = Pick<
  SinglePodcastType,
  'title' | 'image_url' | 'initial_rating' | 'rating' | 'number_of_episodes'
>;