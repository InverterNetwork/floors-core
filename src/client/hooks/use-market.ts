import { useMemo } from 'react'

import { Market } from '../market'

/**
 * React hook to get a Market instance for a given market address
 * @param marketAddress - The address of the Floor market contract
 * @returns Market instance with actions and hooks
 * @example
 * const market = useMarket('0x...')
 * const { buy, sell, approve } = market.actions
 */
export function useMarket(marketAddress: `0x${string}`) {
  return useMemo(() => new Market(marketAddress), [marketAddress])
}
