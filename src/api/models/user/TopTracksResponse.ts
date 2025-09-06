import type { Attr } from '../Attr';
import type { ImageSizes } from '../ImageSizes';

export interface TopTracksResponse {
  toptracks: {
    '@attr': Attr;
    track: TopTracksTrack[];
  };
}

export interface TopTracksTrack {
  '@attr': { rank: string | number };
  artist: { mbid: string; name: string; url: string };
  duration: string | number;
  image: { '#text': string; size: ImageSizes }[];
  mbid: string;
  name: string;
  playcount: string | number;
  streamable: { fulltrack: string | number; '#text': string | number };
  url: string;
}
