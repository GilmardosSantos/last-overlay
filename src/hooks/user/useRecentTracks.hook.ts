import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { UserController } from '../../api/controllers/user.controller';
import type { RecentTracksParams } from '../../api/models/user/RecentTrackParams';
import type { RecentTrackResponse } from '../../api/models/user/RecentTrackResponse';

export default function useRecentTracks(params: RecentTracksParams) {
  return useQuery<RecentTrackResponse, AxiosError>({
    queryKey: ['recentTracks', params],
    queryFn: async ({ signal }) => {
      const res = await UserController.getRecentTracks(params, { signal });
      return res.data;
    },
    enabled: !!params?.user, // só busca quando tiver user
    staleTime: 30_000, // 30s “fresco” (ajuste à vontade)
    gcTime: 5 * 60_000, // 5 min no cache
    refetchOnWindowFocus: false,
    // Em v5, use placeholderData: keepPreviousData para trocar página sem flicker
    placeholderData: keepPreviousData,
  });
}
