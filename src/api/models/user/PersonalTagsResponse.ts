import type { Attr } from '../Attr';
import type { ImageSizes } from '../ImageSizes';

export type PersonalTagsResponse = {
  artist: { taggings: { '@attr': Attr; artist: PersonalTagsArtist[] } };
  album: { taggings: { '@attr': Attr; album: PersonalTagsAlbum[] } };
  track: { taggings: { '@attr': Attr; track: PersonalTagsTrack[] } };
};

export interface PersonalTagsArtist {
  image: { '#text': string; size: ImageSizes }[];
  mbid: string;
  name: string;
  streamable: string | number;
  url: string;
}

export interface PersonalTagsAlbum {
  artist: { mbid: string; name: string; url: string };
  image: { '#text': string; size: ImageSizes }[];
  mbid: string;
  name: string;
  url: string;
}

export interface PersonalTagsTrack {
  artist: { mbid: string; name: string; url: string };
  duration: string | number;
  image: { size: ImageSizes; '#text': string }[];
  mbid: string;
  name: string;
  streamable: { '#text': string; fulltrack: string | number };
  url: string;
}
