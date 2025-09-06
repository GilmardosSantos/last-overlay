import type { ImageSizes } from './ImageSizes';

export interface Artist {
  image: { '#text': string; size: ImageSizes }[];
  mbid: string;
  name: string;
  streamable: string | number;
  url: string;
}

export type ArtistMethod =
  | 'addTags'
  | 'getCorrection'
  | 'getInfo'
  | 'getSimiliar'
  | 'getTags'
  | 'getTopAlbums'
  | 'getTopTags'
  | 'getTopTracks'
  | 'removeTag'
  | 'search';

export type ArtistMethods = `artist.${ArtistMethod}`;

export type ArtistParams = {
  'artist.addTags': 0;
  'artist.getCorrection': 0;
  'artist.getInfo': 0;
  'artist.getSimiliar': 0;
  'artist.getTags': 0;
  'artist.getTopAlbums': 0;
  'artist.getTopTags': 0;
  'artist.getTopTracks': 0;
  'artist.removeTag': 0;
  'artist.search': 0;
};
