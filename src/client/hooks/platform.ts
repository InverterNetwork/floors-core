import { useQuery, type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query'

import { fetchPlatformMetrics, type TPlatformMetrics } from '../../graphql/api'
import { platformMetricsQueryKey } from '../query-keys'

type UsePlatformMetricsQueryOptions<TData = TPlatformMetrics> = Omit<
  UseQueryOptions<TPlatformMetrics, Error, TData, typeof platformMetricsQueryKey>,
  'queryKey' | 'queryFn'
>

/**
 * @description Fetches aggregate Floor Markets platform metrics.
 */
export const usePlatformMetricsQuery = <TData = TPlatformMetrics>(
  options?: UsePlatformMetricsQueryOptions<TData>
): UseQueryResult<TData, Error> => {
  const staleTime = options?.staleTime ?? 120_000

  return useQuery({
    queryKey: platformMetricsQueryKey,
    queryFn: fetchPlatformMetrics,
    ...options,
    staleTime,
  })
}
