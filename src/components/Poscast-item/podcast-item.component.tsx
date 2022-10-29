// plugins
// context
// components
// imports
// images
// styles

interface PodcastItemType {
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

function PodcastItem(podcast: PodcastItemType) {
  const { id, entity_type, position } = podcast;
  const { image_url, created_at, updated_at, description, title, rating } = podcast.entity;
  const episodeFormatedTime = () => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().locale;
    const dateit = new Date(updated_at).toLocaleDateString(timezone, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    const dateSplit = dateit.split(/[ ,]+/);
    const place = dateit[1] === '1' ? 'st' : 'nd';
    return `${dateSplit[0]} ${dateSplit[1]} ${place} ${dateSplit[2]}`;
  };

  const uploadDate = episodeFormatedTime();

  return (
    <div className='podcast_item'>
      <picture className='podcast_item__thumbnail'>
        <img src={image_url} alt={`Podcast ${title}`} />
      </picture>
      <div>
        <h3 className='podcast_item__title'>{title}</h3>
        <div className='podcast_item_details'>
          <span className='podcast_item__date'>{uploadDate}</span>
          <p className='podcast_item__description'>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PodcastItem;
