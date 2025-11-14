/**
 * @description Static query key for markets collections.
 */
export const marketsQueryKey = ['markets'] as const

/**
 * @description Parameterized query key for a single market.
 */
export const marketQueryKey = (marketId: string | null | undefined) =>
  ['market', marketId ?? ''] as const

/**
 * @description Static query key for platform level metrics.
 */
export const platformMetricsQueryKey = ['platform-metrics'] as const

/**
 * @description Parameterized query key for trades scoped to a market.
 */
export const marketTradesQueryKey = (marketId: string | null | undefined) =>
  ['trades', 'market', marketId ?? ''] as const

/**
 * @description Parameterized query key for trades scoped to a user.
 */
export const userTradesQueryKey = (userId: string | null | undefined) =>
  ['trades', 'user', userId ?? ''] as const

/**
 * @description Parameterized query key for a single account.
 */
export const accountQueryKey = (accountId: string | null | undefined) =>
  ['account', accountId ?? ''] as const
