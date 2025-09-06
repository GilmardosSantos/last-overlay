export interface WeeklyArtistChartResponse {
  weeklyartistchart: {
    '@attr': { from: string | number; to: string | number; user: string };
    artist: WeeklyArtistChartArtist[];
  };
}

export interface WeeklyArtistChartArtist {
  '@attr': { rank: string | number };
  mbid: string;
  name: string;
  playcount: string | number;
  url: string;
}
