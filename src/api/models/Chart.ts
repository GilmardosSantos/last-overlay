export type Chart = 'getTopArtists' | 'getTopTags' | 'getTopTracks';

export type ChartMethods = `chart.${Chart}`;

export type ChartParams = {
  'chart.getTopArtists': 0;
  'chart.getTopTags': 0;
  'chart.getTopTracks': 0;
};
