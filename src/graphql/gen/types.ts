export default {
    "scalars": [
        3,
        6,
        11,
        21,
        38,
        51,
        54,
        64,
        80,
        94,
        100,
        109,
        122,
        128,
        134,
        144,
        157,
        167,
        180,
        183,
        188,
        198,
        215,
        225,
        230,
        233,
        235,
        239,
        245,
        251,
        254,
        257,
        259,
        261,
        263,
        267,
        273,
        276,
        278,
        280,
        282
    ],
    "types": {
        "Account": {
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "loans": [
                56,
                {
                    "distinct_on": [
                        80,
                        "[Loan_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        79,
                        "[Loan_order_by!]"
                    ],
                    "where": [
                        76
                    ]
                }
            ],
            "marketsCreated": [
                90,
                {
                    "distinct_on": [
                        109,
                        "[Market_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        108,
                        "[Market_order_by!]"
                    ],
                    "where": [
                        105
                    ]
                }
            ],
            "presaleParticipations": [
                137,
                {
                    "distinct_on": [
                        144,
                        "[PresaleParticipation_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        143,
                        "[PresaleParticipation_order_by!]"
                    ],
                    "where": [
                        140
                    ]
                }
            ],
            "stakes": [
                160,
                {
                    "distinct_on": [
                        167,
                        "[Stake_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        166,
                        "[Stake_order_by!]"
                    ],
                    "where": [
                        163
                    ]
                }
            ],
            "trades": [
                191,
                {
                    "distinct_on": [
                        198,
                        "[Trade_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        197,
                        "[Trade_order_by!]"
                    ],
                    "where": [
                        194
                    ]
                }
            ],
            "userMarketPositions": [
                208,
                {
                    "distinct_on": [
                        215,
                        "[UserMarketPosition_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        214,
                        "[UserMarketPosition_order_by!]"
                    ],
                    "where": [
                        211
                    ]
                }
            ],
            "__typename": [
                183
            ]
        },
        "Account_bool_exp": {
            "_and": [
                1
            ],
            "_not": [
                1
            ],
            "_or": [
                1
            ],
            "db_write_timestamp": [
                279
            ],
            "id": [
                184
            ],
            "loans": [
                76
            ],
            "marketsCreated": [
                105
            ],
            "presaleParticipations": [
                140
            ],
            "stakes": [
                163
            ],
            "trades": [
                194
            ],
            "userMarketPositions": [
                211
            ],
            "__typename": [
                183
            ]
        },
        "Account_order_by": {
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "loans_aggregate": [
                74
            ],
            "marketsCreated_aggregate": [
                103
            ],
            "presaleParticipations_aggregate": [
                138
            ],
            "stakes_aggregate": [
                161
            ],
            "trades_aggregate": [
                192
            ],
            "userMarketPositions_aggregate": [
                209
            ],
            "__typename": [
                183
            ]
        },
        "Account_select_column": {},
        "Account_stream_cursor_input": {
            "initial_value": [
                5
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "Account_stream_cursor_value_input": {
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "Boolean": {},
        "Boolean_comparison_exp": {
            "_eq": [
                6
            ],
            "_gt": [
                6
            ],
            "_gte": [
                6
            ],
            "_in": [
                6
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                6
            ],
            "_lte": [
                6
            ],
            "_neq": [
                6
            ],
            "_nin": [
                6
            ],
            "__typename": [
                183
            ]
        },
        "CreditFacilityContract": {
            "borrowToken_id": [
                183
            ],
            "collateralToken_id": [
                183
            ],
            "createdAt": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "lastUpdatedAt": [
                261
            ],
            "loans": [
                56,
                {
                    "distinct_on": [
                        80,
                        "[Loan_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        79,
                        "[Loan_order_by!]"
                    ],
                    "where": [
                        76
                    ]
                }
            ],
            "market_id": [
                183
            ],
            "totalDebtFormatted": [
                183
            ],
            "totalDebtRaw": [
                261
            ],
            "totalLoans": [
                261
            ],
            "totalLockedCollateralFormatted": [
                183
            ],
            "totalLockedCollateralRaw": [
                261
            ],
            "totalVolumeFormatted": [
                183
            ],
            "totalVolumeRaw": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "CreditFacilityContract_bool_exp": {
            "_and": [
                9
            ],
            "_not": [
                9
            ],
            "_or": [
                9
            ],
            "borrowToken_id": [
                184
            ],
            "collateralToken_id": [
                184
            ],
            "createdAt": [
                262
            ],
            "db_write_timestamp": [
                279
            ],
            "id": [
                184
            ],
            "lastUpdatedAt": [
                262
            ],
            "loans": [
                76
            ],
            "market_id": [
                184
            ],
            "totalDebtFormatted": [
                184
            ],
            "totalDebtRaw": [
                262
            ],
            "totalLoans": [
                262
            ],
            "totalLockedCollateralFormatted": [
                184
            ],
            "totalLockedCollateralRaw": [
                262
            ],
            "totalVolumeFormatted": [
                184
            ],
            "totalVolumeRaw": [
                262
            ],
            "__typename": [
                183
            ]
        },
        "CreditFacilityContract_order_by": {
            "borrowToken_id": [
                263
            ],
            "collateralToken_id": [
                263
            ],
            "createdAt": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "loans_aggregate": [
                74
            ],
            "market_id": [
                263
            ],
            "totalDebtFormatted": [
                263
            ],
            "totalDebtRaw": [
                263
            ],
            "totalLoans": [
                263
            ],
            "totalLockedCollateralFormatted": [
                263
            ],
            "totalLockedCollateralRaw": [
                263
            ],
            "totalVolumeFormatted": [
                263
            ],
            "totalVolumeRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "CreditFacilityContract_select_column": {},
        "CreditFacilityContract_stream_cursor_input": {
            "initial_value": [
                13
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "CreditFacilityContract_stream_cursor_value_input": {
            "borrowToken_id": [
                183
            ],
            "collateralToken_id": [
                183
            ],
            "createdAt": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "lastUpdatedAt": [
                261
            ],
            "market_id": [
                183
            ],
            "totalDebtFormatted": [
                183
            ],
            "totalDebtRaw": [
                261
            ],
            "totalLoans": [
                261
            ],
            "totalLockedCollateralFormatted": [
                183
            ],
            "totalLockedCollateralRaw": [
                261
            ],
            "totalVolumeFormatted": [
                183
            ],
            "totalVolumeRaw": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "FeeDistribution": {
            "db_write_timestamp": [
                278
            ],
            "floorAmountFormatted": [
                183
            ],
            "floorAmountRaw": [
                261
            ],
            "id": [
                183
            ],
            "market_id": [
                183
            ],
            "stakingAmountFormatted": [
                183
            ],
            "stakingAmountRaw": [
                261
            ],
            "timestamp": [
                261
            ],
            "transactionHash": [
                183
            ],
            "treasuryAmountFormatted": [
                183
            ],
            "treasuryAmountRaw": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "FeeDistribution_aggregate_order_by": {
            "avg": [
                16
            ],
            "count": [
                263
            ],
            "max": [
                18
            ],
            "min": [
                19
            ],
            "stddev": [
                22
            ],
            "stddev_pop": [
                23
            ],
            "stddev_samp": [
                24
            ],
            "sum": [
                27
            ],
            "var_pop": [
                28
            ],
            "var_samp": [
                29
            ],
            "variance": [
                30
            ],
            "__typename": [
                183
            ]
        },
        "FeeDistribution_avg_order_by": {
            "floorAmountRaw": [
                263
            ],
            "stakingAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "treasuryAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FeeDistribution_bool_exp": {
            "_and": [
                17
            ],
            "_not": [
                17
            ],
            "_or": [
                17
            ],
            "db_write_timestamp": [
                279
            ],
            "floorAmountFormatted": [
                184
            ],
            "floorAmountRaw": [
                262
            ],
            "id": [
                184
            ],
            "market_id": [
                184
            ],
            "stakingAmountFormatted": [
                184
            ],
            "stakingAmountRaw": [
                262
            ],
            "timestamp": [
                262
            ],
            "transactionHash": [
                184
            ],
            "treasuryAmountFormatted": [
                184
            ],
            "treasuryAmountRaw": [
                262
            ],
            "__typename": [
                183
            ]
        },
        "FeeDistribution_max_order_by": {
            "db_write_timestamp": [
                263
            ],
            "floorAmountFormatted": [
                263
            ],
            "floorAmountRaw": [
                263
            ],
            "id": [
                263
            ],
            "market_id": [
                263
            ],
            "stakingAmountFormatted": [
                263
            ],
            "stakingAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "transactionHash": [
                263
            ],
            "treasuryAmountFormatted": [
                263
            ],
            "treasuryAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FeeDistribution_min_order_by": {
            "db_write_timestamp": [
                263
            ],
            "floorAmountFormatted": [
                263
            ],
            "floorAmountRaw": [
                263
            ],
            "id": [
                263
            ],
            "market_id": [
                263
            ],
            "stakingAmountFormatted": [
                263
            ],
            "stakingAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "transactionHash": [
                263
            ],
            "treasuryAmountFormatted": [
                263
            ],
            "treasuryAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FeeDistribution_order_by": {
            "db_write_timestamp": [
                263
            ],
            "floorAmountFormatted": [
                263
            ],
            "floorAmountRaw": [
                263
            ],
            "id": [
                263
            ],
            "market_id": [
                263
            ],
            "stakingAmountFormatted": [
                263
            ],
            "stakingAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "transactionHash": [
                263
            ],
            "treasuryAmountFormatted": [
                263
            ],
            "treasuryAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FeeDistribution_select_column": {},
        "FeeDistribution_stddev_order_by": {
            "floorAmountRaw": [
                263
            ],
            "stakingAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "treasuryAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FeeDistribution_stddev_pop_order_by": {
            "floorAmountRaw": [
                263
            ],
            "stakingAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "treasuryAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FeeDistribution_stddev_samp_order_by": {
            "floorAmountRaw": [
                263
            ],
            "stakingAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "treasuryAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FeeDistribution_stream_cursor_input": {
            "initial_value": [
                26
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "FeeDistribution_stream_cursor_value_input": {
            "db_write_timestamp": [
                278
            ],
            "floorAmountFormatted": [
                183
            ],
            "floorAmountRaw": [
                261
            ],
            "id": [
                183
            ],
            "market_id": [
                183
            ],
            "stakingAmountFormatted": [
                183
            ],
            "stakingAmountRaw": [
                261
            ],
            "timestamp": [
                261
            ],
            "transactionHash": [
                183
            ],
            "treasuryAmountFormatted": [
                183
            ],
            "treasuryAmountRaw": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "FeeDistribution_sum_order_by": {
            "floorAmountRaw": [
                263
            ],
            "stakingAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "treasuryAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FeeDistribution_var_pop_order_by": {
            "floorAmountRaw": [
                263
            ],
            "stakingAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "treasuryAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FeeDistribution_var_samp_order_by": {
            "floorAmountRaw": [
                263
            ],
            "stakingAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "treasuryAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FeeDistribution_variance_order_by": {
            "floorAmountRaw": [
                263
            ],
            "stakingAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "treasuryAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FloorElevation": {
            "db_write_timestamp": [
                278
            ],
            "deployedAmountFormatted": [
                183
            ],
            "deployedAmountRaw": [
                261
            ],
            "id": [
                183
            ],
            "market_id": [
                183
            ],
            "newFloorPriceFormatted": [
                183
            ],
            "newFloorPriceRaw": [
                261
            ],
            "oldFloorPriceFormatted": [
                183
            ],
            "oldFloorPriceRaw": [
                261
            ],
            "timestamp": [
                261
            ],
            "transactionHash": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "FloorElevation_aggregate_order_by": {
            "avg": [
                33
            ],
            "count": [
                263
            ],
            "max": [
                35
            ],
            "min": [
                36
            ],
            "stddev": [
                39
            ],
            "stddev_pop": [
                40
            ],
            "stddev_samp": [
                41
            ],
            "sum": [
                44
            ],
            "var_pop": [
                45
            ],
            "var_samp": [
                46
            ],
            "variance": [
                47
            ],
            "__typename": [
                183
            ]
        },
        "FloorElevation_avg_order_by": {
            "deployedAmountRaw": [
                263
            ],
            "newFloorPriceRaw": [
                263
            ],
            "oldFloorPriceRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FloorElevation_bool_exp": {
            "_and": [
                34
            ],
            "_not": [
                34
            ],
            "_or": [
                34
            ],
            "db_write_timestamp": [
                279
            ],
            "deployedAmountFormatted": [
                184
            ],
            "deployedAmountRaw": [
                262
            ],
            "id": [
                184
            ],
            "market_id": [
                184
            ],
            "newFloorPriceFormatted": [
                184
            ],
            "newFloorPriceRaw": [
                262
            ],
            "oldFloorPriceFormatted": [
                184
            ],
            "oldFloorPriceRaw": [
                262
            ],
            "timestamp": [
                262
            ],
            "transactionHash": [
                184
            ],
            "__typename": [
                183
            ]
        },
        "FloorElevation_max_order_by": {
            "db_write_timestamp": [
                263
            ],
            "deployedAmountFormatted": [
                263
            ],
            "deployedAmountRaw": [
                263
            ],
            "id": [
                263
            ],
            "market_id": [
                263
            ],
            "newFloorPriceFormatted": [
                263
            ],
            "newFloorPriceRaw": [
                263
            ],
            "oldFloorPriceFormatted": [
                263
            ],
            "oldFloorPriceRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "transactionHash": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FloorElevation_min_order_by": {
            "db_write_timestamp": [
                263
            ],
            "deployedAmountFormatted": [
                263
            ],
            "deployedAmountRaw": [
                263
            ],
            "id": [
                263
            ],
            "market_id": [
                263
            ],
            "newFloorPriceFormatted": [
                263
            ],
            "newFloorPriceRaw": [
                263
            ],
            "oldFloorPriceFormatted": [
                263
            ],
            "oldFloorPriceRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "transactionHash": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FloorElevation_order_by": {
            "db_write_timestamp": [
                263
            ],
            "deployedAmountFormatted": [
                263
            ],
            "deployedAmountRaw": [
                263
            ],
            "id": [
                263
            ],
            "market_id": [
                263
            ],
            "newFloorPriceFormatted": [
                263
            ],
            "newFloorPriceRaw": [
                263
            ],
            "oldFloorPriceFormatted": [
                263
            ],
            "oldFloorPriceRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "transactionHash": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FloorElevation_select_column": {},
        "FloorElevation_stddev_order_by": {
            "deployedAmountRaw": [
                263
            ],
            "newFloorPriceRaw": [
                263
            ],
            "oldFloorPriceRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FloorElevation_stddev_pop_order_by": {
            "deployedAmountRaw": [
                263
            ],
            "newFloorPriceRaw": [
                263
            ],
            "oldFloorPriceRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FloorElevation_stddev_samp_order_by": {
            "deployedAmountRaw": [
                263
            ],
            "newFloorPriceRaw": [
                263
            ],
            "oldFloorPriceRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FloorElevation_stream_cursor_input": {
            "initial_value": [
                43
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "FloorElevation_stream_cursor_value_input": {
            "db_write_timestamp": [
                278
            ],
            "deployedAmountFormatted": [
                183
            ],
            "deployedAmountRaw": [
                261
            ],
            "id": [
                183
            ],
            "market_id": [
                183
            ],
            "newFloorPriceFormatted": [
                183
            ],
            "newFloorPriceRaw": [
                261
            ],
            "oldFloorPriceFormatted": [
                183
            ],
            "oldFloorPriceRaw": [
                261
            ],
            "timestamp": [
                261
            ],
            "transactionHash": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "FloorElevation_sum_order_by": {
            "deployedAmountRaw": [
                263
            ],
            "newFloorPriceRaw": [
                263
            ],
            "oldFloorPriceRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FloorElevation_var_pop_order_by": {
            "deployedAmountRaw": [
                263
            ],
            "newFloorPriceRaw": [
                263
            ],
            "oldFloorPriceRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FloorElevation_var_samp_order_by": {
            "deployedAmountRaw": [
                263
            ],
            "newFloorPriceRaw": [
                263
            ],
            "oldFloorPriceRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "FloorElevation_variance_order_by": {
            "deployedAmountRaw": [
                263
            ],
            "newFloorPriceRaw": [
                263
            ],
            "oldFloorPriceRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "GlobalStats": {
            "activeMarkets": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "lastUpdatedAt": [
                261
            ],
            "totalLockedCollateralFormatted": [
                183
            ],
            "totalLockedCollateralRaw": [
                261
            ],
            "totalMarkets": [
                261
            ],
            "totalOutstandingDebtFormatted": [
                183
            ],
            "totalOutstandingDebtRaw": [
                261
            ],
            "totalVolumeFormatted": [
                183
            ],
            "totalVolumeRaw": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "GlobalStats_bool_exp": {
            "_and": [
                49
            ],
            "_not": [
                49
            ],
            "_or": [
                49
            ],
            "activeMarkets": [
                262
            ],
            "db_write_timestamp": [
                279
            ],
            "id": [
                184
            ],
            "lastUpdatedAt": [
                262
            ],
            "totalLockedCollateralFormatted": [
                184
            ],
            "totalLockedCollateralRaw": [
                262
            ],
            "totalMarkets": [
                262
            ],
            "totalOutstandingDebtFormatted": [
                184
            ],
            "totalOutstandingDebtRaw": [
                262
            ],
            "totalVolumeFormatted": [
                184
            ],
            "totalVolumeRaw": [
                262
            ],
            "__typename": [
                183
            ]
        },
        "GlobalStats_order_by": {
            "activeMarkets": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "totalLockedCollateralFormatted": [
                263
            ],
            "totalLockedCollateralRaw": [
                263
            ],
            "totalMarkets": [
                263
            ],
            "totalOutstandingDebtFormatted": [
                263
            ],
            "totalOutstandingDebtRaw": [
                263
            ],
            "totalVolumeFormatted": [
                263
            ],
            "totalVolumeRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "GlobalStats_select_column": {},
        "GlobalStats_stream_cursor_input": {
            "initial_value": [
                53
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "GlobalStats_stream_cursor_value_input": {
            "activeMarkets": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "lastUpdatedAt": [
                261
            ],
            "totalLockedCollateralFormatted": [
                183
            ],
            "totalLockedCollateralRaw": [
                261
            ],
            "totalMarkets": [
                261
            ],
            "totalOutstandingDebtFormatted": [
                183
            ],
            "totalOutstandingDebtRaw": [
                261
            ],
            "totalVolumeFormatted": [
                183
            ],
            "totalVolumeRaw": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "Int": {},
        "Int_comparison_exp": {
            "_eq": [
                54
            ],
            "_gt": [
                54
            ],
            "_gte": [
                54
            ],
            "_in": [
                54
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                54
            ],
            "_lte": [
                54
            ],
            "_neq": [
                54
            ],
            "_nin": [
                54
            ],
            "__typename": [
                183
            ]
        },
        "Loan": {
            "borrowAmountFormatted": [
                183
            ],
            "borrowAmountRaw": [
                261
            ],
            "borrower_id": [
                183
            ],
            "closedAt": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "facility_id": [
                183
            ],
            "floorPriceAtBorrowFormatted": [
                183
            ],
            "floorPriceAtBorrowRaw": [
                261
            ],
            "id": [
                183
            ],
            "lastUpdatedAt": [
                261
            ],
            "lockedCollateralFormatted": [
                183
            ],
            "lockedCollateralRaw": [
                261
            ],
            "market_id": [
                183
            ],
            "openedAt": [
                261
            ],
            "originationFeeFormatted": [
                183
            ],
            "originationFeeRaw": [
                261
            ],
            "remainingDebtFormatted": [
                183
            ],
            "remainingDebtRaw": [
                261
            ],
            "status": [
                257
            ],
            "statusHistory": [
                57,
                {
                    "distinct_on": [
                        64,
                        "[LoanStatusHistory_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        63,
                        "[LoanStatusHistory_order_by!]"
                    ],
                    "where": [
                        60
                    ]
                }
            ],
            "transactionHash": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "LoanStatusHistory": {
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "loan_id": [
                183
            ],
            "lockedCollateralFormatted": [
                183
            ],
            "lockedCollateralRaw": [
                261
            ],
            "remainingDebtFormatted": [
                183
            ],
            "remainingDebtRaw": [
                261
            ],
            "status": [
                257
            ],
            "timestamp": [
                261
            ],
            "transactionHash": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "LoanStatusHistory_aggregate_order_by": {
            "avg": [
                59
            ],
            "count": [
                263
            ],
            "max": [
                61
            ],
            "min": [
                62
            ],
            "stddev": [
                65
            ],
            "stddev_pop": [
                66
            ],
            "stddev_samp": [
                67
            ],
            "sum": [
                70
            ],
            "var_pop": [
                71
            ],
            "var_samp": [
                72
            ],
            "variance": [
                73
            ],
            "__typename": [
                183
            ]
        },
        "LoanStatusHistory_avg_order_by": {
            "lockedCollateralRaw": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "LoanStatusHistory_bool_exp": {
            "_and": [
                60
            ],
            "_not": [
                60
            ],
            "_or": [
                60
            ],
            "db_write_timestamp": [
                279
            ],
            "id": [
                184
            ],
            "loan_id": [
                184
            ],
            "lockedCollateralFormatted": [
                184
            ],
            "lockedCollateralRaw": [
                262
            ],
            "remainingDebtFormatted": [
                184
            ],
            "remainingDebtRaw": [
                262
            ],
            "status": [
                258
            ],
            "timestamp": [
                262
            ],
            "transactionHash": [
                184
            ],
            "__typename": [
                183
            ]
        },
        "LoanStatusHistory_max_order_by": {
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "loan_id": [
                263
            ],
            "lockedCollateralFormatted": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "remainingDebtFormatted": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "status": [
                263
            ],
            "timestamp": [
                263
            ],
            "transactionHash": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "LoanStatusHistory_min_order_by": {
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "loan_id": [
                263
            ],
            "lockedCollateralFormatted": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "remainingDebtFormatted": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "status": [
                263
            ],
            "timestamp": [
                263
            ],
            "transactionHash": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "LoanStatusHistory_order_by": {
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "loan_id": [
                263
            ],
            "lockedCollateralFormatted": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "remainingDebtFormatted": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "status": [
                263
            ],
            "timestamp": [
                263
            ],
            "transactionHash": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "LoanStatusHistory_select_column": {},
        "LoanStatusHistory_stddev_order_by": {
            "lockedCollateralRaw": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "LoanStatusHistory_stddev_pop_order_by": {
            "lockedCollateralRaw": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "LoanStatusHistory_stddev_samp_order_by": {
            "lockedCollateralRaw": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "LoanStatusHistory_stream_cursor_input": {
            "initial_value": [
                69
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "LoanStatusHistory_stream_cursor_value_input": {
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "loan_id": [
                183
            ],
            "lockedCollateralFormatted": [
                183
            ],
            "lockedCollateralRaw": [
                261
            ],
            "remainingDebtFormatted": [
                183
            ],
            "remainingDebtRaw": [
                261
            ],
            "status": [
                257
            ],
            "timestamp": [
                261
            ],
            "transactionHash": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "LoanStatusHistory_sum_order_by": {
            "lockedCollateralRaw": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "LoanStatusHistory_var_pop_order_by": {
            "lockedCollateralRaw": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "LoanStatusHistory_var_samp_order_by": {
            "lockedCollateralRaw": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "LoanStatusHistory_variance_order_by": {
            "lockedCollateralRaw": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Loan_aggregate_order_by": {
            "avg": [
                75
            ],
            "count": [
                263
            ],
            "max": [
                77
            ],
            "min": [
                78
            ],
            "stddev": [
                81
            ],
            "stddev_pop": [
                82
            ],
            "stddev_samp": [
                83
            ],
            "sum": [
                86
            ],
            "var_pop": [
                87
            ],
            "var_samp": [
                88
            ],
            "variance": [
                89
            ],
            "__typename": [
                183
            ]
        },
        "Loan_avg_order_by": {
            "borrowAmountRaw": [
                263
            ],
            "closedAt": [
                263
            ],
            "floorPriceAtBorrowRaw": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "openedAt": [
                263
            ],
            "originationFeeRaw": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Loan_bool_exp": {
            "_and": [
                76
            ],
            "_not": [
                76
            ],
            "_or": [
                76
            ],
            "borrowAmountFormatted": [
                184
            ],
            "borrowAmountRaw": [
                262
            ],
            "borrower_id": [
                184
            ],
            "closedAt": [
                262
            ],
            "db_write_timestamp": [
                279
            ],
            "facility_id": [
                184
            ],
            "floorPriceAtBorrowFormatted": [
                184
            ],
            "floorPriceAtBorrowRaw": [
                262
            ],
            "id": [
                184
            ],
            "lastUpdatedAt": [
                262
            ],
            "lockedCollateralFormatted": [
                184
            ],
            "lockedCollateralRaw": [
                262
            ],
            "market_id": [
                184
            ],
            "openedAt": [
                262
            ],
            "originationFeeFormatted": [
                184
            ],
            "originationFeeRaw": [
                262
            ],
            "remainingDebtFormatted": [
                184
            ],
            "remainingDebtRaw": [
                262
            ],
            "status": [
                258
            ],
            "statusHistory": [
                60
            ],
            "transactionHash": [
                184
            ],
            "__typename": [
                183
            ]
        },
        "Loan_max_order_by": {
            "borrowAmountFormatted": [
                263
            ],
            "borrowAmountRaw": [
                263
            ],
            "borrower_id": [
                263
            ],
            "closedAt": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "facility_id": [
                263
            ],
            "floorPriceAtBorrowFormatted": [
                263
            ],
            "floorPriceAtBorrowRaw": [
                263
            ],
            "id": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralFormatted": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "market_id": [
                263
            ],
            "openedAt": [
                263
            ],
            "originationFeeFormatted": [
                263
            ],
            "originationFeeRaw": [
                263
            ],
            "remainingDebtFormatted": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "status": [
                263
            ],
            "transactionHash": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Loan_min_order_by": {
            "borrowAmountFormatted": [
                263
            ],
            "borrowAmountRaw": [
                263
            ],
            "borrower_id": [
                263
            ],
            "closedAt": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "facility_id": [
                263
            ],
            "floorPriceAtBorrowFormatted": [
                263
            ],
            "floorPriceAtBorrowRaw": [
                263
            ],
            "id": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralFormatted": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "market_id": [
                263
            ],
            "openedAt": [
                263
            ],
            "originationFeeFormatted": [
                263
            ],
            "originationFeeRaw": [
                263
            ],
            "remainingDebtFormatted": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "status": [
                263
            ],
            "transactionHash": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Loan_order_by": {
            "borrowAmountFormatted": [
                263
            ],
            "borrowAmountRaw": [
                263
            ],
            "borrower_id": [
                263
            ],
            "closedAt": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "facility_id": [
                263
            ],
            "floorPriceAtBorrowFormatted": [
                263
            ],
            "floorPriceAtBorrowRaw": [
                263
            ],
            "id": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralFormatted": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "market_id": [
                263
            ],
            "openedAt": [
                263
            ],
            "originationFeeFormatted": [
                263
            ],
            "originationFeeRaw": [
                263
            ],
            "remainingDebtFormatted": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "status": [
                263
            ],
            "statusHistory_aggregate": [
                58
            ],
            "transactionHash": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Loan_select_column": {},
        "Loan_stddev_order_by": {
            "borrowAmountRaw": [
                263
            ],
            "closedAt": [
                263
            ],
            "floorPriceAtBorrowRaw": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "openedAt": [
                263
            ],
            "originationFeeRaw": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Loan_stddev_pop_order_by": {
            "borrowAmountRaw": [
                263
            ],
            "closedAt": [
                263
            ],
            "floorPriceAtBorrowRaw": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "openedAt": [
                263
            ],
            "originationFeeRaw": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Loan_stddev_samp_order_by": {
            "borrowAmountRaw": [
                263
            ],
            "closedAt": [
                263
            ],
            "floorPriceAtBorrowRaw": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "openedAt": [
                263
            ],
            "originationFeeRaw": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Loan_stream_cursor_input": {
            "initial_value": [
                85
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "Loan_stream_cursor_value_input": {
            "borrowAmountFormatted": [
                183
            ],
            "borrowAmountRaw": [
                261
            ],
            "borrower_id": [
                183
            ],
            "closedAt": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "facility_id": [
                183
            ],
            "floorPriceAtBorrowFormatted": [
                183
            ],
            "floorPriceAtBorrowRaw": [
                261
            ],
            "id": [
                183
            ],
            "lastUpdatedAt": [
                261
            ],
            "lockedCollateralFormatted": [
                183
            ],
            "lockedCollateralRaw": [
                261
            ],
            "market_id": [
                183
            ],
            "openedAt": [
                261
            ],
            "originationFeeFormatted": [
                183
            ],
            "originationFeeRaw": [
                261
            ],
            "remainingDebtFormatted": [
                183
            ],
            "remainingDebtRaw": [
                261
            ],
            "status": [
                257
            ],
            "transactionHash": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "Loan_sum_order_by": {
            "borrowAmountRaw": [
                263
            ],
            "closedAt": [
                263
            ],
            "floorPriceAtBorrowRaw": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "openedAt": [
                263
            ],
            "originationFeeRaw": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Loan_var_pop_order_by": {
            "borrowAmountRaw": [
                263
            ],
            "closedAt": [
                263
            ],
            "floorPriceAtBorrowRaw": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "openedAt": [
                263
            ],
            "originationFeeRaw": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Loan_var_samp_order_by": {
            "borrowAmountRaw": [
                263
            ],
            "closedAt": [
                263
            ],
            "floorPriceAtBorrowRaw": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "openedAt": [
                263
            ],
            "originationFeeRaw": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Loan_variance_order_by": {
            "borrowAmountRaw": [
                263
            ],
            "closedAt": [
                263
            ],
            "floorPriceAtBorrowRaw": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "openedAt": [
                263
            ],
            "originationFeeRaw": [
                263
            ],
            "remainingDebtRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Market": {
            "buyFeeBps": [
                261
            ],
            "createdAt": [
                261
            ],
            "creator_id": [
                183
            ],
            "currentPriceFormatted": [
                183
            ],
            "currentPriceRaw": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "factory_id": [
                183
            ],
            "feeDistributions": [
                14,
                {
                    "distinct_on": [
                        21,
                        "[FeeDistribution_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        20,
                        "[FeeDistribution_order_by!]"
                    ],
                    "where": [
                        17
                    ]
                }
            ],
            "floorElevations": [
                31,
                {
                    "distinct_on": [
                        38,
                        "[FloorElevation_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        37,
                        "[FloorElevation_order_by!]"
                    ],
                    "where": [
                        34
                    ]
                }
            ],
            "floorPriceFormatted": [
                183
            ],
            "floorPriceRaw": [
                261
            ],
            "floorSupplyFormatted": [
                183
            ],
            "floorSupplyRaw": [
                261
            ],
            "id": [
                183
            ],
            "initialFloorPriceFormatted": [
                183
            ],
            "initialFloorPriceRaw": [
                261
            ],
            "isBuyOpen": [
                6
            ],
            "isSellOpen": [
                6
            ],
            "issuanceToken": [
                185
            ],
            "issuanceToken_id": [
                183
            ],
            "lastElevationTimestamp": [
                261
            ],
            "lastTradeTimestamp": [
                261
            ],
            "lastUpdatedAt": [
                261
            ],
            "marketSupplyFormatted": [
                183
            ],
            "marketSupplyRaw": [
                261
            ],
            "maxLTV": [
                261
            ],
            "reserveToken": [
                185
            ],
            "reserveToken_id": [
                183
            ],
            "sellFeeBps": [
                261
            ],
            "status": [
                259
            ],
            "totalSupplyFormatted": [
                183
            ],
            "totalSupplyRaw": [
                261
            ],
            "trades": [
                191,
                {
                    "distinct_on": [
                        198,
                        "[Trade_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        197,
                        "[Trade_order_by!]"
                    ],
                    "where": [
                        194
                    ]
                }
            ],
            "tradingFeeBps": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "MarketRollingStats": {
            "averagePriceFormatted": [
                183
            ],
            "averagePriceRaw": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "lastUpdatedAt": [
                261
            ],
            "market_id": [
                183
            ],
            "tradeCount": [
                261
            ],
            "volumeFormatted": [
                183
            ],
            "volumeRaw": [
                261
            ],
            "windowSeconds": [
                54
            ],
            "__typename": [
                183
            ]
        },
        "MarketRollingStats_bool_exp": {
            "_and": [
                92
            ],
            "_not": [
                92
            ],
            "_or": [
                92
            ],
            "averagePriceFormatted": [
                184
            ],
            "averagePriceRaw": [
                262
            ],
            "db_write_timestamp": [
                279
            ],
            "id": [
                184
            ],
            "lastUpdatedAt": [
                262
            ],
            "market_id": [
                184
            ],
            "tradeCount": [
                262
            ],
            "volumeFormatted": [
                184
            ],
            "volumeRaw": [
                262
            ],
            "windowSeconds": [
                55
            ],
            "__typename": [
                183
            ]
        },
        "MarketRollingStats_order_by": {
            "averagePriceFormatted": [
                263
            ],
            "averagePriceRaw": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "market_id": [
                263
            ],
            "tradeCount": [
                263
            ],
            "volumeFormatted": [
                263
            ],
            "volumeRaw": [
                263
            ],
            "windowSeconds": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "MarketRollingStats_select_column": {},
        "MarketRollingStats_stream_cursor_input": {
            "initial_value": [
                96
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "MarketRollingStats_stream_cursor_value_input": {
            "averagePriceFormatted": [
                183
            ],
            "averagePriceRaw": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "lastUpdatedAt": [
                261
            ],
            "market_id": [
                183
            ],
            "tradeCount": [
                261
            ],
            "volumeFormatted": [
                183
            ],
            "volumeRaw": [
                261
            ],
            "windowSeconds": [
                54
            ],
            "__typename": [
                183
            ]
        },
        "MarketSnapshot": {
            "db_write_timestamp": [
                278
            ],
            "floorPriceFormatted": [
                183
            ],
            "floorPriceRaw": [
                261
            ],
            "id": [
                183
            ],
            "marketSupplyFormatted": [
                183
            ],
            "marketSupplyRaw": [
                261
            ],
            "market_id": [
                183
            ],
            "priceFormatted": [
                183
            ],
            "priceRaw": [
                261
            ],
            "timestamp": [
                261
            ],
            "totalSupplyFormatted": [
                183
            ],
            "totalSupplyRaw": [
                261
            ],
            "trades24h": [
                261
            ],
            "volume24hFormatted": [
                183
            ],
            "volume24hRaw": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "MarketSnapshot_bool_exp": {
            "_and": [
                98
            ],
            "_not": [
                98
            ],
            "_or": [
                98
            ],
            "db_write_timestamp": [
                279
            ],
            "floorPriceFormatted": [
                184
            ],
            "floorPriceRaw": [
                262
            ],
            "id": [
                184
            ],
            "marketSupplyFormatted": [
                184
            ],
            "marketSupplyRaw": [
                262
            ],
            "market_id": [
                184
            ],
            "priceFormatted": [
                184
            ],
            "priceRaw": [
                262
            ],
            "timestamp": [
                262
            ],
            "totalSupplyFormatted": [
                184
            ],
            "totalSupplyRaw": [
                262
            ],
            "trades24h": [
                262
            ],
            "volume24hFormatted": [
                184
            ],
            "volume24hRaw": [
                262
            ],
            "__typename": [
                183
            ]
        },
        "MarketSnapshot_order_by": {
            "db_write_timestamp": [
                263
            ],
            "floorPriceFormatted": [
                263
            ],
            "floorPriceRaw": [
                263
            ],
            "id": [
                263
            ],
            "marketSupplyFormatted": [
                263
            ],
            "marketSupplyRaw": [
                263
            ],
            "market_id": [
                263
            ],
            "priceFormatted": [
                263
            ],
            "priceRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "totalSupplyFormatted": [
                263
            ],
            "totalSupplyRaw": [
                263
            ],
            "trades24h": [
                263
            ],
            "volume24hFormatted": [
                263
            ],
            "volume24hRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "MarketSnapshot_select_column": {},
        "MarketSnapshot_stream_cursor_input": {
            "initial_value": [
                102
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "MarketSnapshot_stream_cursor_value_input": {
            "db_write_timestamp": [
                278
            ],
            "floorPriceFormatted": [
                183
            ],
            "floorPriceRaw": [
                261
            ],
            "id": [
                183
            ],
            "marketSupplyFormatted": [
                183
            ],
            "marketSupplyRaw": [
                261
            ],
            "market_id": [
                183
            ],
            "priceFormatted": [
                183
            ],
            "priceRaw": [
                261
            ],
            "timestamp": [
                261
            ],
            "totalSupplyFormatted": [
                183
            ],
            "totalSupplyRaw": [
                261
            ],
            "trades24h": [
                261
            ],
            "volume24hFormatted": [
                183
            ],
            "volume24hRaw": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "Market_aggregate_order_by": {
            "avg": [
                104
            ],
            "count": [
                263
            ],
            "max": [
                106
            ],
            "min": [
                107
            ],
            "stddev": [
                110
            ],
            "stddev_pop": [
                111
            ],
            "stddev_samp": [
                112
            ],
            "sum": [
                115
            ],
            "var_pop": [
                116
            ],
            "var_samp": [
                117
            ],
            "variance": [
                118
            ],
            "__typename": [
                183
            ]
        },
        "Market_avg_order_by": {
            "buyFeeBps": [
                263
            ],
            "createdAt": [
                263
            ],
            "currentPriceRaw": [
                263
            ],
            "floorPriceRaw": [
                263
            ],
            "floorSupplyRaw": [
                263
            ],
            "initialFloorPriceRaw": [
                263
            ],
            "lastElevationTimestamp": [
                263
            ],
            "lastTradeTimestamp": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "marketSupplyRaw": [
                263
            ],
            "maxLTV": [
                263
            ],
            "sellFeeBps": [
                263
            ],
            "totalSupplyRaw": [
                263
            ],
            "tradingFeeBps": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Market_bool_exp": {
            "_and": [
                105
            ],
            "_not": [
                105
            ],
            "_or": [
                105
            ],
            "buyFeeBps": [
                262
            ],
            "createdAt": [
                262
            ],
            "creator_id": [
                184
            ],
            "currentPriceFormatted": [
                184
            ],
            "currentPriceRaw": [
                262
            ],
            "db_write_timestamp": [
                279
            ],
            "factory_id": [
                184
            ],
            "feeDistributions": [
                17
            ],
            "floorElevations": [
                34
            ],
            "floorPriceFormatted": [
                184
            ],
            "floorPriceRaw": [
                262
            ],
            "floorSupplyFormatted": [
                184
            ],
            "floorSupplyRaw": [
                262
            ],
            "id": [
                184
            ],
            "initialFloorPriceFormatted": [
                184
            ],
            "initialFloorPriceRaw": [
                262
            ],
            "isBuyOpen": [
                7
            ],
            "isSellOpen": [
                7
            ],
            "issuanceToken": [
                186
            ],
            "issuanceToken_id": [
                184
            ],
            "lastElevationTimestamp": [
                262
            ],
            "lastTradeTimestamp": [
                262
            ],
            "lastUpdatedAt": [
                262
            ],
            "marketSupplyFormatted": [
                184
            ],
            "marketSupplyRaw": [
                262
            ],
            "maxLTV": [
                262
            ],
            "reserveToken": [
                186
            ],
            "reserveToken_id": [
                184
            ],
            "sellFeeBps": [
                262
            ],
            "status": [
                260
            ],
            "totalSupplyFormatted": [
                184
            ],
            "totalSupplyRaw": [
                262
            ],
            "trades": [
                194
            ],
            "tradingFeeBps": [
                262
            ],
            "__typename": [
                183
            ]
        },
        "Market_max_order_by": {
            "buyFeeBps": [
                263
            ],
            "createdAt": [
                263
            ],
            "creator_id": [
                263
            ],
            "currentPriceFormatted": [
                263
            ],
            "currentPriceRaw": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "factory_id": [
                263
            ],
            "floorPriceFormatted": [
                263
            ],
            "floorPriceRaw": [
                263
            ],
            "floorSupplyFormatted": [
                263
            ],
            "floorSupplyRaw": [
                263
            ],
            "id": [
                263
            ],
            "initialFloorPriceFormatted": [
                263
            ],
            "initialFloorPriceRaw": [
                263
            ],
            "issuanceToken_id": [
                263
            ],
            "lastElevationTimestamp": [
                263
            ],
            "lastTradeTimestamp": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "marketSupplyFormatted": [
                263
            ],
            "marketSupplyRaw": [
                263
            ],
            "maxLTV": [
                263
            ],
            "reserveToken_id": [
                263
            ],
            "sellFeeBps": [
                263
            ],
            "status": [
                263
            ],
            "totalSupplyFormatted": [
                263
            ],
            "totalSupplyRaw": [
                263
            ],
            "tradingFeeBps": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Market_min_order_by": {
            "buyFeeBps": [
                263
            ],
            "createdAt": [
                263
            ],
            "creator_id": [
                263
            ],
            "currentPriceFormatted": [
                263
            ],
            "currentPriceRaw": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "factory_id": [
                263
            ],
            "floorPriceFormatted": [
                263
            ],
            "floorPriceRaw": [
                263
            ],
            "floorSupplyFormatted": [
                263
            ],
            "floorSupplyRaw": [
                263
            ],
            "id": [
                263
            ],
            "initialFloorPriceFormatted": [
                263
            ],
            "initialFloorPriceRaw": [
                263
            ],
            "issuanceToken_id": [
                263
            ],
            "lastElevationTimestamp": [
                263
            ],
            "lastTradeTimestamp": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "marketSupplyFormatted": [
                263
            ],
            "marketSupplyRaw": [
                263
            ],
            "maxLTV": [
                263
            ],
            "reserveToken_id": [
                263
            ],
            "sellFeeBps": [
                263
            ],
            "status": [
                263
            ],
            "totalSupplyFormatted": [
                263
            ],
            "totalSupplyRaw": [
                263
            ],
            "tradingFeeBps": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Market_order_by": {
            "buyFeeBps": [
                263
            ],
            "createdAt": [
                263
            ],
            "creator_id": [
                263
            ],
            "currentPriceFormatted": [
                263
            ],
            "currentPriceRaw": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "factory_id": [
                263
            ],
            "feeDistributions_aggregate": [
                15
            ],
            "floorElevations_aggregate": [
                32
            ],
            "floorPriceFormatted": [
                263
            ],
            "floorPriceRaw": [
                263
            ],
            "floorSupplyFormatted": [
                263
            ],
            "floorSupplyRaw": [
                263
            ],
            "id": [
                263
            ],
            "initialFloorPriceFormatted": [
                263
            ],
            "initialFloorPriceRaw": [
                263
            ],
            "isBuyOpen": [
                263
            ],
            "isSellOpen": [
                263
            ],
            "issuanceToken": [
                187
            ],
            "issuanceToken_id": [
                263
            ],
            "lastElevationTimestamp": [
                263
            ],
            "lastTradeTimestamp": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "marketSupplyFormatted": [
                263
            ],
            "marketSupplyRaw": [
                263
            ],
            "maxLTV": [
                263
            ],
            "reserveToken": [
                187
            ],
            "reserveToken_id": [
                263
            ],
            "sellFeeBps": [
                263
            ],
            "status": [
                263
            ],
            "totalSupplyFormatted": [
                263
            ],
            "totalSupplyRaw": [
                263
            ],
            "trades_aggregate": [
                192
            ],
            "tradingFeeBps": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Market_select_column": {},
        "Market_stddev_order_by": {
            "buyFeeBps": [
                263
            ],
            "createdAt": [
                263
            ],
            "currentPriceRaw": [
                263
            ],
            "floorPriceRaw": [
                263
            ],
            "floorSupplyRaw": [
                263
            ],
            "initialFloorPriceRaw": [
                263
            ],
            "lastElevationTimestamp": [
                263
            ],
            "lastTradeTimestamp": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "marketSupplyRaw": [
                263
            ],
            "maxLTV": [
                263
            ],
            "sellFeeBps": [
                263
            ],
            "totalSupplyRaw": [
                263
            ],
            "tradingFeeBps": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Market_stddev_pop_order_by": {
            "buyFeeBps": [
                263
            ],
            "createdAt": [
                263
            ],
            "currentPriceRaw": [
                263
            ],
            "floorPriceRaw": [
                263
            ],
            "floorSupplyRaw": [
                263
            ],
            "initialFloorPriceRaw": [
                263
            ],
            "lastElevationTimestamp": [
                263
            ],
            "lastTradeTimestamp": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "marketSupplyRaw": [
                263
            ],
            "maxLTV": [
                263
            ],
            "sellFeeBps": [
                263
            ],
            "totalSupplyRaw": [
                263
            ],
            "tradingFeeBps": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Market_stddev_samp_order_by": {
            "buyFeeBps": [
                263
            ],
            "createdAt": [
                263
            ],
            "currentPriceRaw": [
                263
            ],
            "floorPriceRaw": [
                263
            ],
            "floorSupplyRaw": [
                263
            ],
            "initialFloorPriceRaw": [
                263
            ],
            "lastElevationTimestamp": [
                263
            ],
            "lastTradeTimestamp": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "marketSupplyRaw": [
                263
            ],
            "maxLTV": [
                263
            ],
            "sellFeeBps": [
                263
            ],
            "totalSupplyRaw": [
                263
            ],
            "tradingFeeBps": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Market_stream_cursor_input": {
            "initial_value": [
                114
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "Market_stream_cursor_value_input": {
            "buyFeeBps": [
                261
            ],
            "createdAt": [
                261
            ],
            "creator_id": [
                183
            ],
            "currentPriceFormatted": [
                183
            ],
            "currentPriceRaw": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "factory_id": [
                183
            ],
            "floorPriceFormatted": [
                183
            ],
            "floorPriceRaw": [
                261
            ],
            "floorSupplyFormatted": [
                183
            ],
            "floorSupplyRaw": [
                261
            ],
            "id": [
                183
            ],
            "initialFloorPriceFormatted": [
                183
            ],
            "initialFloorPriceRaw": [
                261
            ],
            "isBuyOpen": [
                6
            ],
            "isSellOpen": [
                6
            ],
            "issuanceToken_id": [
                183
            ],
            "lastElevationTimestamp": [
                261
            ],
            "lastTradeTimestamp": [
                261
            ],
            "lastUpdatedAt": [
                261
            ],
            "marketSupplyFormatted": [
                183
            ],
            "marketSupplyRaw": [
                261
            ],
            "maxLTV": [
                261
            ],
            "reserveToken_id": [
                183
            ],
            "sellFeeBps": [
                261
            ],
            "status": [
                259
            ],
            "totalSupplyFormatted": [
                183
            ],
            "totalSupplyRaw": [
                261
            ],
            "tradingFeeBps": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "Market_sum_order_by": {
            "buyFeeBps": [
                263
            ],
            "createdAt": [
                263
            ],
            "currentPriceRaw": [
                263
            ],
            "floorPriceRaw": [
                263
            ],
            "floorSupplyRaw": [
                263
            ],
            "initialFloorPriceRaw": [
                263
            ],
            "lastElevationTimestamp": [
                263
            ],
            "lastTradeTimestamp": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "marketSupplyRaw": [
                263
            ],
            "maxLTV": [
                263
            ],
            "sellFeeBps": [
                263
            ],
            "totalSupplyRaw": [
                263
            ],
            "tradingFeeBps": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Market_var_pop_order_by": {
            "buyFeeBps": [
                263
            ],
            "createdAt": [
                263
            ],
            "currentPriceRaw": [
                263
            ],
            "floorPriceRaw": [
                263
            ],
            "floorSupplyRaw": [
                263
            ],
            "initialFloorPriceRaw": [
                263
            ],
            "lastElevationTimestamp": [
                263
            ],
            "lastTradeTimestamp": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "marketSupplyRaw": [
                263
            ],
            "maxLTV": [
                263
            ],
            "sellFeeBps": [
                263
            ],
            "totalSupplyRaw": [
                263
            ],
            "tradingFeeBps": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Market_var_samp_order_by": {
            "buyFeeBps": [
                263
            ],
            "createdAt": [
                263
            ],
            "currentPriceRaw": [
                263
            ],
            "floorPriceRaw": [
                263
            ],
            "floorSupplyRaw": [
                263
            ],
            "initialFloorPriceRaw": [
                263
            ],
            "lastElevationTimestamp": [
                263
            ],
            "lastTradeTimestamp": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "marketSupplyRaw": [
                263
            ],
            "maxLTV": [
                263
            ],
            "sellFeeBps": [
                263
            ],
            "totalSupplyRaw": [
                263
            ],
            "tradingFeeBps": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Market_variance_order_by": {
            "buyFeeBps": [
                263
            ],
            "createdAt": [
                263
            ],
            "currentPriceRaw": [
                263
            ],
            "floorPriceRaw": [
                263
            ],
            "floorSupplyRaw": [
                263
            ],
            "initialFloorPriceRaw": [
                263
            ],
            "lastElevationTimestamp": [
                263
            ],
            "lastTradeTimestamp": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "marketSupplyRaw": [
                263
            ],
            "maxLTV": [
                263
            ],
            "sellFeeBps": [
                263
            ],
            "totalSupplyRaw": [
                263
            ],
            "tradingFeeBps": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "ModuleAddress": {
            "createdAt": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "lastUpdatedAt": [
                261
            ],
            "market_id": [
                183
            ],
            "moduleType": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "ModuleAddress_bool_exp": {
            "_and": [
                120
            ],
            "_not": [
                120
            ],
            "_or": [
                120
            ],
            "createdAt": [
                262
            ],
            "db_write_timestamp": [
                279
            ],
            "id": [
                184
            ],
            "lastUpdatedAt": [
                262
            ],
            "market_id": [
                184
            ],
            "moduleType": [
                184
            ],
            "__typename": [
                183
            ]
        },
        "ModuleAddress_order_by": {
            "createdAt": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "market_id": [
                263
            ],
            "moduleType": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "ModuleAddress_select_column": {},
        "ModuleAddress_stream_cursor_input": {
            "initial_value": [
                124
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "ModuleAddress_stream_cursor_value_input": {
            "createdAt": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "lastUpdatedAt": [
                261
            ],
            "market_id": [
                183
            ],
            "moduleType": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "ModuleRegistry": {
            "authorizer": [
                183
            ],
            "createdAt": [
                261
            ],
            "creditFacility": [
                183
            ],
            "db_write_timestamp": [
                278
            ],
            "feeTreasury": [
                183
            ],
            "floor": [
                183
            ],
            "id": [
                183
            ],
            "lastUpdatedAt": [
                261
            ],
            "presale": [
                183
            ],
            "staking": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "ModuleRegistry_bool_exp": {
            "_and": [
                126
            ],
            "_not": [
                126
            ],
            "_or": [
                126
            ],
            "authorizer": [
                184
            ],
            "createdAt": [
                262
            ],
            "creditFacility": [
                184
            ],
            "db_write_timestamp": [
                279
            ],
            "feeTreasury": [
                184
            ],
            "floor": [
                184
            ],
            "id": [
                184
            ],
            "lastUpdatedAt": [
                262
            ],
            "presale": [
                184
            ],
            "staking": [
                184
            ],
            "__typename": [
                183
            ]
        },
        "ModuleRegistry_order_by": {
            "authorizer": [
                263
            ],
            "createdAt": [
                263
            ],
            "creditFacility": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "feeTreasury": [
                263
            ],
            "floor": [
                263
            ],
            "id": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "presale": [
                263
            ],
            "staking": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "ModuleRegistry_select_column": {},
        "ModuleRegistry_stream_cursor_input": {
            "initial_value": [
                130
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "ModuleRegistry_stream_cursor_value_input": {
            "authorizer": [
                183
            ],
            "createdAt": [
                261
            ],
            "creditFacility": [
                183
            ],
            "db_write_timestamp": [
                278
            ],
            "feeTreasury": [
                183
            ],
            "floor": [
                183
            ],
            "id": [
                183
            ],
            "lastUpdatedAt": [
                261
            ],
            "presale": [
                183
            ],
            "staking": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "PreSaleContract": {
            "createdAt": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "endTime": [
                261
            ],
            "id": [
                183
            ],
            "maxLeverage": [
                261
            ],
            "participations": [
                137,
                {
                    "distinct_on": [
                        144,
                        "[PresaleParticipation_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        143,
                        "[PresaleParticipation_order_by!]"
                    ],
                    "where": [
                        140
                    ]
                }
            ],
            "purchaseToken_id": [
                183
            ],
            "saleToken_id": [
                183
            ],
            "startTime": [
                261
            ],
            "totalParticipants": [
                261
            ],
            "totalRaisedFormatted": [
                183
            ],
            "totalRaisedRaw": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "PreSaleContract_bool_exp": {
            "_and": [
                132
            ],
            "_not": [
                132
            ],
            "_or": [
                132
            ],
            "createdAt": [
                262
            ],
            "db_write_timestamp": [
                279
            ],
            "endTime": [
                262
            ],
            "id": [
                184
            ],
            "maxLeverage": [
                262
            ],
            "participations": [
                140
            ],
            "purchaseToken_id": [
                184
            ],
            "saleToken_id": [
                184
            ],
            "startTime": [
                262
            ],
            "totalParticipants": [
                262
            ],
            "totalRaisedFormatted": [
                184
            ],
            "totalRaisedRaw": [
                262
            ],
            "__typename": [
                183
            ]
        },
        "PreSaleContract_order_by": {
            "createdAt": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "endTime": [
                263
            ],
            "id": [
                263
            ],
            "maxLeverage": [
                263
            ],
            "participations_aggregate": [
                138
            ],
            "purchaseToken_id": [
                263
            ],
            "saleToken_id": [
                263
            ],
            "startTime": [
                263
            ],
            "totalParticipants": [
                263
            ],
            "totalRaisedFormatted": [
                263
            ],
            "totalRaisedRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "PreSaleContract_select_column": {},
        "PreSaleContract_stream_cursor_input": {
            "initial_value": [
                136
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "PreSaleContract_stream_cursor_value_input": {
            "createdAt": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "endTime": [
                261
            ],
            "id": [
                183
            ],
            "maxLeverage": [
                261
            ],
            "purchaseToken_id": [
                183
            ],
            "saleToken_id": [
                183
            ],
            "startTime": [
                261
            ],
            "totalParticipants": [
                261
            ],
            "totalRaisedFormatted": [
                183
            ],
            "totalRaisedRaw": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "PresaleParticipation": {
            "amountFormatted": [
                183
            ],
            "amountRaw": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "leverage": [
                261
            ],
            "presale_id": [
                183
            ],
            "timestamp": [
                261
            ],
            "transactionHash": [
                183
            ],
            "user_id": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "PresaleParticipation_aggregate_order_by": {
            "avg": [
                139
            ],
            "count": [
                263
            ],
            "max": [
                141
            ],
            "min": [
                142
            ],
            "stddev": [
                145
            ],
            "stddev_pop": [
                146
            ],
            "stddev_samp": [
                147
            ],
            "sum": [
                150
            ],
            "var_pop": [
                151
            ],
            "var_samp": [
                152
            ],
            "variance": [
                153
            ],
            "__typename": [
                183
            ]
        },
        "PresaleParticipation_avg_order_by": {
            "amountRaw": [
                263
            ],
            "leverage": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "PresaleParticipation_bool_exp": {
            "_and": [
                140
            ],
            "_not": [
                140
            ],
            "_or": [
                140
            ],
            "amountFormatted": [
                184
            ],
            "amountRaw": [
                262
            ],
            "db_write_timestamp": [
                279
            ],
            "id": [
                184
            ],
            "leverage": [
                262
            ],
            "presale_id": [
                184
            ],
            "timestamp": [
                262
            ],
            "transactionHash": [
                184
            ],
            "user_id": [
                184
            ],
            "__typename": [
                183
            ]
        },
        "PresaleParticipation_max_order_by": {
            "amountFormatted": [
                263
            ],
            "amountRaw": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "leverage": [
                263
            ],
            "presale_id": [
                263
            ],
            "timestamp": [
                263
            ],
            "transactionHash": [
                263
            ],
            "user_id": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "PresaleParticipation_min_order_by": {
            "amountFormatted": [
                263
            ],
            "amountRaw": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "leverage": [
                263
            ],
            "presale_id": [
                263
            ],
            "timestamp": [
                263
            ],
            "transactionHash": [
                263
            ],
            "user_id": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "PresaleParticipation_order_by": {
            "amountFormatted": [
                263
            ],
            "amountRaw": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "leverage": [
                263
            ],
            "presale_id": [
                263
            ],
            "timestamp": [
                263
            ],
            "transactionHash": [
                263
            ],
            "user_id": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "PresaleParticipation_select_column": {},
        "PresaleParticipation_stddev_order_by": {
            "amountRaw": [
                263
            ],
            "leverage": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "PresaleParticipation_stddev_pop_order_by": {
            "amountRaw": [
                263
            ],
            "leverage": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "PresaleParticipation_stddev_samp_order_by": {
            "amountRaw": [
                263
            ],
            "leverage": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "PresaleParticipation_stream_cursor_input": {
            "initial_value": [
                149
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "PresaleParticipation_stream_cursor_value_input": {
            "amountFormatted": [
                183
            ],
            "amountRaw": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "leverage": [
                261
            ],
            "presale_id": [
                183
            ],
            "timestamp": [
                261
            ],
            "transactionHash": [
                183
            ],
            "user_id": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "PresaleParticipation_sum_order_by": {
            "amountRaw": [
                263
            ],
            "leverage": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "PresaleParticipation_var_pop_order_by": {
            "amountRaw": [
                263
            ],
            "leverage": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "PresaleParticipation_var_samp_order_by": {
            "amountRaw": [
                263
            ],
            "leverage": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "PresaleParticipation_variance_order_by": {
            "amountRaw": [
                263
            ],
            "leverage": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "PriceCandle": {
            "closeFormatted": [
                183
            ],
            "closeRaw": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "highFormatted": [
                183
            ],
            "highRaw": [
                261
            ],
            "id": [
                183
            ],
            "lowFormatted": [
                183
            ],
            "lowRaw": [
                261
            ],
            "market_id": [
                183
            ],
            "openFormatted": [
                183
            ],
            "openRaw": [
                261
            ],
            "period": [
                225
            ],
            "timestamp": [
                261
            ],
            "trades": [
                261
            ],
            "volumeFormatted": [
                183
            ],
            "volumeRaw": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "PriceCandle_bool_exp": {
            "_and": [
                155
            ],
            "_not": [
                155
            ],
            "_or": [
                155
            ],
            "closeFormatted": [
                184
            ],
            "closeRaw": [
                262
            ],
            "db_write_timestamp": [
                279
            ],
            "highFormatted": [
                184
            ],
            "highRaw": [
                262
            ],
            "id": [
                184
            ],
            "lowFormatted": [
                184
            ],
            "lowRaw": [
                262
            ],
            "market_id": [
                184
            ],
            "openFormatted": [
                184
            ],
            "openRaw": [
                262
            ],
            "period": [
                226
            ],
            "timestamp": [
                262
            ],
            "trades": [
                262
            ],
            "volumeFormatted": [
                184
            ],
            "volumeRaw": [
                262
            ],
            "__typename": [
                183
            ]
        },
        "PriceCandle_order_by": {
            "closeFormatted": [
                263
            ],
            "closeRaw": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "highFormatted": [
                263
            ],
            "highRaw": [
                263
            ],
            "id": [
                263
            ],
            "lowFormatted": [
                263
            ],
            "lowRaw": [
                263
            ],
            "market_id": [
                263
            ],
            "openFormatted": [
                263
            ],
            "openRaw": [
                263
            ],
            "period": [
                263
            ],
            "timestamp": [
                263
            ],
            "trades": [
                263
            ],
            "volumeFormatted": [
                263
            ],
            "volumeRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "PriceCandle_select_column": {},
        "PriceCandle_stream_cursor_input": {
            "initial_value": [
                159
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "PriceCandle_stream_cursor_value_input": {
            "closeFormatted": [
                183
            ],
            "closeRaw": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "highFormatted": [
                183
            ],
            "highRaw": [
                261
            ],
            "id": [
                183
            ],
            "lowFormatted": [
                183
            ],
            "lowRaw": [
                261
            ],
            "market_id": [
                183
            ],
            "openFormatted": [
                183
            ],
            "openRaw": [
                261
            ],
            "period": [
                225
            ],
            "timestamp": [
                261
            ],
            "trades": [
                261
            ],
            "volumeFormatted": [
                183
            ],
            "volumeRaw": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "Stake": {
            "amountFormatted": [
                183
            ],
            "amountRaw": [
                261
            ],
            "contract_id": [
                183
            ],
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "lockDuration": [
                261
            ],
            "status": [
                276
            ],
            "timestamp": [
                261
            ],
            "transactionHash": [
                183
            ],
            "user_id": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "Stake_aggregate_order_by": {
            "avg": [
                162
            ],
            "count": [
                263
            ],
            "max": [
                164
            ],
            "min": [
                165
            ],
            "stddev": [
                168
            ],
            "stddev_pop": [
                169
            ],
            "stddev_samp": [
                170
            ],
            "sum": [
                173
            ],
            "var_pop": [
                174
            ],
            "var_samp": [
                175
            ],
            "variance": [
                176
            ],
            "__typename": [
                183
            ]
        },
        "Stake_avg_order_by": {
            "amountRaw": [
                263
            ],
            "lockDuration": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Stake_bool_exp": {
            "_and": [
                163
            ],
            "_not": [
                163
            ],
            "_or": [
                163
            ],
            "amountFormatted": [
                184
            ],
            "amountRaw": [
                262
            ],
            "contract_id": [
                184
            ],
            "db_write_timestamp": [
                279
            ],
            "id": [
                184
            ],
            "lockDuration": [
                262
            ],
            "status": [
                277
            ],
            "timestamp": [
                262
            ],
            "transactionHash": [
                184
            ],
            "user_id": [
                184
            ],
            "__typename": [
                183
            ]
        },
        "Stake_max_order_by": {
            "amountFormatted": [
                263
            ],
            "amountRaw": [
                263
            ],
            "contract_id": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "lockDuration": [
                263
            ],
            "status": [
                263
            ],
            "timestamp": [
                263
            ],
            "transactionHash": [
                263
            ],
            "user_id": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Stake_min_order_by": {
            "amountFormatted": [
                263
            ],
            "amountRaw": [
                263
            ],
            "contract_id": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "lockDuration": [
                263
            ],
            "status": [
                263
            ],
            "timestamp": [
                263
            ],
            "transactionHash": [
                263
            ],
            "user_id": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Stake_order_by": {
            "amountFormatted": [
                263
            ],
            "amountRaw": [
                263
            ],
            "contract_id": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "lockDuration": [
                263
            ],
            "status": [
                263
            ],
            "timestamp": [
                263
            ],
            "transactionHash": [
                263
            ],
            "user_id": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Stake_select_column": {},
        "Stake_stddev_order_by": {
            "amountRaw": [
                263
            ],
            "lockDuration": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Stake_stddev_pop_order_by": {
            "amountRaw": [
                263
            ],
            "lockDuration": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Stake_stddev_samp_order_by": {
            "amountRaw": [
                263
            ],
            "lockDuration": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Stake_stream_cursor_input": {
            "initial_value": [
                172
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "Stake_stream_cursor_value_input": {
            "amountFormatted": [
                183
            ],
            "amountRaw": [
                261
            ],
            "contract_id": [
                183
            ],
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "lockDuration": [
                261
            ],
            "status": [
                276
            ],
            "timestamp": [
                261
            ],
            "transactionHash": [
                183
            ],
            "user_id": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "Stake_sum_order_by": {
            "amountRaw": [
                263
            ],
            "lockDuration": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Stake_var_pop_order_by": {
            "amountRaw": [
                263
            ],
            "lockDuration": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Stake_var_samp_order_by": {
            "amountRaw": [
                263
            ],
            "lockDuration": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Stake_variance_order_by": {
            "amountRaw": [
                263
            ],
            "lockDuration": [
                263
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "StakingContract": {
            "createdAt": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "rewardToken_id": [
                183
            ],
            "stakes": [
                160,
                {
                    "distinct_on": [
                        167,
                        "[Stake_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        166,
                        "[Stake_order_by!]"
                    ],
                    "where": [
                        163
                    ]
                }
            ],
            "stakingToken_id": [
                183
            ],
            "totalRewardsFormatted": [
                183
            ],
            "totalRewardsRaw": [
                261
            ],
            "totalStakedFormatted": [
                183
            ],
            "totalStakedRaw": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "StakingContract_bool_exp": {
            "_and": [
                178
            ],
            "_not": [
                178
            ],
            "_or": [
                178
            ],
            "createdAt": [
                262
            ],
            "db_write_timestamp": [
                279
            ],
            "id": [
                184
            ],
            "rewardToken_id": [
                184
            ],
            "stakes": [
                163
            ],
            "stakingToken_id": [
                184
            ],
            "totalRewardsFormatted": [
                184
            ],
            "totalRewardsRaw": [
                262
            ],
            "totalStakedFormatted": [
                184
            ],
            "totalStakedRaw": [
                262
            ],
            "__typename": [
                183
            ]
        },
        "StakingContract_order_by": {
            "createdAt": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "rewardToken_id": [
                263
            ],
            "stakes_aggregate": [
                161
            ],
            "stakingToken_id": [
                263
            ],
            "totalRewardsFormatted": [
                263
            ],
            "totalRewardsRaw": [
                263
            ],
            "totalStakedFormatted": [
                263
            ],
            "totalStakedRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "StakingContract_select_column": {},
        "StakingContract_stream_cursor_input": {
            "initial_value": [
                182
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "StakingContract_stream_cursor_value_input": {
            "createdAt": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "rewardToken_id": [
                183
            ],
            "stakingToken_id": [
                183
            ],
            "totalRewardsFormatted": [
                183
            ],
            "totalRewardsRaw": [
                261
            ],
            "totalStakedFormatted": [
                183
            ],
            "totalStakedRaw": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                183
            ],
            "_gt": [
                183
            ],
            "_gte": [
                183
            ],
            "_ilike": [
                183
            ],
            "_in": [
                183
            ],
            "_iregex": [
                183
            ],
            "_is_null": [
                6
            ],
            "_like": [
                183
            ],
            "_lt": [
                183
            ],
            "_lte": [
                183
            ],
            "_neq": [
                183
            ],
            "_nilike": [
                183
            ],
            "_nin": [
                183
            ],
            "_niregex": [
                183
            ],
            "_nlike": [
                183
            ],
            "_nregex": [
                183
            ],
            "_nsimilar": [
                183
            ],
            "_regex": [
                183
            ],
            "_similar": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "Token": {
            "db_write_timestamp": [
                278
            ],
            "decimals": [
                54
            ],
            "id": [
                183
            ],
            "maxSupplyFormatted": [
                183
            ],
            "maxSupplyRaw": [
                261
            ],
            "name": [
                183
            ],
            "symbol": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "Token_bool_exp": {
            "_and": [
                186
            ],
            "_not": [
                186
            ],
            "_or": [
                186
            ],
            "db_write_timestamp": [
                279
            ],
            "decimals": [
                55
            ],
            "id": [
                184
            ],
            "maxSupplyFormatted": [
                184
            ],
            "maxSupplyRaw": [
                262
            ],
            "name": [
                184
            ],
            "symbol": [
                184
            ],
            "__typename": [
                183
            ]
        },
        "Token_order_by": {
            "db_write_timestamp": [
                263
            ],
            "decimals": [
                263
            ],
            "id": [
                263
            ],
            "maxSupplyFormatted": [
                263
            ],
            "maxSupplyRaw": [
                263
            ],
            "name": [
                263
            ],
            "symbol": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Token_select_column": {},
        "Token_stream_cursor_input": {
            "initial_value": [
                190
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "Token_stream_cursor_value_input": {
            "db_write_timestamp": [
                278
            ],
            "decimals": [
                54
            ],
            "id": [
                183
            ],
            "maxSupplyFormatted": [
                183
            ],
            "maxSupplyRaw": [
                261
            ],
            "name": [
                183
            ],
            "symbol": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "Trade": {
            "db_write_timestamp": [
                278
            ],
            "feeFormatted": [
                183
            ],
            "feeRaw": [
                261
            ],
            "id": [
                183
            ],
            "market_id": [
                183
            ],
            "newPriceFormatted": [
                183
            ],
            "newPriceRaw": [
                261
            ],
            "reserveAmountFormatted": [
                183
            ],
            "reserveAmountRaw": [
                261
            ],
            "timestamp": [
                261
            ],
            "tokenAmountFormatted": [
                183
            ],
            "tokenAmountRaw": [
                261
            ],
            "tradeType": [
                282
            ],
            "transactionHash": [
                183
            ],
            "user_id": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "Trade_aggregate_order_by": {
            "avg": [
                193
            ],
            "count": [
                263
            ],
            "max": [
                195
            ],
            "min": [
                196
            ],
            "stddev": [
                199
            ],
            "stddev_pop": [
                200
            ],
            "stddev_samp": [
                201
            ],
            "sum": [
                204
            ],
            "var_pop": [
                205
            ],
            "var_samp": [
                206
            ],
            "variance": [
                207
            ],
            "__typename": [
                183
            ]
        },
        "Trade_avg_order_by": {
            "feeRaw": [
                263
            ],
            "newPriceRaw": [
                263
            ],
            "reserveAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "tokenAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Trade_bool_exp": {
            "_and": [
                194
            ],
            "_not": [
                194
            ],
            "_or": [
                194
            ],
            "db_write_timestamp": [
                279
            ],
            "feeFormatted": [
                184
            ],
            "feeRaw": [
                262
            ],
            "id": [
                184
            ],
            "market_id": [
                184
            ],
            "newPriceFormatted": [
                184
            ],
            "newPriceRaw": [
                262
            ],
            "reserveAmountFormatted": [
                184
            ],
            "reserveAmountRaw": [
                262
            ],
            "timestamp": [
                262
            ],
            "tokenAmountFormatted": [
                184
            ],
            "tokenAmountRaw": [
                262
            ],
            "tradeType": [
                283
            ],
            "transactionHash": [
                184
            ],
            "user_id": [
                184
            ],
            "__typename": [
                183
            ]
        },
        "Trade_max_order_by": {
            "db_write_timestamp": [
                263
            ],
            "feeFormatted": [
                263
            ],
            "feeRaw": [
                263
            ],
            "id": [
                263
            ],
            "market_id": [
                263
            ],
            "newPriceFormatted": [
                263
            ],
            "newPriceRaw": [
                263
            ],
            "reserveAmountFormatted": [
                263
            ],
            "reserveAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "tokenAmountFormatted": [
                263
            ],
            "tokenAmountRaw": [
                263
            ],
            "tradeType": [
                263
            ],
            "transactionHash": [
                263
            ],
            "user_id": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Trade_min_order_by": {
            "db_write_timestamp": [
                263
            ],
            "feeFormatted": [
                263
            ],
            "feeRaw": [
                263
            ],
            "id": [
                263
            ],
            "market_id": [
                263
            ],
            "newPriceFormatted": [
                263
            ],
            "newPriceRaw": [
                263
            ],
            "reserveAmountFormatted": [
                263
            ],
            "reserveAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "tokenAmountFormatted": [
                263
            ],
            "tokenAmountRaw": [
                263
            ],
            "tradeType": [
                263
            ],
            "transactionHash": [
                263
            ],
            "user_id": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Trade_order_by": {
            "db_write_timestamp": [
                263
            ],
            "feeFormatted": [
                263
            ],
            "feeRaw": [
                263
            ],
            "id": [
                263
            ],
            "market_id": [
                263
            ],
            "newPriceFormatted": [
                263
            ],
            "newPriceRaw": [
                263
            ],
            "reserveAmountFormatted": [
                263
            ],
            "reserveAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "tokenAmountFormatted": [
                263
            ],
            "tokenAmountRaw": [
                263
            ],
            "tradeType": [
                263
            ],
            "transactionHash": [
                263
            ],
            "user_id": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Trade_select_column": {},
        "Trade_stddev_order_by": {
            "feeRaw": [
                263
            ],
            "newPriceRaw": [
                263
            ],
            "reserveAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "tokenAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Trade_stddev_pop_order_by": {
            "feeRaw": [
                263
            ],
            "newPriceRaw": [
                263
            ],
            "reserveAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "tokenAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Trade_stddev_samp_order_by": {
            "feeRaw": [
                263
            ],
            "newPriceRaw": [
                263
            ],
            "reserveAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "tokenAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Trade_stream_cursor_input": {
            "initial_value": [
                203
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "Trade_stream_cursor_value_input": {
            "db_write_timestamp": [
                278
            ],
            "feeFormatted": [
                183
            ],
            "feeRaw": [
                261
            ],
            "id": [
                183
            ],
            "market_id": [
                183
            ],
            "newPriceFormatted": [
                183
            ],
            "newPriceRaw": [
                261
            ],
            "reserveAmountFormatted": [
                183
            ],
            "reserveAmountRaw": [
                261
            ],
            "timestamp": [
                261
            ],
            "tokenAmountFormatted": [
                183
            ],
            "tokenAmountRaw": [
                261
            ],
            "tradeType": [
                282
            ],
            "transactionHash": [
                183
            ],
            "user_id": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "Trade_sum_order_by": {
            "feeRaw": [
                263
            ],
            "newPriceRaw": [
                263
            ],
            "reserveAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "tokenAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Trade_var_pop_order_by": {
            "feeRaw": [
                263
            ],
            "newPriceRaw": [
                263
            ],
            "reserveAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "tokenAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Trade_var_samp_order_by": {
            "feeRaw": [
                263
            ],
            "newPriceRaw": [
                263
            ],
            "reserveAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "tokenAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "Trade_variance_order_by": {
            "feeRaw": [
                263
            ],
            "newPriceRaw": [
                263
            ],
            "reserveAmountRaw": [
                263
            ],
            "timestamp": [
                263
            ],
            "tokenAmountRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "UserMarketPosition": {
            "claimableRewardsFormatted": [
                183
            ],
            "claimableRewardsRaw": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "lastUpdatedAt": [
                261
            ],
            "lockedCollateralFormatted": [
                183
            ],
            "lockedCollateralRaw": [
                261
            ],
            "market_id": [
                183
            ],
            "netFTokenChangeFormatted": [
                183
            ],
            "netFTokenChangeRaw": [
                261
            ],
            "presaleDepositFormatted": [
                183
            ],
            "presaleDepositRaw": [
                261
            ],
            "presaleLeverage": [
                261
            ],
            "stakedAmountFormatted": [
                183
            ],
            "stakedAmountRaw": [
                261
            ],
            "totalDebtFormatted": [
                183
            ],
            "totalDebtRaw": [
                261
            ],
            "user_id": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "UserMarketPosition_aggregate_order_by": {
            "avg": [
                210
            ],
            "count": [
                263
            ],
            "max": [
                212
            ],
            "min": [
                213
            ],
            "stddev": [
                216
            ],
            "stddev_pop": [
                217
            ],
            "stddev_samp": [
                218
            ],
            "sum": [
                221
            ],
            "var_pop": [
                222
            ],
            "var_samp": [
                223
            ],
            "variance": [
                224
            ],
            "__typename": [
                183
            ]
        },
        "UserMarketPosition_avg_order_by": {
            "claimableRewardsRaw": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "netFTokenChangeRaw": [
                263
            ],
            "presaleDepositRaw": [
                263
            ],
            "presaleLeverage": [
                263
            ],
            "stakedAmountRaw": [
                263
            ],
            "totalDebtRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "UserMarketPosition_bool_exp": {
            "_and": [
                211
            ],
            "_not": [
                211
            ],
            "_or": [
                211
            ],
            "claimableRewardsFormatted": [
                184
            ],
            "claimableRewardsRaw": [
                262
            ],
            "db_write_timestamp": [
                279
            ],
            "id": [
                184
            ],
            "lastUpdatedAt": [
                262
            ],
            "lockedCollateralFormatted": [
                184
            ],
            "lockedCollateralRaw": [
                262
            ],
            "market_id": [
                184
            ],
            "netFTokenChangeFormatted": [
                184
            ],
            "netFTokenChangeRaw": [
                262
            ],
            "presaleDepositFormatted": [
                184
            ],
            "presaleDepositRaw": [
                262
            ],
            "presaleLeverage": [
                262
            ],
            "stakedAmountFormatted": [
                184
            ],
            "stakedAmountRaw": [
                262
            ],
            "totalDebtFormatted": [
                184
            ],
            "totalDebtRaw": [
                262
            ],
            "user_id": [
                184
            ],
            "__typename": [
                183
            ]
        },
        "UserMarketPosition_max_order_by": {
            "claimableRewardsFormatted": [
                263
            ],
            "claimableRewardsRaw": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralFormatted": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "market_id": [
                263
            ],
            "netFTokenChangeFormatted": [
                263
            ],
            "netFTokenChangeRaw": [
                263
            ],
            "presaleDepositFormatted": [
                263
            ],
            "presaleDepositRaw": [
                263
            ],
            "presaleLeverage": [
                263
            ],
            "stakedAmountFormatted": [
                263
            ],
            "stakedAmountRaw": [
                263
            ],
            "totalDebtFormatted": [
                263
            ],
            "totalDebtRaw": [
                263
            ],
            "user_id": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "UserMarketPosition_min_order_by": {
            "claimableRewardsFormatted": [
                263
            ],
            "claimableRewardsRaw": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralFormatted": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "market_id": [
                263
            ],
            "netFTokenChangeFormatted": [
                263
            ],
            "netFTokenChangeRaw": [
                263
            ],
            "presaleDepositFormatted": [
                263
            ],
            "presaleDepositRaw": [
                263
            ],
            "presaleLeverage": [
                263
            ],
            "stakedAmountFormatted": [
                263
            ],
            "stakedAmountRaw": [
                263
            ],
            "totalDebtFormatted": [
                263
            ],
            "totalDebtRaw": [
                263
            ],
            "user_id": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "UserMarketPosition_order_by": {
            "claimableRewardsFormatted": [
                263
            ],
            "claimableRewardsRaw": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "id": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralFormatted": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "market_id": [
                263
            ],
            "netFTokenChangeFormatted": [
                263
            ],
            "netFTokenChangeRaw": [
                263
            ],
            "presaleDepositFormatted": [
                263
            ],
            "presaleDepositRaw": [
                263
            ],
            "presaleLeverage": [
                263
            ],
            "stakedAmountFormatted": [
                263
            ],
            "stakedAmountRaw": [
                263
            ],
            "totalDebtFormatted": [
                263
            ],
            "totalDebtRaw": [
                263
            ],
            "user_id": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "UserMarketPosition_select_column": {},
        "UserMarketPosition_stddev_order_by": {
            "claimableRewardsRaw": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "netFTokenChangeRaw": [
                263
            ],
            "presaleDepositRaw": [
                263
            ],
            "presaleLeverage": [
                263
            ],
            "stakedAmountRaw": [
                263
            ],
            "totalDebtRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "UserMarketPosition_stddev_pop_order_by": {
            "claimableRewardsRaw": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "netFTokenChangeRaw": [
                263
            ],
            "presaleDepositRaw": [
                263
            ],
            "presaleLeverage": [
                263
            ],
            "stakedAmountRaw": [
                263
            ],
            "totalDebtRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "UserMarketPosition_stddev_samp_order_by": {
            "claimableRewardsRaw": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "netFTokenChangeRaw": [
                263
            ],
            "presaleDepositRaw": [
                263
            ],
            "presaleLeverage": [
                263
            ],
            "stakedAmountRaw": [
                263
            ],
            "totalDebtRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "UserMarketPosition_stream_cursor_input": {
            "initial_value": [
                220
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "UserMarketPosition_stream_cursor_value_input": {
            "claimableRewardsFormatted": [
                183
            ],
            "claimableRewardsRaw": [
                261
            ],
            "db_write_timestamp": [
                278
            ],
            "id": [
                183
            ],
            "lastUpdatedAt": [
                261
            ],
            "lockedCollateralFormatted": [
                183
            ],
            "lockedCollateralRaw": [
                261
            ],
            "market_id": [
                183
            ],
            "netFTokenChangeFormatted": [
                183
            ],
            "netFTokenChangeRaw": [
                261
            ],
            "presaleDepositFormatted": [
                183
            ],
            "presaleDepositRaw": [
                261
            ],
            "presaleLeverage": [
                261
            ],
            "stakedAmountFormatted": [
                183
            ],
            "stakedAmountRaw": [
                261
            ],
            "totalDebtFormatted": [
                183
            ],
            "totalDebtRaw": [
                261
            ],
            "user_id": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "UserMarketPosition_sum_order_by": {
            "claimableRewardsRaw": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "netFTokenChangeRaw": [
                263
            ],
            "presaleDepositRaw": [
                263
            ],
            "presaleLeverage": [
                263
            ],
            "stakedAmountRaw": [
                263
            ],
            "totalDebtRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "UserMarketPosition_var_pop_order_by": {
            "claimableRewardsRaw": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "netFTokenChangeRaw": [
                263
            ],
            "presaleDepositRaw": [
                263
            ],
            "presaleLeverage": [
                263
            ],
            "stakedAmountRaw": [
                263
            ],
            "totalDebtRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "UserMarketPosition_var_samp_order_by": {
            "claimableRewardsRaw": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "netFTokenChangeRaw": [
                263
            ],
            "presaleDepositRaw": [
                263
            ],
            "presaleLeverage": [
                263
            ],
            "stakedAmountRaw": [
                263
            ],
            "totalDebtRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "UserMarketPosition_variance_order_by": {
            "claimableRewardsRaw": [
                263
            ],
            "lastUpdatedAt": [
                263
            ],
            "lockedCollateralRaw": [
                263
            ],
            "netFTokenChangeRaw": [
                263
            ],
            "presaleDepositRaw": [
                263
            ],
            "presaleLeverage": [
                263
            ],
            "stakedAmountRaw": [
                263
            ],
            "totalDebtRaw": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "candleperiod": {},
        "candleperiod_comparison_exp": {
            "_eq": [
                225
            ],
            "_gt": [
                225
            ],
            "_gte": [
                225
            ],
            "_in": [
                225
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                225
            ],
            "_lte": [
                225
            ],
            "_neq": [
                225
            ],
            "_nin": [
                225
            ],
            "__typename": [
                183
            ]
        },
        "chain_metadata": {
            "block_height": [
                54
            ],
            "chain_id": [
                54
            ],
            "end_block": [
                54
            ],
            "first_event_block_number": [
                54
            ],
            "is_hyper_sync": [
                6
            ],
            "latest_fetched_block_number": [
                54
            ],
            "latest_processed_block": [
                54
            ],
            "num_batches_fetched": [
                54
            ],
            "num_events_processed": [
                54
            ],
            "start_block": [
                54
            ],
            "timestamp_caught_up_to_head_or_endblock": [
                280
            ],
            "__typename": [
                183
            ]
        },
        "chain_metadata_bool_exp": {
            "_and": [
                228
            ],
            "_not": [
                228
            ],
            "_or": [
                228
            ],
            "block_height": [
                55
            ],
            "chain_id": [
                55
            ],
            "end_block": [
                55
            ],
            "first_event_block_number": [
                55
            ],
            "is_hyper_sync": [
                7
            ],
            "latest_fetched_block_number": [
                55
            ],
            "latest_processed_block": [
                55
            ],
            "num_batches_fetched": [
                55
            ],
            "num_events_processed": [
                55
            ],
            "start_block": [
                55
            ],
            "timestamp_caught_up_to_head_or_endblock": [
                281
            ],
            "__typename": [
                183
            ]
        },
        "chain_metadata_order_by": {
            "block_height": [
                263
            ],
            "chain_id": [
                263
            ],
            "end_block": [
                263
            ],
            "first_event_block_number": [
                263
            ],
            "is_hyper_sync": [
                263
            ],
            "latest_fetched_block_number": [
                263
            ],
            "latest_processed_block": [
                263
            ],
            "num_batches_fetched": [
                263
            ],
            "num_events_processed": [
                263
            ],
            "start_block": [
                263
            ],
            "timestamp_caught_up_to_head_or_endblock": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "chain_metadata_select_column": {},
        "chain_metadata_stream_cursor_input": {
            "initial_value": [
                232
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "chain_metadata_stream_cursor_value_input": {
            "block_height": [
                54
            ],
            "chain_id": [
                54
            ],
            "end_block": [
                54
            ],
            "first_event_block_number": [
                54
            ],
            "is_hyper_sync": [
                6
            ],
            "latest_fetched_block_number": [
                54
            ],
            "latest_processed_block": [
                54
            ],
            "num_batches_fetched": [
                54
            ],
            "num_events_processed": [
                54
            ],
            "start_block": [
                54
            ],
            "timestamp_caught_up_to_head_or_endblock": [
                280
            ],
            "__typename": [
                183
            ]
        },
        "contract_type": {},
        "contract_type_comparison_exp": {
            "_eq": [
                233
            ],
            "_gt": [
                233
            ],
            "_gte": [
                233
            ],
            "_in": [
                233
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                233
            ],
            "_lte": [
                233
            ],
            "_neq": [
                233
            ],
            "_nin": [
                233
            ],
            "__typename": [
                183
            ]
        },
        "cursor_ordering": {},
        "dynamic_contract_registry": {
            "chain_id": [
                54
            ],
            "contract_address": [
                183
            ],
            "contract_type": [
                233
            ],
            "id": [
                183
            ],
            "registering_event_block_number": [
                54
            ],
            "registering_event_block_timestamp": [
                54
            ],
            "registering_event_contract_name": [
                183
            ],
            "registering_event_log_index": [
                54
            ],
            "registering_event_name": [
                183
            ],
            "registering_event_src_address": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "dynamic_contract_registry_bool_exp": {
            "_and": [
                237
            ],
            "_not": [
                237
            ],
            "_or": [
                237
            ],
            "chain_id": [
                55
            ],
            "contract_address": [
                184
            ],
            "contract_type": [
                234
            ],
            "id": [
                184
            ],
            "registering_event_block_number": [
                55
            ],
            "registering_event_block_timestamp": [
                55
            ],
            "registering_event_contract_name": [
                184
            ],
            "registering_event_log_index": [
                55
            ],
            "registering_event_name": [
                184
            ],
            "registering_event_src_address": [
                184
            ],
            "__typename": [
                183
            ]
        },
        "dynamic_contract_registry_order_by": {
            "chain_id": [
                263
            ],
            "contract_address": [
                263
            ],
            "contract_type": [
                263
            ],
            "id": [
                263
            ],
            "registering_event_block_number": [
                263
            ],
            "registering_event_block_timestamp": [
                263
            ],
            "registering_event_contract_name": [
                263
            ],
            "registering_event_log_index": [
                263
            ],
            "registering_event_name": [
                263
            ],
            "registering_event_src_address": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "dynamic_contract_registry_select_column": {},
        "dynamic_contract_registry_stream_cursor_input": {
            "initial_value": [
                241
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "dynamic_contract_registry_stream_cursor_value_input": {
            "chain_id": [
                54
            ],
            "contract_address": [
                183
            ],
            "contract_type": [
                233
            ],
            "id": [
                183
            ],
            "registering_event_block_number": [
                54
            ],
            "registering_event_block_timestamp": [
                54
            ],
            "registering_event_contract_name": [
                183
            ],
            "registering_event_log_index": [
                54
            ],
            "registering_event_name": [
                183
            ],
            "registering_event_src_address": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "end_of_block_range_scanned_data": {
            "block_hash": [
                183
            ],
            "block_number": [
                54
            ],
            "chain_id": [
                54
            ],
            "__typename": [
                183
            ]
        },
        "end_of_block_range_scanned_data_bool_exp": {
            "_and": [
                243
            ],
            "_not": [
                243
            ],
            "_or": [
                243
            ],
            "block_hash": [
                184
            ],
            "block_number": [
                55
            ],
            "chain_id": [
                55
            ],
            "__typename": [
                183
            ]
        },
        "end_of_block_range_scanned_data_order_by": {
            "block_hash": [
                263
            ],
            "block_number": [
                263
            ],
            "chain_id": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "end_of_block_range_scanned_data_select_column": {},
        "end_of_block_range_scanned_data_stream_cursor_input": {
            "initial_value": [
                247
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "end_of_block_range_scanned_data_stream_cursor_value_input": {
            "block_hash": [
                183
            ],
            "block_number": [
                54
            ],
            "chain_id": [
                54
            ],
            "__typename": [
                183
            ]
        },
        "event_sync_state": {
            "block_number": [
                54
            ],
            "block_timestamp": [
                54
            ],
            "chain_id": [
                54
            ],
            "is_pre_registering_dynamic_contracts": [
                6
            ],
            "log_index": [
                54
            ],
            "__typename": [
                183
            ]
        },
        "event_sync_state_bool_exp": {
            "_and": [
                249
            ],
            "_not": [
                249
            ],
            "_or": [
                249
            ],
            "block_number": [
                55
            ],
            "block_timestamp": [
                55
            ],
            "chain_id": [
                55
            ],
            "is_pre_registering_dynamic_contracts": [
                7
            ],
            "log_index": [
                55
            ],
            "__typename": [
                183
            ]
        },
        "event_sync_state_order_by": {
            "block_number": [
                263
            ],
            "block_timestamp": [
                263
            ],
            "chain_id": [
                263
            ],
            "is_pre_registering_dynamic_contracts": [
                263
            ],
            "log_index": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "event_sync_state_select_column": {},
        "event_sync_state_stream_cursor_input": {
            "initial_value": [
                253
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "event_sync_state_stream_cursor_value_input": {
            "block_number": [
                54
            ],
            "block_timestamp": [
                54
            ],
            "chain_id": [
                54
            ],
            "is_pre_registering_dynamic_contracts": [
                6
            ],
            "log_index": [
                54
            ],
            "__typename": [
                183
            ]
        },
        "jsonb": {},
        "jsonb_cast_exp": {
            "String": [
                184
            ],
            "__typename": [
                183
            ]
        },
        "jsonb_comparison_exp": {
            "_cast": [
                255
            ],
            "_contained_in": [
                254
            ],
            "_contains": [
                254
            ],
            "_eq": [
                254
            ],
            "_gt": [
                254
            ],
            "_gte": [
                254
            ],
            "_has_key": [
                183
            ],
            "_has_keys_all": [
                183
            ],
            "_has_keys_any": [
                183
            ],
            "_in": [
                254
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                254
            ],
            "_lte": [
                254
            ],
            "_neq": [
                254
            ],
            "_nin": [
                254
            ],
            "__typename": [
                183
            ]
        },
        "loanstatus": {},
        "loanstatus_comparison_exp": {
            "_eq": [
                257
            ],
            "_gt": [
                257
            ],
            "_gte": [
                257
            ],
            "_in": [
                257
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                257
            ],
            "_lte": [
                257
            ],
            "_neq": [
                257
            ],
            "_nin": [
                257
            ],
            "__typename": [
                183
            ]
        },
        "marketstatus": {},
        "marketstatus_comparison_exp": {
            "_eq": [
                259
            ],
            "_gt": [
                259
            ],
            "_gte": [
                259
            ],
            "_in": [
                259
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                259
            ],
            "_lte": [
                259
            ],
            "_neq": [
                259
            ],
            "_nin": [
                259
            ],
            "__typename": [
                183
            ]
        },
        "numeric": {},
        "numeric_comparison_exp": {
            "_eq": [
                261
            ],
            "_gt": [
                261
            ],
            "_gte": [
                261
            ],
            "_in": [
                261
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                261
            ],
            "_lte": [
                261
            ],
            "_neq": [
                261
            ],
            "_nin": [
                261
            ],
            "__typename": [
                183
            ]
        },
        "order_by": {},
        "persisted_state": {
            "abi_files_hash": [
                183
            ],
            "config_hash": [
                183
            ],
            "envio_version": [
                183
            ],
            "handler_files_hash": [
                183
            ],
            "id": [
                54
            ],
            "schema_hash": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "persisted_state_bool_exp": {
            "_and": [
                265
            ],
            "_not": [
                265
            ],
            "_or": [
                265
            ],
            "abi_files_hash": [
                184
            ],
            "config_hash": [
                184
            ],
            "envio_version": [
                184
            ],
            "handler_files_hash": [
                184
            ],
            "id": [
                55
            ],
            "schema_hash": [
                184
            ],
            "__typename": [
                183
            ]
        },
        "persisted_state_order_by": {
            "abi_files_hash": [
                263
            ],
            "config_hash": [
                263
            ],
            "envio_version": [
                263
            ],
            "handler_files_hash": [
                263
            ],
            "id": [
                263
            ],
            "schema_hash": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "persisted_state_select_column": {},
        "persisted_state_stream_cursor_input": {
            "initial_value": [
                269
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "persisted_state_stream_cursor_value_input": {
            "abi_files_hash": [
                183
            ],
            "config_hash": [
                183
            ],
            "envio_version": [
                183
            ],
            "handler_files_hash": [
                183
            ],
            "id": [
                54
            ],
            "schema_hash": [
                183
            ],
            "__typename": [
                183
            ]
        },
        "raw_events": {
            "block_fields": [
                254,
                {
                    "path": [
                        183
                    ]
                }
            ],
            "block_hash": [
                183
            ],
            "block_number": [
                54
            ],
            "block_timestamp": [
                54
            ],
            "chain_id": [
                54
            ],
            "contract_name": [
                183
            ],
            "db_write_timestamp": [
                278
            ],
            "event_id": [
                261
            ],
            "event_name": [
                183
            ],
            "log_index": [
                54
            ],
            "params": [
                254,
                {
                    "path": [
                        183
                    ]
                }
            ],
            "serial": [
                54
            ],
            "src_address": [
                183
            ],
            "transaction_fields": [
                254,
                {
                    "path": [
                        183
                    ]
                }
            ],
            "__typename": [
                183
            ]
        },
        "raw_events_bool_exp": {
            "_and": [
                271
            ],
            "_not": [
                271
            ],
            "_or": [
                271
            ],
            "block_fields": [
                256
            ],
            "block_hash": [
                184
            ],
            "block_number": [
                55
            ],
            "block_timestamp": [
                55
            ],
            "chain_id": [
                55
            ],
            "contract_name": [
                184
            ],
            "db_write_timestamp": [
                279
            ],
            "event_id": [
                262
            ],
            "event_name": [
                184
            ],
            "log_index": [
                55
            ],
            "params": [
                256
            ],
            "serial": [
                55
            ],
            "src_address": [
                184
            ],
            "transaction_fields": [
                256
            ],
            "__typename": [
                183
            ]
        },
        "raw_events_order_by": {
            "block_fields": [
                263
            ],
            "block_hash": [
                263
            ],
            "block_number": [
                263
            ],
            "block_timestamp": [
                263
            ],
            "chain_id": [
                263
            ],
            "contract_name": [
                263
            ],
            "db_write_timestamp": [
                263
            ],
            "event_id": [
                263
            ],
            "event_name": [
                263
            ],
            "log_index": [
                263
            ],
            "params": [
                263
            ],
            "serial": [
                263
            ],
            "src_address": [
                263
            ],
            "transaction_fields": [
                263
            ],
            "__typename": [
                183
            ]
        },
        "raw_events_select_column": {},
        "raw_events_stream_cursor_input": {
            "initial_value": [
                275
            ],
            "ordering": [
                235
            ],
            "__typename": [
                183
            ]
        },
        "raw_events_stream_cursor_value_input": {
            "block_fields": [
                254
            ],
            "block_hash": [
                183
            ],
            "block_number": [
                54
            ],
            "block_timestamp": [
                54
            ],
            "chain_id": [
                54
            ],
            "contract_name": [
                183
            ],
            "db_write_timestamp": [
                278
            ],
            "event_id": [
                261
            ],
            "event_name": [
                183
            ],
            "log_index": [
                54
            ],
            "params": [
                254
            ],
            "serial": [
                54
            ],
            "src_address": [
                183
            ],
            "transaction_fields": [
                254
            ],
            "__typename": [
                183
            ]
        },
        "stakestatus": {},
        "stakestatus_comparison_exp": {
            "_eq": [
                276
            ],
            "_gt": [
                276
            ],
            "_gte": [
                276
            ],
            "_in": [
                276
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                276
            ],
            "_lte": [
                276
            ],
            "_neq": [
                276
            ],
            "_nin": [
                276
            ],
            "__typename": [
                183
            ]
        },
        "timestamp": {},
        "timestamp_comparison_exp": {
            "_eq": [
                278
            ],
            "_gt": [
                278
            ],
            "_gte": [
                278
            ],
            "_in": [
                278
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                278
            ],
            "_lte": [
                278
            ],
            "_neq": [
                278
            ],
            "_nin": [
                278
            ],
            "__typename": [
                183
            ]
        },
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                280
            ],
            "_gt": [
                280
            ],
            "_gte": [
                280
            ],
            "_in": [
                280
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                280
            ],
            "_lte": [
                280
            ],
            "_neq": [
                280
            ],
            "_nin": [
                280
            ],
            "__typename": [
                183
            ]
        },
        "tradetype": {},
        "tradetype_comparison_exp": {
            "_eq": [
                282
            ],
            "_gt": [
                282
            ],
            "_gte": [
                282
            ],
            "_in": [
                282
            ],
            "_is_null": [
                6
            ],
            "_lt": [
                282
            ],
            "_lte": [
                282
            ],
            "_neq": [
                282
            ],
            "_nin": [
                282
            ],
            "__typename": [
                183
            ]
        },
        "Query": {
            "Account": [
                0,
                {
                    "distinct_on": [
                        3,
                        "[Account_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        2,
                        "[Account_order_by!]"
                    ],
                    "where": [
                        1
                    ]
                }
            ],
            "Account_by_pk": [
                0,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "CreditFacilityContract": [
                8,
                {
                    "distinct_on": [
                        11,
                        "[CreditFacilityContract_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        10,
                        "[CreditFacilityContract_order_by!]"
                    ],
                    "where": [
                        9
                    ]
                }
            ],
            "CreditFacilityContract_by_pk": [
                8,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "FeeDistribution": [
                14,
                {
                    "distinct_on": [
                        21,
                        "[FeeDistribution_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        20,
                        "[FeeDistribution_order_by!]"
                    ],
                    "where": [
                        17
                    ]
                }
            ],
            "FeeDistribution_by_pk": [
                14,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "FloorElevation": [
                31,
                {
                    "distinct_on": [
                        38,
                        "[FloorElevation_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        37,
                        "[FloorElevation_order_by!]"
                    ],
                    "where": [
                        34
                    ]
                }
            ],
            "FloorElevation_by_pk": [
                31,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "GlobalStats": [
                48,
                {
                    "distinct_on": [
                        51,
                        "[GlobalStats_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        50,
                        "[GlobalStats_order_by!]"
                    ],
                    "where": [
                        49
                    ]
                }
            ],
            "GlobalStats_by_pk": [
                48,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "Loan": [
                56,
                {
                    "distinct_on": [
                        80,
                        "[Loan_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        79,
                        "[Loan_order_by!]"
                    ],
                    "where": [
                        76
                    ]
                }
            ],
            "LoanStatusHistory": [
                57,
                {
                    "distinct_on": [
                        64,
                        "[LoanStatusHistory_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        63,
                        "[LoanStatusHistory_order_by!]"
                    ],
                    "where": [
                        60
                    ]
                }
            ],
            "LoanStatusHistory_by_pk": [
                57,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "Loan_by_pk": [
                56,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "Market": [
                90,
                {
                    "distinct_on": [
                        109,
                        "[Market_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        108,
                        "[Market_order_by!]"
                    ],
                    "where": [
                        105
                    ]
                }
            ],
            "MarketRollingStats": [
                91,
                {
                    "distinct_on": [
                        94,
                        "[MarketRollingStats_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        93,
                        "[MarketRollingStats_order_by!]"
                    ],
                    "where": [
                        92
                    ]
                }
            ],
            "MarketRollingStats_by_pk": [
                91,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "MarketSnapshot": [
                97,
                {
                    "distinct_on": [
                        100,
                        "[MarketSnapshot_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        99,
                        "[MarketSnapshot_order_by!]"
                    ],
                    "where": [
                        98
                    ]
                }
            ],
            "MarketSnapshot_by_pk": [
                97,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "Market_by_pk": [
                90,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "ModuleAddress": [
                119,
                {
                    "distinct_on": [
                        122,
                        "[ModuleAddress_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        121,
                        "[ModuleAddress_order_by!]"
                    ],
                    "where": [
                        120
                    ]
                }
            ],
            "ModuleAddress_by_pk": [
                119,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "ModuleRegistry": [
                125,
                {
                    "distinct_on": [
                        128,
                        "[ModuleRegistry_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        127,
                        "[ModuleRegistry_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "ModuleRegistry_by_pk": [
                125,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "PreSaleContract": [
                131,
                {
                    "distinct_on": [
                        134,
                        "[PreSaleContract_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        133,
                        "[PreSaleContract_order_by!]"
                    ],
                    "where": [
                        132
                    ]
                }
            ],
            "PreSaleContract_by_pk": [
                131,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "PresaleParticipation": [
                137,
                {
                    "distinct_on": [
                        144,
                        "[PresaleParticipation_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        143,
                        "[PresaleParticipation_order_by!]"
                    ],
                    "where": [
                        140
                    ]
                }
            ],
            "PresaleParticipation_by_pk": [
                137,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "PriceCandle": [
                154,
                {
                    "distinct_on": [
                        157,
                        "[PriceCandle_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        156,
                        "[PriceCandle_order_by!]"
                    ],
                    "where": [
                        155
                    ]
                }
            ],
            "PriceCandle_by_pk": [
                154,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "Stake": [
                160,
                {
                    "distinct_on": [
                        167,
                        "[Stake_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        166,
                        "[Stake_order_by!]"
                    ],
                    "where": [
                        163
                    ]
                }
            ],
            "Stake_by_pk": [
                160,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "StakingContract": [
                177,
                {
                    "distinct_on": [
                        180,
                        "[StakingContract_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        179,
                        "[StakingContract_order_by!]"
                    ],
                    "where": [
                        178
                    ]
                }
            ],
            "StakingContract_by_pk": [
                177,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "Token": [
                185,
                {
                    "distinct_on": [
                        188,
                        "[Token_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        187,
                        "[Token_order_by!]"
                    ],
                    "where": [
                        186
                    ]
                }
            ],
            "Token_by_pk": [
                185,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "Trade": [
                191,
                {
                    "distinct_on": [
                        198,
                        "[Trade_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        197,
                        "[Trade_order_by!]"
                    ],
                    "where": [
                        194
                    ]
                }
            ],
            "Trade_by_pk": [
                191,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "UserMarketPosition": [
                208,
                {
                    "distinct_on": [
                        215,
                        "[UserMarketPosition_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        214,
                        "[UserMarketPosition_order_by!]"
                    ],
                    "where": [
                        211
                    ]
                }
            ],
            "UserMarketPosition_by_pk": [
                208,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "chain_metadata": [
                227,
                {
                    "distinct_on": [
                        230,
                        "[chain_metadata_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        229,
                        "[chain_metadata_order_by!]"
                    ],
                    "where": [
                        228
                    ]
                }
            ],
            "chain_metadata_by_pk": [
                227,
                {
                    "chain_id": [
                        54,
                        "Int!"
                    ]
                }
            ],
            "dynamic_contract_registry": [
                236,
                {
                    "distinct_on": [
                        239,
                        "[dynamic_contract_registry_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        238,
                        "[dynamic_contract_registry_order_by!]"
                    ],
                    "where": [
                        237
                    ]
                }
            ],
            "dynamic_contract_registry_by_pk": [
                236,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "end_of_block_range_scanned_data": [
                242,
                {
                    "distinct_on": [
                        245,
                        "[end_of_block_range_scanned_data_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        244,
                        "[end_of_block_range_scanned_data_order_by!]"
                    ],
                    "where": [
                        243
                    ]
                }
            ],
            "end_of_block_range_scanned_data_by_pk": [
                242,
                {
                    "block_number": [
                        54,
                        "Int!"
                    ],
                    "chain_id": [
                        54,
                        "Int!"
                    ]
                }
            ],
            "event_sync_state": [
                248,
                {
                    "distinct_on": [
                        251,
                        "[event_sync_state_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        250,
                        "[event_sync_state_order_by!]"
                    ],
                    "where": [
                        249
                    ]
                }
            ],
            "event_sync_state_by_pk": [
                248,
                {
                    "chain_id": [
                        54,
                        "Int!"
                    ]
                }
            ],
            "persisted_state": [
                264,
                {
                    "distinct_on": [
                        267,
                        "[persisted_state_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        266,
                        "[persisted_state_order_by!]"
                    ],
                    "where": [
                        265
                    ]
                }
            ],
            "persisted_state_by_pk": [
                264,
                {
                    "id": [
                        54,
                        "Int!"
                    ]
                }
            ],
            "raw_events": [
                270,
                {
                    "distinct_on": [
                        273,
                        "[raw_events_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        272,
                        "[raw_events_order_by!]"
                    ],
                    "where": [
                        271
                    ]
                }
            ],
            "raw_events_by_pk": [
                270,
                {
                    "serial": [
                        54,
                        "Int!"
                    ]
                }
            ],
            "__typename": [
                183
            ]
        },
        "Subscription": {
            "Account": [
                0,
                {
                    "distinct_on": [
                        3,
                        "[Account_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        2,
                        "[Account_order_by!]"
                    ],
                    "where": [
                        1
                    ]
                }
            ],
            "Account_by_pk": [
                0,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "Account_stream": [
                0,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        4,
                        "[Account_stream_cursor_input]!"
                    ],
                    "where": [
                        1
                    ]
                }
            ],
            "CreditFacilityContract": [
                8,
                {
                    "distinct_on": [
                        11,
                        "[CreditFacilityContract_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        10,
                        "[CreditFacilityContract_order_by!]"
                    ],
                    "where": [
                        9
                    ]
                }
            ],
            "CreditFacilityContract_by_pk": [
                8,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "CreditFacilityContract_stream": [
                8,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        12,
                        "[CreditFacilityContract_stream_cursor_input]!"
                    ],
                    "where": [
                        9
                    ]
                }
            ],
            "FeeDistribution": [
                14,
                {
                    "distinct_on": [
                        21,
                        "[FeeDistribution_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        20,
                        "[FeeDistribution_order_by!]"
                    ],
                    "where": [
                        17
                    ]
                }
            ],
            "FeeDistribution_by_pk": [
                14,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "FeeDistribution_stream": [
                14,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        25,
                        "[FeeDistribution_stream_cursor_input]!"
                    ],
                    "where": [
                        17
                    ]
                }
            ],
            "FloorElevation": [
                31,
                {
                    "distinct_on": [
                        38,
                        "[FloorElevation_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        37,
                        "[FloorElevation_order_by!]"
                    ],
                    "where": [
                        34
                    ]
                }
            ],
            "FloorElevation_by_pk": [
                31,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "FloorElevation_stream": [
                31,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        42,
                        "[FloorElevation_stream_cursor_input]!"
                    ],
                    "where": [
                        34
                    ]
                }
            ],
            "GlobalStats": [
                48,
                {
                    "distinct_on": [
                        51,
                        "[GlobalStats_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        50,
                        "[GlobalStats_order_by!]"
                    ],
                    "where": [
                        49
                    ]
                }
            ],
            "GlobalStats_by_pk": [
                48,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "GlobalStats_stream": [
                48,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        52,
                        "[GlobalStats_stream_cursor_input]!"
                    ],
                    "where": [
                        49
                    ]
                }
            ],
            "Loan": [
                56,
                {
                    "distinct_on": [
                        80,
                        "[Loan_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        79,
                        "[Loan_order_by!]"
                    ],
                    "where": [
                        76
                    ]
                }
            ],
            "LoanStatusHistory": [
                57,
                {
                    "distinct_on": [
                        64,
                        "[LoanStatusHistory_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        63,
                        "[LoanStatusHistory_order_by!]"
                    ],
                    "where": [
                        60
                    ]
                }
            ],
            "LoanStatusHistory_by_pk": [
                57,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "LoanStatusHistory_stream": [
                57,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        68,
                        "[LoanStatusHistory_stream_cursor_input]!"
                    ],
                    "where": [
                        60
                    ]
                }
            ],
            "Loan_by_pk": [
                56,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "Loan_stream": [
                56,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        84,
                        "[Loan_stream_cursor_input]!"
                    ],
                    "where": [
                        76
                    ]
                }
            ],
            "Market": [
                90,
                {
                    "distinct_on": [
                        109,
                        "[Market_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        108,
                        "[Market_order_by!]"
                    ],
                    "where": [
                        105
                    ]
                }
            ],
            "MarketRollingStats": [
                91,
                {
                    "distinct_on": [
                        94,
                        "[MarketRollingStats_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        93,
                        "[MarketRollingStats_order_by!]"
                    ],
                    "where": [
                        92
                    ]
                }
            ],
            "MarketRollingStats_by_pk": [
                91,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "MarketRollingStats_stream": [
                91,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        95,
                        "[MarketRollingStats_stream_cursor_input]!"
                    ],
                    "where": [
                        92
                    ]
                }
            ],
            "MarketSnapshot": [
                97,
                {
                    "distinct_on": [
                        100,
                        "[MarketSnapshot_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        99,
                        "[MarketSnapshot_order_by!]"
                    ],
                    "where": [
                        98
                    ]
                }
            ],
            "MarketSnapshot_by_pk": [
                97,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "MarketSnapshot_stream": [
                97,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        101,
                        "[MarketSnapshot_stream_cursor_input]!"
                    ],
                    "where": [
                        98
                    ]
                }
            ],
            "Market_by_pk": [
                90,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "Market_stream": [
                90,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        113,
                        "[Market_stream_cursor_input]!"
                    ],
                    "where": [
                        105
                    ]
                }
            ],
            "ModuleAddress": [
                119,
                {
                    "distinct_on": [
                        122,
                        "[ModuleAddress_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        121,
                        "[ModuleAddress_order_by!]"
                    ],
                    "where": [
                        120
                    ]
                }
            ],
            "ModuleAddress_by_pk": [
                119,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "ModuleAddress_stream": [
                119,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        123,
                        "[ModuleAddress_stream_cursor_input]!"
                    ],
                    "where": [
                        120
                    ]
                }
            ],
            "ModuleRegistry": [
                125,
                {
                    "distinct_on": [
                        128,
                        "[ModuleRegistry_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        127,
                        "[ModuleRegistry_order_by!]"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "ModuleRegistry_by_pk": [
                125,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "ModuleRegistry_stream": [
                125,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        129,
                        "[ModuleRegistry_stream_cursor_input]!"
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "PreSaleContract": [
                131,
                {
                    "distinct_on": [
                        134,
                        "[PreSaleContract_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        133,
                        "[PreSaleContract_order_by!]"
                    ],
                    "where": [
                        132
                    ]
                }
            ],
            "PreSaleContract_by_pk": [
                131,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "PreSaleContract_stream": [
                131,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        135,
                        "[PreSaleContract_stream_cursor_input]!"
                    ],
                    "where": [
                        132
                    ]
                }
            ],
            "PresaleParticipation": [
                137,
                {
                    "distinct_on": [
                        144,
                        "[PresaleParticipation_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        143,
                        "[PresaleParticipation_order_by!]"
                    ],
                    "where": [
                        140
                    ]
                }
            ],
            "PresaleParticipation_by_pk": [
                137,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "PresaleParticipation_stream": [
                137,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        148,
                        "[PresaleParticipation_stream_cursor_input]!"
                    ],
                    "where": [
                        140
                    ]
                }
            ],
            "PriceCandle": [
                154,
                {
                    "distinct_on": [
                        157,
                        "[PriceCandle_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        156,
                        "[PriceCandle_order_by!]"
                    ],
                    "where": [
                        155
                    ]
                }
            ],
            "PriceCandle_by_pk": [
                154,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "PriceCandle_stream": [
                154,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        158,
                        "[PriceCandle_stream_cursor_input]!"
                    ],
                    "where": [
                        155
                    ]
                }
            ],
            "Stake": [
                160,
                {
                    "distinct_on": [
                        167,
                        "[Stake_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        166,
                        "[Stake_order_by!]"
                    ],
                    "where": [
                        163
                    ]
                }
            ],
            "Stake_by_pk": [
                160,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "Stake_stream": [
                160,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        171,
                        "[Stake_stream_cursor_input]!"
                    ],
                    "where": [
                        163
                    ]
                }
            ],
            "StakingContract": [
                177,
                {
                    "distinct_on": [
                        180,
                        "[StakingContract_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        179,
                        "[StakingContract_order_by!]"
                    ],
                    "where": [
                        178
                    ]
                }
            ],
            "StakingContract_by_pk": [
                177,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "StakingContract_stream": [
                177,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        181,
                        "[StakingContract_stream_cursor_input]!"
                    ],
                    "where": [
                        178
                    ]
                }
            ],
            "Token": [
                185,
                {
                    "distinct_on": [
                        188,
                        "[Token_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        187,
                        "[Token_order_by!]"
                    ],
                    "where": [
                        186
                    ]
                }
            ],
            "Token_by_pk": [
                185,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "Token_stream": [
                185,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        189,
                        "[Token_stream_cursor_input]!"
                    ],
                    "where": [
                        186
                    ]
                }
            ],
            "Trade": [
                191,
                {
                    "distinct_on": [
                        198,
                        "[Trade_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        197,
                        "[Trade_order_by!]"
                    ],
                    "where": [
                        194
                    ]
                }
            ],
            "Trade_by_pk": [
                191,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "Trade_stream": [
                191,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        202,
                        "[Trade_stream_cursor_input]!"
                    ],
                    "where": [
                        194
                    ]
                }
            ],
            "UserMarketPosition": [
                208,
                {
                    "distinct_on": [
                        215,
                        "[UserMarketPosition_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        214,
                        "[UserMarketPosition_order_by!]"
                    ],
                    "where": [
                        211
                    ]
                }
            ],
            "UserMarketPosition_by_pk": [
                208,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "UserMarketPosition_stream": [
                208,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        219,
                        "[UserMarketPosition_stream_cursor_input]!"
                    ],
                    "where": [
                        211
                    ]
                }
            ],
            "chain_metadata": [
                227,
                {
                    "distinct_on": [
                        230,
                        "[chain_metadata_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        229,
                        "[chain_metadata_order_by!]"
                    ],
                    "where": [
                        228
                    ]
                }
            ],
            "chain_metadata_by_pk": [
                227,
                {
                    "chain_id": [
                        54,
                        "Int!"
                    ]
                }
            ],
            "chain_metadata_stream": [
                227,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        231,
                        "[chain_metadata_stream_cursor_input]!"
                    ],
                    "where": [
                        228
                    ]
                }
            ],
            "dynamic_contract_registry": [
                236,
                {
                    "distinct_on": [
                        239,
                        "[dynamic_contract_registry_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        238,
                        "[dynamic_contract_registry_order_by!]"
                    ],
                    "where": [
                        237
                    ]
                }
            ],
            "dynamic_contract_registry_by_pk": [
                236,
                {
                    "id": [
                        183,
                        "String!"
                    ]
                }
            ],
            "dynamic_contract_registry_stream": [
                236,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        240,
                        "[dynamic_contract_registry_stream_cursor_input]!"
                    ],
                    "where": [
                        237
                    ]
                }
            ],
            "end_of_block_range_scanned_data": [
                242,
                {
                    "distinct_on": [
                        245,
                        "[end_of_block_range_scanned_data_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        244,
                        "[end_of_block_range_scanned_data_order_by!]"
                    ],
                    "where": [
                        243
                    ]
                }
            ],
            "end_of_block_range_scanned_data_by_pk": [
                242,
                {
                    "block_number": [
                        54,
                        "Int!"
                    ],
                    "chain_id": [
                        54,
                        "Int!"
                    ]
                }
            ],
            "end_of_block_range_scanned_data_stream": [
                242,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        246,
                        "[end_of_block_range_scanned_data_stream_cursor_input]!"
                    ],
                    "where": [
                        243
                    ]
                }
            ],
            "event_sync_state": [
                248,
                {
                    "distinct_on": [
                        251,
                        "[event_sync_state_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        250,
                        "[event_sync_state_order_by!]"
                    ],
                    "where": [
                        249
                    ]
                }
            ],
            "event_sync_state_by_pk": [
                248,
                {
                    "chain_id": [
                        54,
                        "Int!"
                    ]
                }
            ],
            "event_sync_state_stream": [
                248,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        252,
                        "[event_sync_state_stream_cursor_input]!"
                    ],
                    "where": [
                        249
                    ]
                }
            ],
            "persisted_state": [
                264,
                {
                    "distinct_on": [
                        267,
                        "[persisted_state_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        266,
                        "[persisted_state_order_by!]"
                    ],
                    "where": [
                        265
                    ]
                }
            ],
            "persisted_state_by_pk": [
                264,
                {
                    "id": [
                        54,
                        "Int!"
                    ]
                }
            ],
            "persisted_state_stream": [
                264,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        268,
                        "[persisted_state_stream_cursor_input]!"
                    ],
                    "where": [
                        265
                    ]
                }
            ],
            "raw_events": [
                270,
                {
                    "distinct_on": [
                        273,
                        "[raw_events_select_column!]"
                    ],
                    "limit": [
                        54
                    ],
                    "offset": [
                        54
                    ],
                    "order_by": [
                        272,
                        "[raw_events_order_by!]"
                    ],
                    "where": [
                        271
                    ]
                }
            ],
            "raw_events_by_pk": [
                270,
                {
                    "serial": [
                        54,
                        "Int!"
                    ]
                }
            ],
            "raw_events_stream": [
                270,
                {
                    "batch_size": [
                        54,
                        "Int!"
                    ],
                    "cursor": [
                        274,
                        "[raw_events_stream_cursor_input]!"
                    ],
                    "where": [
                        271
                    ]
                }
            ],
            "__typename": [
                183
            ]
        }
    }
}