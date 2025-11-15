import { useMutation, type UseMutationResult } from '@tanstack/react-query'
import { usePublicClient, useWalletClient } from 'wagmi'

import {
  type BuyTradeParams,
  executeBuyTrade,
  executeSellTrade,
  type SellTradeParams,
  type TradeResult,
} from '../trade'

export function useTrade() {
  const { data: walletClient } = useWalletClient()
  const publicClient = usePublicClient()

  const buyMutation: UseMutationResult<TradeResult, Error, BuyTradeParams> = useMutation({
    mutationFn: async (params: BuyTradeParams) => {
      if (!walletClient) {
        throw new Error('Wallet not connected. Please connect your wallet to trade.')
      }

      return executeBuyTrade(walletClient, params)
    },
  })

  const sellMutation: UseMutationResult<TradeResult, Error, SellTradeParams> = useMutation({
    mutationFn: async (params: SellTradeParams) => {
      if (!walletClient) {
        throw new Error('Wallet not connected. Please connect your wallet to trade.')
      }

      return executeSellTrade(walletClient, params)
    },
  })

  return {
    buyMutation,
    sellMutation,
    publicClient,
    walletClient,
  }
}
