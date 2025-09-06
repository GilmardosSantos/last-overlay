import type { AlbumMethods } from './Album';
import type { ArtistMethods } from './Artist';
import type { AuthMethods } from './Auth';
import type { ChartMethods } from './Chart';
import type { GeoMethods } from './Geo';
import type { LibraryMethods } from './Library';
import type { TagMethods } from './Tag';
import type { TrackMethods } from './Track';
import type { UserMethods } from './User';

export type Methods =
  | AlbumMethods
  | ArtistMethods
  | AuthMethods
  | ChartMethods
  | GeoMethods
  | LibraryMethods
  | TagMethods
  | TrackMethods
  | UserMethods;
