import type { Periods } from '../Periods';

export interface TopAlbumsParams {
  user: string;
  period?: Periods;
  limit?: string | number;
  page?: string | number;
}
