import querystring from 'querystring';

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const getAccessToken = async () => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'client_credentials',
    }),
  });

  return response.json();
};

const getNowPlaying = async (access_token: string) => {
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status === 204 || response.status > 400) {
    return { isPlaying: false };
  }

  const song = await response.json();
  const albumImageUrl = song.item.album.images[0].url;
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
  const isPlaying = song.is_playing;
  const songUrl = song.item.external_urls.spotify;
  const title = song.item.name;

  return {
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  };
};

export async function GET(request: Request) {
  const { access_token } = await getAccessToken();
  const nowPlaying = await getNowPlaying(access_token);

  return new Response(JSON.stringify(nowPlaying), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}