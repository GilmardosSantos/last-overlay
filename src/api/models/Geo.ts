export type Geo = 'getTopArtists' | 'getTopTracks';

export type GeoMethods = `geo.${Geo}`;

export type GeoParams = {
  'geo.getTopArtists': 0;
  'geo.getTopTracks': 0;
};
