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
