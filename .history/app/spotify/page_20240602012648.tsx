import spotifyApi from './spotify';
import { CurrentPlayingTrackResponse } from 'spotify-web-api-node';

export default async function Page() {
  try {
    const data: CurrentPlayingTrackResponse = await spotifyApi.getMyCurrentPlayingTrack();
    const currentTrack = data.body?.item;

    // Render the currently playing track information
    return (
      <div>
        {currentTrack ? (
          <div>
            <h2>Now Playing</h2>
            <p>
              {currentTrack.name} - {currentTrack.artists.map((artist) => artist.name).join(', ')}
            </p>
          </div>
        ) : (
          <p>No track currently playing.</p>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error fetching currently playing track:', error);
    return <p>Error fetching currently playing track.</p>;
  }
}