import { UserController } from '@api/controllers/user.controller';
import type { LovedTracksParams } from '@api/models/user/LovedTracksParams';
import type { LovedTracksResponse } from '@api/models/user/LovedTracksResponse';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export default function useLovedTracks(params: LovedTracksParams) {
  return useQuery<LovedTracksResponse, AxiosError>({
    queryKey: ['lovedTracks', params],
    queryFn: async ({ signal }) => {
      const res = await UserController.getLovedTracks(params, { signal });
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
