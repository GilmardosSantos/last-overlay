import type { Attr } from '../Attr';
import type { ImageSizes } from '../ImageSizes';

export interface TopAlbumsResponse {
  topalbums: {
    '@attr': Attr;
    album: TopAlbumsAlbum[];
  };
}

export interface TopAlbumsAlbum {
  '@attr': { rank: string | number };
  artist: { mbid: string; name: string; url: string };
  image: { '#text': string; size: ImageSizes };
  mbid: string;
  name: string;
  playcount: string | number;
  url: string;
}
