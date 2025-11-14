import { useQuery, type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query'

import { fetchMarketById, fetchMarkets, type TFloorAssetData } from '../../graphql/api'
import { marketQueryKey, marketsQueryKey } from '../query-keys'

type UseMarketsQueryOptions<TData = TFloorAssetData[]> = Omit<
  UseQueryOptions<TFloorAssetData[], Error, TData, typeof marketsQueryKey>,
  'queryKey' | 'queryFn'
>

type UseMarketQueryOptions<TData = TFloorAssetData | null> = Omit<
  UseQueryOptions<TFloorAssetData | null, Error, TData, ReturnType<typeof marketQueryKey>>,
  'queryKey' | 'queryFn'
>

/**
 * @description Fetches and caches the latest Floor Markets data.
 */
export const useMarketsQuery = <TData = TFloorAssetData[]>(
  options?: UseMarketsQueryOptions<TData>
): UseQueryResult<TData, Error> => {
  const staleTime = options?.staleTime ?? 60_000
  const gcTime = options?.gcTime ?? 5 * 60_000

  return useQuery({
    queryKey: marketsQueryKey,
    queryFn: fetchMarkets,
    ...options,
    staleTime,
    gcTime,
  })
}

/**
 * @description Fetches and caches a single Floor Market by id.
 * @param {string | null | undefined} marketId - The target market identifier.
 */
export const useMarketQuery = <TData = TFloorAssetData | null>(
  marketId: string | null | undefined,
  options?: UseMarketQueryOptions<TData>
): UseQueryResult<TData, Error> => {
  const enabled = options?.enabled ?? Boolean(marketId)
  const staleTime = options?.staleTime ?? 30_000

  return useQuery({
    queryKey: marketQueryKey(marketId),
    queryFn: () => fetchMarketById(marketId!),
    ...options,
    enabled,
    staleTime,
  })
}
