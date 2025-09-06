import type { Periods } from '../Periods';

export interface TopArtistParams {
  user: string;
  period?: Periods;
  limit?: string | number;
  page?: string | number;
}
