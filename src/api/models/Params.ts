import type { AlbumParams } from './Album';
import type { ArtistParams } from './Artist';
import type { AuthParams } from './Auth';
import type { ChartParams } from './Chart';
import type { GeoParams } from './Geo';
import type { LibraryParams } from './Library';
import type { TagParams } from './Tag';
import type { TrackParams } from './Track';
import type { UserParams } from './User';

export type Params = AlbumParams &
  ArtistParams &
  AuthParams &
  ChartParams &
  GeoParams &
  LibraryParams &
  TagParams &
  TrackParams &
  UserParams;
