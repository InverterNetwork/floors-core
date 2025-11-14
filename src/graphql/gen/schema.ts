// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    Int: number,
    String: string,
    candleperiod: any,
    contract_type: any,
    jsonb: any,
    loanstatus: any,
    marketstatus: any,
    numeric: any,
    stakestatus: any,
    timestamp: any,
    timestamptz: any,
    tradetype: any,
}


/** columns and relationships of "Account" */
export interface Account {
    db_write_timestamp: (Scalars['timestamp'] | null)
    id: Scalars['String']
    /** An array relationship */
    loans: Loan[]
    /** An array relationship */
    marketsCreated: Market[]
    /** An array relationship */
    presaleParticipations: PresaleParticipation[]
    /** An array relationship */
    stakes: Stake[]
    /** An array relationship */
    trades: Trade[]
    /** An array relationship */
    userMarketPositions: UserMarketPosition[]
    __typename: 'Account'
}


/** select columns of table "Account" */
export type Account_select_column = 'db_write_timestamp' | 'id'


/** columns and relationships of "CreditFacilityContract" */
export interface CreditFacilityContract {
    borrowToken_id: Scalars['String']
    collateralToken_id: Scalars['String']
    createdAt: Scalars['numeric']
    db_write_timestamp: (Scalars['timestamp'] | null)
    id: Scalars['String']
    lastUpdatedAt: Scalars['numeric']
    /** An array relationship */
    loans: Loan[]
    market_id: Scalars['String']
    totalDebtFormatted: Scalars['String']
    totalDebtRaw: Scalars['numeric']
    totalLoans: Scalars['numeric']
    totalLockedCollateralFormatted: Scalars['String']
    totalLockedCollateralRaw: Scalars['numeric']
    totalVolumeFormatted: Scalars['String']
    totalVolumeRaw: Scalars['numeric']
    __typename: 'CreditFacilityContract'
}


/** select columns of table "CreditFacilityContract" */
export type CreditFacilityContract_select_column = 'borrowToken_id' | 'collateralToken_id' | 'createdAt' | 'db_write_timestamp' | 'id' | 'lastUpdatedAt' | 'market_id' | 'totalDebtFormatted' | 'totalDebtRaw' | 'totalLoans' | 'totalLockedCollateralFormatted' | 'totalLockedCollateralRaw' | 'totalVolumeFormatted' | 'totalVolumeRaw'


/** columns and relationships of "FeeDistribution" */
export interface FeeDistribution {
    db_write_timestamp: (Scalars['timestamp'] | null)
    floorAmountFormatted: Scalars['String']
    floorAmountRaw: Scalars['numeric']
    id: Scalars['String']
    market_id: Scalars['String']
    stakingAmountFormatted: Scalars['String']
    stakingAmountRaw: Scalars['numeric']
    timestamp: Scalars['numeric']
    transactionHash: Scalars['String']
    treasuryAmountFormatted: Scalars['String']
    treasuryAmountRaw: Scalars['numeric']
    __typename: 'FeeDistribution'
}


/** select columns of table "FeeDistribution" */
export type FeeDistribution_select_column = 'db_write_timestamp' | 'floorAmountFormatted' | 'floorAmountRaw' | 'id' | 'market_id' | 'stakingAmountFormatted' | 'stakingAmountRaw' | 'timestamp' | 'transactionHash' | 'treasuryAmountFormatted' | 'treasuryAmountRaw'


/** columns and relationships of "FloorElevation" */
export interface FloorElevation {
    db_write_timestamp: (Scalars['timestamp'] | null)
    deployedAmountFormatted: Scalars['String']
    deployedAmountRaw: Scalars['numeric']
    id: Scalars['String']
    market_id: Scalars['String']
    newFloorPriceFormatted: Scalars['String']
    newFloorPriceRaw: Scalars['numeric']
    oldFloorPriceFormatted: Scalars['String']
    oldFloorPriceRaw: Scalars['numeric']
    timestamp: Scalars['numeric']
    transactionHash: Scalars['String']
    __typename: 'FloorElevation'
}


/** select columns of table "FloorElevation" */
export type FloorElevation_select_column = 'db_write_timestamp' | 'deployedAmountFormatted' | 'deployedAmountRaw' | 'id' | 'market_id' | 'newFloorPriceFormatted' | 'newFloorPriceRaw' | 'oldFloorPriceFormatted' | 'oldFloorPriceRaw' | 'timestamp' | 'transactionHash'


/** columns and relationships of "GlobalStats" */
export interface GlobalStats {
    activeMarkets: Scalars['numeric']
    db_write_timestamp: (Scalars['timestamp'] | null)
    id: Scalars['String']
    lastUpdatedAt: Scalars['numeric']
    totalLockedCollateralFormatted: Scalars['String']
    totalLockedCollateralRaw: Scalars['numeric']
    totalMarkets: Scalars['numeric']
    totalOutstandingDebtFormatted: Scalars['String']
    totalOutstandingDebtRaw: Scalars['numeric']
    totalVolumeFormatted: Scalars['String']
    totalVolumeRaw: Scalars['numeric']
    __typename: 'GlobalStats'
}


/** select columns of table "GlobalStats" */
export type GlobalStats_select_column = 'activeMarkets' | 'db_write_timestamp' | 'id' | 'lastUpdatedAt' | 'totalLockedCollateralFormatted' | 'totalLockedCollateralRaw' | 'totalMarkets' | 'totalOutstandingDebtFormatted' | 'totalOutstandingDebtRaw' | 'totalVolumeFormatted' | 'totalVolumeRaw'


/** columns and relationships of "Loan" */
export interface Loan {
    borrowAmountFormatted: Scalars['String']
    borrowAmountRaw: Scalars['numeric']
    borrower_id: Scalars['String']
    closedAt: (Scalars['numeric'] | null)
    db_write_timestamp: (Scalars['timestamp'] | null)
    facility_id: Scalars['String']
    floorPriceAtBorrowFormatted: Scalars['String']
    floorPriceAtBorrowRaw: Scalars['numeric']
    id: Scalars['String']
    lastUpdatedAt: Scalars['numeric']
    lockedCollateralFormatted: Scalars['String']
    lockedCollateralRaw: Scalars['numeric']
    market_id: Scalars['String']
    openedAt: Scalars['numeric']
    originationFeeFormatted: Scalars['String']
    originationFeeRaw: Scalars['numeric']
    remainingDebtFormatted: Scalars['String']
    remainingDebtRaw: Scalars['numeric']
    status: Scalars['loanstatus']
    /** An array relationship */
    statusHistory: LoanStatusHistory[]
    transactionHash: Scalars['String']
    __typename: 'Loan'
}


/** columns and relationships of "LoanStatusHistory" */
export interface LoanStatusHistory {
    db_write_timestamp: (Scalars['timestamp'] | null)
    id: Scalars['String']
    loan_id: Scalars['String']
    lockedCollateralFormatted: Scalars['String']
    lockedCollateralRaw: Scalars['numeric']
    remainingDebtFormatted: Scalars['String']
    remainingDebtRaw: Scalars['numeric']
    status: Scalars['loanstatus']
    timestamp: Scalars['numeric']
    transactionHash: Scalars['String']
    __typename: 'LoanStatusHistory'
}


/** select columns of table "LoanStatusHistory" */
export type LoanStatusHistory_select_column = 'db_write_timestamp' | 'id' | 'loan_id' | 'lockedCollateralFormatted' | 'lockedCollateralRaw' | 'remainingDebtFormatted' | 'remainingDebtRaw' | 'status' | 'timestamp' | 'transactionHash'


/** select columns of table "Loan" */
export type Loan_select_column = 'borrowAmountFormatted' | 'borrowAmountRaw' | 'borrower_id' | 'closedAt' | 'db_write_timestamp' | 'facility_id' | 'floorPriceAtBorrowFormatted' | 'floorPriceAtBorrowRaw' | 'id' | 'lastUpdatedAt' | 'lockedCollateralFormatted' | 'lockedCollateralRaw' | 'market_id' | 'openedAt' | 'originationFeeFormatted' | 'originationFeeRaw' | 'remainingDebtFormatted' | 'remainingDebtRaw' | 'status' | 'transactionHash'


/** columns and relationships of "Market" */
export interface Market {
    buyFeeBps: Scalars['numeric']
    createdAt: Scalars['numeric']
    creator_id: Scalars['String']
    currentPriceFormatted: Scalars['String']
    currentPriceRaw: Scalars['numeric']
    db_write_timestamp: (Scalars['timestamp'] | null)
    factory_id: Scalars['String']
    /** An array relationship */
    feeDistributions: FeeDistribution[]
    /** An array relationship */
    floorElevations: FloorElevation[]
    floorPriceFormatted: Scalars['String']
    floorPriceRaw: Scalars['numeric']
    floorSupplyFormatted: Scalars['String']
    floorSupplyRaw: Scalars['numeric']
    id: Scalars['String']
    initialPriceFormatted: Scalars['String']
    initialPriceRaw: Scalars['numeric']
    isBuyOpen: Scalars['Boolean']
    isSellOpen: Scalars['Boolean']
    /** An object relationship */
    issuanceToken: (Token | null)
    issuanceToken_id: Scalars['String']
    lastElevationTimestamp: Scalars['numeric']
    lastTradeTimestamp: Scalars['numeric']
    lastUpdatedAt: Scalars['numeric']
    marketSupplyFormatted: Scalars['String']
    marketSupplyRaw: Scalars['numeric']
    maxLTV: Scalars['numeric']
    maxSupplyFormatted: Scalars['String']
    maxSupplyRaw: Scalars['numeric']
    /** An object relationship */
    reserveToken: (Token | null)
    reserveToken_id: Scalars['String']
    sellFeeBps: Scalars['numeric']
    status: Scalars['marketstatus']
    totalSupplyFormatted: Scalars['String']
    totalSupplyRaw: Scalars['numeric']
    /** An array relationship */
    trades: Trade[]
    tradingFeeBps: Scalars['numeric']
    __typename: 'Market'
}


/** columns and relationships of "MarketRollingStats" */
export interface MarketRollingStats {
    averagePriceFormatted: Scalars['String']
    averagePriceRaw: Scalars['numeric']
    db_write_timestamp: (Scalars['timestamp'] | null)
    id: Scalars['String']
    lastUpdatedAt: Scalars['numeric']
    market_id: Scalars['String']
    tradeCount: Scalars['numeric']
    volumeFormatted: Scalars['String']
    volumeRaw: Scalars['numeric']
    windowSeconds: Scalars['Int']
    __typename: 'MarketRollingStats'
}


/** select columns of table "MarketRollingStats" */
export type MarketRollingStats_select_column = 'averagePriceFormatted' | 'averagePriceRaw' | 'db_write_timestamp' | 'id' | 'lastUpdatedAt' | 'market_id' | 'tradeCount' | 'volumeFormatted' | 'volumeRaw' | 'windowSeconds'


/** columns and relationships of "MarketSnapshot" */
export interface MarketSnapshot {
    db_write_timestamp: (Scalars['timestamp'] | null)
    floorPriceFormatted: Scalars['String']
    floorPriceRaw: Scalars['numeric']
    id: Scalars['String']
    marketSupplyFormatted: Scalars['String']
    marketSupplyRaw: Scalars['numeric']
    market_id: Scalars['String']
    priceFormatted: Scalars['String']
    priceRaw: Scalars['numeric']
    timestamp: Scalars['numeric']
    totalSupplyFormatted: Scalars['String']
    totalSupplyRaw: Scalars['numeric']
    trades24h: Scalars['numeric']
    volume24hFormatted: Scalars['String']
    volume24hRaw: Scalars['numeric']
    __typename: 'MarketSnapshot'
}


/** select columns of table "MarketSnapshot" */
export type MarketSnapshot_select_column = 'db_write_timestamp' | 'floorPriceFormatted' | 'floorPriceRaw' | 'id' | 'marketSupplyFormatted' | 'marketSupplyRaw' | 'market_id' | 'priceFormatted' | 'priceRaw' | 'timestamp' | 'totalSupplyFormatted' | 'totalSupplyRaw' | 'trades24h' | 'volume24hFormatted' | 'volume24hRaw'


/** select columns of table "Market" */
export type Market_select_column = 'buyFeeBps' | 'createdAt' | 'creator_id' | 'currentPriceFormatted' | 'currentPriceRaw' | 'db_write_timestamp' | 'factory_id' | 'floorPriceFormatted' | 'floorPriceRaw' | 'floorSupplyFormatted' | 'floorSupplyRaw' | 'id' | 'initialPriceFormatted' | 'initialPriceRaw' | 'isBuyOpen' | 'isSellOpen' | 'issuanceToken_id' | 'lastElevationTimestamp' | 'lastTradeTimestamp' | 'lastUpdatedAt' | 'marketSupplyFormatted' | 'marketSupplyRaw' | 'maxLTV' | 'maxSupplyFormatted' | 'maxSupplyRaw' | 'reserveToken_id' | 'sellFeeBps' | 'status' | 'totalSupplyFormatted' | 'totalSupplyRaw' | 'tradingFeeBps'


/** columns and relationships of "ModuleAddress" */
export interface ModuleAddress {
    createdAt: Scalars['numeric']
    db_write_timestamp: (Scalars['timestamp'] | null)
    id: Scalars['String']
    lastUpdatedAt: Scalars['numeric']
    market_id: Scalars['String']
    moduleType: Scalars['String']
    __typename: 'ModuleAddress'
}


/** select columns of table "ModuleAddress" */
export type ModuleAddress_select_column = 'createdAt' | 'db_write_timestamp' | 'id' | 'lastUpdatedAt' | 'market_id' | 'moduleType'


/** columns and relationships of "ModuleRegistry" */
export interface ModuleRegistry {
    authorizer: Scalars['String']
    createdAt: Scalars['numeric']
    creditFacility: (Scalars['String'] | null)
    db_write_timestamp: (Scalars['timestamp'] | null)
    feeTreasury: Scalars['String']
    floor: Scalars['String']
    id: Scalars['String']
    lastUpdatedAt: Scalars['numeric']
    presale: (Scalars['String'] | null)
    staking: (Scalars['String'] | null)
    __typename: 'ModuleRegistry'
}


/** select columns of table "ModuleRegistry" */
export type ModuleRegistry_select_column = 'authorizer' | 'createdAt' | 'creditFacility' | 'db_write_timestamp' | 'feeTreasury' | 'floor' | 'id' | 'lastUpdatedAt' | 'presale' | 'staking'


/** columns and relationships of "PreSaleContract" */
export interface PreSaleContract {
    createdAt: Scalars['numeric']
    db_write_timestamp: (Scalars['timestamp'] | null)
    endTime: Scalars['numeric']
    id: Scalars['String']
    maxLeverage: Scalars['numeric']
    /** An array relationship */
    participations: PresaleParticipation[]
    purchaseToken_id: Scalars['String']
    saleToken_id: Scalars['String']
    startTime: Scalars['numeric']
    totalParticipants: Scalars['numeric']
    totalRaisedFormatted: Scalars['String']
    totalRaisedRaw: Scalars['numeric']
    __typename: 'PreSaleContract'
}


/** select columns of table "PreSaleContract" */
export type PreSaleContract_select_column = 'createdAt' | 'db_write_timestamp' | 'endTime' | 'id' | 'maxLeverage' | 'purchaseToken_id' | 'saleToken_id' | 'startTime' | 'totalParticipants' | 'totalRaisedFormatted' | 'totalRaisedRaw'


/** columns and relationships of "PresaleParticipation" */
export interface PresaleParticipation {
    amountFormatted: Scalars['String']
    amountRaw: Scalars['numeric']
    db_write_timestamp: (Scalars['timestamp'] | null)
    id: Scalars['String']
    leverage: Scalars['numeric']
    presale_id: Scalars['String']
    timestamp: Scalars['numeric']
    transactionHash: Scalars['String']
    user_id: Scalars['String']
    __typename: 'PresaleParticipation'
}


/** select columns of table "PresaleParticipation" */
export type PresaleParticipation_select_column = 'amountFormatted' | 'amountRaw' | 'db_write_timestamp' | 'id' | 'leverage' | 'presale_id' | 'timestamp' | 'transactionHash' | 'user_id'


/** columns and relationships of "PriceCandle" */
export interface PriceCandle {
    closeFormatted: Scalars['String']
    closeRaw: Scalars['numeric']
    db_write_timestamp: (Scalars['timestamp'] | null)
    highFormatted: Scalars['String']
    highRaw: Scalars['numeric']
    id: Scalars['String']
    lowFormatted: Scalars['String']
    lowRaw: Scalars['numeric']
    market_id: Scalars['String']
    openFormatted: Scalars['String']
    openRaw: Scalars['numeric']
    period: Scalars['candleperiod']
    timestamp: Scalars['numeric']
    trades: Scalars['numeric']
    volumeFormatted: Scalars['String']
    volumeRaw: Scalars['numeric']
    __typename: 'PriceCandle'
}


/** select columns of table "PriceCandle" */
export type PriceCandle_select_column = 'closeFormatted' | 'closeRaw' | 'db_write_timestamp' | 'highFormatted' | 'highRaw' | 'id' | 'lowFormatted' | 'lowRaw' | 'market_id' | 'openFormatted' | 'openRaw' | 'period' | 'timestamp' | 'trades' | 'volumeFormatted' | 'volumeRaw'


/** columns and relationships of "Stake" */
export interface Stake {
    amountFormatted: Scalars['String']
    amountRaw: Scalars['numeric']
    contract_id: Scalars['String']
    db_write_timestamp: (Scalars['timestamp'] | null)
    id: Scalars['String']
    lockDuration: Scalars['numeric']
    status: Scalars['stakestatus']
    timestamp: Scalars['numeric']
    transactionHash: Scalars['String']
    user_id: Scalars['String']
    __typename: 'Stake'
}


/** select columns of table "Stake" */
export type Stake_select_column = 'amountFormatted' | 'amountRaw' | 'contract_id' | 'db_write_timestamp' | 'id' | 'lockDuration' | 'status' | 'timestamp' | 'transactionHash' | 'user_id'


/** columns and relationships of "StakingContract" */
export interface StakingContract {
    createdAt: Scalars['numeric']
    db_write_timestamp: (Scalars['timestamp'] | null)
    id: Scalars['String']
    rewardToken_id: Scalars['String']
    /** An array relationship */
    stakes: Stake[]
    stakingToken_id: Scalars['String']
    totalRewardsFormatted: Scalars['String']
    totalRewardsRaw: Scalars['numeric']
    totalStakedFormatted: Scalars['String']
    totalStakedRaw: Scalars['numeric']
    __typename: 'StakingContract'
}


/** select columns of table "StakingContract" */
export type StakingContract_select_column = 'createdAt' | 'db_write_timestamp' | 'id' | 'rewardToken_id' | 'stakingToken_id' | 'totalRewardsFormatted' | 'totalRewardsRaw' | 'totalStakedFormatted' | 'totalStakedRaw'


/** columns and relationships of "Token" */
export interface Token {
    db_write_timestamp: (Scalars['timestamp'] | null)
    decimals: Scalars['Int']
    id: Scalars['String']
    name: Scalars['String']
    symbol: Scalars['String']
    __typename: 'Token'
}


/** select columns of table "Token" */
export type Token_select_column = 'db_write_timestamp' | 'decimals' | 'id' | 'name' | 'symbol'


/** columns and relationships of "Trade" */
export interface Trade {
    db_write_timestamp: (Scalars['timestamp'] | null)
    feeFormatted: Scalars['String']
    feeRaw: Scalars['numeric']
    id: Scalars['String']
    market_id: Scalars['String']
    newPriceFormatted: Scalars['String']
    newPriceRaw: Scalars['numeric']
    reserveAmountFormatted: Scalars['String']
    reserveAmountRaw: Scalars['numeric']
    timestamp: Scalars['numeric']
    tokenAmountFormatted: Scalars['String']
    tokenAmountRaw: Scalars['numeric']
    tradeType: Scalars['tradetype']
    transactionHash: Scalars['String']
    user_id: Scalars['String']
    __typename: 'Trade'
}


/** select columns of table "Trade" */
export type Trade_select_column = 'db_write_timestamp' | 'feeFormatted' | 'feeRaw' | 'id' | 'market_id' | 'newPriceFormatted' | 'newPriceRaw' | 'reserveAmountFormatted' | 'reserveAmountRaw' | 'timestamp' | 'tokenAmountFormatted' | 'tokenAmountRaw' | 'tradeType' | 'transactionHash' | 'user_id'


/** columns and relationships of "UserMarketPosition" */
export interface UserMarketPosition {
    claimableRewardsFormatted: Scalars['String']
    claimableRewardsRaw: Scalars['numeric']
    db_write_timestamp: (Scalars['timestamp'] | null)
    id: Scalars['String']
    lastUpdatedAt: Scalars['numeric']
    lockedCollateralFormatted: Scalars['String']
    lockedCollateralRaw: Scalars['numeric']
    market_id: Scalars['String']
    netFTokenChangeFormatted: Scalars['String']
    netFTokenChangeRaw: Scalars['numeric']
    presaleDepositFormatted: Scalars['String']
    presaleDepositRaw: Scalars['numeric']
    presaleLeverage: Scalars['numeric']
    stakedAmountFormatted: Scalars['String']
    stakedAmountRaw: Scalars['numeric']
    totalDebtFormatted: Scalars['String']
    totalDebtRaw: Scalars['numeric']
    user_id: Scalars['String']
    __typename: 'UserMarketPosition'
}


/** select columns of table "UserMarketPosition" */
export type UserMarketPosition_select_column = 'claimableRewardsFormatted' | 'claimableRewardsRaw' | 'db_write_timestamp' | 'id' | 'lastUpdatedAt' | 'lockedCollateralFormatted' | 'lockedCollateralRaw' | 'market_id' | 'netFTokenChangeFormatted' | 'netFTokenChangeRaw' | 'presaleDepositFormatted' | 'presaleDepositRaw' | 'presaleLeverage' | 'stakedAmountFormatted' | 'stakedAmountRaw' | 'totalDebtFormatted' | 'totalDebtRaw' | 'user_id'


/** columns and relationships of "chain_metadata" */
export interface chain_metadata {
    block_height: Scalars['Int']
    chain_id: Scalars['Int']
    end_block: (Scalars['Int'] | null)
    first_event_block_number: (Scalars['Int'] | null)
    is_hyper_sync: Scalars['Boolean']
    latest_fetched_block_number: Scalars['Int']
    latest_processed_block: (Scalars['Int'] | null)
    num_batches_fetched: Scalars['Int']
    num_events_processed: (Scalars['Int'] | null)
    start_block: Scalars['Int']
    timestamp_caught_up_to_head_or_endblock: (Scalars['timestamptz'] | null)
    __typename: 'chain_metadata'
}


/** select columns of table "chain_metadata" */
export type chain_metadata_select_column = 'block_height' | 'chain_id' | 'end_block' | 'first_event_block_number' | 'is_hyper_sync' | 'latest_fetched_block_number' | 'latest_processed_block' | 'num_batches_fetched' | 'num_events_processed' | 'start_block' | 'timestamp_caught_up_to_head_or_endblock'


/** ordering argument of a cursor */
export type cursor_ordering = 'ASC' | 'DESC'


/** columns and relationships of "dynamic_contract_registry" */
export interface dynamic_contract_registry {
    chain_id: Scalars['Int']
    contract_address: Scalars['String']
    contract_type: Scalars['contract_type']
    id: Scalars['String']
    registering_event_block_number: Scalars['Int']
    registering_event_block_timestamp: Scalars['Int']
    registering_event_contract_name: Scalars['String']
    registering_event_log_index: Scalars['Int']
    registering_event_name: Scalars['String']
    registering_event_src_address: Scalars['String']
    __typename: 'dynamic_contract_registry'
}


/** select columns of table "dynamic_contract_registry" */
export type dynamic_contract_registry_select_column = 'chain_id' | 'contract_address' | 'contract_type' | 'id' | 'registering_event_block_number' | 'registering_event_block_timestamp' | 'registering_event_contract_name' | 'registering_event_log_index' | 'registering_event_name' | 'registering_event_src_address'


/** columns and relationships of "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_data {
    block_hash: Scalars['String']
    block_number: Scalars['Int']
    chain_id: Scalars['Int']
    __typename: 'end_of_block_range_scanned_data'
}


/** select columns of table "end_of_block_range_scanned_data" */
export type end_of_block_range_scanned_data_select_column = 'block_hash' | 'block_number' | 'chain_id'


/** columns and relationships of "event_sync_state" */
export interface event_sync_state {
    block_number: Scalars['Int']
    block_timestamp: Scalars['Int']
    chain_id: Scalars['Int']
    is_pre_registering_dynamic_contracts: (Scalars['Boolean'] | null)
    log_index: Scalars['Int']
    __typename: 'event_sync_state'
}


/** select columns of table "event_sync_state" */
export type event_sync_state_select_column = 'block_number' | 'block_timestamp' | 'chain_id' | 'is_pre_registering_dynamic_contracts' | 'log_index'


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'


/** columns and relationships of "persisted_state" */
export interface persisted_state {
    abi_files_hash: Scalars['String']
    config_hash: Scalars['String']
    envio_version: Scalars['String']
    handler_files_hash: Scalars['String']
    id: Scalars['Int']
    schema_hash: Scalars['String']
    __typename: 'persisted_state'
}


/** select columns of table "persisted_state" */
export type persisted_state_select_column = 'abi_files_hash' | 'config_hash' | 'envio_version' | 'handler_files_hash' | 'id' | 'schema_hash'

export interface query_root {
    /** fetch data from the table: "Account" */
    Account: Account[]
    /** fetch data from the table: "Account" using primary key columns */
    Account_by_pk: (Account | null)
    /** fetch data from the table: "CreditFacilityContract" */
    CreditFacilityContract: CreditFacilityContract[]
    /** fetch data from the table: "CreditFacilityContract" using primary key columns */
    CreditFacilityContract_by_pk: (CreditFacilityContract | null)
    /** fetch data from the table: "FeeDistribution" */
    FeeDistribution: FeeDistribution[]
    /** fetch data from the table: "FeeDistribution" using primary key columns */
    FeeDistribution_by_pk: (FeeDistribution | null)
    /** fetch data from the table: "FloorElevation" */
    FloorElevation: FloorElevation[]
    /** fetch data from the table: "FloorElevation" using primary key columns */
    FloorElevation_by_pk: (FloorElevation | null)
    /** fetch data from the table: "GlobalStats" */
    GlobalStats: GlobalStats[]
    /** fetch data from the table: "GlobalStats" using primary key columns */
    GlobalStats_by_pk: (GlobalStats | null)
    /** fetch data from the table: "Loan" */
    Loan: Loan[]
    /** fetch data from the table: "LoanStatusHistory" */
    LoanStatusHistory: LoanStatusHistory[]
    /** fetch data from the table: "LoanStatusHistory" using primary key columns */
    LoanStatusHistory_by_pk: (LoanStatusHistory | null)
    /** fetch data from the table: "Loan" using primary key columns */
    Loan_by_pk: (Loan | null)
    /** fetch data from the table: "Market" */
    Market: Market[]
    /** fetch data from the table: "MarketRollingStats" */
    MarketRollingStats: MarketRollingStats[]
    /** fetch data from the table: "MarketRollingStats" using primary key columns */
    MarketRollingStats_by_pk: (MarketRollingStats | null)
    /** fetch data from the table: "MarketSnapshot" */
    MarketSnapshot: MarketSnapshot[]
    /** fetch data from the table: "MarketSnapshot" using primary key columns */
    MarketSnapshot_by_pk: (MarketSnapshot | null)
    /** fetch data from the table: "Market" using primary key columns */
    Market_by_pk: (Market | null)
    /** fetch data from the table: "ModuleAddress" */
    ModuleAddress: ModuleAddress[]
    /** fetch data from the table: "ModuleAddress" using primary key columns */
    ModuleAddress_by_pk: (ModuleAddress | null)
    /** fetch data from the table: "ModuleRegistry" */
    ModuleRegistry: ModuleRegistry[]
    /** fetch data from the table: "ModuleRegistry" using primary key columns */
    ModuleRegistry_by_pk: (ModuleRegistry | null)
    /** fetch data from the table: "PreSaleContract" */
    PreSaleContract: PreSaleContract[]
    /** fetch data from the table: "PreSaleContract" using primary key columns */
    PreSaleContract_by_pk: (PreSaleContract | null)
    /** fetch data from the table: "PresaleParticipation" */
    PresaleParticipation: PresaleParticipation[]
    /** fetch data from the table: "PresaleParticipation" using primary key columns */
    PresaleParticipation_by_pk: (PresaleParticipation | null)
    /** fetch data from the table: "PriceCandle" */
    PriceCandle: PriceCandle[]
    /** fetch data from the table: "PriceCandle" using primary key columns */
    PriceCandle_by_pk: (PriceCandle | null)
    /** fetch data from the table: "Stake" */
    Stake: Stake[]
    /** fetch data from the table: "Stake" using primary key columns */
    Stake_by_pk: (Stake | null)
    /** fetch data from the table: "StakingContract" */
    StakingContract: StakingContract[]
    /** fetch data from the table: "StakingContract" using primary key columns */
    StakingContract_by_pk: (StakingContract | null)
    /** fetch data from the table: "Token" */
    Token: Token[]
    /** fetch data from the table: "Token" using primary key columns */
    Token_by_pk: (Token | null)
    /** fetch data from the table: "Trade" */
    Trade: Trade[]
    /** fetch data from the table: "Trade" using primary key columns */
    Trade_by_pk: (Trade | null)
    /** fetch data from the table: "UserMarketPosition" */
    UserMarketPosition: UserMarketPosition[]
    /** fetch data from the table: "UserMarketPosition" using primary key columns */
    UserMarketPosition_by_pk: (UserMarketPosition | null)
    /** fetch data from the table: "chain_metadata" */
    chain_metadata: chain_metadata[]
    /** fetch data from the table: "chain_metadata" using primary key columns */
    chain_metadata_by_pk: (chain_metadata | null)
    /** fetch data from the table: "dynamic_contract_registry" */
    dynamic_contract_registry: dynamic_contract_registry[]
    /** fetch data from the table: "dynamic_contract_registry" using primary key columns */
    dynamic_contract_registry_by_pk: (dynamic_contract_registry | null)
    /** fetch data from the table: "end_of_block_range_scanned_data" */
    end_of_block_range_scanned_data: end_of_block_range_scanned_data[]
    /** fetch data from the table: "end_of_block_range_scanned_data" using primary key columns */
    end_of_block_range_scanned_data_by_pk: (end_of_block_range_scanned_data | null)
    /** fetch data from the table: "event_sync_state" */
    event_sync_state: event_sync_state[]
    /** fetch data from the table: "event_sync_state" using primary key columns */
    event_sync_state_by_pk: (event_sync_state | null)
    /** fetch data from the table: "persisted_state" */
    persisted_state: persisted_state[]
    /** fetch data from the table: "persisted_state" using primary key columns */
    persisted_state_by_pk: (persisted_state | null)
    /** fetch data from the table: "raw_events" */
    raw_events: raw_events[]
    /** fetch data from the table: "raw_events" using primary key columns */
    raw_events_by_pk: (raw_events | null)
    __typename: 'query_root'
}


/** columns and relationships of "raw_events" */
export interface raw_events {
    block_fields: Scalars['jsonb']
    block_hash: Scalars['String']
    block_number: Scalars['Int']
    block_timestamp: Scalars['Int']
    chain_id: Scalars['Int']
    contract_name: Scalars['String']
    db_write_timestamp: (Scalars['timestamp'] | null)
    event_id: Scalars['numeric']
    event_name: Scalars['String']
    log_index: Scalars['Int']
    params: Scalars['jsonb']
    serial: Scalars['Int']
    src_address: Scalars['String']
    transaction_fields: Scalars['jsonb']
    __typename: 'raw_events'
}


/** select columns of table "raw_events" */
export type raw_events_select_column = 'block_fields' | 'block_hash' | 'block_number' | 'block_timestamp' | 'chain_id' | 'contract_name' | 'db_write_timestamp' | 'event_id' | 'event_name' | 'log_index' | 'params' | 'serial' | 'src_address' | 'transaction_fields'

export interface subscription_root {
    /** fetch data from the table: "Account" */
    Account: Account[]
    /** fetch data from the table: "Account" using primary key columns */
    Account_by_pk: (Account | null)
    /** fetch data from the table in a streaming manner: "Account" */
    Account_stream: Account[]
    /** fetch data from the table: "CreditFacilityContract" */
    CreditFacilityContract: CreditFacilityContract[]
    /** fetch data from the table: "CreditFacilityContract" using primary key columns */
    CreditFacilityContract_by_pk: (CreditFacilityContract | null)
    /** fetch data from the table in a streaming manner: "CreditFacilityContract" */
    CreditFacilityContract_stream: CreditFacilityContract[]
    /** fetch data from the table: "FeeDistribution" */
    FeeDistribution: FeeDistribution[]
    /** fetch data from the table: "FeeDistribution" using primary key columns */
    FeeDistribution_by_pk: (FeeDistribution | null)
    /** fetch data from the table in a streaming manner: "FeeDistribution" */
    FeeDistribution_stream: FeeDistribution[]
    /** fetch data from the table: "FloorElevation" */
    FloorElevation: FloorElevation[]
    /** fetch data from the table: "FloorElevation" using primary key columns */
    FloorElevation_by_pk: (FloorElevation | null)
    /** fetch data from the table in a streaming manner: "FloorElevation" */
    FloorElevation_stream: FloorElevation[]
    /** fetch data from the table: "GlobalStats" */
    GlobalStats: GlobalStats[]
    /** fetch data from the table: "GlobalStats" using primary key columns */
    GlobalStats_by_pk: (GlobalStats | null)
    /** fetch data from the table in a streaming manner: "GlobalStats" */
    GlobalStats_stream: GlobalStats[]
    /** fetch data from the table: "Loan" */
    Loan: Loan[]
    /** fetch data from the table: "LoanStatusHistory" */
    LoanStatusHistory: LoanStatusHistory[]
    /** fetch data from the table: "LoanStatusHistory" using primary key columns */
    LoanStatusHistory_by_pk: (LoanStatusHistory | null)
    /** fetch data from the table in a streaming manner: "LoanStatusHistory" */
    LoanStatusHistory_stream: LoanStatusHistory[]
    /** fetch data from the table: "Loan" using primary key columns */
    Loan_by_pk: (Loan | null)
    /** fetch data from the table in a streaming manner: "Loan" */
    Loan_stream: Loan[]
    /** fetch data from the table: "Market" */
    Market: Market[]
    /** fetch data from the table: "MarketRollingStats" */
    MarketRollingStats: MarketRollingStats[]
    /** fetch data from the table: "MarketRollingStats" using primary key columns */
    MarketRollingStats_by_pk: (MarketRollingStats | null)
    /** fetch data from the table in a streaming manner: "MarketRollingStats" */
    MarketRollingStats_stream: MarketRollingStats[]
    /** fetch data from the table: "MarketSnapshot" */
    MarketSnapshot: MarketSnapshot[]
    /** fetch data from the table: "MarketSnapshot" using primary key columns */
    MarketSnapshot_by_pk: (MarketSnapshot | null)
    /** fetch data from the table in a streaming manner: "MarketSnapshot" */
    MarketSnapshot_stream: MarketSnapshot[]
    /** fetch data from the table: "Market" using primary key columns */
    Market_by_pk: (Market | null)
    /** fetch data from the table in a streaming manner: "Market" */
    Market_stream: Market[]
    /** fetch data from the table: "ModuleAddress" */
    ModuleAddress: ModuleAddress[]
    /** fetch data from the table: "ModuleAddress" using primary key columns */
    ModuleAddress_by_pk: (ModuleAddress | null)
    /** fetch data from the table in a streaming manner: "ModuleAddress" */
    ModuleAddress_stream: ModuleAddress[]
    /** fetch data from the table: "ModuleRegistry" */
    ModuleRegistry: ModuleRegistry[]
    /** fetch data from the table: "ModuleRegistry" using primary key columns */
    ModuleRegistry_by_pk: (ModuleRegistry | null)
    /** fetch data from the table in a streaming manner: "ModuleRegistry" */
    ModuleRegistry_stream: ModuleRegistry[]
    /** fetch data from the table: "PreSaleContract" */
    PreSaleContract: PreSaleContract[]
    /** fetch data from the table: "PreSaleContract" using primary key columns */
    PreSaleContract_by_pk: (PreSaleContract | null)
    /** fetch data from the table in a streaming manner: "PreSaleContract" */
    PreSaleContract_stream: PreSaleContract[]
    /** fetch data from the table: "PresaleParticipation" */
    PresaleParticipation: PresaleParticipation[]
    /** fetch data from the table: "PresaleParticipation" using primary key columns */
    PresaleParticipation_by_pk: (PresaleParticipation | null)
    /** fetch data from the table in a streaming manner: "PresaleParticipation" */
    PresaleParticipation_stream: PresaleParticipation[]
    /** fetch data from the table: "PriceCandle" */
    PriceCandle: PriceCandle[]
    /** fetch data from the table: "PriceCandle" using primary key columns */
    PriceCandle_by_pk: (PriceCandle | null)
    /** fetch data from the table in a streaming manner: "PriceCandle" */
    PriceCandle_stream: PriceCandle[]
    /** fetch data from the table: "Stake" */
    Stake: Stake[]
    /** fetch data from the table: "Stake" using primary key columns */
    Stake_by_pk: (Stake | null)
    /** fetch data from the table in a streaming manner: "Stake" */
    Stake_stream: Stake[]
    /** fetch data from the table: "StakingContract" */
    StakingContract: StakingContract[]
    /** fetch data from the table: "StakingContract" using primary key columns */
    StakingContract_by_pk: (StakingContract | null)
    /** fetch data from the table in a streaming manner: "StakingContract" */
    StakingContract_stream: StakingContract[]
    /** fetch data from the table: "Token" */
    Token: Token[]
    /** fetch data from the table: "Token" using primary key columns */
    Token_by_pk: (Token | null)
    /** fetch data from the table in a streaming manner: "Token" */
    Token_stream: Token[]
    /** fetch data from the table: "Trade" */
    Trade: Trade[]
    /** fetch data from the table: "Trade" using primary key columns */
    Trade_by_pk: (Trade | null)
    /** fetch data from the table in a streaming manner: "Trade" */
    Trade_stream: Trade[]
    /** fetch data from the table: "UserMarketPosition" */
    UserMarketPosition: UserMarketPosition[]
    /** fetch data from the table: "UserMarketPosition" using primary key columns */
    UserMarketPosition_by_pk: (UserMarketPosition | null)
    /** fetch data from the table in a streaming manner: "UserMarketPosition" */
    UserMarketPosition_stream: UserMarketPosition[]
    /** fetch data from the table: "chain_metadata" */
    chain_metadata: chain_metadata[]
    /** fetch data from the table: "chain_metadata" using primary key columns */
    chain_metadata_by_pk: (chain_metadata | null)
    /** fetch data from the table in a streaming manner: "chain_metadata" */
    chain_metadata_stream: chain_metadata[]
    /** fetch data from the table: "dynamic_contract_registry" */
    dynamic_contract_registry: dynamic_contract_registry[]
    /** fetch data from the table: "dynamic_contract_registry" using primary key columns */
    dynamic_contract_registry_by_pk: (dynamic_contract_registry | null)
    /** fetch data from the table in a streaming manner: "dynamic_contract_registry" */
    dynamic_contract_registry_stream: dynamic_contract_registry[]
    /** fetch data from the table: "end_of_block_range_scanned_data" */
    end_of_block_range_scanned_data: end_of_block_range_scanned_data[]
    /** fetch data from the table: "end_of_block_range_scanned_data" using primary key columns */
    end_of_block_range_scanned_data_by_pk: (end_of_block_range_scanned_data | null)
    /** fetch data from the table in a streaming manner: "end_of_block_range_scanned_data" */
    end_of_block_range_scanned_data_stream: end_of_block_range_scanned_data[]
    /** fetch data from the table: "event_sync_state" */
    event_sync_state: event_sync_state[]
    /** fetch data from the table: "event_sync_state" using primary key columns */
    event_sync_state_by_pk: (event_sync_state | null)
    /** fetch data from the table in a streaming manner: "event_sync_state" */
    event_sync_state_stream: event_sync_state[]
    /** fetch data from the table: "persisted_state" */
    persisted_state: persisted_state[]
    /** fetch data from the table: "persisted_state" using primary key columns */
    persisted_state_by_pk: (persisted_state | null)
    /** fetch data from the table in a streaming manner: "persisted_state" */
    persisted_state_stream: persisted_state[]
    /** fetch data from the table: "raw_events" */
    raw_events: raw_events[]
    /** fetch data from the table: "raw_events" using primary key columns */
    raw_events_by_pk: (raw_events | null)
    /** fetch data from the table in a streaming manner: "raw_events" */
    raw_events_stream: raw_events[]
    __typename: 'subscription_root'
}

export type Query = query_root
export type Subscription = subscription_root


/** columns and relationships of "Account" */
export interface AccountGenqlSelection{
    db_write_timestamp?: boolean | number
    id?: boolean | number
    /** An array relationship */
    loans?: (LoanGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Loan_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Loan_order_by[] | null), 
    /** filter the rows returned */
    where?: (Loan_bool_exp | null)} })
    /** An array relationship */
    marketsCreated?: (MarketGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Market_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Market_order_by[] | null), 
    /** filter the rows returned */
    where?: (Market_bool_exp | null)} })
    /** An array relationship */
    presaleParticipations?: (PresaleParticipationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (PresaleParticipation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (PresaleParticipation_order_by[] | null), 
    /** filter the rows returned */
    where?: (PresaleParticipation_bool_exp | null)} })
    /** An array relationship */
    stakes?: (StakeGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Stake_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Stake_order_by[] | null), 
    /** filter the rows returned */
    where?: (Stake_bool_exp | null)} })
    /** An array relationship */
    trades?: (TradeGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Trade_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Trade_order_by[] | null), 
    /** filter the rows returned */
    where?: (Trade_bool_exp | null)} })
    /** An array relationship */
    userMarketPositions?: (UserMarketPositionGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (UserMarketPosition_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (UserMarketPosition_order_by[] | null), 
    /** filter the rows returned */
    where?: (UserMarketPosition_bool_exp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "Account". All fields are combined with a logical 'AND'. */
export interface Account_bool_exp {_and?: (Account_bool_exp[] | null),_not?: (Account_bool_exp | null),_or?: (Account_bool_exp[] | null),db_write_timestamp?: (timestamp_comparison_exp | null),id?: (String_comparison_exp | null),loans?: (Loan_bool_exp | null),marketsCreated?: (Market_bool_exp | null),presaleParticipations?: (PresaleParticipation_bool_exp | null),stakes?: (Stake_bool_exp | null),trades?: (Trade_bool_exp | null),userMarketPositions?: (UserMarketPosition_bool_exp | null)}


/** Ordering options when selecting data from "Account". */
export interface Account_order_by {db_write_timestamp?: (order_by | null),id?: (order_by | null),loans_aggregate?: (Loan_aggregate_order_by | null),marketsCreated_aggregate?: (Market_aggregate_order_by | null),presaleParticipations_aggregate?: (PresaleParticipation_aggregate_order_by | null),stakes_aggregate?: (Stake_aggregate_order_by | null),trades_aggregate?: (Trade_aggregate_order_by | null),userMarketPositions_aggregate?: (UserMarketPosition_aggregate_order_by | null)}


/** Streaming cursor of the table "Account" */
export interface Account_stream_cursor_input {
/** Stream column input with initial value */
initial_value: Account_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface Account_stream_cursor_value_input {db_write_timestamp?: (Scalars['timestamp'] | null),id?: (Scalars['String'] | null)}


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {_eq?: (Scalars['Boolean'] | null),_gt?: (Scalars['Boolean'] | null),_gte?: (Scalars['Boolean'] | null),_in?: (Scalars['Boolean'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Boolean'] | null),_lte?: (Scalars['Boolean'] | null),_neq?: (Scalars['Boolean'] | null),_nin?: (Scalars['Boolean'][] | null)}


/** columns and relationships of "CreditFacilityContract" */
export interface CreditFacilityContractGenqlSelection{
    borrowToken_id?: boolean | number
    collateralToken_id?: boolean | number
    createdAt?: boolean | number
    db_write_timestamp?: boolean | number
    id?: boolean | number
    lastUpdatedAt?: boolean | number
    /** An array relationship */
    loans?: (LoanGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Loan_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Loan_order_by[] | null), 
    /** filter the rows returned */
    where?: (Loan_bool_exp | null)} })
    market_id?: boolean | number
    totalDebtFormatted?: boolean | number
    totalDebtRaw?: boolean | number
    totalLoans?: boolean | number
    totalLockedCollateralFormatted?: boolean | number
    totalLockedCollateralRaw?: boolean | number
    totalVolumeFormatted?: boolean | number
    totalVolumeRaw?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "CreditFacilityContract". All fields are combined with a logical 'AND'. */
export interface CreditFacilityContract_bool_exp {_and?: (CreditFacilityContract_bool_exp[] | null),_not?: (CreditFacilityContract_bool_exp | null),_or?: (CreditFacilityContract_bool_exp[] | null),borrowToken_id?: (String_comparison_exp | null),collateralToken_id?: (String_comparison_exp | null),createdAt?: (numeric_comparison_exp | null),db_write_timestamp?: (timestamp_comparison_exp | null),id?: (String_comparison_exp | null),lastUpdatedAt?: (numeric_comparison_exp | null),loans?: (Loan_bool_exp | null),market_id?: (String_comparison_exp | null),totalDebtFormatted?: (String_comparison_exp | null),totalDebtRaw?: (numeric_comparison_exp | null),totalLoans?: (numeric_comparison_exp | null),totalLockedCollateralFormatted?: (String_comparison_exp | null),totalLockedCollateralRaw?: (numeric_comparison_exp | null),totalVolumeFormatted?: (String_comparison_exp | null),totalVolumeRaw?: (numeric_comparison_exp | null)}


/** Ordering options when selecting data from "CreditFacilityContract". */
export interface CreditFacilityContract_order_by {borrowToken_id?: (order_by | null),collateralToken_id?: (order_by | null),createdAt?: (order_by | null),db_write_timestamp?: (order_by | null),id?: (order_by | null),lastUpdatedAt?: (order_by | null),loans_aggregate?: (Loan_aggregate_order_by | null),market_id?: (order_by | null),totalDebtFormatted?: (order_by | null),totalDebtRaw?: (order_by | null),totalLoans?: (order_by | null),totalLockedCollateralFormatted?: (order_by | null),totalLockedCollateralRaw?: (order_by | null),totalVolumeFormatted?: (order_by | null),totalVolumeRaw?: (order_by | null)}


/** Streaming cursor of the table "CreditFacilityContract" */
export interface CreditFacilityContract_stream_cursor_input {
/** Stream column input with initial value */
initial_value: CreditFacilityContract_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface CreditFacilityContract_stream_cursor_value_input {borrowToken_id?: (Scalars['String'] | null),collateralToken_id?: (Scalars['String'] | null),createdAt?: (Scalars['numeric'] | null),db_write_timestamp?: (Scalars['timestamp'] | null),id?: (Scalars['String'] | null),lastUpdatedAt?: (Scalars['numeric'] | null),market_id?: (Scalars['String'] | null),totalDebtFormatted?: (Scalars['String'] | null),totalDebtRaw?: (Scalars['numeric'] | null),totalLoans?: (Scalars['numeric'] | null),totalLockedCollateralFormatted?: (Scalars['String'] | null),totalLockedCollateralRaw?: (Scalars['numeric'] | null),totalVolumeFormatted?: (Scalars['String'] | null),totalVolumeRaw?: (Scalars['numeric'] | null)}


/** columns and relationships of "FeeDistribution" */
export interface FeeDistributionGenqlSelection{
    db_write_timestamp?: boolean | number
    floorAmountFormatted?: boolean | number
    floorAmountRaw?: boolean | number
    id?: boolean | number
    market_id?: boolean | number
    stakingAmountFormatted?: boolean | number
    stakingAmountRaw?: boolean | number
    timestamp?: boolean | number
    transactionHash?: boolean | number
    treasuryAmountFormatted?: boolean | number
    treasuryAmountRaw?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "FeeDistribution" */
export interface FeeDistribution_aggregate_order_by {avg?: (FeeDistribution_avg_order_by | null),count?: (order_by | null),max?: (FeeDistribution_max_order_by | null),min?: (FeeDistribution_min_order_by | null),stddev?: (FeeDistribution_stddev_order_by | null),stddev_pop?: (FeeDistribution_stddev_pop_order_by | null),stddev_samp?: (FeeDistribution_stddev_samp_order_by | null),sum?: (FeeDistribution_sum_order_by | null),var_pop?: (FeeDistribution_var_pop_order_by | null),var_samp?: (FeeDistribution_var_samp_order_by | null),variance?: (FeeDistribution_variance_order_by | null)}


/** order by avg() on columns of table "FeeDistribution" */
export interface FeeDistribution_avg_order_by {floorAmountRaw?: (order_by | null),stakingAmountRaw?: (order_by | null),timestamp?: (order_by | null),treasuryAmountRaw?: (order_by | null)}


/** Boolean expression to filter rows from the table "FeeDistribution". All fields are combined with a logical 'AND'. */
export interface FeeDistribution_bool_exp {_and?: (FeeDistribution_bool_exp[] | null),_not?: (FeeDistribution_bool_exp | null),_or?: (FeeDistribution_bool_exp[] | null),db_write_timestamp?: (timestamp_comparison_exp | null),floorAmountFormatted?: (String_comparison_exp | null),floorAmountRaw?: (numeric_comparison_exp | null),id?: (String_comparison_exp | null),market_id?: (String_comparison_exp | null),stakingAmountFormatted?: (String_comparison_exp | null),stakingAmountRaw?: (numeric_comparison_exp | null),timestamp?: (numeric_comparison_exp | null),transactionHash?: (String_comparison_exp | null),treasuryAmountFormatted?: (String_comparison_exp | null),treasuryAmountRaw?: (numeric_comparison_exp | null)}


/** order by max() on columns of table "FeeDistribution" */
export interface FeeDistribution_max_order_by {db_write_timestamp?: (order_by | null),floorAmountFormatted?: (order_by | null),floorAmountRaw?: (order_by | null),id?: (order_by | null),market_id?: (order_by | null),stakingAmountFormatted?: (order_by | null),stakingAmountRaw?: (order_by | null),timestamp?: (order_by | null),transactionHash?: (order_by | null),treasuryAmountFormatted?: (order_by | null),treasuryAmountRaw?: (order_by | null)}


/** order by min() on columns of table "FeeDistribution" */
export interface FeeDistribution_min_order_by {db_write_timestamp?: (order_by | null),floorAmountFormatted?: (order_by | null),floorAmountRaw?: (order_by | null),id?: (order_by | null),market_id?: (order_by | null),stakingAmountFormatted?: (order_by | null),stakingAmountRaw?: (order_by | null),timestamp?: (order_by | null),transactionHash?: (order_by | null),treasuryAmountFormatted?: (order_by | null),treasuryAmountRaw?: (order_by | null)}


/** Ordering options when selecting data from "FeeDistribution". */
export interface FeeDistribution_order_by {db_write_timestamp?: (order_by | null),floorAmountFormatted?: (order_by | null),floorAmountRaw?: (order_by | null),id?: (order_by | null),market_id?: (order_by | null),stakingAmountFormatted?: (order_by | null),stakingAmountRaw?: (order_by | null),timestamp?: (order_by | null),transactionHash?: (order_by | null),treasuryAmountFormatted?: (order_by | null),treasuryAmountRaw?: (order_by | null)}


/** order by stddev() on columns of table "FeeDistribution" */
export interface FeeDistribution_stddev_order_by {floorAmountRaw?: (order_by | null),stakingAmountRaw?: (order_by | null),timestamp?: (order_by | null),treasuryAmountRaw?: (order_by | null)}


/** order by stddev_pop() on columns of table "FeeDistribution" */
export interface FeeDistribution_stddev_pop_order_by {floorAmountRaw?: (order_by | null),stakingAmountRaw?: (order_by | null),timestamp?: (order_by | null),treasuryAmountRaw?: (order_by | null)}


/** order by stddev_samp() on columns of table "FeeDistribution" */
export interface FeeDistribution_stddev_samp_order_by {floorAmountRaw?: (order_by | null),stakingAmountRaw?: (order_by | null),timestamp?: (order_by | null),treasuryAmountRaw?: (order_by | null)}


/** Streaming cursor of the table "FeeDistribution" */
export interface FeeDistribution_stream_cursor_input {
/** Stream column input with initial value */
initial_value: FeeDistribution_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface FeeDistribution_stream_cursor_value_input {db_write_timestamp?: (Scalars['timestamp'] | null),floorAmountFormatted?: (Scalars['String'] | null),floorAmountRaw?: (Scalars['numeric'] | null),id?: (Scalars['String'] | null),market_id?: (Scalars['String'] | null),stakingAmountFormatted?: (Scalars['String'] | null),stakingAmountRaw?: (Scalars['numeric'] | null),timestamp?: (Scalars['numeric'] | null),transactionHash?: (Scalars['String'] | null),treasuryAmountFormatted?: (Scalars['String'] | null),treasuryAmountRaw?: (Scalars['numeric'] | null)}


/** order by sum() on columns of table "FeeDistribution" */
export interface FeeDistribution_sum_order_by {floorAmountRaw?: (order_by | null),stakingAmountRaw?: (order_by | null),timestamp?: (order_by | null),treasuryAmountRaw?: (order_by | null)}


/** order by var_pop() on columns of table "FeeDistribution" */
export interface FeeDistribution_var_pop_order_by {floorAmountRaw?: (order_by | null),stakingAmountRaw?: (order_by | null),timestamp?: (order_by | null),treasuryAmountRaw?: (order_by | null)}


/** order by var_samp() on columns of table "FeeDistribution" */
export interface FeeDistribution_var_samp_order_by {floorAmountRaw?: (order_by | null),stakingAmountRaw?: (order_by | null),timestamp?: (order_by | null),treasuryAmountRaw?: (order_by | null)}


/** order by variance() on columns of table "FeeDistribution" */
export interface FeeDistribution_variance_order_by {floorAmountRaw?: (order_by | null),stakingAmountRaw?: (order_by | null),timestamp?: (order_by | null),treasuryAmountRaw?: (order_by | null)}


/** columns and relationships of "FloorElevation" */
export interface FloorElevationGenqlSelection{
    db_write_timestamp?: boolean | number
    deployedAmountFormatted?: boolean | number
    deployedAmountRaw?: boolean | number
    id?: boolean | number
    market_id?: boolean | number
    newFloorPriceFormatted?: boolean | number
    newFloorPriceRaw?: boolean | number
    oldFloorPriceFormatted?: boolean | number
    oldFloorPriceRaw?: boolean | number
    timestamp?: boolean | number
    transactionHash?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "FloorElevation" */
export interface FloorElevation_aggregate_order_by {avg?: (FloorElevation_avg_order_by | null),count?: (order_by | null),max?: (FloorElevation_max_order_by | null),min?: (FloorElevation_min_order_by | null),stddev?: (FloorElevation_stddev_order_by | null),stddev_pop?: (FloorElevation_stddev_pop_order_by | null),stddev_samp?: (FloorElevation_stddev_samp_order_by | null),sum?: (FloorElevation_sum_order_by | null),var_pop?: (FloorElevation_var_pop_order_by | null),var_samp?: (FloorElevation_var_samp_order_by | null),variance?: (FloorElevation_variance_order_by | null)}


/** order by avg() on columns of table "FloorElevation" */
export interface FloorElevation_avg_order_by {deployedAmountRaw?: (order_by | null),newFloorPriceRaw?: (order_by | null),oldFloorPriceRaw?: (order_by | null),timestamp?: (order_by | null)}


/** Boolean expression to filter rows from the table "FloorElevation". All fields are combined with a logical 'AND'. */
export interface FloorElevation_bool_exp {_and?: (FloorElevation_bool_exp[] | null),_not?: (FloorElevation_bool_exp | null),_or?: (FloorElevation_bool_exp[] | null),db_write_timestamp?: (timestamp_comparison_exp | null),deployedAmountFormatted?: (String_comparison_exp | null),deployedAmountRaw?: (numeric_comparison_exp | null),id?: (String_comparison_exp | null),market_id?: (String_comparison_exp | null),newFloorPriceFormatted?: (String_comparison_exp | null),newFloorPriceRaw?: (numeric_comparison_exp | null),oldFloorPriceFormatted?: (String_comparison_exp | null),oldFloorPriceRaw?: (numeric_comparison_exp | null),timestamp?: (numeric_comparison_exp | null),transactionHash?: (String_comparison_exp | null)}


/** order by max() on columns of table "FloorElevation" */
export interface FloorElevation_max_order_by {db_write_timestamp?: (order_by | null),deployedAmountFormatted?: (order_by | null),deployedAmountRaw?: (order_by | null),id?: (order_by | null),market_id?: (order_by | null),newFloorPriceFormatted?: (order_by | null),newFloorPriceRaw?: (order_by | null),oldFloorPriceFormatted?: (order_by | null),oldFloorPriceRaw?: (order_by | null),timestamp?: (order_by | null),transactionHash?: (order_by | null)}


/** order by min() on columns of table "FloorElevation" */
export interface FloorElevation_min_order_by {db_write_timestamp?: (order_by | null),deployedAmountFormatted?: (order_by | null),deployedAmountRaw?: (order_by | null),id?: (order_by | null),market_id?: (order_by | null),newFloorPriceFormatted?: (order_by | null),newFloorPriceRaw?: (order_by | null),oldFloorPriceFormatted?: (order_by | null),oldFloorPriceRaw?: (order_by | null),timestamp?: (order_by | null),transactionHash?: (order_by | null)}


/** Ordering options when selecting data from "FloorElevation". */
export interface FloorElevation_order_by {db_write_timestamp?: (order_by | null),deployedAmountFormatted?: (order_by | null),deployedAmountRaw?: (order_by | null),id?: (order_by | null),market_id?: (order_by | null),newFloorPriceFormatted?: (order_by | null),newFloorPriceRaw?: (order_by | null),oldFloorPriceFormatted?: (order_by | null),oldFloorPriceRaw?: (order_by | null),timestamp?: (order_by | null),transactionHash?: (order_by | null)}


/** order by stddev() on columns of table "FloorElevation" */
export interface FloorElevation_stddev_order_by {deployedAmountRaw?: (order_by | null),newFloorPriceRaw?: (order_by | null),oldFloorPriceRaw?: (order_by | null),timestamp?: (order_by | null)}


/** order by stddev_pop() on columns of table "FloorElevation" */
export interface FloorElevation_stddev_pop_order_by {deployedAmountRaw?: (order_by | null),newFloorPriceRaw?: (order_by | null),oldFloorPriceRaw?: (order_by | null),timestamp?: (order_by | null)}


/** order by stddev_samp() on columns of table "FloorElevation" */
export interface FloorElevation_stddev_samp_order_by {deployedAmountRaw?: (order_by | null),newFloorPriceRaw?: (order_by | null),oldFloorPriceRaw?: (order_by | null),timestamp?: (order_by | null)}


/** Streaming cursor of the table "FloorElevation" */
export interface FloorElevation_stream_cursor_input {
/** Stream column input with initial value */
initial_value: FloorElevation_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface FloorElevation_stream_cursor_value_input {db_write_timestamp?: (Scalars['timestamp'] | null),deployedAmountFormatted?: (Scalars['String'] | null),deployedAmountRaw?: (Scalars['numeric'] | null),id?: (Scalars['String'] | null),market_id?: (Scalars['String'] | null),newFloorPriceFormatted?: (Scalars['String'] | null),newFloorPriceRaw?: (Scalars['numeric'] | null),oldFloorPriceFormatted?: (Scalars['String'] | null),oldFloorPriceRaw?: (Scalars['numeric'] | null),timestamp?: (Scalars['numeric'] | null),transactionHash?: (Scalars['String'] | null)}


/** order by sum() on columns of table "FloorElevation" */
export interface FloorElevation_sum_order_by {deployedAmountRaw?: (order_by | null),newFloorPriceRaw?: (order_by | null),oldFloorPriceRaw?: (order_by | null),timestamp?: (order_by | null)}


/** order by var_pop() on columns of table "FloorElevation" */
export interface FloorElevation_var_pop_order_by {deployedAmountRaw?: (order_by | null),newFloorPriceRaw?: (order_by | null),oldFloorPriceRaw?: (order_by | null),timestamp?: (order_by | null)}


/** order by var_samp() on columns of table "FloorElevation" */
export interface FloorElevation_var_samp_order_by {deployedAmountRaw?: (order_by | null),newFloorPriceRaw?: (order_by | null),oldFloorPriceRaw?: (order_by | null),timestamp?: (order_by | null)}


/** order by variance() on columns of table "FloorElevation" */
export interface FloorElevation_variance_order_by {deployedAmountRaw?: (order_by | null),newFloorPriceRaw?: (order_by | null),oldFloorPriceRaw?: (order_by | null),timestamp?: (order_by | null)}


/** columns and relationships of "GlobalStats" */
export interface GlobalStatsGenqlSelection{
    activeMarkets?: boolean | number
    db_write_timestamp?: boolean | number
    id?: boolean | number
    lastUpdatedAt?: boolean | number
    totalLockedCollateralFormatted?: boolean | number
    totalLockedCollateralRaw?: boolean | number
    totalMarkets?: boolean | number
    totalOutstandingDebtFormatted?: boolean | number
    totalOutstandingDebtRaw?: boolean | number
    totalVolumeFormatted?: boolean | number
    totalVolumeRaw?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "GlobalStats". All fields are combined with a logical 'AND'. */
export interface GlobalStats_bool_exp {_and?: (GlobalStats_bool_exp[] | null),_not?: (GlobalStats_bool_exp | null),_or?: (GlobalStats_bool_exp[] | null),activeMarkets?: (numeric_comparison_exp | null),db_write_timestamp?: (timestamp_comparison_exp | null),id?: (String_comparison_exp | null),lastUpdatedAt?: (numeric_comparison_exp | null),totalLockedCollateralFormatted?: (String_comparison_exp | null),totalLockedCollateralRaw?: (numeric_comparison_exp | null),totalMarkets?: (numeric_comparison_exp | null),totalOutstandingDebtFormatted?: (String_comparison_exp | null),totalOutstandingDebtRaw?: (numeric_comparison_exp | null),totalVolumeFormatted?: (String_comparison_exp | null),totalVolumeRaw?: (numeric_comparison_exp | null)}


/** Ordering options when selecting data from "GlobalStats". */
export interface GlobalStats_order_by {activeMarkets?: (order_by | null),db_write_timestamp?: (order_by | null),id?: (order_by | null),lastUpdatedAt?: (order_by | null),totalLockedCollateralFormatted?: (order_by | null),totalLockedCollateralRaw?: (order_by | null),totalMarkets?: (order_by | null),totalOutstandingDebtFormatted?: (order_by | null),totalOutstandingDebtRaw?: (order_by | null),totalVolumeFormatted?: (order_by | null),totalVolumeRaw?: (order_by | null)}


/** Streaming cursor of the table "GlobalStats" */
export interface GlobalStats_stream_cursor_input {
/** Stream column input with initial value */
initial_value: GlobalStats_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface GlobalStats_stream_cursor_value_input {activeMarkets?: (Scalars['numeric'] | null),db_write_timestamp?: (Scalars['timestamp'] | null),id?: (Scalars['String'] | null),lastUpdatedAt?: (Scalars['numeric'] | null),totalLockedCollateralFormatted?: (Scalars['String'] | null),totalLockedCollateralRaw?: (Scalars['numeric'] | null),totalMarkets?: (Scalars['numeric'] | null),totalOutstandingDebtFormatted?: (Scalars['String'] | null),totalOutstandingDebtRaw?: (Scalars['numeric'] | null),totalVolumeFormatted?: (Scalars['String'] | null),totalVolumeRaw?: (Scalars['numeric'] | null)}


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** columns and relationships of "Loan" */
export interface LoanGenqlSelection{
    borrowAmountFormatted?: boolean | number
    borrowAmountRaw?: boolean | number
    borrower_id?: boolean | number
    closedAt?: boolean | number
    db_write_timestamp?: boolean | number
    facility_id?: boolean | number
    floorPriceAtBorrowFormatted?: boolean | number
    floorPriceAtBorrowRaw?: boolean | number
    id?: boolean | number
    lastUpdatedAt?: boolean | number
    lockedCollateralFormatted?: boolean | number
    lockedCollateralRaw?: boolean | number
    market_id?: boolean | number
    openedAt?: boolean | number
    originationFeeFormatted?: boolean | number
    originationFeeRaw?: boolean | number
    remainingDebtFormatted?: boolean | number
    remainingDebtRaw?: boolean | number
    status?: boolean | number
    /** An array relationship */
    statusHistory?: (LoanStatusHistoryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (LoanStatusHistory_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (LoanStatusHistory_order_by[] | null), 
    /** filter the rows returned */
    where?: (LoanStatusHistory_bool_exp | null)} })
    transactionHash?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "LoanStatusHistory" */
export interface LoanStatusHistoryGenqlSelection{
    db_write_timestamp?: boolean | number
    id?: boolean | number
    loan_id?: boolean | number
    lockedCollateralFormatted?: boolean | number
    lockedCollateralRaw?: boolean | number
    remainingDebtFormatted?: boolean | number
    remainingDebtRaw?: boolean | number
    status?: boolean | number
    timestamp?: boolean | number
    transactionHash?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "LoanStatusHistory" */
export interface LoanStatusHistory_aggregate_order_by {avg?: (LoanStatusHistory_avg_order_by | null),count?: (order_by | null),max?: (LoanStatusHistory_max_order_by | null),min?: (LoanStatusHistory_min_order_by | null),stddev?: (LoanStatusHistory_stddev_order_by | null),stddev_pop?: (LoanStatusHistory_stddev_pop_order_by | null),stddev_samp?: (LoanStatusHistory_stddev_samp_order_by | null),sum?: (LoanStatusHistory_sum_order_by | null),var_pop?: (LoanStatusHistory_var_pop_order_by | null),var_samp?: (LoanStatusHistory_var_samp_order_by | null),variance?: (LoanStatusHistory_variance_order_by | null)}


/** order by avg() on columns of table "LoanStatusHistory" */
export interface LoanStatusHistory_avg_order_by {lockedCollateralRaw?: (order_by | null),remainingDebtRaw?: (order_by | null),timestamp?: (order_by | null)}


/** Boolean expression to filter rows from the table "LoanStatusHistory". All fields are combined with a logical 'AND'. */
export interface LoanStatusHistory_bool_exp {_and?: (LoanStatusHistory_bool_exp[] | null),_not?: (LoanStatusHistory_bool_exp | null),_or?: (LoanStatusHistory_bool_exp[] | null),db_write_timestamp?: (timestamp_comparison_exp | null),id?: (String_comparison_exp | null),loan_id?: (String_comparison_exp | null),lockedCollateralFormatted?: (String_comparison_exp | null),lockedCollateralRaw?: (numeric_comparison_exp | null),remainingDebtFormatted?: (String_comparison_exp | null),remainingDebtRaw?: (numeric_comparison_exp | null),status?: (loanstatus_comparison_exp | null),timestamp?: (numeric_comparison_exp | null),transactionHash?: (String_comparison_exp | null)}


/** order by max() on columns of table "LoanStatusHistory" */
export interface LoanStatusHistory_max_order_by {db_write_timestamp?: (order_by | null),id?: (order_by | null),loan_id?: (order_by | null),lockedCollateralFormatted?: (order_by | null),lockedCollateralRaw?: (order_by | null),remainingDebtFormatted?: (order_by | null),remainingDebtRaw?: (order_by | null),status?: (order_by | null),timestamp?: (order_by | null),transactionHash?: (order_by | null)}


/** order by min() on columns of table "LoanStatusHistory" */
export interface LoanStatusHistory_min_order_by {db_write_timestamp?: (order_by | null),id?: (order_by | null),loan_id?: (order_by | null),lockedCollateralFormatted?: (order_by | null),lockedCollateralRaw?: (order_by | null),remainingDebtFormatted?: (order_by | null),remainingDebtRaw?: (order_by | null),status?: (order_by | null),timestamp?: (order_by | null),transactionHash?: (order_by | null)}


/** Ordering options when selecting data from "LoanStatusHistory". */
export interface LoanStatusHistory_order_by {db_write_timestamp?: (order_by | null),id?: (order_by | null),loan_id?: (order_by | null),lockedCollateralFormatted?: (order_by | null),lockedCollateralRaw?: (order_by | null),remainingDebtFormatted?: (order_by | null),remainingDebtRaw?: (order_by | null),status?: (order_by | null),timestamp?: (order_by | null),transactionHash?: (order_by | null)}


/** order by stddev() on columns of table "LoanStatusHistory" */
export interface LoanStatusHistory_stddev_order_by {lockedCollateralRaw?: (order_by | null),remainingDebtRaw?: (order_by | null),timestamp?: (order_by | null)}


/** order by stddev_pop() on columns of table "LoanStatusHistory" */
export interface LoanStatusHistory_stddev_pop_order_by {lockedCollateralRaw?: (order_by | null),remainingDebtRaw?: (order_by | null),timestamp?: (order_by | null)}


/** order by stddev_samp() on columns of table "LoanStatusHistory" */
export interface LoanStatusHistory_stddev_samp_order_by {lockedCollateralRaw?: (order_by | null),remainingDebtRaw?: (order_by | null),timestamp?: (order_by | null)}


/** Streaming cursor of the table "LoanStatusHistory" */
export interface LoanStatusHistory_stream_cursor_input {
/** Stream column input with initial value */
initial_value: LoanStatusHistory_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface LoanStatusHistory_stream_cursor_value_input {db_write_timestamp?: (Scalars['timestamp'] | null),id?: (Scalars['String'] | null),loan_id?: (Scalars['String'] | null),lockedCollateralFormatted?: (Scalars['String'] | null),lockedCollateralRaw?: (Scalars['numeric'] | null),remainingDebtFormatted?: (Scalars['String'] | null),remainingDebtRaw?: (Scalars['numeric'] | null),status?: (Scalars['loanstatus'] | null),timestamp?: (Scalars['numeric'] | null),transactionHash?: (Scalars['String'] | null)}


/** order by sum() on columns of table "LoanStatusHistory" */
export interface LoanStatusHistory_sum_order_by {lockedCollateralRaw?: (order_by | null),remainingDebtRaw?: (order_by | null),timestamp?: (order_by | null)}


/** order by var_pop() on columns of table "LoanStatusHistory" */
export interface LoanStatusHistory_var_pop_order_by {lockedCollateralRaw?: (order_by | null),remainingDebtRaw?: (order_by | null),timestamp?: (order_by | null)}


/** order by var_samp() on columns of table "LoanStatusHistory" */
export interface LoanStatusHistory_var_samp_order_by {lockedCollateralRaw?: (order_by | null),remainingDebtRaw?: (order_by | null),timestamp?: (order_by | null)}


/** order by variance() on columns of table "LoanStatusHistory" */
export interface LoanStatusHistory_variance_order_by {lockedCollateralRaw?: (order_by | null),remainingDebtRaw?: (order_by | null),timestamp?: (order_by | null)}


/** order by aggregate values of table "Loan" */
export interface Loan_aggregate_order_by {avg?: (Loan_avg_order_by | null),count?: (order_by | null),max?: (Loan_max_order_by | null),min?: (Loan_min_order_by | null),stddev?: (Loan_stddev_order_by | null),stddev_pop?: (Loan_stddev_pop_order_by | null),stddev_samp?: (Loan_stddev_samp_order_by | null),sum?: (Loan_sum_order_by | null),var_pop?: (Loan_var_pop_order_by | null),var_samp?: (Loan_var_samp_order_by | null),variance?: (Loan_variance_order_by | null)}


/** order by avg() on columns of table "Loan" */
export interface Loan_avg_order_by {borrowAmountRaw?: (order_by | null),closedAt?: (order_by | null),floorPriceAtBorrowRaw?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralRaw?: (order_by | null),openedAt?: (order_by | null),originationFeeRaw?: (order_by | null),remainingDebtRaw?: (order_by | null)}


/** Boolean expression to filter rows from the table "Loan". All fields are combined with a logical 'AND'. */
export interface Loan_bool_exp {_and?: (Loan_bool_exp[] | null),_not?: (Loan_bool_exp | null),_or?: (Loan_bool_exp[] | null),borrowAmountFormatted?: (String_comparison_exp | null),borrowAmountRaw?: (numeric_comparison_exp | null),borrower_id?: (String_comparison_exp | null),closedAt?: (numeric_comparison_exp | null),db_write_timestamp?: (timestamp_comparison_exp | null),facility_id?: (String_comparison_exp | null),floorPriceAtBorrowFormatted?: (String_comparison_exp | null),floorPriceAtBorrowRaw?: (numeric_comparison_exp | null),id?: (String_comparison_exp | null),lastUpdatedAt?: (numeric_comparison_exp | null),lockedCollateralFormatted?: (String_comparison_exp | null),lockedCollateralRaw?: (numeric_comparison_exp | null),market_id?: (String_comparison_exp | null),openedAt?: (numeric_comparison_exp | null),originationFeeFormatted?: (String_comparison_exp | null),originationFeeRaw?: (numeric_comparison_exp | null),remainingDebtFormatted?: (String_comparison_exp | null),remainingDebtRaw?: (numeric_comparison_exp | null),status?: (loanstatus_comparison_exp | null),statusHistory?: (LoanStatusHistory_bool_exp | null),transactionHash?: (String_comparison_exp | null)}


/** order by max() on columns of table "Loan" */
export interface Loan_max_order_by {borrowAmountFormatted?: (order_by | null),borrowAmountRaw?: (order_by | null),borrower_id?: (order_by | null),closedAt?: (order_by | null),db_write_timestamp?: (order_by | null),facility_id?: (order_by | null),floorPriceAtBorrowFormatted?: (order_by | null),floorPriceAtBorrowRaw?: (order_by | null),id?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralFormatted?: (order_by | null),lockedCollateralRaw?: (order_by | null),market_id?: (order_by | null),openedAt?: (order_by | null),originationFeeFormatted?: (order_by | null),originationFeeRaw?: (order_by | null),remainingDebtFormatted?: (order_by | null),remainingDebtRaw?: (order_by | null),status?: (order_by | null),transactionHash?: (order_by | null)}


/** order by min() on columns of table "Loan" */
export interface Loan_min_order_by {borrowAmountFormatted?: (order_by | null),borrowAmountRaw?: (order_by | null),borrower_id?: (order_by | null),closedAt?: (order_by | null),db_write_timestamp?: (order_by | null),facility_id?: (order_by | null),floorPriceAtBorrowFormatted?: (order_by | null),floorPriceAtBorrowRaw?: (order_by | null),id?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralFormatted?: (order_by | null),lockedCollateralRaw?: (order_by | null),market_id?: (order_by | null),openedAt?: (order_by | null),originationFeeFormatted?: (order_by | null),originationFeeRaw?: (order_by | null),remainingDebtFormatted?: (order_by | null),remainingDebtRaw?: (order_by | null),status?: (order_by | null),transactionHash?: (order_by | null)}


/** Ordering options when selecting data from "Loan". */
export interface Loan_order_by {borrowAmountFormatted?: (order_by | null),borrowAmountRaw?: (order_by | null),borrower_id?: (order_by | null),closedAt?: (order_by | null),db_write_timestamp?: (order_by | null),facility_id?: (order_by | null),floorPriceAtBorrowFormatted?: (order_by | null),floorPriceAtBorrowRaw?: (order_by | null),id?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralFormatted?: (order_by | null),lockedCollateralRaw?: (order_by | null),market_id?: (order_by | null),openedAt?: (order_by | null),originationFeeFormatted?: (order_by | null),originationFeeRaw?: (order_by | null),remainingDebtFormatted?: (order_by | null),remainingDebtRaw?: (order_by | null),status?: (order_by | null),statusHistory_aggregate?: (LoanStatusHistory_aggregate_order_by | null),transactionHash?: (order_by | null)}


/** order by stddev() on columns of table "Loan" */
export interface Loan_stddev_order_by {borrowAmountRaw?: (order_by | null),closedAt?: (order_by | null),floorPriceAtBorrowRaw?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralRaw?: (order_by | null),openedAt?: (order_by | null),originationFeeRaw?: (order_by | null),remainingDebtRaw?: (order_by | null)}


/** order by stddev_pop() on columns of table "Loan" */
export interface Loan_stddev_pop_order_by {borrowAmountRaw?: (order_by | null),closedAt?: (order_by | null),floorPriceAtBorrowRaw?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralRaw?: (order_by | null),openedAt?: (order_by | null),originationFeeRaw?: (order_by | null),remainingDebtRaw?: (order_by | null)}


/** order by stddev_samp() on columns of table "Loan" */
export interface Loan_stddev_samp_order_by {borrowAmountRaw?: (order_by | null),closedAt?: (order_by | null),floorPriceAtBorrowRaw?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralRaw?: (order_by | null),openedAt?: (order_by | null),originationFeeRaw?: (order_by | null),remainingDebtRaw?: (order_by | null)}


/** Streaming cursor of the table "Loan" */
export interface Loan_stream_cursor_input {
/** Stream column input with initial value */
initial_value: Loan_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface Loan_stream_cursor_value_input {borrowAmountFormatted?: (Scalars['String'] | null),borrowAmountRaw?: (Scalars['numeric'] | null),borrower_id?: (Scalars['String'] | null),closedAt?: (Scalars['numeric'] | null),db_write_timestamp?: (Scalars['timestamp'] | null),facility_id?: (Scalars['String'] | null),floorPriceAtBorrowFormatted?: (Scalars['String'] | null),floorPriceAtBorrowRaw?: (Scalars['numeric'] | null),id?: (Scalars['String'] | null),lastUpdatedAt?: (Scalars['numeric'] | null),lockedCollateralFormatted?: (Scalars['String'] | null),lockedCollateralRaw?: (Scalars['numeric'] | null),market_id?: (Scalars['String'] | null),openedAt?: (Scalars['numeric'] | null),originationFeeFormatted?: (Scalars['String'] | null),originationFeeRaw?: (Scalars['numeric'] | null),remainingDebtFormatted?: (Scalars['String'] | null),remainingDebtRaw?: (Scalars['numeric'] | null),status?: (Scalars['loanstatus'] | null),transactionHash?: (Scalars['String'] | null)}


/** order by sum() on columns of table "Loan" */
export interface Loan_sum_order_by {borrowAmountRaw?: (order_by | null),closedAt?: (order_by | null),floorPriceAtBorrowRaw?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralRaw?: (order_by | null),openedAt?: (order_by | null),originationFeeRaw?: (order_by | null),remainingDebtRaw?: (order_by | null)}


/** order by var_pop() on columns of table "Loan" */
export interface Loan_var_pop_order_by {borrowAmountRaw?: (order_by | null),closedAt?: (order_by | null),floorPriceAtBorrowRaw?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralRaw?: (order_by | null),openedAt?: (order_by | null),originationFeeRaw?: (order_by | null),remainingDebtRaw?: (order_by | null)}


/** order by var_samp() on columns of table "Loan" */
export interface Loan_var_samp_order_by {borrowAmountRaw?: (order_by | null),closedAt?: (order_by | null),floorPriceAtBorrowRaw?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralRaw?: (order_by | null),openedAt?: (order_by | null),originationFeeRaw?: (order_by | null),remainingDebtRaw?: (order_by | null)}


/** order by variance() on columns of table "Loan" */
export interface Loan_variance_order_by {borrowAmountRaw?: (order_by | null),closedAt?: (order_by | null),floorPriceAtBorrowRaw?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralRaw?: (order_by | null),openedAt?: (order_by | null),originationFeeRaw?: (order_by | null),remainingDebtRaw?: (order_by | null)}


/** columns and relationships of "Market" */
export interface MarketGenqlSelection{
    buyFeeBps?: boolean | number
    createdAt?: boolean | number
    creator_id?: boolean | number
    currentPriceFormatted?: boolean | number
    currentPriceRaw?: boolean | number
    db_write_timestamp?: boolean | number
    factory_id?: boolean | number
    /** An array relationship */
    feeDistributions?: (FeeDistributionGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (FeeDistribution_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (FeeDistribution_order_by[] | null), 
    /** filter the rows returned */
    where?: (FeeDistribution_bool_exp | null)} })
    /** An array relationship */
    floorElevations?: (FloorElevationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (FloorElevation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (FloorElevation_order_by[] | null), 
    /** filter the rows returned */
    where?: (FloorElevation_bool_exp | null)} })
    floorPriceFormatted?: boolean | number
    floorPriceRaw?: boolean | number
    floorSupplyFormatted?: boolean | number
    floorSupplyRaw?: boolean | number
    id?: boolean | number
    initialPriceFormatted?: boolean | number
    initialPriceRaw?: boolean | number
    isBuyOpen?: boolean | number
    isSellOpen?: boolean | number
    /** An object relationship */
    issuanceToken?: TokenGenqlSelection
    issuanceToken_id?: boolean | number
    lastElevationTimestamp?: boolean | number
    lastTradeTimestamp?: boolean | number
    lastUpdatedAt?: boolean | number
    marketSupplyFormatted?: boolean | number
    marketSupplyRaw?: boolean | number
    maxLTV?: boolean | number
    maxSupplyFormatted?: boolean | number
    maxSupplyRaw?: boolean | number
    /** An object relationship */
    reserveToken?: TokenGenqlSelection
    reserveToken_id?: boolean | number
    sellFeeBps?: boolean | number
    status?: boolean | number
    totalSupplyFormatted?: boolean | number
    totalSupplyRaw?: boolean | number
    /** An array relationship */
    trades?: (TradeGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Trade_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Trade_order_by[] | null), 
    /** filter the rows returned */
    where?: (Trade_bool_exp | null)} })
    tradingFeeBps?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "MarketRollingStats" */
export interface MarketRollingStatsGenqlSelection{
    averagePriceFormatted?: boolean | number
    averagePriceRaw?: boolean | number
    db_write_timestamp?: boolean | number
    id?: boolean | number
    lastUpdatedAt?: boolean | number
    market_id?: boolean | number
    tradeCount?: boolean | number
    volumeFormatted?: boolean | number
    volumeRaw?: boolean | number
    windowSeconds?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "MarketRollingStats". All fields are combined with a logical 'AND'. */
export interface MarketRollingStats_bool_exp {_and?: (MarketRollingStats_bool_exp[] | null),_not?: (MarketRollingStats_bool_exp | null),_or?: (MarketRollingStats_bool_exp[] | null),averagePriceFormatted?: (String_comparison_exp | null),averagePriceRaw?: (numeric_comparison_exp | null),db_write_timestamp?: (timestamp_comparison_exp | null),id?: (String_comparison_exp | null),lastUpdatedAt?: (numeric_comparison_exp | null),market_id?: (String_comparison_exp | null),tradeCount?: (numeric_comparison_exp | null),volumeFormatted?: (String_comparison_exp | null),volumeRaw?: (numeric_comparison_exp | null),windowSeconds?: (Int_comparison_exp | null)}


/** Ordering options when selecting data from "MarketRollingStats". */
export interface MarketRollingStats_order_by {averagePriceFormatted?: (order_by | null),averagePriceRaw?: (order_by | null),db_write_timestamp?: (order_by | null),id?: (order_by | null),lastUpdatedAt?: (order_by | null),market_id?: (order_by | null),tradeCount?: (order_by | null),volumeFormatted?: (order_by | null),volumeRaw?: (order_by | null),windowSeconds?: (order_by | null)}


/** Streaming cursor of the table "MarketRollingStats" */
export interface MarketRollingStats_stream_cursor_input {
/** Stream column input with initial value */
initial_value: MarketRollingStats_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface MarketRollingStats_stream_cursor_value_input {averagePriceFormatted?: (Scalars['String'] | null),averagePriceRaw?: (Scalars['numeric'] | null),db_write_timestamp?: (Scalars['timestamp'] | null),id?: (Scalars['String'] | null),lastUpdatedAt?: (Scalars['numeric'] | null),market_id?: (Scalars['String'] | null),tradeCount?: (Scalars['numeric'] | null),volumeFormatted?: (Scalars['String'] | null),volumeRaw?: (Scalars['numeric'] | null),windowSeconds?: (Scalars['Int'] | null)}


/** columns and relationships of "MarketSnapshot" */
export interface MarketSnapshotGenqlSelection{
    db_write_timestamp?: boolean | number
    floorPriceFormatted?: boolean | number
    floorPriceRaw?: boolean | number
    id?: boolean | number
    marketSupplyFormatted?: boolean | number
    marketSupplyRaw?: boolean | number
    market_id?: boolean | number
    priceFormatted?: boolean | number
    priceRaw?: boolean | number
    timestamp?: boolean | number
    totalSupplyFormatted?: boolean | number
    totalSupplyRaw?: boolean | number
    trades24h?: boolean | number
    volume24hFormatted?: boolean | number
    volume24hRaw?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "MarketSnapshot". All fields are combined with a logical 'AND'. */
export interface MarketSnapshot_bool_exp {_and?: (MarketSnapshot_bool_exp[] | null),_not?: (MarketSnapshot_bool_exp | null),_or?: (MarketSnapshot_bool_exp[] | null),db_write_timestamp?: (timestamp_comparison_exp | null),floorPriceFormatted?: (String_comparison_exp | null),floorPriceRaw?: (numeric_comparison_exp | null),id?: (String_comparison_exp | null),marketSupplyFormatted?: (String_comparison_exp | null),marketSupplyRaw?: (numeric_comparison_exp | null),market_id?: (String_comparison_exp | null),priceFormatted?: (String_comparison_exp | null),priceRaw?: (numeric_comparison_exp | null),timestamp?: (numeric_comparison_exp | null),totalSupplyFormatted?: (String_comparison_exp | null),totalSupplyRaw?: (numeric_comparison_exp | null),trades24h?: (numeric_comparison_exp | null),volume24hFormatted?: (String_comparison_exp | null),volume24hRaw?: (numeric_comparison_exp | null)}


/** Ordering options when selecting data from "MarketSnapshot". */
export interface MarketSnapshot_order_by {db_write_timestamp?: (order_by | null),floorPriceFormatted?: (order_by | null),floorPriceRaw?: (order_by | null),id?: (order_by | null),marketSupplyFormatted?: (order_by | null),marketSupplyRaw?: (order_by | null),market_id?: (order_by | null),priceFormatted?: (order_by | null),priceRaw?: (order_by | null),timestamp?: (order_by | null),totalSupplyFormatted?: (order_by | null),totalSupplyRaw?: (order_by | null),trades24h?: (order_by | null),volume24hFormatted?: (order_by | null),volume24hRaw?: (order_by | null)}


/** Streaming cursor of the table "MarketSnapshot" */
export interface MarketSnapshot_stream_cursor_input {
/** Stream column input with initial value */
initial_value: MarketSnapshot_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface MarketSnapshot_stream_cursor_value_input {db_write_timestamp?: (Scalars['timestamp'] | null),floorPriceFormatted?: (Scalars['String'] | null),floorPriceRaw?: (Scalars['numeric'] | null),id?: (Scalars['String'] | null),marketSupplyFormatted?: (Scalars['String'] | null),marketSupplyRaw?: (Scalars['numeric'] | null),market_id?: (Scalars['String'] | null),priceFormatted?: (Scalars['String'] | null),priceRaw?: (Scalars['numeric'] | null),timestamp?: (Scalars['numeric'] | null),totalSupplyFormatted?: (Scalars['String'] | null),totalSupplyRaw?: (Scalars['numeric'] | null),trades24h?: (Scalars['numeric'] | null),volume24hFormatted?: (Scalars['String'] | null),volume24hRaw?: (Scalars['numeric'] | null)}


/** order by aggregate values of table "Market" */
export interface Market_aggregate_order_by {avg?: (Market_avg_order_by | null),count?: (order_by | null),max?: (Market_max_order_by | null),min?: (Market_min_order_by | null),stddev?: (Market_stddev_order_by | null),stddev_pop?: (Market_stddev_pop_order_by | null),stddev_samp?: (Market_stddev_samp_order_by | null),sum?: (Market_sum_order_by | null),var_pop?: (Market_var_pop_order_by | null),var_samp?: (Market_var_samp_order_by | null),variance?: (Market_variance_order_by | null)}


/** order by avg() on columns of table "Market" */
export interface Market_avg_order_by {buyFeeBps?: (order_by | null),createdAt?: (order_by | null),currentPriceRaw?: (order_by | null),floorPriceRaw?: (order_by | null),floorSupplyRaw?: (order_by | null),initialPriceRaw?: (order_by | null),lastElevationTimestamp?: (order_by | null),lastTradeTimestamp?: (order_by | null),lastUpdatedAt?: (order_by | null),marketSupplyRaw?: (order_by | null),maxLTV?: (order_by | null),maxSupplyRaw?: (order_by | null),sellFeeBps?: (order_by | null),totalSupplyRaw?: (order_by | null),tradingFeeBps?: (order_by | null)}


/** Boolean expression to filter rows from the table "Market". All fields are combined with a logical 'AND'. */
export interface Market_bool_exp {_and?: (Market_bool_exp[] | null),_not?: (Market_bool_exp | null),_or?: (Market_bool_exp[] | null),buyFeeBps?: (numeric_comparison_exp | null),createdAt?: (numeric_comparison_exp | null),creator_id?: (String_comparison_exp | null),currentPriceFormatted?: (String_comparison_exp | null),currentPriceRaw?: (numeric_comparison_exp | null),db_write_timestamp?: (timestamp_comparison_exp | null),factory_id?: (String_comparison_exp | null),feeDistributions?: (FeeDistribution_bool_exp | null),floorElevations?: (FloorElevation_bool_exp | null),floorPriceFormatted?: (String_comparison_exp | null),floorPriceRaw?: (numeric_comparison_exp | null),floorSupplyFormatted?: (String_comparison_exp | null),floorSupplyRaw?: (numeric_comparison_exp | null),id?: (String_comparison_exp | null),initialPriceFormatted?: (String_comparison_exp | null),initialPriceRaw?: (numeric_comparison_exp | null),isBuyOpen?: (Boolean_comparison_exp | null),isSellOpen?: (Boolean_comparison_exp | null),issuanceToken?: (Token_bool_exp | null),issuanceToken_id?: (String_comparison_exp | null),lastElevationTimestamp?: (numeric_comparison_exp | null),lastTradeTimestamp?: (numeric_comparison_exp | null),lastUpdatedAt?: (numeric_comparison_exp | null),marketSupplyFormatted?: (String_comparison_exp | null),marketSupplyRaw?: (numeric_comparison_exp | null),maxLTV?: (numeric_comparison_exp | null),maxSupplyFormatted?: (String_comparison_exp | null),maxSupplyRaw?: (numeric_comparison_exp | null),reserveToken?: (Token_bool_exp | null),reserveToken_id?: (String_comparison_exp | null),sellFeeBps?: (numeric_comparison_exp | null),status?: (marketstatus_comparison_exp | null),totalSupplyFormatted?: (String_comparison_exp | null),totalSupplyRaw?: (numeric_comparison_exp | null),trades?: (Trade_bool_exp | null),tradingFeeBps?: (numeric_comparison_exp | null)}


/** order by max() on columns of table "Market" */
export interface Market_max_order_by {buyFeeBps?: (order_by | null),createdAt?: (order_by | null),creator_id?: (order_by | null),currentPriceFormatted?: (order_by | null),currentPriceRaw?: (order_by | null),db_write_timestamp?: (order_by | null),factory_id?: (order_by | null),floorPriceFormatted?: (order_by | null),floorPriceRaw?: (order_by | null),floorSupplyFormatted?: (order_by | null),floorSupplyRaw?: (order_by | null),id?: (order_by | null),initialPriceFormatted?: (order_by | null),initialPriceRaw?: (order_by | null),issuanceToken_id?: (order_by | null),lastElevationTimestamp?: (order_by | null),lastTradeTimestamp?: (order_by | null),lastUpdatedAt?: (order_by | null),marketSupplyFormatted?: (order_by | null),marketSupplyRaw?: (order_by | null),maxLTV?: (order_by | null),maxSupplyFormatted?: (order_by | null),maxSupplyRaw?: (order_by | null),reserveToken_id?: (order_by | null),sellFeeBps?: (order_by | null),status?: (order_by | null),totalSupplyFormatted?: (order_by | null),totalSupplyRaw?: (order_by | null),tradingFeeBps?: (order_by | null)}


/** order by min() on columns of table "Market" */
export interface Market_min_order_by {buyFeeBps?: (order_by | null),createdAt?: (order_by | null),creator_id?: (order_by | null),currentPriceFormatted?: (order_by | null),currentPriceRaw?: (order_by | null),db_write_timestamp?: (order_by | null),factory_id?: (order_by | null),floorPriceFormatted?: (order_by | null),floorPriceRaw?: (order_by | null),floorSupplyFormatted?: (order_by | null),floorSupplyRaw?: (order_by | null),id?: (order_by | null),initialPriceFormatted?: (order_by | null),initialPriceRaw?: (order_by | null),issuanceToken_id?: (order_by | null),lastElevationTimestamp?: (order_by | null),lastTradeTimestamp?: (order_by | null),lastUpdatedAt?: (order_by | null),marketSupplyFormatted?: (order_by | null),marketSupplyRaw?: (order_by | null),maxLTV?: (order_by | null),maxSupplyFormatted?: (order_by | null),maxSupplyRaw?: (order_by | null),reserveToken_id?: (order_by | null),sellFeeBps?: (order_by | null),status?: (order_by | null),totalSupplyFormatted?: (order_by | null),totalSupplyRaw?: (order_by | null),tradingFeeBps?: (order_by | null)}


/** Ordering options when selecting data from "Market". */
export interface Market_order_by {buyFeeBps?: (order_by | null),createdAt?: (order_by | null),creator_id?: (order_by | null),currentPriceFormatted?: (order_by | null),currentPriceRaw?: (order_by | null),db_write_timestamp?: (order_by | null),factory_id?: (order_by | null),feeDistributions_aggregate?: (FeeDistribution_aggregate_order_by | null),floorElevations_aggregate?: (FloorElevation_aggregate_order_by | null),floorPriceFormatted?: (order_by | null),floorPriceRaw?: (order_by | null),floorSupplyFormatted?: (order_by | null),floorSupplyRaw?: (order_by | null),id?: (order_by | null),initialPriceFormatted?: (order_by | null),initialPriceRaw?: (order_by | null),isBuyOpen?: (order_by | null),isSellOpen?: (order_by | null),issuanceToken?: (Token_order_by | null),issuanceToken_id?: (order_by | null),lastElevationTimestamp?: (order_by | null),lastTradeTimestamp?: (order_by | null),lastUpdatedAt?: (order_by | null),marketSupplyFormatted?: (order_by | null),marketSupplyRaw?: (order_by | null),maxLTV?: (order_by | null),maxSupplyFormatted?: (order_by | null),maxSupplyRaw?: (order_by | null),reserveToken?: (Token_order_by | null),reserveToken_id?: (order_by | null),sellFeeBps?: (order_by | null),status?: (order_by | null),totalSupplyFormatted?: (order_by | null),totalSupplyRaw?: (order_by | null),trades_aggregate?: (Trade_aggregate_order_by | null),tradingFeeBps?: (order_by | null)}


/** order by stddev() on columns of table "Market" */
export interface Market_stddev_order_by {buyFeeBps?: (order_by | null),createdAt?: (order_by | null),currentPriceRaw?: (order_by | null),floorPriceRaw?: (order_by | null),floorSupplyRaw?: (order_by | null),initialPriceRaw?: (order_by | null),lastElevationTimestamp?: (order_by | null),lastTradeTimestamp?: (order_by | null),lastUpdatedAt?: (order_by | null),marketSupplyRaw?: (order_by | null),maxLTV?: (order_by | null),maxSupplyRaw?: (order_by | null),sellFeeBps?: (order_by | null),totalSupplyRaw?: (order_by | null),tradingFeeBps?: (order_by | null)}


/** order by stddev_pop() on columns of table "Market" */
export interface Market_stddev_pop_order_by {buyFeeBps?: (order_by | null),createdAt?: (order_by | null),currentPriceRaw?: (order_by | null),floorPriceRaw?: (order_by | null),floorSupplyRaw?: (order_by | null),initialPriceRaw?: (order_by | null),lastElevationTimestamp?: (order_by | null),lastTradeTimestamp?: (order_by | null),lastUpdatedAt?: (order_by | null),marketSupplyRaw?: (order_by | null),maxLTV?: (order_by | null),maxSupplyRaw?: (order_by | null),sellFeeBps?: (order_by | null),totalSupplyRaw?: (order_by | null),tradingFeeBps?: (order_by | null)}


/** order by stddev_samp() on columns of table "Market" */
export interface Market_stddev_samp_order_by {buyFeeBps?: (order_by | null),createdAt?: (order_by | null),currentPriceRaw?: (order_by | null),floorPriceRaw?: (order_by | null),floorSupplyRaw?: (order_by | null),initialPriceRaw?: (order_by | null),lastElevationTimestamp?: (order_by | null),lastTradeTimestamp?: (order_by | null),lastUpdatedAt?: (order_by | null),marketSupplyRaw?: (order_by | null),maxLTV?: (order_by | null),maxSupplyRaw?: (order_by | null),sellFeeBps?: (order_by | null),totalSupplyRaw?: (order_by | null),tradingFeeBps?: (order_by | null)}


/** Streaming cursor of the table "Market" */
export interface Market_stream_cursor_input {
/** Stream column input with initial value */
initial_value: Market_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface Market_stream_cursor_value_input {buyFeeBps?: (Scalars['numeric'] | null),createdAt?: (Scalars['numeric'] | null),creator_id?: (Scalars['String'] | null),currentPriceFormatted?: (Scalars['String'] | null),currentPriceRaw?: (Scalars['numeric'] | null),db_write_timestamp?: (Scalars['timestamp'] | null),factory_id?: (Scalars['String'] | null),floorPriceFormatted?: (Scalars['String'] | null),floorPriceRaw?: (Scalars['numeric'] | null),floorSupplyFormatted?: (Scalars['String'] | null),floorSupplyRaw?: (Scalars['numeric'] | null),id?: (Scalars['String'] | null),initialPriceFormatted?: (Scalars['String'] | null),initialPriceRaw?: (Scalars['numeric'] | null),isBuyOpen?: (Scalars['Boolean'] | null),isSellOpen?: (Scalars['Boolean'] | null),issuanceToken_id?: (Scalars['String'] | null),lastElevationTimestamp?: (Scalars['numeric'] | null),lastTradeTimestamp?: (Scalars['numeric'] | null),lastUpdatedAt?: (Scalars['numeric'] | null),marketSupplyFormatted?: (Scalars['String'] | null),marketSupplyRaw?: (Scalars['numeric'] | null),maxLTV?: (Scalars['numeric'] | null),maxSupplyFormatted?: (Scalars['String'] | null),maxSupplyRaw?: (Scalars['numeric'] | null),reserveToken_id?: (Scalars['String'] | null),sellFeeBps?: (Scalars['numeric'] | null),status?: (Scalars['marketstatus'] | null),totalSupplyFormatted?: (Scalars['String'] | null),totalSupplyRaw?: (Scalars['numeric'] | null),tradingFeeBps?: (Scalars['numeric'] | null)}


/** order by sum() on columns of table "Market" */
export interface Market_sum_order_by {buyFeeBps?: (order_by | null),createdAt?: (order_by | null),currentPriceRaw?: (order_by | null),floorPriceRaw?: (order_by | null),floorSupplyRaw?: (order_by | null),initialPriceRaw?: (order_by | null),lastElevationTimestamp?: (order_by | null),lastTradeTimestamp?: (order_by | null),lastUpdatedAt?: (order_by | null),marketSupplyRaw?: (order_by | null),maxLTV?: (order_by | null),maxSupplyRaw?: (order_by | null),sellFeeBps?: (order_by | null),totalSupplyRaw?: (order_by | null),tradingFeeBps?: (order_by | null)}


/** order by var_pop() on columns of table "Market" */
export interface Market_var_pop_order_by {buyFeeBps?: (order_by | null),createdAt?: (order_by | null),currentPriceRaw?: (order_by | null),floorPriceRaw?: (order_by | null),floorSupplyRaw?: (order_by | null),initialPriceRaw?: (order_by | null),lastElevationTimestamp?: (order_by | null),lastTradeTimestamp?: (order_by | null),lastUpdatedAt?: (order_by | null),marketSupplyRaw?: (order_by | null),maxLTV?: (order_by | null),maxSupplyRaw?: (order_by | null),sellFeeBps?: (order_by | null),totalSupplyRaw?: (order_by | null),tradingFeeBps?: (order_by | null)}


/** order by var_samp() on columns of table "Market" */
export interface Market_var_samp_order_by {buyFeeBps?: (order_by | null),createdAt?: (order_by | null),currentPriceRaw?: (order_by | null),floorPriceRaw?: (order_by | null),floorSupplyRaw?: (order_by | null),initialPriceRaw?: (order_by | null),lastElevationTimestamp?: (order_by | null),lastTradeTimestamp?: (order_by | null),lastUpdatedAt?: (order_by | null),marketSupplyRaw?: (order_by | null),maxLTV?: (order_by | null),maxSupplyRaw?: (order_by | null),sellFeeBps?: (order_by | null),totalSupplyRaw?: (order_by | null),tradingFeeBps?: (order_by | null)}


/** order by variance() on columns of table "Market" */
export interface Market_variance_order_by {buyFeeBps?: (order_by | null),createdAt?: (order_by | null),currentPriceRaw?: (order_by | null),floorPriceRaw?: (order_by | null),floorSupplyRaw?: (order_by | null),initialPriceRaw?: (order_by | null),lastElevationTimestamp?: (order_by | null),lastTradeTimestamp?: (order_by | null),lastUpdatedAt?: (order_by | null),marketSupplyRaw?: (order_by | null),maxLTV?: (order_by | null),maxSupplyRaw?: (order_by | null),sellFeeBps?: (order_by | null),totalSupplyRaw?: (order_by | null),tradingFeeBps?: (order_by | null)}


/** columns and relationships of "ModuleAddress" */
export interface ModuleAddressGenqlSelection{
    createdAt?: boolean | number
    db_write_timestamp?: boolean | number
    id?: boolean | number
    lastUpdatedAt?: boolean | number
    market_id?: boolean | number
    moduleType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "ModuleAddress". All fields are combined with a logical 'AND'. */
export interface ModuleAddress_bool_exp {_and?: (ModuleAddress_bool_exp[] | null),_not?: (ModuleAddress_bool_exp | null),_or?: (ModuleAddress_bool_exp[] | null),createdAt?: (numeric_comparison_exp | null),db_write_timestamp?: (timestamp_comparison_exp | null),id?: (String_comparison_exp | null),lastUpdatedAt?: (numeric_comparison_exp | null),market_id?: (String_comparison_exp | null),moduleType?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "ModuleAddress". */
export interface ModuleAddress_order_by {createdAt?: (order_by | null),db_write_timestamp?: (order_by | null),id?: (order_by | null),lastUpdatedAt?: (order_by | null),market_id?: (order_by | null),moduleType?: (order_by | null)}


/** Streaming cursor of the table "ModuleAddress" */
export interface ModuleAddress_stream_cursor_input {
/** Stream column input with initial value */
initial_value: ModuleAddress_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface ModuleAddress_stream_cursor_value_input {createdAt?: (Scalars['numeric'] | null),db_write_timestamp?: (Scalars['timestamp'] | null),id?: (Scalars['String'] | null),lastUpdatedAt?: (Scalars['numeric'] | null),market_id?: (Scalars['String'] | null),moduleType?: (Scalars['String'] | null)}


/** columns and relationships of "ModuleRegistry" */
export interface ModuleRegistryGenqlSelection{
    authorizer?: boolean | number
    createdAt?: boolean | number
    creditFacility?: boolean | number
    db_write_timestamp?: boolean | number
    feeTreasury?: boolean | number
    floor?: boolean | number
    id?: boolean | number
    lastUpdatedAt?: boolean | number
    presale?: boolean | number
    staking?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "ModuleRegistry". All fields are combined with a logical 'AND'. */
export interface ModuleRegistry_bool_exp {_and?: (ModuleRegistry_bool_exp[] | null),_not?: (ModuleRegistry_bool_exp | null),_or?: (ModuleRegistry_bool_exp[] | null),authorizer?: (String_comparison_exp | null),createdAt?: (numeric_comparison_exp | null),creditFacility?: (String_comparison_exp | null),db_write_timestamp?: (timestamp_comparison_exp | null),feeTreasury?: (String_comparison_exp | null),floor?: (String_comparison_exp | null),id?: (String_comparison_exp | null),lastUpdatedAt?: (numeric_comparison_exp | null),presale?: (String_comparison_exp | null),staking?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "ModuleRegistry". */
export interface ModuleRegistry_order_by {authorizer?: (order_by | null),createdAt?: (order_by | null),creditFacility?: (order_by | null),db_write_timestamp?: (order_by | null),feeTreasury?: (order_by | null),floor?: (order_by | null),id?: (order_by | null),lastUpdatedAt?: (order_by | null),presale?: (order_by | null),staking?: (order_by | null)}


/** Streaming cursor of the table "ModuleRegistry" */
export interface ModuleRegistry_stream_cursor_input {
/** Stream column input with initial value */
initial_value: ModuleRegistry_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface ModuleRegistry_stream_cursor_value_input {authorizer?: (Scalars['String'] | null),createdAt?: (Scalars['numeric'] | null),creditFacility?: (Scalars['String'] | null),db_write_timestamp?: (Scalars['timestamp'] | null),feeTreasury?: (Scalars['String'] | null),floor?: (Scalars['String'] | null),id?: (Scalars['String'] | null),lastUpdatedAt?: (Scalars['numeric'] | null),presale?: (Scalars['String'] | null),staking?: (Scalars['String'] | null)}


/** columns and relationships of "PreSaleContract" */
export interface PreSaleContractGenqlSelection{
    createdAt?: boolean | number
    db_write_timestamp?: boolean | number
    endTime?: boolean | number
    id?: boolean | number
    maxLeverage?: boolean | number
    /** An array relationship */
    participations?: (PresaleParticipationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (PresaleParticipation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (PresaleParticipation_order_by[] | null), 
    /** filter the rows returned */
    where?: (PresaleParticipation_bool_exp | null)} })
    purchaseToken_id?: boolean | number
    saleToken_id?: boolean | number
    startTime?: boolean | number
    totalParticipants?: boolean | number
    totalRaisedFormatted?: boolean | number
    totalRaisedRaw?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "PreSaleContract". All fields are combined with a logical 'AND'. */
export interface PreSaleContract_bool_exp {_and?: (PreSaleContract_bool_exp[] | null),_not?: (PreSaleContract_bool_exp | null),_or?: (PreSaleContract_bool_exp[] | null),createdAt?: (numeric_comparison_exp | null),db_write_timestamp?: (timestamp_comparison_exp | null),endTime?: (numeric_comparison_exp | null),id?: (String_comparison_exp | null),maxLeverage?: (numeric_comparison_exp | null),participations?: (PresaleParticipation_bool_exp | null),purchaseToken_id?: (String_comparison_exp | null),saleToken_id?: (String_comparison_exp | null),startTime?: (numeric_comparison_exp | null),totalParticipants?: (numeric_comparison_exp | null),totalRaisedFormatted?: (String_comparison_exp | null),totalRaisedRaw?: (numeric_comparison_exp | null)}


/** Ordering options when selecting data from "PreSaleContract". */
export interface PreSaleContract_order_by {createdAt?: (order_by | null),db_write_timestamp?: (order_by | null),endTime?: (order_by | null),id?: (order_by | null),maxLeverage?: (order_by | null),participations_aggregate?: (PresaleParticipation_aggregate_order_by | null),purchaseToken_id?: (order_by | null),saleToken_id?: (order_by | null),startTime?: (order_by | null),totalParticipants?: (order_by | null),totalRaisedFormatted?: (order_by | null),totalRaisedRaw?: (order_by | null)}


/** Streaming cursor of the table "PreSaleContract" */
export interface PreSaleContract_stream_cursor_input {
/** Stream column input with initial value */
initial_value: PreSaleContract_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface PreSaleContract_stream_cursor_value_input {createdAt?: (Scalars['numeric'] | null),db_write_timestamp?: (Scalars['timestamp'] | null),endTime?: (Scalars['numeric'] | null),id?: (Scalars['String'] | null),maxLeverage?: (Scalars['numeric'] | null),purchaseToken_id?: (Scalars['String'] | null),saleToken_id?: (Scalars['String'] | null),startTime?: (Scalars['numeric'] | null),totalParticipants?: (Scalars['numeric'] | null),totalRaisedFormatted?: (Scalars['String'] | null),totalRaisedRaw?: (Scalars['numeric'] | null)}


/** columns and relationships of "PresaleParticipation" */
export interface PresaleParticipationGenqlSelection{
    amountFormatted?: boolean | number
    amountRaw?: boolean | number
    db_write_timestamp?: boolean | number
    id?: boolean | number
    leverage?: boolean | number
    presale_id?: boolean | number
    timestamp?: boolean | number
    transactionHash?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "PresaleParticipation" */
export interface PresaleParticipation_aggregate_order_by {avg?: (PresaleParticipation_avg_order_by | null),count?: (order_by | null),max?: (PresaleParticipation_max_order_by | null),min?: (PresaleParticipation_min_order_by | null),stddev?: (PresaleParticipation_stddev_order_by | null),stddev_pop?: (PresaleParticipation_stddev_pop_order_by | null),stddev_samp?: (PresaleParticipation_stddev_samp_order_by | null),sum?: (PresaleParticipation_sum_order_by | null),var_pop?: (PresaleParticipation_var_pop_order_by | null),var_samp?: (PresaleParticipation_var_samp_order_by | null),variance?: (PresaleParticipation_variance_order_by | null)}


/** order by avg() on columns of table "PresaleParticipation" */
export interface PresaleParticipation_avg_order_by {amountRaw?: (order_by | null),leverage?: (order_by | null),timestamp?: (order_by | null)}


/** Boolean expression to filter rows from the table "PresaleParticipation". All fields are combined with a logical 'AND'. */
export interface PresaleParticipation_bool_exp {_and?: (PresaleParticipation_bool_exp[] | null),_not?: (PresaleParticipation_bool_exp | null),_or?: (PresaleParticipation_bool_exp[] | null),amountFormatted?: (String_comparison_exp | null),amountRaw?: (numeric_comparison_exp | null),db_write_timestamp?: (timestamp_comparison_exp | null),id?: (String_comparison_exp | null),leverage?: (numeric_comparison_exp | null),presale_id?: (String_comparison_exp | null),timestamp?: (numeric_comparison_exp | null),transactionHash?: (String_comparison_exp | null),user_id?: (String_comparison_exp | null)}


/** order by max() on columns of table "PresaleParticipation" */
export interface PresaleParticipation_max_order_by {amountFormatted?: (order_by | null),amountRaw?: (order_by | null),db_write_timestamp?: (order_by | null),id?: (order_by | null),leverage?: (order_by | null),presale_id?: (order_by | null),timestamp?: (order_by | null),transactionHash?: (order_by | null),user_id?: (order_by | null)}


/** order by min() on columns of table "PresaleParticipation" */
export interface PresaleParticipation_min_order_by {amountFormatted?: (order_by | null),amountRaw?: (order_by | null),db_write_timestamp?: (order_by | null),id?: (order_by | null),leverage?: (order_by | null),presale_id?: (order_by | null),timestamp?: (order_by | null),transactionHash?: (order_by | null),user_id?: (order_by | null)}


/** Ordering options when selecting data from "PresaleParticipation". */
export interface PresaleParticipation_order_by {amountFormatted?: (order_by | null),amountRaw?: (order_by | null),db_write_timestamp?: (order_by | null),id?: (order_by | null),leverage?: (order_by | null),presale_id?: (order_by | null),timestamp?: (order_by | null),transactionHash?: (order_by | null),user_id?: (order_by | null)}


/** order by stddev() on columns of table "PresaleParticipation" */
export interface PresaleParticipation_stddev_order_by {amountRaw?: (order_by | null),leverage?: (order_by | null),timestamp?: (order_by | null)}


/** order by stddev_pop() on columns of table "PresaleParticipation" */
export interface PresaleParticipation_stddev_pop_order_by {amountRaw?: (order_by | null),leverage?: (order_by | null),timestamp?: (order_by | null)}


/** order by stddev_samp() on columns of table "PresaleParticipation" */
export interface PresaleParticipation_stddev_samp_order_by {amountRaw?: (order_by | null),leverage?: (order_by | null),timestamp?: (order_by | null)}


/** Streaming cursor of the table "PresaleParticipation" */
export interface PresaleParticipation_stream_cursor_input {
/** Stream column input with initial value */
initial_value: PresaleParticipation_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface PresaleParticipation_stream_cursor_value_input {amountFormatted?: (Scalars['String'] | null),amountRaw?: (Scalars['numeric'] | null),db_write_timestamp?: (Scalars['timestamp'] | null),id?: (Scalars['String'] | null),leverage?: (Scalars['numeric'] | null),presale_id?: (Scalars['String'] | null),timestamp?: (Scalars['numeric'] | null),transactionHash?: (Scalars['String'] | null),user_id?: (Scalars['String'] | null)}


/** order by sum() on columns of table "PresaleParticipation" */
export interface PresaleParticipation_sum_order_by {amountRaw?: (order_by | null),leverage?: (order_by | null),timestamp?: (order_by | null)}


/** order by var_pop() on columns of table "PresaleParticipation" */
export interface PresaleParticipation_var_pop_order_by {amountRaw?: (order_by | null),leverage?: (order_by | null),timestamp?: (order_by | null)}


/** order by var_samp() on columns of table "PresaleParticipation" */
export interface PresaleParticipation_var_samp_order_by {amountRaw?: (order_by | null),leverage?: (order_by | null),timestamp?: (order_by | null)}


/** order by variance() on columns of table "PresaleParticipation" */
export interface PresaleParticipation_variance_order_by {amountRaw?: (order_by | null),leverage?: (order_by | null),timestamp?: (order_by | null)}


/** columns and relationships of "PriceCandle" */
export interface PriceCandleGenqlSelection{
    closeFormatted?: boolean | number
    closeRaw?: boolean | number
    db_write_timestamp?: boolean | number
    highFormatted?: boolean | number
    highRaw?: boolean | number
    id?: boolean | number
    lowFormatted?: boolean | number
    lowRaw?: boolean | number
    market_id?: boolean | number
    openFormatted?: boolean | number
    openRaw?: boolean | number
    period?: boolean | number
    timestamp?: boolean | number
    trades?: boolean | number
    volumeFormatted?: boolean | number
    volumeRaw?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "PriceCandle". All fields are combined with a logical 'AND'. */
export interface PriceCandle_bool_exp {_and?: (PriceCandle_bool_exp[] | null),_not?: (PriceCandle_bool_exp | null),_or?: (PriceCandle_bool_exp[] | null),closeFormatted?: (String_comparison_exp | null),closeRaw?: (numeric_comparison_exp | null),db_write_timestamp?: (timestamp_comparison_exp | null),highFormatted?: (String_comparison_exp | null),highRaw?: (numeric_comparison_exp | null),id?: (String_comparison_exp | null),lowFormatted?: (String_comparison_exp | null),lowRaw?: (numeric_comparison_exp | null),market_id?: (String_comparison_exp | null),openFormatted?: (String_comparison_exp | null),openRaw?: (numeric_comparison_exp | null),period?: (candleperiod_comparison_exp | null),timestamp?: (numeric_comparison_exp | null),trades?: (numeric_comparison_exp | null),volumeFormatted?: (String_comparison_exp | null),volumeRaw?: (numeric_comparison_exp | null)}


/** Ordering options when selecting data from "PriceCandle". */
export interface PriceCandle_order_by {closeFormatted?: (order_by | null),closeRaw?: (order_by | null),db_write_timestamp?: (order_by | null),highFormatted?: (order_by | null),highRaw?: (order_by | null),id?: (order_by | null),lowFormatted?: (order_by | null),lowRaw?: (order_by | null),market_id?: (order_by | null),openFormatted?: (order_by | null),openRaw?: (order_by | null),period?: (order_by | null),timestamp?: (order_by | null),trades?: (order_by | null),volumeFormatted?: (order_by | null),volumeRaw?: (order_by | null)}


/** Streaming cursor of the table "PriceCandle" */
export interface PriceCandle_stream_cursor_input {
/** Stream column input with initial value */
initial_value: PriceCandle_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface PriceCandle_stream_cursor_value_input {closeFormatted?: (Scalars['String'] | null),closeRaw?: (Scalars['numeric'] | null),db_write_timestamp?: (Scalars['timestamp'] | null),highFormatted?: (Scalars['String'] | null),highRaw?: (Scalars['numeric'] | null),id?: (Scalars['String'] | null),lowFormatted?: (Scalars['String'] | null),lowRaw?: (Scalars['numeric'] | null),market_id?: (Scalars['String'] | null),openFormatted?: (Scalars['String'] | null),openRaw?: (Scalars['numeric'] | null),period?: (Scalars['candleperiod'] | null),timestamp?: (Scalars['numeric'] | null),trades?: (Scalars['numeric'] | null),volumeFormatted?: (Scalars['String'] | null),volumeRaw?: (Scalars['numeric'] | null)}


/** columns and relationships of "Stake" */
export interface StakeGenqlSelection{
    amountFormatted?: boolean | number
    amountRaw?: boolean | number
    contract_id?: boolean | number
    db_write_timestamp?: boolean | number
    id?: boolean | number
    lockDuration?: boolean | number
    status?: boolean | number
    timestamp?: boolean | number
    transactionHash?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "Stake" */
export interface Stake_aggregate_order_by {avg?: (Stake_avg_order_by | null),count?: (order_by | null),max?: (Stake_max_order_by | null),min?: (Stake_min_order_by | null),stddev?: (Stake_stddev_order_by | null),stddev_pop?: (Stake_stddev_pop_order_by | null),stddev_samp?: (Stake_stddev_samp_order_by | null),sum?: (Stake_sum_order_by | null),var_pop?: (Stake_var_pop_order_by | null),var_samp?: (Stake_var_samp_order_by | null),variance?: (Stake_variance_order_by | null)}


/** order by avg() on columns of table "Stake" */
export interface Stake_avg_order_by {amountRaw?: (order_by | null),lockDuration?: (order_by | null),timestamp?: (order_by | null)}


/** Boolean expression to filter rows from the table "Stake". All fields are combined with a logical 'AND'. */
export interface Stake_bool_exp {_and?: (Stake_bool_exp[] | null),_not?: (Stake_bool_exp | null),_or?: (Stake_bool_exp[] | null),amountFormatted?: (String_comparison_exp | null),amountRaw?: (numeric_comparison_exp | null),contract_id?: (String_comparison_exp | null),db_write_timestamp?: (timestamp_comparison_exp | null),id?: (String_comparison_exp | null),lockDuration?: (numeric_comparison_exp | null),status?: (stakestatus_comparison_exp | null),timestamp?: (numeric_comparison_exp | null),transactionHash?: (String_comparison_exp | null),user_id?: (String_comparison_exp | null)}


/** order by max() on columns of table "Stake" */
export interface Stake_max_order_by {amountFormatted?: (order_by | null),amountRaw?: (order_by | null),contract_id?: (order_by | null),db_write_timestamp?: (order_by | null),id?: (order_by | null),lockDuration?: (order_by | null),status?: (order_by | null),timestamp?: (order_by | null),transactionHash?: (order_by | null),user_id?: (order_by | null)}


/** order by min() on columns of table "Stake" */
export interface Stake_min_order_by {amountFormatted?: (order_by | null),amountRaw?: (order_by | null),contract_id?: (order_by | null),db_write_timestamp?: (order_by | null),id?: (order_by | null),lockDuration?: (order_by | null),status?: (order_by | null),timestamp?: (order_by | null),transactionHash?: (order_by | null),user_id?: (order_by | null)}


/** Ordering options when selecting data from "Stake". */
export interface Stake_order_by {amountFormatted?: (order_by | null),amountRaw?: (order_by | null),contract_id?: (order_by | null),db_write_timestamp?: (order_by | null),id?: (order_by | null),lockDuration?: (order_by | null),status?: (order_by | null),timestamp?: (order_by | null),transactionHash?: (order_by | null),user_id?: (order_by | null)}


/** order by stddev() on columns of table "Stake" */
export interface Stake_stddev_order_by {amountRaw?: (order_by | null),lockDuration?: (order_by | null),timestamp?: (order_by | null)}


/** order by stddev_pop() on columns of table "Stake" */
export interface Stake_stddev_pop_order_by {amountRaw?: (order_by | null),lockDuration?: (order_by | null),timestamp?: (order_by | null)}


/** order by stddev_samp() on columns of table "Stake" */
export interface Stake_stddev_samp_order_by {amountRaw?: (order_by | null),lockDuration?: (order_by | null),timestamp?: (order_by | null)}


/** Streaming cursor of the table "Stake" */
export interface Stake_stream_cursor_input {
/** Stream column input with initial value */
initial_value: Stake_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface Stake_stream_cursor_value_input {amountFormatted?: (Scalars['String'] | null),amountRaw?: (Scalars['numeric'] | null),contract_id?: (Scalars['String'] | null),db_write_timestamp?: (Scalars['timestamp'] | null),id?: (Scalars['String'] | null),lockDuration?: (Scalars['numeric'] | null),status?: (Scalars['stakestatus'] | null),timestamp?: (Scalars['numeric'] | null),transactionHash?: (Scalars['String'] | null),user_id?: (Scalars['String'] | null)}


/** order by sum() on columns of table "Stake" */
export interface Stake_sum_order_by {amountRaw?: (order_by | null),lockDuration?: (order_by | null),timestamp?: (order_by | null)}


/** order by var_pop() on columns of table "Stake" */
export interface Stake_var_pop_order_by {amountRaw?: (order_by | null),lockDuration?: (order_by | null),timestamp?: (order_by | null)}


/** order by var_samp() on columns of table "Stake" */
export interface Stake_var_samp_order_by {amountRaw?: (order_by | null),lockDuration?: (order_by | null),timestamp?: (order_by | null)}


/** order by variance() on columns of table "Stake" */
export interface Stake_variance_order_by {amountRaw?: (order_by | null),lockDuration?: (order_by | null),timestamp?: (order_by | null)}


/** columns and relationships of "StakingContract" */
export interface StakingContractGenqlSelection{
    createdAt?: boolean | number
    db_write_timestamp?: boolean | number
    id?: boolean | number
    rewardToken_id?: boolean | number
    /** An array relationship */
    stakes?: (StakeGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Stake_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Stake_order_by[] | null), 
    /** filter the rows returned */
    where?: (Stake_bool_exp | null)} })
    stakingToken_id?: boolean | number
    totalRewardsFormatted?: boolean | number
    totalRewardsRaw?: boolean | number
    totalStakedFormatted?: boolean | number
    totalStakedRaw?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "StakingContract". All fields are combined with a logical 'AND'. */
export interface StakingContract_bool_exp {_and?: (StakingContract_bool_exp[] | null),_not?: (StakingContract_bool_exp | null),_or?: (StakingContract_bool_exp[] | null),createdAt?: (numeric_comparison_exp | null),db_write_timestamp?: (timestamp_comparison_exp | null),id?: (String_comparison_exp | null),rewardToken_id?: (String_comparison_exp | null),stakes?: (Stake_bool_exp | null),stakingToken_id?: (String_comparison_exp | null),totalRewardsFormatted?: (String_comparison_exp | null),totalRewardsRaw?: (numeric_comparison_exp | null),totalStakedFormatted?: (String_comparison_exp | null),totalStakedRaw?: (numeric_comparison_exp | null)}


/** Ordering options when selecting data from "StakingContract". */
export interface StakingContract_order_by {createdAt?: (order_by | null),db_write_timestamp?: (order_by | null),id?: (order_by | null),rewardToken_id?: (order_by | null),stakes_aggregate?: (Stake_aggregate_order_by | null),stakingToken_id?: (order_by | null),totalRewardsFormatted?: (order_by | null),totalRewardsRaw?: (order_by | null),totalStakedFormatted?: (order_by | null),totalStakedRaw?: (order_by | null)}


/** Streaming cursor of the table "StakingContract" */
export interface StakingContract_stream_cursor_input {
/** Stream column input with initial value */
initial_value: StakingContract_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface StakingContract_stream_cursor_value_input {createdAt?: (Scalars['numeric'] | null),db_write_timestamp?: (Scalars['timestamp'] | null),id?: (Scalars['String'] | null),rewardToken_id?: (Scalars['String'] | null),stakingToken_id?: (Scalars['String'] | null),totalRewardsFormatted?: (Scalars['String'] | null),totalRewardsRaw?: (Scalars['numeric'] | null),totalStakedFormatted?: (Scalars['String'] | null),totalStakedRaw?: (Scalars['numeric'] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** columns and relationships of "Token" */
export interface TokenGenqlSelection{
    db_write_timestamp?: boolean | number
    decimals?: boolean | number
    id?: boolean | number
    name?: boolean | number
    symbol?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "Token". All fields are combined with a logical 'AND'. */
export interface Token_bool_exp {_and?: (Token_bool_exp[] | null),_not?: (Token_bool_exp | null),_or?: (Token_bool_exp[] | null),db_write_timestamp?: (timestamp_comparison_exp | null),decimals?: (Int_comparison_exp | null),id?: (String_comparison_exp | null),name?: (String_comparison_exp | null),symbol?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "Token". */
export interface Token_order_by {db_write_timestamp?: (order_by | null),decimals?: (order_by | null),id?: (order_by | null),name?: (order_by | null),symbol?: (order_by | null)}


/** Streaming cursor of the table "Token" */
export interface Token_stream_cursor_input {
/** Stream column input with initial value */
initial_value: Token_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface Token_stream_cursor_value_input {db_write_timestamp?: (Scalars['timestamp'] | null),decimals?: (Scalars['Int'] | null),id?: (Scalars['String'] | null),name?: (Scalars['String'] | null),symbol?: (Scalars['String'] | null)}


/** columns and relationships of "Trade" */
export interface TradeGenqlSelection{
    db_write_timestamp?: boolean | number
    feeFormatted?: boolean | number
    feeRaw?: boolean | number
    id?: boolean | number
    market_id?: boolean | number
    newPriceFormatted?: boolean | number
    newPriceRaw?: boolean | number
    reserveAmountFormatted?: boolean | number
    reserveAmountRaw?: boolean | number
    timestamp?: boolean | number
    tokenAmountFormatted?: boolean | number
    tokenAmountRaw?: boolean | number
    tradeType?: boolean | number
    transactionHash?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "Trade" */
export interface Trade_aggregate_order_by {avg?: (Trade_avg_order_by | null),count?: (order_by | null),max?: (Trade_max_order_by | null),min?: (Trade_min_order_by | null),stddev?: (Trade_stddev_order_by | null),stddev_pop?: (Trade_stddev_pop_order_by | null),stddev_samp?: (Trade_stddev_samp_order_by | null),sum?: (Trade_sum_order_by | null),var_pop?: (Trade_var_pop_order_by | null),var_samp?: (Trade_var_samp_order_by | null),variance?: (Trade_variance_order_by | null)}


/** order by avg() on columns of table "Trade" */
export interface Trade_avg_order_by {feeRaw?: (order_by | null),newPriceRaw?: (order_by | null),reserveAmountRaw?: (order_by | null),timestamp?: (order_by | null),tokenAmountRaw?: (order_by | null)}


/** Boolean expression to filter rows from the table "Trade". All fields are combined with a logical 'AND'. */
export interface Trade_bool_exp {_and?: (Trade_bool_exp[] | null),_not?: (Trade_bool_exp | null),_or?: (Trade_bool_exp[] | null),db_write_timestamp?: (timestamp_comparison_exp | null),feeFormatted?: (String_comparison_exp | null),feeRaw?: (numeric_comparison_exp | null),id?: (String_comparison_exp | null),market_id?: (String_comparison_exp | null),newPriceFormatted?: (String_comparison_exp | null),newPriceRaw?: (numeric_comparison_exp | null),reserveAmountFormatted?: (String_comparison_exp | null),reserveAmountRaw?: (numeric_comparison_exp | null),timestamp?: (numeric_comparison_exp | null),tokenAmountFormatted?: (String_comparison_exp | null),tokenAmountRaw?: (numeric_comparison_exp | null),tradeType?: (tradetype_comparison_exp | null),transactionHash?: (String_comparison_exp | null),user_id?: (String_comparison_exp | null)}


/** order by max() on columns of table "Trade" */
export interface Trade_max_order_by {db_write_timestamp?: (order_by | null),feeFormatted?: (order_by | null),feeRaw?: (order_by | null),id?: (order_by | null),market_id?: (order_by | null),newPriceFormatted?: (order_by | null),newPriceRaw?: (order_by | null),reserveAmountFormatted?: (order_by | null),reserveAmountRaw?: (order_by | null),timestamp?: (order_by | null),tokenAmountFormatted?: (order_by | null),tokenAmountRaw?: (order_by | null),tradeType?: (order_by | null),transactionHash?: (order_by | null),user_id?: (order_by | null)}


/** order by min() on columns of table "Trade" */
export interface Trade_min_order_by {db_write_timestamp?: (order_by | null),feeFormatted?: (order_by | null),feeRaw?: (order_by | null),id?: (order_by | null),market_id?: (order_by | null),newPriceFormatted?: (order_by | null),newPriceRaw?: (order_by | null),reserveAmountFormatted?: (order_by | null),reserveAmountRaw?: (order_by | null),timestamp?: (order_by | null),tokenAmountFormatted?: (order_by | null),tokenAmountRaw?: (order_by | null),tradeType?: (order_by | null),transactionHash?: (order_by | null),user_id?: (order_by | null)}


/** Ordering options when selecting data from "Trade". */
export interface Trade_order_by {db_write_timestamp?: (order_by | null),feeFormatted?: (order_by | null),feeRaw?: (order_by | null),id?: (order_by | null),market_id?: (order_by | null),newPriceFormatted?: (order_by | null),newPriceRaw?: (order_by | null),reserveAmountFormatted?: (order_by | null),reserveAmountRaw?: (order_by | null),timestamp?: (order_by | null),tokenAmountFormatted?: (order_by | null),tokenAmountRaw?: (order_by | null),tradeType?: (order_by | null),transactionHash?: (order_by | null),user_id?: (order_by | null)}


/** order by stddev() on columns of table "Trade" */
export interface Trade_stddev_order_by {feeRaw?: (order_by | null),newPriceRaw?: (order_by | null),reserveAmountRaw?: (order_by | null),timestamp?: (order_by | null),tokenAmountRaw?: (order_by | null)}


/** order by stddev_pop() on columns of table "Trade" */
export interface Trade_stddev_pop_order_by {feeRaw?: (order_by | null),newPriceRaw?: (order_by | null),reserveAmountRaw?: (order_by | null),timestamp?: (order_by | null),tokenAmountRaw?: (order_by | null)}


/** order by stddev_samp() on columns of table "Trade" */
export interface Trade_stddev_samp_order_by {feeRaw?: (order_by | null),newPriceRaw?: (order_by | null),reserveAmountRaw?: (order_by | null),timestamp?: (order_by | null),tokenAmountRaw?: (order_by | null)}


/** Streaming cursor of the table "Trade" */
export interface Trade_stream_cursor_input {
/** Stream column input with initial value */
initial_value: Trade_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface Trade_stream_cursor_value_input {db_write_timestamp?: (Scalars['timestamp'] | null),feeFormatted?: (Scalars['String'] | null),feeRaw?: (Scalars['numeric'] | null),id?: (Scalars['String'] | null),market_id?: (Scalars['String'] | null),newPriceFormatted?: (Scalars['String'] | null),newPriceRaw?: (Scalars['numeric'] | null),reserveAmountFormatted?: (Scalars['String'] | null),reserveAmountRaw?: (Scalars['numeric'] | null),timestamp?: (Scalars['numeric'] | null),tokenAmountFormatted?: (Scalars['String'] | null),tokenAmountRaw?: (Scalars['numeric'] | null),tradeType?: (Scalars['tradetype'] | null),transactionHash?: (Scalars['String'] | null),user_id?: (Scalars['String'] | null)}


/** order by sum() on columns of table "Trade" */
export interface Trade_sum_order_by {feeRaw?: (order_by | null),newPriceRaw?: (order_by | null),reserveAmountRaw?: (order_by | null),timestamp?: (order_by | null),tokenAmountRaw?: (order_by | null)}


/** order by var_pop() on columns of table "Trade" */
export interface Trade_var_pop_order_by {feeRaw?: (order_by | null),newPriceRaw?: (order_by | null),reserveAmountRaw?: (order_by | null),timestamp?: (order_by | null),tokenAmountRaw?: (order_by | null)}


/** order by var_samp() on columns of table "Trade" */
export interface Trade_var_samp_order_by {feeRaw?: (order_by | null),newPriceRaw?: (order_by | null),reserveAmountRaw?: (order_by | null),timestamp?: (order_by | null),tokenAmountRaw?: (order_by | null)}


/** order by variance() on columns of table "Trade" */
export interface Trade_variance_order_by {feeRaw?: (order_by | null),newPriceRaw?: (order_by | null),reserveAmountRaw?: (order_by | null),timestamp?: (order_by | null),tokenAmountRaw?: (order_by | null)}


/** columns and relationships of "UserMarketPosition" */
export interface UserMarketPositionGenqlSelection{
    claimableRewardsFormatted?: boolean | number
    claimableRewardsRaw?: boolean | number
    db_write_timestamp?: boolean | number
    id?: boolean | number
    lastUpdatedAt?: boolean | number
    lockedCollateralFormatted?: boolean | number
    lockedCollateralRaw?: boolean | number
    market_id?: boolean | number
    netFTokenChangeFormatted?: boolean | number
    netFTokenChangeRaw?: boolean | number
    presaleDepositFormatted?: boolean | number
    presaleDepositRaw?: boolean | number
    presaleLeverage?: boolean | number
    stakedAmountFormatted?: boolean | number
    stakedAmountRaw?: boolean | number
    totalDebtFormatted?: boolean | number
    totalDebtRaw?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "UserMarketPosition" */
export interface UserMarketPosition_aggregate_order_by {avg?: (UserMarketPosition_avg_order_by | null),count?: (order_by | null),max?: (UserMarketPosition_max_order_by | null),min?: (UserMarketPosition_min_order_by | null),stddev?: (UserMarketPosition_stddev_order_by | null),stddev_pop?: (UserMarketPosition_stddev_pop_order_by | null),stddev_samp?: (UserMarketPosition_stddev_samp_order_by | null),sum?: (UserMarketPosition_sum_order_by | null),var_pop?: (UserMarketPosition_var_pop_order_by | null),var_samp?: (UserMarketPosition_var_samp_order_by | null),variance?: (UserMarketPosition_variance_order_by | null)}


/** order by avg() on columns of table "UserMarketPosition" */
export interface UserMarketPosition_avg_order_by {claimableRewardsRaw?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralRaw?: (order_by | null),netFTokenChangeRaw?: (order_by | null),presaleDepositRaw?: (order_by | null),presaleLeverage?: (order_by | null),stakedAmountRaw?: (order_by | null),totalDebtRaw?: (order_by | null)}


/** Boolean expression to filter rows from the table "UserMarketPosition". All fields are combined with a logical 'AND'. */
export interface UserMarketPosition_bool_exp {_and?: (UserMarketPosition_bool_exp[] | null),_not?: (UserMarketPosition_bool_exp | null),_or?: (UserMarketPosition_bool_exp[] | null),claimableRewardsFormatted?: (String_comparison_exp | null),claimableRewardsRaw?: (numeric_comparison_exp | null),db_write_timestamp?: (timestamp_comparison_exp | null),id?: (String_comparison_exp | null),lastUpdatedAt?: (numeric_comparison_exp | null),lockedCollateralFormatted?: (String_comparison_exp | null),lockedCollateralRaw?: (numeric_comparison_exp | null),market_id?: (String_comparison_exp | null),netFTokenChangeFormatted?: (String_comparison_exp | null),netFTokenChangeRaw?: (numeric_comparison_exp | null),presaleDepositFormatted?: (String_comparison_exp | null),presaleDepositRaw?: (numeric_comparison_exp | null),presaleLeverage?: (numeric_comparison_exp | null),stakedAmountFormatted?: (String_comparison_exp | null),stakedAmountRaw?: (numeric_comparison_exp | null),totalDebtFormatted?: (String_comparison_exp | null),totalDebtRaw?: (numeric_comparison_exp | null),user_id?: (String_comparison_exp | null)}


/** order by max() on columns of table "UserMarketPosition" */
export interface UserMarketPosition_max_order_by {claimableRewardsFormatted?: (order_by | null),claimableRewardsRaw?: (order_by | null),db_write_timestamp?: (order_by | null),id?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralFormatted?: (order_by | null),lockedCollateralRaw?: (order_by | null),market_id?: (order_by | null),netFTokenChangeFormatted?: (order_by | null),netFTokenChangeRaw?: (order_by | null),presaleDepositFormatted?: (order_by | null),presaleDepositRaw?: (order_by | null),presaleLeverage?: (order_by | null),stakedAmountFormatted?: (order_by | null),stakedAmountRaw?: (order_by | null),totalDebtFormatted?: (order_by | null),totalDebtRaw?: (order_by | null),user_id?: (order_by | null)}


/** order by min() on columns of table "UserMarketPosition" */
export interface UserMarketPosition_min_order_by {claimableRewardsFormatted?: (order_by | null),claimableRewardsRaw?: (order_by | null),db_write_timestamp?: (order_by | null),id?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralFormatted?: (order_by | null),lockedCollateralRaw?: (order_by | null),market_id?: (order_by | null),netFTokenChangeFormatted?: (order_by | null),netFTokenChangeRaw?: (order_by | null),presaleDepositFormatted?: (order_by | null),presaleDepositRaw?: (order_by | null),presaleLeverage?: (order_by | null),stakedAmountFormatted?: (order_by | null),stakedAmountRaw?: (order_by | null),totalDebtFormatted?: (order_by | null),totalDebtRaw?: (order_by | null),user_id?: (order_by | null)}


/** Ordering options when selecting data from "UserMarketPosition". */
export interface UserMarketPosition_order_by {claimableRewardsFormatted?: (order_by | null),claimableRewardsRaw?: (order_by | null),db_write_timestamp?: (order_by | null),id?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralFormatted?: (order_by | null),lockedCollateralRaw?: (order_by | null),market_id?: (order_by | null),netFTokenChangeFormatted?: (order_by | null),netFTokenChangeRaw?: (order_by | null),presaleDepositFormatted?: (order_by | null),presaleDepositRaw?: (order_by | null),presaleLeverage?: (order_by | null),stakedAmountFormatted?: (order_by | null),stakedAmountRaw?: (order_by | null),totalDebtFormatted?: (order_by | null),totalDebtRaw?: (order_by | null),user_id?: (order_by | null)}


/** order by stddev() on columns of table "UserMarketPosition" */
export interface UserMarketPosition_stddev_order_by {claimableRewardsRaw?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralRaw?: (order_by | null),netFTokenChangeRaw?: (order_by | null),presaleDepositRaw?: (order_by | null),presaleLeverage?: (order_by | null),stakedAmountRaw?: (order_by | null),totalDebtRaw?: (order_by | null)}


/** order by stddev_pop() on columns of table "UserMarketPosition" */
export interface UserMarketPosition_stddev_pop_order_by {claimableRewardsRaw?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralRaw?: (order_by | null),netFTokenChangeRaw?: (order_by | null),presaleDepositRaw?: (order_by | null),presaleLeverage?: (order_by | null),stakedAmountRaw?: (order_by | null),totalDebtRaw?: (order_by | null)}


/** order by stddev_samp() on columns of table "UserMarketPosition" */
export interface UserMarketPosition_stddev_samp_order_by {claimableRewardsRaw?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralRaw?: (order_by | null),netFTokenChangeRaw?: (order_by | null),presaleDepositRaw?: (order_by | null),presaleLeverage?: (order_by | null),stakedAmountRaw?: (order_by | null),totalDebtRaw?: (order_by | null)}


/** Streaming cursor of the table "UserMarketPosition" */
export interface UserMarketPosition_stream_cursor_input {
/** Stream column input with initial value */
initial_value: UserMarketPosition_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface UserMarketPosition_stream_cursor_value_input {claimableRewardsFormatted?: (Scalars['String'] | null),claimableRewardsRaw?: (Scalars['numeric'] | null),db_write_timestamp?: (Scalars['timestamp'] | null),id?: (Scalars['String'] | null),lastUpdatedAt?: (Scalars['numeric'] | null),lockedCollateralFormatted?: (Scalars['String'] | null),lockedCollateralRaw?: (Scalars['numeric'] | null),market_id?: (Scalars['String'] | null),netFTokenChangeFormatted?: (Scalars['String'] | null),netFTokenChangeRaw?: (Scalars['numeric'] | null),presaleDepositFormatted?: (Scalars['String'] | null),presaleDepositRaw?: (Scalars['numeric'] | null),presaleLeverage?: (Scalars['numeric'] | null),stakedAmountFormatted?: (Scalars['String'] | null),stakedAmountRaw?: (Scalars['numeric'] | null),totalDebtFormatted?: (Scalars['String'] | null),totalDebtRaw?: (Scalars['numeric'] | null),user_id?: (Scalars['String'] | null)}


/** order by sum() on columns of table "UserMarketPosition" */
export interface UserMarketPosition_sum_order_by {claimableRewardsRaw?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralRaw?: (order_by | null),netFTokenChangeRaw?: (order_by | null),presaleDepositRaw?: (order_by | null),presaleLeverage?: (order_by | null),stakedAmountRaw?: (order_by | null),totalDebtRaw?: (order_by | null)}


/** order by var_pop() on columns of table "UserMarketPosition" */
export interface UserMarketPosition_var_pop_order_by {claimableRewardsRaw?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralRaw?: (order_by | null),netFTokenChangeRaw?: (order_by | null),presaleDepositRaw?: (order_by | null),presaleLeverage?: (order_by | null),stakedAmountRaw?: (order_by | null),totalDebtRaw?: (order_by | null)}


/** order by var_samp() on columns of table "UserMarketPosition" */
export interface UserMarketPosition_var_samp_order_by {claimableRewardsRaw?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralRaw?: (order_by | null),netFTokenChangeRaw?: (order_by | null),presaleDepositRaw?: (order_by | null),presaleLeverage?: (order_by | null),stakedAmountRaw?: (order_by | null),totalDebtRaw?: (order_by | null)}


/** order by variance() on columns of table "UserMarketPosition" */
export interface UserMarketPosition_variance_order_by {claimableRewardsRaw?: (order_by | null),lastUpdatedAt?: (order_by | null),lockedCollateralRaw?: (order_by | null),netFTokenChangeRaw?: (order_by | null),presaleDepositRaw?: (order_by | null),presaleLeverage?: (order_by | null),stakedAmountRaw?: (order_by | null),totalDebtRaw?: (order_by | null)}


/** Boolean expression to compare columns of type "candleperiod". All fields are combined with logical 'AND'. */
export interface candleperiod_comparison_exp {_eq?: (Scalars['candleperiod'] | null),_gt?: (Scalars['candleperiod'] | null),_gte?: (Scalars['candleperiod'] | null),_in?: (Scalars['candleperiod'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['candleperiod'] | null),_lte?: (Scalars['candleperiod'] | null),_neq?: (Scalars['candleperiod'] | null),_nin?: (Scalars['candleperiod'][] | null)}


/** columns and relationships of "chain_metadata" */
export interface chain_metadataGenqlSelection{
    block_height?: boolean | number
    chain_id?: boolean | number
    end_block?: boolean | number
    first_event_block_number?: boolean | number
    is_hyper_sync?: boolean | number
    latest_fetched_block_number?: boolean | number
    latest_processed_block?: boolean | number
    num_batches_fetched?: boolean | number
    num_events_processed?: boolean | number
    start_block?: boolean | number
    timestamp_caught_up_to_head_or_endblock?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "chain_metadata". All fields are combined with a logical 'AND'. */
export interface chain_metadata_bool_exp {_and?: (chain_metadata_bool_exp[] | null),_not?: (chain_metadata_bool_exp | null),_or?: (chain_metadata_bool_exp[] | null),block_height?: (Int_comparison_exp | null),chain_id?: (Int_comparison_exp | null),end_block?: (Int_comparison_exp | null),first_event_block_number?: (Int_comparison_exp | null),is_hyper_sync?: (Boolean_comparison_exp | null),latest_fetched_block_number?: (Int_comparison_exp | null),latest_processed_block?: (Int_comparison_exp | null),num_batches_fetched?: (Int_comparison_exp | null),num_events_processed?: (Int_comparison_exp | null),start_block?: (Int_comparison_exp | null),timestamp_caught_up_to_head_or_endblock?: (timestamptz_comparison_exp | null)}


/** Ordering options when selecting data from "chain_metadata". */
export interface chain_metadata_order_by {block_height?: (order_by | null),chain_id?: (order_by | null),end_block?: (order_by | null),first_event_block_number?: (order_by | null),is_hyper_sync?: (order_by | null),latest_fetched_block_number?: (order_by | null),latest_processed_block?: (order_by | null),num_batches_fetched?: (order_by | null),num_events_processed?: (order_by | null),start_block?: (order_by | null),timestamp_caught_up_to_head_or_endblock?: (order_by | null)}


/** Streaming cursor of the table "chain_metadata" */
export interface chain_metadata_stream_cursor_input {
/** Stream column input with initial value */
initial_value: chain_metadata_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface chain_metadata_stream_cursor_value_input {block_height?: (Scalars['Int'] | null),chain_id?: (Scalars['Int'] | null),end_block?: (Scalars['Int'] | null),first_event_block_number?: (Scalars['Int'] | null),is_hyper_sync?: (Scalars['Boolean'] | null),latest_fetched_block_number?: (Scalars['Int'] | null),latest_processed_block?: (Scalars['Int'] | null),num_batches_fetched?: (Scalars['Int'] | null),num_events_processed?: (Scalars['Int'] | null),start_block?: (Scalars['Int'] | null),timestamp_caught_up_to_head_or_endblock?: (Scalars['timestamptz'] | null)}


/** Boolean expression to compare columns of type "contract_type". All fields are combined with logical 'AND'. */
export interface contract_type_comparison_exp {_eq?: (Scalars['contract_type'] | null),_gt?: (Scalars['contract_type'] | null),_gte?: (Scalars['contract_type'] | null),_in?: (Scalars['contract_type'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['contract_type'] | null),_lte?: (Scalars['contract_type'] | null),_neq?: (Scalars['contract_type'] | null),_nin?: (Scalars['contract_type'][] | null)}


/** columns and relationships of "dynamic_contract_registry" */
export interface dynamic_contract_registryGenqlSelection{
    chain_id?: boolean | number
    contract_address?: boolean | number
    contract_type?: boolean | number
    id?: boolean | number
    registering_event_block_number?: boolean | number
    registering_event_block_timestamp?: boolean | number
    registering_event_contract_name?: boolean | number
    registering_event_log_index?: boolean | number
    registering_event_name?: boolean | number
    registering_event_src_address?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dynamic_contract_registry". All fields are combined with a logical 'AND'. */
export interface dynamic_contract_registry_bool_exp {_and?: (dynamic_contract_registry_bool_exp[] | null),_not?: (dynamic_contract_registry_bool_exp | null),_or?: (dynamic_contract_registry_bool_exp[] | null),chain_id?: (Int_comparison_exp | null),contract_address?: (String_comparison_exp | null),contract_type?: (contract_type_comparison_exp | null),id?: (String_comparison_exp | null),registering_event_block_number?: (Int_comparison_exp | null),registering_event_block_timestamp?: (Int_comparison_exp | null),registering_event_contract_name?: (String_comparison_exp | null),registering_event_log_index?: (Int_comparison_exp | null),registering_event_name?: (String_comparison_exp | null),registering_event_src_address?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "dynamic_contract_registry". */
export interface dynamic_contract_registry_order_by {chain_id?: (order_by | null),contract_address?: (order_by | null),contract_type?: (order_by | null),id?: (order_by | null),registering_event_block_number?: (order_by | null),registering_event_block_timestamp?: (order_by | null),registering_event_contract_name?: (order_by | null),registering_event_log_index?: (order_by | null),registering_event_name?: (order_by | null),registering_event_src_address?: (order_by | null)}


/** Streaming cursor of the table "dynamic_contract_registry" */
export interface dynamic_contract_registry_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dynamic_contract_registry_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dynamic_contract_registry_stream_cursor_value_input {chain_id?: (Scalars['Int'] | null),contract_address?: (Scalars['String'] | null),contract_type?: (Scalars['contract_type'] | null),id?: (Scalars['String'] | null),registering_event_block_number?: (Scalars['Int'] | null),registering_event_block_timestamp?: (Scalars['Int'] | null),registering_event_contract_name?: (Scalars['String'] | null),registering_event_log_index?: (Scalars['Int'] | null),registering_event_name?: (Scalars['String'] | null),registering_event_src_address?: (Scalars['String'] | null)}


/** columns and relationships of "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_dataGenqlSelection{
    block_hash?: boolean | number
    block_number?: boolean | number
    chain_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "end_of_block_range_scanned_data". All fields are combined with a logical 'AND'. */
export interface end_of_block_range_scanned_data_bool_exp {_and?: (end_of_block_range_scanned_data_bool_exp[] | null),_not?: (end_of_block_range_scanned_data_bool_exp | null),_or?: (end_of_block_range_scanned_data_bool_exp[] | null),block_hash?: (String_comparison_exp | null),block_number?: (Int_comparison_exp | null),chain_id?: (Int_comparison_exp | null)}


/** Ordering options when selecting data from "end_of_block_range_scanned_data". */
export interface end_of_block_range_scanned_data_order_by {block_hash?: (order_by | null),block_number?: (order_by | null),chain_id?: (order_by | null)}


/** Streaming cursor of the table "end_of_block_range_scanned_data" */
export interface end_of_block_range_scanned_data_stream_cursor_input {
/** Stream column input with initial value */
initial_value: end_of_block_range_scanned_data_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface end_of_block_range_scanned_data_stream_cursor_value_input {block_hash?: (Scalars['String'] | null),block_number?: (Scalars['Int'] | null),chain_id?: (Scalars['Int'] | null)}


/** columns and relationships of "event_sync_state" */
export interface event_sync_stateGenqlSelection{
    block_number?: boolean | number
    block_timestamp?: boolean | number
    chain_id?: boolean | number
    is_pre_registering_dynamic_contracts?: boolean | number
    log_index?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "event_sync_state". All fields are combined with a logical 'AND'. */
export interface event_sync_state_bool_exp {_and?: (event_sync_state_bool_exp[] | null),_not?: (event_sync_state_bool_exp | null),_or?: (event_sync_state_bool_exp[] | null),block_number?: (Int_comparison_exp | null),block_timestamp?: (Int_comparison_exp | null),chain_id?: (Int_comparison_exp | null),is_pre_registering_dynamic_contracts?: (Boolean_comparison_exp | null),log_index?: (Int_comparison_exp | null)}


/** Ordering options when selecting data from "event_sync_state". */
export interface event_sync_state_order_by {block_number?: (order_by | null),block_timestamp?: (order_by | null),chain_id?: (order_by | null),is_pre_registering_dynamic_contracts?: (order_by | null),log_index?: (order_by | null)}


/** Streaming cursor of the table "event_sync_state" */
export interface event_sync_state_stream_cursor_input {
/** Stream column input with initial value */
initial_value: event_sync_state_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface event_sync_state_stream_cursor_value_input {block_number?: (Scalars['Int'] | null),block_timestamp?: (Scalars['Int'] | null),chain_id?: (Scalars['Int'] | null),is_pre_registering_dynamic_contracts?: (Scalars['Boolean'] | null),log_index?: (Scalars['Int'] | null)}

export interface jsonb_cast_exp {String?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface jsonb_comparison_exp {_cast?: (jsonb_cast_exp | null),
/** is the column contained in the given json value */
_contained_in?: (Scalars['jsonb'] | null),
/** does the column contain the given json value at the top level */
_contains?: (Scalars['jsonb'] | null),_eq?: (Scalars['jsonb'] | null),_gt?: (Scalars['jsonb'] | null),_gte?: (Scalars['jsonb'] | null),
/** does the string exist as a top-level key in the column */
_has_key?: (Scalars['String'] | null),
/** do all of these strings exist as top-level keys in the column */
_has_keys_all?: (Scalars['String'][] | null),
/** do any of these strings exist as top-level keys in the column */
_has_keys_any?: (Scalars['String'][] | null),_in?: (Scalars['jsonb'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['jsonb'] | null),_lte?: (Scalars['jsonb'] | null),_neq?: (Scalars['jsonb'] | null),_nin?: (Scalars['jsonb'][] | null)}


/** Boolean expression to compare columns of type "loanstatus". All fields are combined with logical 'AND'. */
export interface loanstatus_comparison_exp {_eq?: (Scalars['loanstatus'] | null),_gt?: (Scalars['loanstatus'] | null),_gte?: (Scalars['loanstatus'] | null),_in?: (Scalars['loanstatus'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['loanstatus'] | null),_lte?: (Scalars['loanstatus'] | null),_neq?: (Scalars['loanstatus'] | null),_nin?: (Scalars['loanstatus'][] | null)}


/** Boolean expression to compare columns of type "marketstatus". All fields are combined with logical 'AND'. */
export interface marketstatus_comparison_exp {_eq?: (Scalars['marketstatus'] | null),_gt?: (Scalars['marketstatus'] | null),_gte?: (Scalars['marketstatus'] | null),_in?: (Scalars['marketstatus'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['marketstatus'] | null),_lte?: (Scalars['marketstatus'] | null),_neq?: (Scalars['marketstatus'] | null),_nin?: (Scalars['marketstatus'][] | null)}


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface numeric_comparison_exp {_eq?: (Scalars['numeric'] | null),_gt?: (Scalars['numeric'] | null),_gte?: (Scalars['numeric'] | null),_in?: (Scalars['numeric'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['numeric'] | null),_lte?: (Scalars['numeric'] | null),_neq?: (Scalars['numeric'] | null),_nin?: (Scalars['numeric'][] | null)}


/** columns and relationships of "persisted_state" */
export interface persisted_stateGenqlSelection{
    abi_files_hash?: boolean | number
    config_hash?: boolean | number
    envio_version?: boolean | number
    handler_files_hash?: boolean | number
    id?: boolean | number
    schema_hash?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "persisted_state". All fields are combined with a logical 'AND'. */
export interface persisted_state_bool_exp {_and?: (persisted_state_bool_exp[] | null),_not?: (persisted_state_bool_exp | null),_or?: (persisted_state_bool_exp[] | null),abi_files_hash?: (String_comparison_exp | null),config_hash?: (String_comparison_exp | null),envio_version?: (String_comparison_exp | null),handler_files_hash?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),schema_hash?: (String_comparison_exp | null)}


/** Ordering options when selecting data from "persisted_state". */
export interface persisted_state_order_by {abi_files_hash?: (order_by | null),config_hash?: (order_by | null),envio_version?: (order_by | null),handler_files_hash?: (order_by | null),id?: (order_by | null),schema_hash?: (order_by | null)}


/** Streaming cursor of the table "persisted_state" */
export interface persisted_state_stream_cursor_input {
/** Stream column input with initial value */
initial_value: persisted_state_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface persisted_state_stream_cursor_value_input {abi_files_hash?: (Scalars['String'] | null),config_hash?: (Scalars['String'] | null),envio_version?: (Scalars['String'] | null),handler_files_hash?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),schema_hash?: (Scalars['String'] | null)}

export interface query_rootGenqlSelection{
    /** fetch data from the table: "Account" */
    Account?: (AccountGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Account_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Account_order_by[] | null), 
    /** filter the rows returned */
    where?: (Account_bool_exp | null)} })
    /** fetch data from the table: "Account" using primary key columns */
    Account_by_pk?: (AccountGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "CreditFacilityContract" */
    CreditFacilityContract?: (CreditFacilityContractGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (CreditFacilityContract_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (CreditFacilityContract_order_by[] | null), 
    /** filter the rows returned */
    where?: (CreditFacilityContract_bool_exp | null)} })
    /** fetch data from the table: "CreditFacilityContract" using primary key columns */
    CreditFacilityContract_by_pk?: (CreditFacilityContractGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "FeeDistribution" */
    FeeDistribution?: (FeeDistributionGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (FeeDistribution_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (FeeDistribution_order_by[] | null), 
    /** filter the rows returned */
    where?: (FeeDistribution_bool_exp | null)} })
    /** fetch data from the table: "FeeDistribution" using primary key columns */
    FeeDistribution_by_pk?: (FeeDistributionGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "FloorElevation" */
    FloorElevation?: (FloorElevationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (FloorElevation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (FloorElevation_order_by[] | null), 
    /** filter the rows returned */
    where?: (FloorElevation_bool_exp | null)} })
    /** fetch data from the table: "FloorElevation" using primary key columns */
    FloorElevation_by_pk?: (FloorElevationGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "GlobalStats" */
    GlobalStats?: (GlobalStatsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (GlobalStats_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (GlobalStats_order_by[] | null), 
    /** filter the rows returned */
    where?: (GlobalStats_bool_exp | null)} })
    /** fetch data from the table: "GlobalStats" using primary key columns */
    GlobalStats_by_pk?: (GlobalStatsGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "Loan" */
    Loan?: (LoanGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Loan_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Loan_order_by[] | null), 
    /** filter the rows returned */
    where?: (Loan_bool_exp | null)} })
    /** fetch data from the table: "LoanStatusHistory" */
    LoanStatusHistory?: (LoanStatusHistoryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (LoanStatusHistory_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (LoanStatusHistory_order_by[] | null), 
    /** filter the rows returned */
    where?: (LoanStatusHistory_bool_exp | null)} })
    /** fetch data from the table: "LoanStatusHistory" using primary key columns */
    LoanStatusHistory_by_pk?: (LoanStatusHistoryGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "Loan" using primary key columns */
    Loan_by_pk?: (LoanGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "Market" */
    Market?: (MarketGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Market_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Market_order_by[] | null), 
    /** filter the rows returned */
    where?: (Market_bool_exp | null)} })
    /** fetch data from the table: "MarketRollingStats" */
    MarketRollingStats?: (MarketRollingStatsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (MarketRollingStats_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (MarketRollingStats_order_by[] | null), 
    /** filter the rows returned */
    where?: (MarketRollingStats_bool_exp | null)} })
    /** fetch data from the table: "MarketRollingStats" using primary key columns */
    MarketRollingStats_by_pk?: (MarketRollingStatsGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "MarketSnapshot" */
    MarketSnapshot?: (MarketSnapshotGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (MarketSnapshot_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (MarketSnapshot_order_by[] | null), 
    /** filter the rows returned */
    where?: (MarketSnapshot_bool_exp | null)} })
    /** fetch data from the table: "MarketSnapshot" using primary key columns */
    MarketSnapshot_by_pk?: (MarketSnapshotGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "Market" using primary key columns */
    Market_by_pk?: (MarketGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "ModuleAddress" */
    ModuleAddress?: (ModuleAddressGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (ModuleAddress_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (ModuleAddress_order_by[] | null), 
    /** filter the rows returned */
    where?: (ModuleAddress_bool_exp | null)} })
    /** fetch data from the table: "ModuleAddress" using primary key columns */
    ModuleAddress_by_pk?: (ModuleAddressGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "ModuleRegistry" */
    ModuleRegistry?: (ModuleRegistryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (ModuleRegistry_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (ModuleRegistry_order_by[] | null), 
    /** filter the rows returned */
    where?: (ModuleRegistry_bool_exp | null)} })
    /** fetch data from the table: "ModuleRegistry" using primary key columns */
    ModuleRegistry_by_pk?: (ModuleRegistryGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "PreSaleContract" */
    PreSaleContract?: (PreSaleContractGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (PreSaleContract_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (PreSaleContract_order_by[] | null), 
    /** filter the rows returned */
    where?: (PreSaleContract_bool_exp | null)} })
    /** fetch data from the table: "PreSaleContract" using primary key columns */
    PreSaleContract_by_pk?: (PreSaleContractGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "PresaleParticipation" */
    PresaleParticipation?: (PresaleParticipationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (PresaleParticipation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (PresaleParticipation_order_by[] | null), 
    /** filter the rows returned */
    where?: (PresaleParticipation_bool_exp | null)} })
    /** fetch data from the table: "PresaleParticipation" using primary key columns */
    PresaleParticipation_by_pk?: (PresaleParticipationGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "PriceCandle" */
    PriceCandle?: (PriceCandleGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (PriceCandle_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (PriceCandle_order_by[] | null), 
    /** filter the rows returned */
    where?: (PriceCandle_bool_exp | null)} })
    /** fetch data from the table: "PriceCandle" using primary key columns */
    PriceCandle_by_pk?: (PriceCandleGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "Stake" */
    Stake?: (StakeGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Stake_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Stake_order_by[] | null), 
    /** filter the rows returned */
    where?: (Stake_bool_exp | null)} })
    /** fetch data from the table: "Stake" using primary key columns */
    Stake_by_pk?: (StakeGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "StakingContract" */
    StakingContract?: (StakingContractGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (StakingContract_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (StakingContract_order_by[] | null), 
    /** filter the rows returned */
    where?: (StakingContract_bool_exp | null)} })
    /** fetch data from the table: "StakingContract" using primary key columns */
    StakingContract_by_pk?: (StakingContractGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "Token" */
    Token?: (TokenGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Token_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Token_order_by[] | null), 
    /** filter the rows returned */
    where?: (Token_bool_exp | null)} })
    /** fetch data from the table: "Token" using primary key columns */
    Token_by_pk?: (TokenGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "Trade" */
    Trade?: (TradeGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Trade_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Trade_order_by[] | null), 
    /** filter the rows returned */
    where?: (Trade_bool_exp | null)} })
    /** fetch data from the table: "Trade" using primary key columns */
    Trade_by_pk?: (TradeGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "UserMarketPosition" */
    UserMarketPosition?: (UserMarketPositionGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (UserMarketPosition_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (UserMarketPosition_order_by[] | null), 
    /** filter the rows returned */
    where?: (UserMarketPosition_bool_exp | null)} })
    /** fetch data from the table: "UserMarketPosition" using primary key columns */
    UserMarketPosition_by_pk?: (UserMarketPositionGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "chain_metadata" */
    chain_metadata?: (chain_metadataGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (chain_metadata_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (chain_metadata_order_by[] | null), 
    /** filter the rows returned */
    where?: (chain_metadata_bool_exp | null)} })
    /** fetch data from the table: "chain_metadata" using primary key columns */
    chain_metadata_by_pk?: (chain_metadataGenqlSelection & { __args: {chain_id: Scalars['Int']} })
    /** fetch data from the table: "dynamic_contract_registry" */
    dynamic_contract_registry?: (dynamic_contract_registryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dynamic_contract_registry_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dynamic_contract_registry_order_by[] | null), 
    /** filter the rows returned */
    where?: (dynamic_contract_registry_bool_exp | null)} })
    /** fetch data from the table: "dynamic_contract_registry" using primary key columns */
    dynamic_contract_registry_by_pk?: (dynamic_contract_registryGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table: "end_of_block_range_scanned_data" */
    end_of_block_range_scanned_data?: (end_of_block_range_scanned_dataGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (end_of_block_range_scanned_data_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (end_of_block_range_scanned_data_order_by[] | null), 
    /** filter the rows returned */
    where?: (end_of_block_range_scanned_data_bool_exp | null)} })
    /** fetch data from the table: "end_of_block_range_scanned_data" using primary key columns */
    end_of_block_range_scanned_data_by_pk?: (end_of_block_range_scanned_dataGenqlSelection & { __args: {block_number: Scalars['Int'], chain_id: Scalars['Int']} })
    /** fetch data from the table: "event_sync_state" */
    event_sync_state?: (event_sync_stateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (event_sync_state_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (event_sync_state_order_by[] | null), 
    /** filter the rows returned */
    where?: (event_sync_state_bool_exp | null)} })
    /** fetch data from the table: "event_sync_state" using primary key columns */
    event_sync_state_by_pk?: (event_sync_stateGenqlSelection & { __args: {chain_id: Scalars['Int']} })
    /** fetch data from the table: "persisted_state" */
    persisted_state?: (persisted_stateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (persisted_state_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (persisted_state_order_by[] | null), 
    /** filter the rows returned */
    where?: (persisted_state_bool_exp | null)} })
    /** fetch data from the table: "persisted_state" using primary key columns */
    persisted_state_by_pk?: (persisted_stateGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "raw_events" */
    raw_events?: (raw_eventsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (raw_events_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (raw_events_order_by[] | null), 
    /** filter the rows returned */
    where?: (raw_events_bool_exp | null)} })
    /** fetch data from the table: "raw_events" using primary key columns */
    raw_events_by_pk?: (raw_eventsGenqlSelection & { __args: {serial: Scalars['Int']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "raw_events" */
export interface raw_eventsGenqlSelection{
    block_fields?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    block_hash?: boolean | number
    block_number?: boolean | number
    block_timestamp?: boolean | number
    chain_id?: boolean | number
    contract_name?: boolean | number
    db_write_timestamp?: boolean | number
    event_id?: boolean | number
    event_name?: boolean | number
    log_index?: boolean | number
    params?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    serial?: boolean | number
    src_address?: boolean | number
    transaction_fields?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "raw_events". All fields are combined with a logical 'AND'. */
export interface raw_events_bool_exp {_and?: (raw_events_bool_exp[] | null),_not?: (raw_events_bool_exp | null),_or?: (raw_events_bool_exp[] | null),block_fields?: (jsonb_comparison_exp | null),block_hash?: (String_comparison_exp | null),block_number?: (Int_comparison_exp | null),block_timestamp?: (Int_comparison_exp | null),chain_id?: (Int_comparison_exp | null),contract_name?: (String_comparison_exp | null),db_write_timestamp?: (timestamp_comparison_exp | null),event_id?: (numeric_comparison_exp | null),event_name?: (String_comparison_exp | null),log_index?: (Int_comparison_exp | null),params?: (jsonb_comparison_exp | null),serial?: (Int_comparison_exp | null),src_address?: (String_comparison_exp | null),transaction_fields?: (jsonb_comparison_exp | null)}


/** Ordering options when selecting data from "raw_events". */
export interface raw_events_order_by {block_fields?: (order_by | null),block_hash?: (order_by | null),block_number?: (order_by | null),block_timestamp?: (order_by | null),chain_id?: (order_by | null),contract_name?: (order_by | null),db_write_timestamp?: (order_by | null),event_id?: (order_by | null),event_name?: (order_by | null),log_index?: (order_by | null),params?: (order_by | null),serial?: (order_by | null),src_address?: (order_by | null),transaction_fields?: (order_by | null)}


/** Streaming cursor of the table "raw_events" */
export interface raw_events_stream_cursor_input {
/** Stream column input with initial value */
initial_value: raw_events_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface raw_events_stream_cursor_value_input {block_fields?: (Scalars['jsonb'] | null),block_hash?: (Scalars['String'] | null),block_number?: (Scalars['Int'] | null),block_timestamp?: (Scalars['Int'] | null),chain_id?: (Scalars['Int'] | null),contract_name?: (Scalars['String'] | null),db_write_timestamp?: (Scalars['timestamp'] | null),event_id?: (Scalars['numeric'] | null),event_name?: (Scalars['String'] | null),log_index?: (Scalars['Int'] | null),params?: (Scalars['jsonb'] | null),serial?: (Scalars['Int'] | null),src_address?: (Scalars['String'] | null),transaction_fields?: (Scalars['jsonb'] | null)}


/** Boolean expression to compare columns of type "stakestatus". All fields are combined with logical 'AND'. */
export interface stakestatus_comparison_exp {_eq?: (Scalars['stakestatus'] | null),_gt?: (Scalars['stakestatus'] | null),_gte?: (Scalars['stakestatus'] | null),_in?: (Scalars['stakestatus'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['stakestatus'] | null),_lte?: (Scalars['stakestatus'] | null),_neq?: (Scalars['stakestatus'] | null),_nin?: (Scalars['stakestatus'][] | null)}

export interface subscription_rootGenqlSelection{
    /** fetch data from the table: "Account" */
    Account?: (AccountGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Account_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Account_order_by[] | null), 
    /** filter the rows returned */
    where?: (Account_bool_exp | null)} })
    /** fetch data from the table: "Account" using primary key columns */
    Account_by_pk?: (AccountGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "Account" */
    Account_stream?: (AccountGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (Account_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (Account_bool_exp | null)} })
    /** fetch data from the table: "CreditFacilityContract" */
    CreditFacilityContract?: (CreditFacilityContractGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (CreditFacilityContract_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (CreditFacilityContract_order_by[] | null), 
    /** filter the rows returned */
    where?: (CreditFacilityContract_bool_exp | null)} })
    /** fetch data from the table: "CreditFacilityContract" using primary key columns */
    CreditFacilityContract_by_pk?: (CreditFacilityContractGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "CreditFacilityContract" */
    CreditFacilityContract_stream?: (CreditFacilityContractGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (CreditFacilityContract_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (CreditFacilityContract_bool_exp | null)} })
    /** fetch data from the table: "FeeDistribution" */
    FeeDistribution?: (FeeDistributionGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (FeeDistribution_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (FeeDistribution_order_by[] | null), 
    /** filter the rows returned */
    where?: (FeeDistribution_bool_exp | null)} })
    /** fetch data from the table: "FeeDistribution" using primary key columns */
    FeeDistribution_by_pk?: (FeeDistributionGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "FeeDistribution" */
    FeeDistribution_stream?: (FeeDistributionGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (FeeDistribution_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (FeeDistribution_bool_exp | null)} })
    /** fetch data from the table: "FloorElevation" */
    FloorElevation?: (FloorElevationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (FloorElevation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (FloorElevation_order_by[] | null), 
    /** filter the rows returned */
    where?: (FloorElevation_bool_exp | null)} })
    /** fetch data from the table: "FloorElevation" using primary key columns */
    FloorElevation_by_pk?: (FloorElevationGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "FloorElevation" */
    FloorElevation_stream?: (FloorElevationGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (FloorElevation_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (FloorElevation_bool_exp | null)} })
    /** fetch data from the table: "GlobalStats" */
    GlobalStats?: (GlobalStatsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (GlobalStats_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (GlobalStats_order_by[] | null), 
    /** filter the rows returned */
    where?: (GlobalStats_bool_exp | null)} })
    /** fetch data from the table: "GlobalStats" using primary key columns */
    GlobalStats_by_pk?: (GlobalStatsGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "GlobalStats" */
    GlobalStats_stream?: (GlobalStatsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (GlobalStats_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (GlobalStats_bool_exp | null)} })
    /** fetch data from the table: "Loan" */
    Loan?: (LoanGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Loan_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Loan_order_by[] | null), 
    /** filter the rows returned */
    where?: (Loan_bool_exp | null)} })
    /** fetch data from the table: "LoanStatusHistory" */
    LoanStatusHistory?: (LoanStatusHistoryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (LoanStatusHistory_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (LoanStatusHistory_order_by[] | null), 
    /** filter the rows returned */
    where?: (LoanStatusHistory_bool_exp | null)} })
    /** fetch data from the table: "LoanStatusHistory" using primary key columns */
    LoanStatusHistory_by_pk?: (LoanStatusHistoryGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "LoanStatusHistory" */
    LoanStatusHistory_stream?: (LoanStatusHistoryGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (LoanStatusHistory_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (LoanStatusHistory_bool_exp | null)} })
    /** fetch data from the table: "Loan" using primary key columns */
    Loan_by_pk?: (LoanGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "Loan" */
    Loan_stream?: (LoanGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (Loan_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (Loan_bool_exp | null)} })
    /** fetch data from the table: "Market" */
    Market?: (MarketGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Market_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Market_order_by[] | null), 
    /** filter the rows returned */
    where?: (Market_bool_exp | null)} })
    /** fetch data from the table: "MarketRollingStats" */
    MarketRollingStats?: (MarketRollingStatsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (MarketRollingStats_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (MarketRollingStats_order_by[] | null), 
    /** filter the rows returned */
    where?: (MarketRollingStats_bool_exp | null)} })
    /** fetch data from the table: "MarketRollingStats" using primary key columns */
    MarketRollingStats_by_pk?: (MarketRollingStatsGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "MarketRollingStats" */
    MarketRollingStats_stream?: (MarketRollingStatsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (MarketRollingStats_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (MarketRollingStats_bool_exp | null)} })
    /** fetch data from the table: "MarketSnapshot" */
    MarketSnapshot?: (MarketSnapshotGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (MarketSnapshot_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (MarketSnapshot_order_by[] | null), 
    /** filter the rows returned */
    where?: (MarketSnapshot_bool_exp | null)} })
    /** fetch data from the table: "MarketSnapshot" using primary key columns */
    MarketSnapshot_by_pk?: (MarketSnapshotGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "MarketSnapshot" */
    MarketSnapshot_stream?: (MarketSnapshotGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (MarketSnapshot_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (MarketSnapshot_bool_exp | null)} })
    /** fetch data from the table: "Market" using primary key columns */
    Market_by_pk?: (MarketGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "Market" */
    Market_stream?: (MarketGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (Market_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (Market_bool_exp | null)} })
    /** fetch data from the table: "ModuleAddress" */
    ModuleAddress?: (ModuleAddressGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (ModuleAddress_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (ModuleAddress_order_by[] | null), 
    /** filter the rows returned */
    where?: (ModuleAddress_bool_exp | null)} })
    /** fetch data from the table: "ModuleAddress" using primary key columns */
    ModuleAddress_by_pk?: (ModuleAddressGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "ModuleAddress" */
    ModuleAddress_stream?: (ModuleAddressGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (ModuleAddress_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (ModuleAddress_bool_exp | null)} })
    /** fetch data from the table: "ModuleRegistry" */
    ModuleRegistry?: (ModuleRegistryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (ModuleRegistry_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (ModuleRegistry_order_by[] | null), 
    /** filter the rows returned */
    where?: (ModuleRegistry_bool_exp | null)} })
    /** fetch data from the table: "ModuleRegistry" using primary key columns */
    ModuleRegistry_by_pk?: (ModuleRegistryGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "ModuleRegistry" */
    ModuleRegistry_stream?: (ModuleRegistryGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (ModuleRegistry_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (ModuleRegistry_bool_exp | null)} })
    /** fetch data from the table: "PreSaleContract" */
    PreSaleContract?: (PreSaleContractGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (PreSaleContract_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (PreSaleContract_order_by[] | null), 
    /** filter the rows returned */
    where?: (PreSaleContract_bool_exp | null)} })
    /** fetch data from the table: "PreSaleContract" using primary key columns */
    PreSaleContract_by_pk?: (PreSaleContractGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "PreSaleContract" */
    PreSaleContract_stream?: (PreSaleContractGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (PreSaleContract_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (PreSaleContract_bool_exp | null)} })
    /** fetch data from the table: "PresaleParticipation" */
    PresaleParticipation?: (PresaleParticipationGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (PresaleParticipation_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (PresaleParticipation_order_by[] | null), 
    /** filter the rows returned */
    where?: (PresaleParticipation_bool_exp | null)} })
    /** fetch data from the table: "PresaleParticipation" using primary key columns */
    PresaleParticipation_by_pk?: (PresaleParticipationGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "PresaleParticipation" */
    PresaleParticipation_stream?: (PresaleParticipationGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (PresaleParticipation_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (PresaleParticipation_bool_exp | null)} })
    /** fetch data from the table: "PriceCandle" */
    PriceCandle?: (PriceCandleGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (PriceCandle_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (PriceCandle_order_by[] | null), 
    /** filter the rows returned */
    where?: (PriceCandle_bool_exp | null)} })
    /** fetch data from the table: "PriceCandle" using primary key columns */
    PriceCandle_by_pk?: (PriceCandleGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "PriceCandle" */
    PriceCandle_stream?: (PriceCandleGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (PriceCandle_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (PriceCandle_bool_exp | null)} })
    /** fetch data from the table: "Stake" */
    Stake?: (StakeGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Stake_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Stake_order_by[] | null), 
    /** filter the rows returned */
    where?: (Stake_bool_exp | null)} })
    /** fetch data from the table: "Stake" using primary key columns */
    Stake_by_pk?: (StakeGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "Stake" */
    Stake_stream?: (StakeGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (Stake_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (Stake_bool_exp | null)} })
    /** fetch data from the table: "StakingContract" */
    StakingContract?: (StakingContractGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (StakingContract_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (StakingContract_order_by[] | null), 
    /** filter the rows returned */
    where?: (StakingContract_bool_exp | null)} })
    /** fetch data from the table: "StakingContract" using primary key columns */
    StakingContract_by_pk?: (StakingContractGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "StakingContract" */
    StakingContract_stream?: (StakingContractGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (StakingContract_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (StakingContract_bool_exp | null)} })
    /** fetch data from the table: "Token" */
    Token?: (TokenGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Token_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Token_order_by[] | null), 
    /** filter the rows returned */
    where?: (Token_bool_exp | null)} })
    /** fetch data from the table: "Token" using primary key columns */
    Token_by_pk?: (TokenGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "Token" */
    Token_stream?: (TokenGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (Token_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (Token_bool_exp | null)} })
    /** fetch data from the table: "Trade" */
    Trade?: (TradeGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (Trade_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (Trade_order_by[] | null), 
    /** filter the rows returned */
    where?: (Trade_bool_exp | null)} })
    /** fetch data from the table: "Trade" using primary key columns */
    Trade_by_pk?: (TradeGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "Trade" */
    Trade_stream?: (TradeGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (Trade_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (Trade_bool_exp | null)} })
    /** fetch data from the table: "UserMarketPosition" */
    UserMarketPosition?: (UserMarketPositionGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (UserMarketPosition_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (UserMarketPosition_order_by[] | null), 
    /** filter the rows returned */
    where?: (UserMarketPosition_bool_exp | null)} })
    /** fetch data from the table: "UserMarketPosition" using primary key columns */
    UserMarketPosition_by_pk?: (UserMarketPositionGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "UserMarketPosition" */
    UserMarketPosition_stream?: (UserMarketPositionGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (UserMarketPosition_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (UserMarketPosition_bool_exp | null)} })
    /** fetch data from the table: "chain_metadata" */
    chain_metadata?: (chain_metadataGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (chain_metadata_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (chain_metadata_order_by[] | null), 
    /** filter the rows returned */
    where?: (chain_metadata_bool_exp | null)} })
    /** fetch data from the table: "chain_metadata" using primary key columns */
    chain_metadata_by_pk?: (chain_metadataGenqlSelection & { __args: {chain_id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "chain_metadata" */
    chain_metadata_stream?: (chain_metadataGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (chain_metadata_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (chain_metadata_bool_exp | null)} })
    /** fetch data from the table: "dynamic_contract_registry" */
    dynamic_contract_registry?: (dynamic_contract_registryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dynamic_contract_registry_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dynamic_contract_registry_order_by[] | null), 
    /** filter the rows returned */
    where?: (dynamic_contract_registry_bool_exp | null)} })
    /** fetch data from the table: "dynamic_contract_registry" using primary key columns */
    dynamic_contract_registry_by_pk?: (dynamic_contract_registryGenqlSelection & { __args: {id: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "dynamic_contract_registry" */
    dynamic_contract_registry_stream?: (dynamic_contract_registryGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (dynamic_contract_registry_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (dynamic_contract_registry_bool_exp | null)} })
    /** fetch data from the table: "end_of_block_range_scanned_data" */
    end_of_block_range_scanned_data?: (end_of_block_range_scanned_dataGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (end_of_block_range_scanned_data_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (end_of_block_range_scanned_data_order_by[] | null), 
    /** filter the rows returned */
    where?: (end_of_block_range_scanned_data_bool_exp | null)} })
    /** fetch data from the table: "end_of_block_range_scanned_data" using primary key columns */
    end_of_block_range_scanned_data_by_pk?: (end_of_block_range_scanned_dataGenqlSelection & { __args: {block_number: Scalars['Int'], chain_id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "end_of_block_range_scanned_data" */
    end_of_block_range_scanned_data_stream?: (end_of_block_range_scanned_dataGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (end_of_block_range_scanned_data_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (end_of_block_range_scanned_data_bool_exp | null)} })
    /** fetch data from the table: "event_sync_state" */
    event_sync_state?: (event_sync_stateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (event_sync_state_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (event_sync_state_order_by[] | null), 
    /** filter the rows returned */
    where?: (event_sync_state_bool_exp | null)} })
    /** fetch data from the table: "event_sync_state" using primary key columns */
    event_sync_state_by_pk?: (event_sync_stateGenqlSelection & { __args: {chain_id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "event_sync_state" */
    event_sync_state_stream?: (event_sync_stateGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (event_sync_state_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (event_sync_state_bool_exp | null)} })
    /** fetch data from the table: "persisted_state" */
    persisted_state?: (persisted_stateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (persisted_state_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (persisted_state_order_by[] | null), 
    /** filter the rows returned */
    where?: (persisted_state_bool_exp | null)} })
    /** fetch data from the table: "persisted_state" using primary key columns */
    persisted_state_by_pk?: (persisted_stateGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "persisted_state" */
    persisted_state_stream?: (persisted_stateGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (persisted_state_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (persisted_state_bool_exp | null)} })
    /** fetch data from the table: "raw_events" */
    raw_events?: (raw_eventsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (raw_events_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (raw_events_order_by[] | null), 
    /** filter the rows returned */
    where?: (raw_events_bool_exp | null)} })
    /** fetch data from the table: "raw_events" using primary key columns */
    raw_events_by_pk?: (raw_eventsGenqlSelection & { __args: {serial: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "raw_events" */
    raw_events_stream?: (raw_eventsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (raw_events_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (raw_events_bool_exp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface timestamp_comparison_exp {_eq?: (Scalars['timestamp'] | null),_gt?: (Scalars['timestamp'] | null),_gte?: (Scalars['timestamp'] | null),_in?: (Scalars['timestamp'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamp'] | null),_lte?: (Scalars['timestamp'] | null),_neq?: (Scalars['timestamp'] | null),_nin?: (Scalars['timestamp'][] | null)}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** Boolean expression to compare columns of type "tradetype". All fields are combined with logical 'AND'. */
export interface tradetype_comparison_exp {_eq?: (Scalars['tradetype'] | null),_gt?: (Scalars['tradetype'] | null),_gte?: (Scalars['tradetype'] | null),_in?: (Scalars['tradetype'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['tradetype'] | null),_lte?: (Scalars['tradetype'] | null),_neq?: (Scalars['tradetype'] | null),_nin?: (Scalars['tradetype'][] | null)}

export type QueryGenqlSelection = query_rootGenqlSelection
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection


    const Account_possibleTypes: string[] = ['Account']
    export const isAccount = (obj?: { __typename?: any } | null): obj is Account => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccount"')
      return Account_possibleTypes.includes(obj.__typename)
    }
    


    const CreditFacilityContract_possibleTypes: string[] = ['CreditFacilityContract']
    export const isCreditFacilityContract = (obj?: { __typename?: any } | null): obj is CreditFacilityContract => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreditFacilityContract"')
      return CreditFacilityContract_possibleTypes.includes(obj.__typename)
    }
    


    const FeeDistribution_possibleTypes: string[] = ['FeeDistribution']
    export const isFeeDistribution = (obj?: { __typename?: any } | null): obj is FeeDistribution => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeeDistribution"')
      return FeeDistribution_possibleTypes.includes(obj.__typename)
    }
    


    const FloorElevation_possibleTypes: string[] = ['FloorElevation']
    export const isFloorElevation = (obj?: { __typename?: any } | null): obj is FloorElevation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFloorElevation"')
      return FloorElevation_possibleTypes.includes(obj.__typename)
    }
    


    const GlobalStats_possibleTypes: string[] = ['GlobalStats']
    export const isGlobalStats = (obj?: { __typename?: any } | null): obj is GlobalStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGlobalStats"')
      return GlobalStats_possibleTypes.includes(obj.__typename)
    }
    


    const Loan_possibleTypes: string[] = ['Loan']
    export const isLoan = (obj?: { __typename?: any } | null): obj is Loan => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLoan"')
      return Loan_possibleTypes.includes(obj.__typename)
    }
    


    const LoanStatusHistory_possibleTypes: string[] = ['LoanStatusHistory']
    export const isLoanStatusHistory = (obj?: { __typename?: any } | null): obj is LoanStatusHistory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLoanStatusHistory"')
      return LoanStatusHistory_possibleTypes.includes(obj.__typename)
    }
    


    const Market_possibleTypes: string[] = ['Market']
    export const isMarket = (obj?: { __typename?: any } | null): obj is Market => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarket"')
      return Market_possibleTypes.includes(obj.__typename)
    }
    


    const MarketRollingStats_possibleTypes: string[] = ['MarketRollingStats']
    export const isMarketRollingStats = (obj?: { __typename?: any } | null): obj is MarketRollingStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketRollingStats"')
      return MarketRollingStats_possibleTypes.includes(obj.__typename)
    }
    


    const MarketSnapshot_possibleTypes: string[] = ['MarketSnapshot']
    export const isMarketSnapshot = (obj?: { __typename?: any } | null): obj is MarketSnapshot => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketSnapshot"')
      return MarketSnapshot_possibleTypes.includes(obj.__typename)
    }
    


    const ModuleAddress_possibleTypes: string[] = ['ModuleAddress']
    export const isModuleAddress = (obj?: { __typename?: any } | null): obj is ModuleAddress => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isModuleAddress"')
      return ModuleAddress_possibleTypes.includes(obj.__typename)
    }
    


    const ModuleRegistry_possibleTypes: string[] = ['ModuleRegistry']
    export const isModuleRegistry = (obj?: { __typename?: any } | null): obj is ModuleRegistry => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isModuleRegistry"')
      return ModuleRegistry_possibleTypes.includes(obj.__typename)
    }
    


    const PreSaleContract_possibleTypes: string[] = ['PreSaleContract']
    export const isPreSaleContract = (obj?: { __typename?: any } | null): obj is PreSaleContract => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreSaleContract"')
      return PreSaleContract_possibleTypes.includes(obj.__typename)
    }
    


    const PresaleParticipation_possibleTypes: string[] = ['PresaleParticipation']
    export const isPresaleParticipation = (obj?: { __typename?: any } | null): obj is PresaleParticipation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPresaleParticipation"')
      return PresaleParticipation_possibleTypes.includes(obj.__typename)
    }
    


    const PriceCandle_possibleTypes: string[] = ['PriceCandle']
    export const isPriceCandle = (obj?: { __typename?: any } | null): obj is PriceCandle => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPriceCandle"')
      return PriceCandle_possibleTypes.includes(obj.__typename)
    }
    


    const Stake_possibleTypes: string[] = ['Stake']
    export const isStake = (obj?: { __typename?: any } | null): obj is Stake => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStake"')
      return Stake_possibleTypes.includes(obj.__typename)
    }
    


    const StakingContract_possibleTypes: string[] = ['StakingContract']
    export const isStakingContract = (obj?: { __typename?: any } | null): obj is StakingContract => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStakingContract"')
      return StakingContract_possibleTypes.includes(obj.__typename)
    }
    


    const Token_possibleTypes: string[] = ['Token']
    export const isToken = (obj?: { __typename?: any } | null): obj is Token => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isToken"')
      return Token_possibleTypes.includes(obj.__typename)
    }
    


    const Trade_possibleTypes: string[] = ['Trade']
    export const isTrade = (obj?: { __typename?: any } | null): obj is Trade => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTrade"')
      return Trade_possibleTypes.includes(obj.__typename)
    }
    


    const UserMarketPosition_possibleTypes: string[] = ['UserMarketPosition']
    export const isUserMarketPosition = (obj?: { __typename?: any } | null): obj is UserMarketPosition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserMarketPosition"')
      return UserMarketPosition_possibleTypes.includes(obj.__typename)
    }
    


    const chain_metadata_possibleTypes: string[] = ['chain_metadata']
    export const ischain_metadata = (obj?: { __typename?: any } | null): obj is chain_metadata => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ischain_metadata"')
      return chain_metadata_possibleTypes.includes(obj.__typename)
    }
    


    const dynamic_contract_registry_possibleTypes: string[] = ['dynamic_contract_registry']
    export const isdynamic_contract_registry = (obj?: { __typename?: any } | null): obj is dynamic_contract_registry => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdynamic_contract_registry"')
      return dynamic_contract_registry_possibleTypes.includes(obj.__typename)
    }
    


    const end_of_block_range_scanned_data_possibleTypes: string[] = ['end_of_block_range_scanned_data']
    export const isend_of_block_range_scanned_data = (obj?: { __typename?: any } | null): obj is end_of_block_range_scanned_data => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isend_of_block_range_scanned_data"')
      return end_of_block_range_scanned_data_possibleTypes.includes(obj.__typename)
    }
    


    const event_sync_state_possibleTypes: string[] = ['event_sync_state']
    export const isevent_sync_state = (obj?: { __typename?: any } | null): obj is event_sync_state => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isevent_sync_state"')
      return event_sync_state_possibleTypes.includes(obj.__typename)
    }
    


    const persisted_state_possibleTypes: string[] = ['persisted_state']
    export const ispersisted_state = (obj?: { __typename?: any } | null): obj is persisted_state => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispersisted_state"')
      return persisted_state_possibleTypes.includes(obj.__typename)
    }
    


    const query_root_possibleTypes: string[] = ['query_root']
    export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
      return query_root_possibleTypes.includes(obj.__typename)
    }
    


    const raw_events_possibleTypes: string[] = ['raw_events']
    export const israw_events = (obj?: { __typename?: any } | null): obj is raw_events => {
      if (!obj?.__typename) throw new Error('__typename is missing in "israw_events"')
      return raw_events_possibleTypes.includes(obj.__typename)
    }
    


    const subscription_root_possibleTypes: string[] = ['subscription_root']
    export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
      return subscription_root_possibleTypes.includes(obj.__typename)
    }
    

export const enumAccountSelectColumn = {
   db_write_timestamp: 'db_write_timestamp' as const,
   id: 'id' as const
}

export const enumCreditFacilityContractSelectColumn = {
   borrowToken_id: 'borrowToken_id' as const,
   collateralToken_id: 'collateralToken_id' as const,
   createdAt: 'createdAt' as const,
   db_write_timestamp: 'db_write_timestamp' as const,
   id: 'id' as const,
   lastUpdatedAt: 'lastUpdatedAt' as const,
   market_id: 'market_id' as const,
   totalDebtFormatted: 'totalDebtFormatted' as const,
   totalDebtRaw: 'totalDebtRaw' as const,
   totalLoans: 'totalLoans' as const,
   totalLockedCollateralFormatted: 'totalLockedCollateralFormatted' as const,
   totalLockedCollateralRaw: 'totalLockedCollateralRaw' as const,
   totalVolumeFormatted: 'totalVolumeFormatted' as const,
   totalVolumeRaw: 'totalVolumeRaw' as const
}

export const enumFeeDistributionSelectColumn = {
   db_write_timestamp: 'db_write_timestamp' as const,
   floorAmountFormatted: 'floorAmountFormatted' as const,
   floorAmountRaw: 'floorAmountRaw' as const,
   id: 'id' as const,
   market_id: 'market_id' as const,
   stakingAmountFormatted: 'stakingAmountFormatted' as const,
   stakingAmountRaw: 'stakingAmountRaw' as const,
   timestamp: 'timestamp' as const,
   transactionHash: 'transactionHash' as const,
   treasuryAmountFormatted: 'treasuryAmountFormatted' as const,
   treasuryAmountRaw: 'treasuryAmountRaw' as const
}

export const enumFloorElevationSelectColumn = {
   db_write_timestamp: 'db_write_timestamp' as const,
   deployedAmountFormatted: 'deployedAmountFormatted' as const,
   deployedAmountRaw: 'deployedAmountRaw' as const,
   id: 'id' as const,
   market_id: 'market_id' as const,
   newFloorPriceFormatted: 'newFloorPriceFormatted' as const,
   newFloorPriceRaw: 'newFloorPriceRaw' as const,
   oldFloorPriceFormatted: 'oldFloorPriceFormatted' as const,
   oldFloorPriceRaw: 'oldFloorPriceRaw' as const,
   timestamp: 'timestamp' as const,
   transactionHash: 'transactionHash' as const
}

export const enumGlobalStatsSelectColumn = {
   activeMarkets: 'activeMarkets' as const,
   db_write_timestamp: 'db_write_timestamp' as const,
   id: 'id' as const,
   lastUpdatedAt: 'lastUpdatedAt' as const,
   totalLockedCollateralFormatted: 'totalLockedCollateralFormatted' as const,
   totalLockedCollateralRaw: 'totalLockedCollateralRaw' as const,
   totalMarkets: 'totalMarkets' as const,
   totalOutstandingDebtFormatted: 'totalOutstandingDebtFormatted' as const,
   totalOutstandingDebtRaw: 'totalOutstandingDebtRaw' as const,
   totalVolumeFormatted: 'totalVolumeFormatted' as const,
   totalVolumeRaw: 'totalVolumeRaw' as const
}

export const enumLoanStatusHistorySelectColumn = {
   db_write_timestamp: 'db_write_timestamp' as const,
   id: 'id' as const,
   loan_id: 'loan_id' as const,
   lockedCollateralFormatted: 'lockedCollateralFormatted' as const,
   lockedCollateralRaw: 'lockedCollateralRaw' as const,
   remainingDebtFormatted: 'remainingDebtFormatted' as const,
   remainingDebtRaw: 'remainingDebtRaw' as const,
   status: 'status' as const,
   timestamp: 'timestamp' as const,
   transactionHash: 'transactionHash' as const
}

export const enumLoanSelectColumn = {
   borrowAmountFormatted: 'borrowAmountFormatted' as const,
   borrowAmountRaw: 'borrowAmountRaw' as const,
   borrower_id: 'borrower_id' as const,
   closedAt: 'closedAt' as const,
   db_write_timestamp: 'db_write_timestamp' as const,
   facility_id: 'facility_id' as const,
   floorPriceAtBorrowFormatted: 'floorPriceAtBorrowFormatted' as const,
   floorPriceAtBorrowRaw: 'floorPriceAtBorrowRaw' as const,
   id: 'id' as const,
   lastUpdatedAt: 'lastUpdatedAt' as const,
   lockedCollateralFormatted: 'lockedCollateralFormatted' as const,
   lockedCollateralRaw: 'lockedCollateralRaw' as const,
   market_id: 'market_id' as const,
   openedAt: 'openedAt' as const,
   originationFeeFormatted: 'originationFeeFormatted' as const,
   originationFeeRaw: 'originationFeeRaw' as const,
   remainingDebtFormatted: 'remainingDebtFormatted' as const,
   remainingDebtRaw: 'remainingDebtRaw' as const,
   status: 'status' as const,
   transactionHash: 'transactionHash' as const
}

export const enumMarketRollingStatsSelectColumn = {
   averagePriceFormatted: 'averagePriceFormatted' as const,
   averagePriceRaw: 'averagePriceRaw' as const,
   db_write_timestamp: 'db_write_timestamp' as const,
   id: 'id' as const,
   lastUpdatedAt: 'lastUpdatedAt' as const,
   market_id: 'market_id' as const,
   tradeCount: 'tradeCount' as const,
   volumeFormatted: 'volumeFormatted' as const,
   volumeRaw: 'volumeRaw' as const,
   windowSeconds: 'windowSeconds' as const
}

export const enumMarketSnapshotSelectColumn = {
   db_write_timestamp: 'db_write_timestamp' as const,
   floorPriceFormatted: 'floorPriceFormatted' as const,
   floorPriceRaw: 'floorPriceRaw' as const,
   id: 'id' as const,
   marketSupplyFormatted: 'marketSupplyFormatted' as const,
   marketSupplyRaw: 'marketSupplyRaw' as const,
   market_id: 'market_id' as const,
   priceFormatted: 'priceFormatted' as const,
   priceRaw: 'priceRaw' as const,
   timestamp: 'timestamp' as const,
   totalSupplyFormatted: 'totalSupplyFormatted' as const,
   totalSupplyRaw: 'totalSupplyRaw' as const,
   trades24h: 'trades24h' as const,
   volume24hFormatted: 'volume24hFormatted' as const,
   volume24hRaw: 'volume24hRaw' as const
}

export const enumMarketSelectColumn = {
   buyFeeBps: 'buyFeeBps' as const,
   createdAt: 'createdAt' as const,
   creator_id: 'creator_id' as const,
   currentPriceFormatted: 'currentPriceFormatted' as const,
   currentPriceRaw: 'currentPriceRaw' as const,
   db_write_timestamp: 'db_write_timestamp' as const,
   factory_id: 'factory_id' as const,
   floorPriceFormatted: 'floorPriceFormatted' as const,
   floorPriceRaw: 'floorPriceRaw' as const,
   floorSupplyFormatted: 'floorSupplyFormatted' as const,
   floorSupplyRaw: 'floorSupplyRaw' as const,
   id: 'id' as const,
   initialPriceFormatted: 'initialPriceFormatted' as const,
   initialPriceRaw: 'initialPriceRaw' as const,
   isBuyOpen: 'isBuyOpen' as const,
   isSellOpen: 'isSellOpen' as const,
   issuanceToken_id: 'issuanceToken_id' as const,
   lastElevationTimestamp: 'lastElevationTimestamp' as const,
   lastTradeTimestamp: 'lastTradeTimestamp' as const,
   lastUpdatedAt: 'lastUpdatedAt' as const,
   marketSupplyFormatted: 'marketSupplyFormatted' as const,
   marketSupplyRaw: 'marketSupplyRaw' as const,
   maxLTV: 'maxLTV' as const,
   maxSupplyFormatted: 'maxSupplyFormatted' as const,
   maxSupplyRaw: 'maxSupplyRaw' as const,
   reserveToken_id: 'reserveToken_id' as const,
   sellFeeBps: 'sellFeeBps' as const,
   status: 'status' as const,
   totalSupplyFormatted: 'totalSupplyFormatted' as const,
   totalSupplyRaw: 'totalSupplyRaw' as const,
   tradingFeeBps: 'tradingFeeBps' as const
}

export const enumModuleAddressSelectColumn = {
   createdAt: 'createdAt' as const,
   db_write_timestamp: 'db_write_timestamp' as const,
   id: 'id' as const,
   lastUpdatedAt: 'lastUpdatedAt' as const,
   market_id: 'market_id' as const,
   moduleType: 'moduleType' as const
}

export const enumModuleRegistrySelectColumn = {
   authorizer: 'authorizer' as const,
   createdAt: 'createdAt' as const,
   creditFacility: 'creditFacility' as const,
   db_write_timestamp: 'db_write_timestamp' as const,
   feeTreasury: 'feeTreasury' as const,
   floor: 'floor' as const,
   id: 'id' as const,
   lastUpdatedAt: 'lastUpdatedAt' as const,
   presale: 'presale' as const,
   staking: 'staking' as const
}

export const enumPreSaleContractSelectColumn = {
   createdAt: 'createdAt' as const,
   db_write_timestamp: 'db_write_timestamp' as const,
   endTime: 'endTime' as const,
   id: 'id' as const,
   maxLeverage: 'maxLeverage' as const,
   purchaseToken_id: 'purchaseToken_id' as const,
   saleToken_id: 'saleToken_id' as const,
   startTime: 'startTime' as const,
   totalParticipants: 'totalParticipants' as const,
   totalRaisedFormatted: 'totalRaisedFormatted' as const,
   totalRaisedRaw: 'totalRaisedRaw' as const
}

export const enumPresaleParticipationSelectColumn = {
   amountFormatted: 'amountFormatted' as const,
   amountRaw: 'amountRaw' as const,
   db_write_timestamp: 'db_write_timestamp' as const,
   id: 'id' as const,
   leverage: 'leverage' as const,
   presale_id: 'presale_id' as const,
   timestamp: 'timestamp' as const,
   transactionHash: 'transactionHash' as const,
   user_id: 'user_id' as const
}

export const enumPriceCandleSelectColumn = {
   closeFormatted: 'closeFormatted' as const,
   closeRaw: 'closeRaw' as const,
   db_write_timestamp: 'db_write_timestamp' as const,
   highFormatted: 'highFormatted' as const,
   highRaw: 'highRaw' as const,
   id: 'id' as const,
   lowFormatted: 'lowFormatted' as const,
   lowRaw: 'lowRaw' as const,
   market_id: 'market_id' as const,
   openFormatted: 'openFormatted' as const,
   openRaw: 'openRaw' as const,
   period: 'period' as const,
   timestamp: 'timestamp' as const,
   trades: 'trades' as const,
   volumeFormatted: 'volumeFormatted' as const,
   volumeRaw: 'volumeRaw' as const
}

export const enumStakeSelectColumn = {
   amountFormatted: 'amountFormatted' as const,
   amountRaw: 'amountRaw' as const,
   contract_id: 'contract_id' as const,
   db_write_timestamp: 'db_write_timestamp' as const,
   id: 'id' as const,
   lockDuration: 'lockDuration' as const,
   status: 'status' as const,
   timestamp: 'timestamp' as const,
   transactionHash: 'transactionHash' as const,
   user_id: 'user_id' as const
}

export const enumStakingContractSelectColumn = {
   createdAt: 'createdAt' as const,
   db_write_timestamp: 'db_write_timestamp' as const,
   id: 'id' as const,
   rewardToken_id: 'rewardToken_id' as const,
   stakingToken_id: 'stakingToken_id' as const,
   totalRewardsFormatted: 'totalRewardsFormatted' as const,
   totalRewardsRaw: 'totalRewardsRaw' as const,
   totalStakedFormatted: 'totalStakedFormatted' as const,
   totalStakedRaw: 'totalStakedRaw' as const
}

export const enumTokenSelectColumn = {
   db_write_timestamp: 'db_write_timestamp' as const,
   decimals: 'decimals' as const,
   id: 'id' as const,
   name: 'name' as const,
   symbol: 'symbol' as const
}

export const enumTradeSelectColumn = {
   db_write_timestamp: 'db_write_timestamp' as const,
   feeFormatted: 'feeFormatted' as const,
   feeRaw: 'feeRaw' as const,
   id: 'id' as const,
   market_id: 'market_id' as const,
   newPriceFormatted: 'newPriceFormatted' as const,
   newPriceRaw: 'newPriceRaw' as const,
   reserveAmountFormatted: 'reserveAmountFormatted' as const,
   reserveAmountRaw: 'reserveAmountRaw' as const,
   timestamp: 'timestamp' as const,
   tokenAmountFormatted: 'tokenAmountFormatted' as const,
   tokenAmountRaw: 'tokenAmountRaw' as const,
   tradeType: 'tradeType' as const,
   transactionHash: 'transactionHash' as const,
   user_id: 'user_id' as const
}

export const enumUserMarketPositionSelectColumn = {
   claimableRewardsFormatted: 'claimableRewardsFormatted' as const,
   claimableRewardsRaw: 'claimableRewardsRaw' as const,
   db_write_timestamp: 'db_write_timestamp' as const,
   id: 'id' as const,
   lastUpdatedAt: 'lastUpdatedAt' as const,
   lockedCollateralFormatted: 'lockedCollateralFormatted' as const,
   lockedCollateralRaw: 'lockedCollateralRaw' as const,
   market_id: 'market_id' as const,
   netFTokenChangeFormatted: 'netFTokenChangeFormatted' as const,
   netFTokenChangeRaw: 'netFTokenChangeRaw' as const,
   presaleDepositFormatted: 'presaleDepositFormatted' as const,
   presaleDepositRaw: 'presaleDepositRaw' as const,
   presaleLeverage: 'presaleLeverage' as const,
   stakedAmountFormatted: 'stakedAmountFormatted' as const,
   stakedAmountRaw: 'stakedAmountRaw' as const,
   totalDebtFormatted: 'totalDebtFormatted' as const,
   totalDebtRaw: 'totalDebtRaw' as const,
   user_id: 'user_id' as const
}

export const enumChainMetadataSelectColumn = {
   block_height: 'block_height' as const,
   chain_id: 'chain_id' as const,
   end_block: 'end_block' as const,
   first_event_block_number: 'first_event_block_number' as const,
   is_hyper_sync: 'is_hyper_sync' as const,
   latest_fetched_block_number: 'latest_fetched_block_number' as const,
   latest_processed_block: 'latest_processed_block' as const,
   num_batches_fetched: 'num_batches_fetched' as const,
   num_events_processed: 'num_events_processed' as const,
   start_block: 'start_block' as const,
   timestamp_caught_up_to_head_or_endblock: 'timestamp_caught_up_to_head_or_endblock' as const
}

export const enumCursorOrdering = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumDynamicContractRegistrySelectColumn = {
   chain_id: 'chain_id' as const,
   contract_address: 'contract_address' as const,
   contract_type: 'contract_type' as const,
   id: 'id' as const,
   registering_event_block_number: 'registering_event_block_number' as const,
   registering_event_block_timestamp: 'registering_event_block_timestamp' as const,
   registering_event_contract_name: 'registering_event_contract_name' as const,
   registering_event_log_index: 'registering_event_log_index' as const,
   registering_event_name: 'registering_event_name' as const,
   registering_event_src_address: 'registering_event_src_address' as const
}

export const enumEndOfBlockRangeScannedDataSelectColumn = {
   block_hash: 'block_hash' as const,
   block_number: 'block_number' as const,
   chain_id: 'chain_id' as const
}

export const enumEventSyncStateSelectColumn = {
   block_number: 'block_number' as const,
   block_timestamp: 'block_timestamp' as const,
   chain_id: 'chain_id' as const,
   is_pre_registering_dynamic_contracts: 'is_pre_registering_dynamic_contracts' as const,
   log_index: 'log_index' as const
}

export const enumOrderBy = {
   asc: 'asc' as const,
   asc_nulls_first: 'asc_nulls_first' as const,
   asc_nulls_last: 'asc_nulls_last' as const,
   desc: 'desc' as const,
   desc_nulls_first: 'desc_nulls_first' as const,
   desc_nulls_last: 'desc_nulls_last' as const
}

export const enumPersistedStateSelectColumn = {
   abi_files_hash: 'abi_files_hash' as const,
   config_hash: 'config_hash' as const,
   envio_version: 'envio_version' as const,
   handler_files_hash: 'handler_files_hash' as const,
   id: 'id' as const,
   schema_hash: 'schema_hash' as const
}

export const enumRawEventsSelectColumn = {
   block_fields: 'block_fields' as const,
   block_hash: 'block_hash' as const,
   block_number: 'block_number' as const,
   block_timestamp: 'block_timestamp' as const,
   chain_id: 'chain_id' as const,
   contract_name: 'contract_name' as const,
   db_write_timestamp: 'db_write_timestamp' as const,
   event_id: 'event_id' as const,
   event_name: 'event_name' as const,
   log_index: 'log_index' as const,
   params: 'params' as const,
   serial: 'serial' as const,
   src_address: 'src_address' as const,
   transaction_fields: 'transaction_fields' as const
}
