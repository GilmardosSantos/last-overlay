import { UserController } from '@api/controllers/user.controller';
import type { TopTagsParams } from '@api/models/user/TopTagsParams';
import type { TopTagsResponse } from '@api/models/user/TopTagsResponse';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export default function useTopTags(params: TopTagsParams) {
  return useQuery<TopTagsResponse, AxiosError>({
    queryKey: ['topTags', params],
    queryFn: async ({ signal }) => {
      const res = await UserController.getTopTags(params, { signal });
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
