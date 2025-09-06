export interface RecentTracksParams {
  user: string;
  limit?: string | number;
  page?: string | number;
  from?: string | number;
  to?: string | number;
  extend?: 0 | 1 | '0' | '1';
}
