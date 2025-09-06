import { UserController } from '@api/controllers/user.controller';
import type { FriendsParams } from '@api/models/user/FriendsParams';
import type { FriendsResponse } from '@api/models/user/FriendsResponse';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export default function useFriends(params: FriendsParams) {
  return useQuery<FriendsResponse, AxiosError>({
    queryKey: ['friends', params],
    queryFn: async ({ signal }) => {
      const res = await UserController.getFriends(params, { signal });
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
