import { UserController } from '@api/controllers/user.controller';
import type { TopAlbumsParams } from '@api/models/user/TopAlbumsParams';
import type { TopAlbumsResponse } from '@api/models/user/TopAlbumsResponse';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export default function useTopAlbums(params: TopAlbumsParams) {
  return useQuery<TopAlbumsResponse, AxiosError>({
    queryKey: ['topAlbums', params],
    queryFn: async ({ signal }) => {
      const res = await UserController.getTopAlbums(params, { signal });
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
