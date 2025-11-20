import { useMutation, type UseMutationResult } from '@tanstack/react-query'
import { useConfig, useReadContract } from 'wagmi'
import { writeContract } from 'wagmi/actions'

import ERC20Issuance_v1 from '../abis/ERC20Issuance_v1'
import Floor_v1 from '../abis/Floor_v1'

export interface TMarketBuyParams {
  depositAmount: bigint
  slippageBps?: number // Basis points (e.g., 50 = 0.5%, 100 = 1%)
}

export interface TMarketSellParams {
  depositAmount: bigint
  slippageBps?: number // Basis points (e.g., 50 = 0.5%, 100 = 1%)
}

export interface TMarketApproveParams {
  amount: bigint
}

export interface TMarketMutationResult {
  hash: `0x${string}`
}

export class Market {
  private marketAddress: `0x${string}`

  constructor(marketAddress: `0x${string}`) {
    this.marketAddress = marketAddress
  }

  public getAddress(): `0x${string}` {
    return this.marketAddress
  }

  /**
   * Hook to get expected output for a buy
   * @param depositAmount Amount of collateral tokens to spend
   * @returns Expected fTokens to receive (after fees)
   */
  public useBuyPreview(depositAmount: bigint) {
    return useReadContract({
      address: this.marketAddress,
      abi: Floor_v1,
      functionName: 'calculatePurchaseReturn',
      args: [depositAmount],
      query: {
        enabled: depositAmount > BigInt(0),
      },
    })
  }

  /**
   * Hook to get expected output for a sell
   * @param depositAmount Amount of fTokens to sell
   * @returns Expected collateral tokens to receive (after fees)
   */
  public useSellPreview(depositAmount: bigint) {
    return useReadContract({
      address: this.marketAddress,
      abi: Floor_v1,
      functionName: 'calculateSaleReturn',
      args: [depositAmount],
      query: {
        enabled: depositAmount > BigInt(0),
      },
    })
  }

  /**
   * Hook to check if selling is enabled
   */
  public useIsSellOpen() {
    return useReadContract({
      address: this.marketAddress,
      abi: Floor_v1,
      functionName: 'isSellOpen',
    })
  }

  /**
   * Hook to check if buying is enabled
   */
  public useIsBuyOpen() {
    return useReadContract({
      address: this.marketAddress,
      abi: Floor_v1,
      functionName: 'isBuyOpen',
    })
  }

  /**
   * Hook to get fToken address
   */
  public useFTokenAddress() {
    return useReadContract({
      address: this.marketAddress,
      abi: Floor_v1,
      functionName: 'getIssuanceToken',
    })
  }

  /**
   * Hook to check current fToken allowance
   * @param owner - User address to check allowance for
   */
  public useFTokenAllowance(owner?: `0x${string}`) {
    const { data: fTokenAddress } = this.useFTokenAddress()

    return useReadContract({
      address: fTokenAddress as `0x${string}`,
      abi: ERC20Issuance_v1,
      functionName: 'allowance',
      args: owner ? [owner, this.marketAddress] : undefined,
      query: {
        enabled: !!fTokenAddress && !!owner,
      },
    })
  }

  public async approveFToken(amount: bigint) {
    const config = useConfig()
    const { readContract, writeContract } = await import('wagmi/actions')

    // 1. Get fToken address
    const fTokenAddress = (await readContract(config, {
      address: this.marketAddress,
      abi: Floor_v1,
      functionName: 'getIssuanceToken',
    })) as `0x${string}`

    console.log(`Approving fToken ${fTokenAddress} for amount ${amount}...`)

    // 2. Approve Floor contract to spend fTokens
    const hash = await writeContract(config, {
      address: fTokenAddress,
      abi: ERC20Issuance_v1,
      functionName: 'approve',
      args: [this.marketAddress, amount],
    })

    console.log(`✅ fToken approval tx: ${hash}`)
    return { hash }
  }

  /**
   * Check current fToken allowance
   * @returns Current allowance amount (in wei)
   * @example
   * const allowance = await market.getFTokenAllowance()
   * console.log('Current allowance:', formatEther(allowance))
   */
  public async getFTokenAllowance(): Promise<bigint> {
    const config = useConfig()
    const { readContract, getAccount } = await import('wagmi/actions')

    const account = getAccount(config)
    if (!account.address) {
      throw new Error('Wallet not connected')
    }

    // 1. Get fToken address
    const fTokenAddress = (await readContract(config, {
      address: this.marketAddress,
      abi: Floor_v1,
      functionName: 'getIssuanceToken',
    })) as `0x${string}`

    // 2. Check allowance
    const allowance = (await readContract(config, {
      address: fTokenAddress,
      abi: ERC20Issuance_v1,
      functionName: 'allowance',
      args: [account.address, this.marketAddress],
    })) as bigint

    return allowance
  }

  public get actions() {
    const config = useConfig()

    const mutations = {
      buy: async ({ depositAmount, slippageBps = 50 }: TMarketBuyParams) => {
        try {
          const { readContract, getAccount } = await import('wagmi/actions')

          // Validate inputs
          const account = getAccount(config)
          if (!account.address) {
            throw new Error('Wallet not connected. Please connect your wallet to continue.')
          }

          if (depositAmount <= BigInt(0)) {
            throw new Error('Invalid amount. Amount must be greater than 0.')
          }

          // Query expected output from contract
          const expectedOut = (await readContract(config, {
            address: this.marketAddress,
            abi: Floor_v1,
            functionName: 'calculatePurchaseReturn',
            args: [depositAmount],
          })) as bigint

          // Calculate minAmountOut with slippage
          // slippageBps = 50 means 0.5% slippage
          // minOut = expectedOut * (10000 - slippageBps) / 10000
          const minAmountOut = (expectedOut * BigInt(10000 - slippageBps)) / BigInt(10000)

          const hash = await writeContract(config, {
            address: this.marketAddress,
            abi: Floor_v1,
            functionName: 'buy',
            args: [depositAmount, minAmountOut],
          })
          return { hash }
        } catch (error) {
          console.error('Buy error:', error)
          throw error
        }
      },

      sell: async ({ depositAmount, slippageBps = 50 }: TMarketSellParams) => {
        try {
          const { readContract, getAccount } = await import('wagmi/actions')

          // Validate inputs
          const account = getAccount(config)
          if (!account.address) {
            throw new Error('Wallet not connected. Please connect your wallet to continue.')
          }

          if (depositAmount <= BigInt(0)) {
            throw new Error('Invalid amount. Amount must be greater than 0.')
          }

          // 1. Check if selling is enabled
          const isSellOpen = (await readContract(config, {
            address: this.marketAddress,
            abi: Floor_v1,
            functionName: 'isSellOpen',
          })) as boolean

          if (!isSellOpen) {
            throw new Error(
              'Selling is not enabled on this market. Contact admin to enable selling.'
            )
          }

          // 2. Get fToken address (the token we're selling)
          const fTokenAddress = (await readContract(config, {
            address: this.marketAddress,
            abi: Floor_v1,
            functionName: 'getIssuanceToken',
          })) as `0x${string}`

          // 3. Check user's fToken balance

          const balance = (await readContract(config, {
            address: fTokenAddress,
            abi: ERC20Issuance_v1,
            functionName: 'balanceOf',
            args: [account.address],
          })) as bigint

          if (balance < depositAmount) {
            throw new Error(
              `Insufficient fToken balance. You have ${balance.toString()} but trying to sell ${depositAmount.toString()}`
            )
          }

          // 4. Check fToken allowance (USER MUST APPROVE FTOKEN, NOT COLLATERAL!)
          const allowance = (await readContract(config, {
            address: fTokenAddress,
            abi: ERC20Issuance_v1,
            functionName: 'allowance',
            args: [account.address, this.marketAddress],
          })) as bigint

          if (allowance < depositAmount) {
            throw new Error(
              `Insufficient fToken allowance. Please approve the Floor contract to spend your fTokens first.\n\nRequired: ${depositAmount.toString()}\nCurrent: ${allowance.toString()}\n\nApprove fToken at: ${fTokenAddress}`
            )
          }

          // 5. Query expected output from contract (collateral amount after fees)
          const expectedOut = (await readContract(config, {
            address: this.marketAddress,
            abi: Floor_v1,
            functionName: 'calculateSaleReturn',
            args: [depositAmount],
          })) as bigint

          // 6. Calculate minAmountOut with slippage
          // slippageBps = 50 means 0.5% slippage
          // minOut = expectedOut * (10000 - slippageBps) / 10000
          const minAmountOut = (expectedOut * BigInt(10000 - slippageBps)) / BigInt(10000)

          // 7. Execute sell
          const hash = await writeContract(config, {
            address: this.marketAddress,
            abi: Floor_v1,
            functionName: 'sell',
            args: [depositAmount, minAmountOut],
          })
          return { hash }
        } catch (error) {
          console.error('Sell error:', error)
          throw error
        }
      },

      approve: async ({ amount }: TMarketApproveParams) => {
        try {
          const { readContract, writeContract, getAccount } = await import('wagmi/actions')

          // Validate inputs
          const account = getAccount(config)
          if (!account.address) {
            throw new Error('Wallet not connected. Please connect your wallet to continue.')
          }

          if (amount <= BigInt(0)) {
            throw new Error('Invalid approval amount. Amount must be greater than 0.')
          }

          // 1. Get fToken address
          const fTokenAddress = (await readContract(config, {
            address: this.marketAddress,
            abi: Floor_v1,
            functionName: 'getIssuanceToken',
          })) as `0x${string}`

          console.log(`Approving fToken ${fTokenAddress} for amount ${amount}...`)

          // 2. Approve Floor contract to spend fTokens
          const hash = await writeContract(config, {
            address: fTokenAddress,
            abi: ERC20Issuance_v1,
            functionName: 'approve',
            args: [this.marketAddress, amount],
          })

          console.log(`✅ fToken approval tx: ${hash}`)
          return { hash }
        } catch (error) {
          console.error('Approve error:', error)
          throw error
        }
      },
    } as const

    type InferParams<T> = T extends (params: infer P) => any ? P : never
    type InferReturn<T> = T extends (...args: any[]) => Promise<infer R> ? R : never

    return {
      buy: useMutation({
        mutationFn: mutations.buy,
      }),
      sell: useMutation({
        mutationFn: mutations.sell,
      }),
      approve: useMutation({
        mutationFn: mutations.approve,
      }),
    } as {
      [K in keyof typeof mutations]: UseMutationResult<
        InferReturn<(typeof mutations)[K]>,
        Error,
        InferParams<(typeof mutations)[K]>
      >
    }
  }
}
