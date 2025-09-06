import type { Periods } from '../Periods';

export interface TopTracksParams {
  user: string;
  period?: Periods;
  limit?: string | number;
  page?: string | number;
}
