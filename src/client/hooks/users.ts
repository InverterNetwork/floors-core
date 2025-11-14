import { useQuery, type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query'

import { fetchAccountById, type TGraphQLAccount } from '../../graphql/api'
import { accountQueryKey } from '../query-keys'

type UseAccountQueryOptions<TData = TGraphQLAccount | null> = Omit<
  UseQueryOptions<TGraphQLAccount | null, Error, TData, ReturnType<typeof accountQueryKey>>,
  'queryKey' | 'queryFn'
>

/**
 * @description Fetches a user account and caches it by account id.
 */
export const useAccountQuery = <TData = TGraphQLAccount | null>(
  accountId: string | null | undefined,
  options?: UseAccountQueryOptions<TData>
): UseQueryResult<TData, Error> => {
  const enabled = options?.enabled ?? Boolean(accountId)

  return useQuery({
    queryKey: accountQueryKey(accountId),
    queryFn: () => fetchAccountById(accountId!),
    ...options,
    enabled,
  })
}
