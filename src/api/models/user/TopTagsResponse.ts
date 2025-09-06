export interface TopTagsResponse {
  toptags: {
    '@attr': { user: string };
    tag: TopTagsTag[];
  };
}

export interface TopTagsTag {
  count: string | number;
  name: string;
  url: string;
}
