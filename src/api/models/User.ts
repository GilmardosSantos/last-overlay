import type { ImageSizes } from './ImageSizes';
import type { FriendsParams } from './user/FriendsParams';
import type { InfoParams } from './user/InfoParams';
import type { LovedTracksParams } from './user/LovedTracksParams';
import type { PersonalTagsParams } from './user/PersonalTagsParams';
import type { RecentTracksParams } from './user/RecentTrackParams';
import type { TopAlbumsParams } from './user/TopAlbumsParams';
import type { TopArtistParams } from './user/TopArtistsParams';
import type { TopTagsParams } from './user/TopTagsParams';
import type { TopTracksParams } from './user/TopTracksParams';
import type { WeeklyAlbumChartParams } from './user/WeeklyAlbumChartParams';
import type { WeeklyArtistChartParams } from './user/WeeklyArtistChartParams';
import type { WeeklyChartListParams } from './user/WeeklyChartListParams';
import type { WeeklyTrackChartParams } from './user/WeeklyTrackChartParams';

export interface User {
  bootstrap: string | number;
  country: string;
  image: ImageSizes;
  name: string;
  playcount: string | number;
  playlists: string | number;
  realname: string;
  registered: { unixtime: string | number; '#text': string };
  subscriber: string | number;
  type: string;
  url: string;
}

export type UserMethod =
  | 'getFriends'
  | 'getInfo'
  | 'getLovedTracks'
  | 'getPersonalTags'
  | 'getRecentTracks'
  | 'getTopAlbums'
  | 'getTopArtists'
  | 'getTopTags'
  | 'getTopTracks'
  | 'getWeeklyAlbumChart'
  | 'getWeeklyArtistChart'
  | 'getWeeklyChartList'
  | 'getWeeklyTrackChart';

export type UserMethods = `user.${UserMethod}`;

export type UserParams = {
  'user.getFriends': FriendsParams;
  'user.getInfo': InfoParams;
  'user.getLovedTracks': LovedTracksParams;
  'user.getPersonalTags': PersonalTagsParams;
  'user.getRecentTracks': RecentTracksParams;
  'user.getTopAlbums': TopAlbumsParams;
  'user.getTopArtists': TopArtistParams;
  'user.getTopTags': TopTagsParams;
  'user.getTopTracks': TopTracksParams;
  'user.getWeeklyAlbumChart': WeeklyAlbumChartParams;
  'user.getWeeklyArtistChart': WeeklyArtistChartParams;
  'user.getWeeklyChartList': WeeklyChartListParams;
  'user.getWeeklyTrackChart': WeeklyTrackChartParams;
};
