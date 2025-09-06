import { UserController } from '@api/controllers/user.controller';
import type { TopArtistParams } from '@api/models/user/TopArtistsParams';
import type { TopArtistsResponse } from '@api/models/user/TopArtistsResponse';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export default function useTopArtists(params: TopArtistParams) {
  return useQuery<TopArtistsResponse, AxiosError>({
    queryKey: ['topArtists', params],
    queryFn: async ({ signal }) => {
      const res = await UserController.getTopArtists(params, { signal });
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
