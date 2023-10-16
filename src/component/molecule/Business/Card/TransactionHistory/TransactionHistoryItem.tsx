import {View, Text} from 'react-native';
import React from 'react';
import {Icon} from '@atom';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {fontFamily} from '@/style/theme';

type TransactionHistoryItemType = {
  credit?: boolean;
  number: string;
  type: string;
  name: string;
  index: number;
  time?:string,
  from?: 'Transactions' | 'Transfers',
  currency?:string;
  amount?:any
};

const TransactionHistoryItem = ({
  credit,
  number,
  type,
  name,
  index,
  time,
  from,
  currency,
  amount
}: TransactionHistoryItemType) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: index % 2 === 0 ? 'white': "#F9F9F9",
        paddingVertical: gpsh('6'),
        paddingHorizontal: gpsw('20')
      }}>
      <View>
        <Text
          style={{
            fontSize: gpsw('12'),
            lineHeight: gpsh('15.6'),
            color: 'black',
            fontFamily: fontFamily('Medium'),
          }}>
          {number}
        </Text>
        <Text
          style={{
            fontSize: gpsw('10'),
            lineHeight: gpsh('13'),
            color: '#AFAFAF',
            fontFamily: fontFamily('Medium'),
          }}>
          {type} • {time}
        </Text>
        <Text
          style={{
            fontSize: gpsw('10'),
            lineHeight: gpsh('13'),
            color: '#AFAFAF',
            fontFamily: fontFamily('Regular'),
          }}>
          {name}
        </Text>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', gap: gpsw('7')}}>
        <Text
          style={{
            fontSize: gpsw('12'),
            lineHeight: gpsh('15.6'),
            color:from === 'Transactions' ? 'black' : (credit ? '#0FAF4B' : '#ED3434'),
            fontFamily: fontFamily('Medium'),
          }}>
          {from === 'Transactions' ? '' : (credit ? '+' : '-')} {currency} {amount}
        </Text>
        {/* {from === 'Transfers' && <Icon name="InfoIcon" size={15} />} */}
      </View>
    </View>
  );
};

export default TransactionHistoryItem;
