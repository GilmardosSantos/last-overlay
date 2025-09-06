import type { Attr } from '../Attr';
import type { ImageSizes } from '../ImageSizes';

export interface TopArtistsResponse {
  topartists: {
    '@attr': Attr;
    artist: TopArtistsArtist[];
  };
}

export interface TopArtistsArtist {
  '@attr': { rank: string | number };
  image: { '#text': string; size: ImageSizes };
  mbid: string;
  name: string;
  playcount: string | number;
  streamable: string | number;
  url: string;
}
