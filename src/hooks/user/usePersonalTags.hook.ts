import { UserController } from '@api/controllers/user.controller';
import type {
  PersonalTagsParams,
  TaggingTypes,
} from '@api/models/user/PersonalTagsParams';
import type { PersonalTagsResponse } from '@api/models/user/PersonalTagsResponse';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export default function usePersonalTags<
  TaggingType extends TaggingTypes = TaggingTypes,
>(params: PersonalTagsParams<TaggingType>) {
  return useQuery<PersonalTagsResponse[TaggingType], AxiosError>({
    queryKey: ['personalTags', params],
    queryFn: async ({ signal }) => {
      const res = await UserController.getPersonalTags<TaggingType>(params, {
        signal,
      });
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
