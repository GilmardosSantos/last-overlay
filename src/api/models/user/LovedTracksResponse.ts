import type { Attr } from '../Attr';
import type { Track } from '../Track';

export interface LovedTracksResponse {
  recenttracks: {
    '@attr': Attr;
    track: Track[];
  };
}
