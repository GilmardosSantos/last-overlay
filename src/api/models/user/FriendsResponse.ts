import type { Attr } from '../Attr';
import type { ImageSizes } from '../ImageSizes';
import type { User } from '../User';

export interface FriendsResponse {
  friends: {
    '@attr': Attr;
    user: User[];
  };
}

export interface FriendsUser {
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
