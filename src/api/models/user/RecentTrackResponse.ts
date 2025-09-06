import type { Track } from '../Track';

export interface RecentTrackResponse {
  recenttracks: {
    '@attr': Attr;
    track: Track[];
  };
}
