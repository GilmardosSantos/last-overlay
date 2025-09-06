import type { ImageSizes } from './ImageSizes';

export interface Album {
  artist: { mbid: string; name: string; url: string };
  image: { '#text': string; size: ImageSizes }[];
  mbid: string;
  name: string;
  url: string;
}

export type AlbumMethod =
  | 'addTags'
  | 'getInfo'
  | 'getTags'
  | 'getTopTags'
  | 'removeTag'
  | 'search';

export type AlbumMethods = `album.${AlbumMethod}`;

export type AlbumParams = {
  'album.addTags': 0;
  'album.getInfo': 0;
  'album.getTags': 0;
  'album.getTopTags': 0;
  'album.removeTag': 0;
  'album.search': 0;
};
