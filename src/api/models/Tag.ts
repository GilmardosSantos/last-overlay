export type Tag =
  | 'getInfo'
  | 'getSimiliar'
  | 'getTopALbums'
  | 'getTopArtists'
  | 'getTopTags'
  | 'getTopTracks'
  | 'getWeeklyChartList';

export type TagMethods = `tag.${Tag}`;

export type TagParams = {
  'tag.getInfo': 0;
  'tag.getSimiliar': 0;
  'tag.getTopALbums': 0;
  'tag.getTopArtists': 0;
  'tag.getTopTags': 0;
  'tag.getTopTracks': 0;
  'tag.getWeeklyChartList': 0;
};
