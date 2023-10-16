import { View, Dimensions } from 'react-native'
import React from 'react'
import TransactionHistoryItem from './TransactionHistoryItem'
import { businessHistoryData } from '@/fixtures/dummyData'
const {width} = Dimensions.get('screen')
const RecentTransfers = () => {
    
    return (
        <View>
            {businessHistoryData.map((item,i) => 
                <View key={i}>
                    <TransactionHistoryItem
                        number={item.number}
                        type={item.type}
                        name={item.name}
                        amount={item.amount}
                        currency='GHc'
                        from='Transactions'
                        index={i}
                    />
                </View>
            )}
        </View>
    )
}

export default RecentTransfers