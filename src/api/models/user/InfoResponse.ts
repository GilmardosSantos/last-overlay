import type { ImageSizes } from '../ImageSizes';

export interface InfoResponse {
  user: InfoUser;
}

export interface InfoUser {
  age: string | number;
  album_count: string | number;
  artist_count: string | number;
  gender: string;
  trackCount: string;
  bootstrap: string | number;
  country: string;
  image: { '#text': string; size: ImageSizes }[];
  name: string;
  playcount: string | number;
  playlists: string | number;
  realname: string;
  registered: { unixtime: string | number; '#text': string };
  subscriber: string | number;
  type: string;
  url: string;
}
