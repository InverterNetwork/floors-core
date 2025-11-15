import type { Address, WalletClient } from 'viem'
import { formatUnits, parseUnits } from 'viem'

import FloorV1Abi from '../abis/Floor_v1'

/**
 * @description Parameters for executing a buy trade
 */
export interface BuyTradeParams {
  floorAssetAddress: Address
  depositAmount: string // Amount of reserve token to spend
  minAmountOut: string // Minimum tokens to receive (slippage protection)
  decimals: number // Reserve token decimals
}

/**
 * @description Parameters for executing a sell trade
 */
export interface SellTradeParams {
  floorAssetAddress: Address
  sellAmount: string // Amount of floor tokens to sell
  minAmountOut: string // Minimum reserve to receive (slippage protection)
  decimals: number // Floor token decimals
}

/**
 * @description Result of a trade execution
 */
export interface TradeResult {
  hash: Address
  direction: 'buy' | 'sell'
}

/**
 * @description Execute a buy trade on the bonding curve
 * @param walletClient - Viem wallet client
 * @param params - Buy trade parameters
 * @returns Transaction hash
 */
export async function executeBuyTrade(
  walletClient: WalletClient,
  params: BuyTradeParams
): Promise<TradeResult> {
  const { floorAssetAddress, depositAmount, minAmountOut, decimals } = params

  if (!walletClient.account) {
    throw new Error('Wallet account is not available')
  }

  const depositAmountWei = parseUnits(depositAmount, decimals)
  const minAmountOutWei = parseUnits(minAmountOut, decimals)

  const hash = await walletClient.writeContract({
    address: floorAssetAddress,
    abi: FloorV1Abi,
    functionName: 'buy',
    args: [depositAmountWei, minAmountOutWei],
    chain: walletClient.chain,
    account: walletClient.account,
  })

  return {
    hash,
    direction: 'buy',
  }
}

/**
 * @description Execute a sell trade on the bonding curve
 * @param walletClient - Viem wallet client
 * @param params - Sell trade parameters
 * @returns Transaction hash
 */
export async function executeSellTrade(
  walletClient: WalletClient,
  params: SellTradeParams
): Promise<TradeResult> {
  const { floorAssetAddress, sellAmount, minAmountOut, decimals } = params

  if (!walletClient.account) {
    throw new Error('Wallet account is not available')
  }

  const sellAmountWei = parseUnits(sellAmount, decimals)
  const minAmountOutWei = parseUnits(minAmountOut, decimals)

  const hash = await walletClient.writeContract({
    address: floorAssetAddress,
    abi: FloorV1Abi,
    functionName: 'sell',
    args: [sellAmountWei, minAmountOutWei],
    chain: walletClient.chain,
    account: walletClient.account,
  })

  return {
    hash,
    direction: 'sell',
  }
}

/**
 * @description Calculate expected output for a buy trade
 * @param publicClient - Viem public client
 * @param floorAssetAddress - Address of the floor asset
 * @param depositAmount - Amount of reserve token to spend
 * @param decimals - Reserve token decimals
 * @returns Expected amount of tokens to receive
 */
export async function calculateBuyReturn(
  publicClient: any,
  floorAssetAddress: Address,
  depositAmount: string,
  decimals: number
): Promise<string> {
  const depositAmountWei = parseUnits(depositAmount, decimals)

  const result = await publicClient.readContract({
    address: floorAssetAddress,
    abi: FloorV1Abi,
    functionName: 'calculatePurchaseReturn',
    args: [depositAmountWei],
  })

  return formatUnits(result as bigint, decimals)
}

/**
 * @description Calculate expected output for a sell trade
 * @param publicClient - Viem public client
 * @param floorAssetAddress - Address of the floor asset
 * @param sellAmount - Amount of floor tokens to sell
 * @param decimals - Floor token decimals
 * @returns Expected amount of reserve to receive
 */
export async function calculateSellReturn(
  publicClient: any,
  floorAssetAddress: Address,
  sellAmount: string,
  decimals: number
): Promise<string> {
  const sellAmountWei = parseUnits(sellAmount, decimals)

  const result = await publicClient.readContract({
    address: floorAssetAddress,
    abi: FloorV1Abi,
    functionName: 'calculateSaleReturn',
    args: [sellAmountWei],
  })

  return formatUnits(result as bigint, decimals)
}
