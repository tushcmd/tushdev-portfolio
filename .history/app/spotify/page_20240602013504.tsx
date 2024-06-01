import spotifyApi from './spotify';
import { TrackObjectFull, EpisodeObject } from 'spotify-web-api-node';

export default async function Page() {
  try {
    const data = await spotifyApi.getMyCurrentPlayingTrack();
    const currentItem = data.body?.item;

    // Render the currently playing track/episode information
    return (
      <div className='min-h-screen'>
        {currentItem ? (
          <div >
            <h2>Now Playing</h2>
            {(currentItem as TrackObjectFull).artists ? (
              <p>
                {(currentItem as TrackObjectFull).name} -{' '}
                {(currentItem as TrackObjectFull).artists.map((artist) => artist.name).join(', ')}
              </p>
            ) : (
              <p>{(currentItem as EpisodeObject).name}</p>
            )}
          </div>
        ) : (
          <p>No track or episode currently playing.</p>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error fetching currently playing track/episode:', error);
    return <p>Error fetching currently playing track/episode.</p>;
  }
}