import { useQuery, type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query'

import { fetchTradesByMarket, fetchTradesByUser, type TTradeData } from '../../graphql/api'
import { marketTradesQueryKey, userTradesQueryKey } from '../query-keys'

type UseMarketTradesQueryOptions<TData = TTradeData[]> = Omit<
  UseQueryOptions<TTradeData[], Error, TData, ReturnType<typeof marketTradesQueryKey>>,
  'queryKey' | 'queryFn'
>

type UseUserTradesQueryOptions<TData = TTradeData[]> = Omit<
  UseQueryOptions<TTradeData[], Error, TData, ReturnType<typeof userTradesQueryKey>>,
  'queryKey' | 'queryFn'
>

/**
 * @description Fetches the latest trades for a given market id.
 */
export const useMarketTradesQuery = <TData = TTradeData[]>(
  marketId: string | null | undefined,
  options?: UseMarketTradesQueryOptions<TData>
): UseQueryResult<TData, Error> => {
  const enabled = options?.enabled ?? Boolean(marketId)

  return useQuery({
    queryKey: marketTradesQueryKey(marketId),
    queryFn: () => fetchTradesByMarket(marketId!),
    ...options,
    enabled,
  })
}

/**
 * @description Fetches the latest trades executed by a specific user id.
 */
export const useUserTradesQuery = <TData = TTradeData[]>(
  userId: string | null | undefined,
  options?: UseUserTradesQueryOptions<TData>
): UseQueryResult<TData, Error> => {
  const enabled = options?.enabled ?? Boolean(userId)

  return useQuery({
    queryKey: userTradesQueryKey(userId),
    queryFn: () => fetchTradesByUser(userId!),
    ...options,
    enabled,
  })
}
