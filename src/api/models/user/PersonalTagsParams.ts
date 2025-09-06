export type TaggingTypes = 'artist' | 'album' | 'track';

export interface PersonalTagsParams<
  TaggingType extends TaggingTypes = TaggingTypes,
> {
  user: string;
  tag: string;
  taggingtype: TaggingType;
  limit?: string | number;
  page?: string | number;
}
