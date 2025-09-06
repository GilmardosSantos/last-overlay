import type { ImageSizes } from './ImageSizes';

export interface Track {
  '@attr': { nowPlaying: boolean };
  album: { '#text': string; mbid: string };
  artist: { '#text': string; mbid: string };
  image: { size: ImageSizes; '#text': string }[];
  mbid: string;
  name: string;
  streamable: string | number;
  url: string;
}

export type TrackMethod =
  | 'addTags'
  | 'getCorrection'
  | 'getInfo'
  | 'getSimiliar'
  | 'getTags'
  | 'getTopTags'
  | 'love'
  | 'removeTag'
  | 'scrobble'
  | 'search'
  | 'unlove'
  | 'updateNowPlaying';

export type TrackMethods = `track.${TrackMethod}`;

export type TrackParams = {
  'track.addTags': 0;
  'track.getCorrection': 0;
  'track.getInfo': 0;
  'track.getSimiliar': 0;
  'track.getTags': 0;
  'track.getTopTags': 0;
  'track.love': 0;
  'track.removeTag': 0;
  'track.scrobble': 0;
  'track.search': 0;
  'track.unlove': 0;
  'track.updateNowPlaying': 0;
};
