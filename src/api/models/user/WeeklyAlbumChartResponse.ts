export interface WeeklyAlbumChartResponse {
  weeklyalbumchart: {
    '@attr': { from: string | number; to: string | number; user: string };
    album: WeeklyAlbumChartAlbum[];
  };
}

export interface WeeklyAlbumChartAlbum {
  '@attr': { rank: string | number };
  artist: { '#text': string; mbid: string };
  mbid: string;
  name: string;
  playcount: string | number;
  url: string;
}
