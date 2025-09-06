import { UserController } from '@api/controllers/user.controller';
import type { WeeklyAlbumChartParams } from '@api/models/user/WeeklyAlbumChartParams';
import type { WeeklyAlbumChartResponse } from '@api/models/user/WeeklyAlbumChartResponse';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export default function useWeeklyAlbumChart(params: WeeklyAlbumChartParams) {
  return useQuery<WeeklyAlbumChartResponse, AxiosError>({
    queryKey: ['weeklyAlbumChart', params],
    queryFn: async ({ signal }) => {
      const res = await UserController.getWeeklyAlbumChart(params, { signal });
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
