import React from 'react';
import {Box, Text, TouchableOpacity} from '@atom';
import Card from './Card';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';

type TransactionCardType = {
  title: string;
  date?: string;
  type: string;
  amount?: string;
  credit?: boolean;
  beneficiary?: boolean;
  onPress?: () => void;
  neutral?: boolean;
};

const TransactionCard = ({
  title,
  date,
  type,
  amount,
  credit,
  beneficiary,
  onPress,
  neutral,
}: TransactionCardType) => {
  return (
    <Card variant={'shadow'}>
      <TouchableOpacity
        onPress={() => onPress && onPress()}
        style={[
          {
            paddingVertical: gsh(10),
            paddingHorizontal: gsw(10),
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        ]}>
        <Box>
          <Text
            color={'black'}
            style={{
              fontFamily: 'MTNBrighterSans-Regular',
              fontSize: gsw(10),
              lineHeight: gsh(12),
            }}>
            {title}
          </Text>
          <Text
            color={'lightGrey'}
            style={{
              fontFamily: 'MTNBrighterSans-Regular',
              fontSize: gsw(9),
              lineHeight: gsh(12),
            }}>
            {beneficiary ? date && `Last paid on ${date}` : date}
          </Text>
          <Text
            color={'lightGrey'}
            style={{
              fontFamily: 'MTNBrighterSans-Regular',
              fontSize: gsw(9),
              lineHeight: gsh(12),
            }}>
            Transaction type: {type}
          </Text>
        </Box>
        {amount && !neutral && (
          <Text
            color={credit ? 'green100' : 'red100'}
            style={{
              fontFamily: 'MTNBrighterSans-Medium',
              fontSize: gsw(10),
              lineHeight: gsh(12),
            }}>{`${credit ? '+' : '-'}${amount}`}</Text>
        )}
        {amount && neutral && (
          <Text
            color={'momoBlue'}
            style={{
              fontFamily: 'MTNBrighterSans-Medium',
              fontSize: gsw(10),
              lineHeight: gsh(12),
            }}>{`${amount}`}</Text>
        )}
      </TouchableOpacity>
    </Card>
  );
};

export default TransactionCard;
