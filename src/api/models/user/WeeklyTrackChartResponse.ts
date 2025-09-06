import type { ImageSizes } from '../ImageSizes';

export interface WeeklyTrackChartResponse {
  weeklytrackchart: {
    '@attr': { from: string | number; to: string | number; user: string };
    track: WeeklyTrackChartTrack[];
  };
}

export interface WeeklyTrackChartTrack {
  '@attr': { rank: string | number };
  artist: { '#text': string; mbid: string };
  image: { '#text': string; size: ImageSizes }[];
  mbid: string;
  name: string;
  playcount: string | number;
  url: string;
}
