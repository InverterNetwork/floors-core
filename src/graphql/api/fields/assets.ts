import type { GraphQLQueryArgs, GraphQLQueryResult } from '../..'
import type { TUserAssetPosition } from './users'

// GraphQL Query Args for Markets
export const marketsQuery = {
  Market: {
    __args: {
      order_by: [{ createdAt: 'desc' }],
    },
    id: true,
    creator_id: true,
    factory_id: true,
    reserveToken_id: true,
    issuanceToken_id: true,
    initialFloorPriceRaw: true,
    initialFloorPriceFormatted: true,
    currentPriceRaw: true,
    currentPriceFormatted: true,
    floorPriceRaw: true,
    floorPriceFormatted: true,
    totalSupplyRaw: true,
    totalSupplyFormatted: true,
    marketSupplyRaw: true,
    marketSupplyFormatted: true,
    floorSupplyRaw: true,
    floorSupplyFormatted: true,
    tradingFeeBps: true,
    buyFeeBps: true,
    sellFeeBps: true,
    maxLTV: true,
    status: true,
    isBuyOpen: true,
    isSellOpen: true,
    createdAt: true,
    reserveToken: {
      name: true,
      symbol: true,
    },
    issuanceToken: {
      name: true,
      symbol: true,
      decimals: true,
      maxSupplyRaw: true,
      maxSupplyFormatted: true,
    },
    lastUpdatedAt: true,
    lastTradeTimestamp: true,
    lastElevationTimestamp: true,
    db_write_timestamp: true,
    trades: {
      __args: {
        order_by: [{ timestamp: 'desc' }],
        limit: 100,
      },
      id: true,
      tradeType: true,
      tokenAmountRaw: true,
      tokenAmountFormatted: true,
      reserveAmountRaw: true,
      reserveAmountFormatted: true,
      feeRaw: true,
      feeFormatted: true,
      newPriceRaw: true,
      newPriceFormatted: true,
      timestamp: true,

      transactionHash: true,
      user_id: true,
    },
    floorElevations: {
      __args: {
        order_by: [{ timestamp: 'desc' }],
        limit: 50,
      },
      id: true,
      market_id: true,
      oldFloorPriceRaw: true,
      oldFloorPriceFormatted: true,
      newFloorPriceRaw: true,
      newFloorPriceFormatted: true,
      deployedAmountRaw: true,
      deployedAmountFormatted: true,
      timestamp: true,
      transactionHash: true,
      db_write_timestamp: true,
      __typename: true,
    },
    feeDistributions: {
      __args: {
        order_by: [{ timestamp: 'desc' }],
        limit: 50,
      },
      id: true,
      floorAmountRaw: true,
      floorAmountFormatted: true,
      stakingAmountRaw: true,
      stakingAmountFormatted: true,
      treasuryAmountRaw: true,
      treasuryAmountFormatted: true,
      timestamp: true,
      transactionHash: true,
    },
    __typename: true,
  },
} satisfies GraphQLQueryArgs

export type MarketsQueryType = typeof marketsQuery
export type MarketsQueryResultType = GraphQLQueryResult<typeof marketsQuery>

// Type alias for individual Market from GraphQL result
export type TGraphQLMarket = NonNullable<MarketsQueryResultType['Market']>[0]

// UI-specific computed types (not available in GraphQL schema)
export interface TComputedAssetData {
  // Project Links (computed from description or external data)
  projectLinks: {
    website?: string
    github?: string
    twitter?: string
    discord?: string
    telegram?: string
    docs?: string
  }

  // Discrete Bonding Curve Mechanics (computed from GraphQL data)
  pricing: {
    currentFloorPrice: number
    currentMarketPrice: number
    staticBuyPrice: number
    staticSellPrice: number
    virtualCollateralSupply: number
    priceImpactBuy: number
    priceImpactSell: number
    guaranteedFloorProtection: number
  }

  // Dual Supply Model (computed from GraphQL data)
  supply: {
    marketSupply: number
    floorSupply: number
    totalIssuanceSupply: number
    nonRedeemableFloorSupply: number
    marketToFloorRatio: number
    protectedSupplyPercentage: number
  }

  // Floor Elevation System (computed from floorElevations array)
  floorElevation: {
    totalFeesAccumulated: number
    deployableFeesAmount: number
    totalFeesDeployed: number
    lastElevationAt: Date
    elevationHistory: Array<{
      timestamp: Date
      previousFloorPrice: number
      newFloorPrice: number
      feesDeployed: number
      liquidityAdded: number
      priceIncrease: number
      segmentsAffected: number[]
      transactionHash: string
    }>
    nextElevationThreshold: number
    estimatedFloorIncrease: number
  }

  // Fee System (computed from tradingFeeBps and feeDistributions)
  fees: {
    buyFeeRate: number
    sellFeeRate: number
    totalFeesCollected: number
    feesAvailableForDeployment: number
    feeCollectionRate24h: number
    protocolFeePercentage: number
  }

  // Credit System (computed from loans and maxLTV)
  credit: {
    totalCreditIssued: number
    creditUtilization: number
    maxCreditRatio: number
    liquidationFree: boolean
    avgCreditRatio: number
    creditGrowthRate: number
  }

  // Status & Metrics (computed from GraphQL data)
  statusInfo: {
    isActive: boolean
    tradingEnabled: boolean
    creditEnabled: boolean
    isAppreciating: boolean
    riskLevel: 'low' | 'medium' | 'high'
  }

  metrics: {
    volume24h: number
    volumeTotal: number
    transactionCount: number
    holders: number
    creditPositions: number
    totalValueLocked: number
    marketCap: number
  }

  timestamps: {
    createdAt: Date
    updatedAt: Date
  }

  // Discrete Segments (computed from supply and price data)
  segments: Array<{
    index: number
    floorPrice: number
    supply: number
    supplyRemaining: number
    isActive: boolean
    isComplete: boolean
    isFloorProtected: boolean
    percentageComplete: number
    packedData: string
  }>

  // UI-specific fields (computed from GraphQL numeric values)
  contractAddress: string // Contract address of the asset
  displayFloorPrice: string
  displayMarketPrice: string
  staticBuyPrice: string
  staticSellPrice: string
  floorElevationRate: string
  isFloorElevating: boolean
  creditUtilizationPercent: string
  nextFloorTarget: string
}

// Extended type that combines GraphQL Market data with computed UI fields
export interface TFloorAssetData extends TGraphQLMarket, TComputedAssetData {
  userPosition?: TUserAssetPosition
  // UI-computed fields (not in GraphQL schema - would come from Token entity)
  name?: string
  symbol?: string
  description?: string
}
