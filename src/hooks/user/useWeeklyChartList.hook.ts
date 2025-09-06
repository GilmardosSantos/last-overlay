import { UserController } from '@api/controllers/user.controller';
import type { WeeklyChartListParams } from '@api/models/user/WeeklyChartListParams';
import type { WeeklyChartListResponse } from '@api/models/user/WeeklyChartListResponse';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export default function useWeeklyChartList(params: WeeklyChartListParams) {
  return useQuery<WeeklyChartListResponse, AxiosError>({
    queryKey: ['weeklyChartList', params],
    queryFn: async ({ signal }) => {
      const res = await UserController.getWeeklyChartList(params, { signal });
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
