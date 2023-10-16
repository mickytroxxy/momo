import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import { TransactionScreenProps } from '@/typings/navigation';
import { Box, Text, TouchableOpacity } from '@atom';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';

type historyDataType = {
  transaction: string;
  date: string;
  transactionId: string;
  amount: string;
};
type TransactionHistoryType = {
  historyData: historyDataType[];
  historyHeader?:
  | React.ComponentType<any>
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | null
  | undefined;
};

const TransactionHistory = ({
  historyData,
  historyHeader,
}: TransactionHistoryType) => {
  const { navigate } = useNavigation<TransactionScreenProps['navigation']>();
  function renderTransactionItem({
    item: { transaction, transactionId, amount, date },
    index,
  }: {
    item: (typeof historyData)[0];
    index: number;
  }) {
    // navigate
    return (
      <TouchableOpacity
        onPress={() => {
          navigate('transactiondetailscreen');
        }}
        bg={'white'}
        px={'hm'}
        style={{
          paddingVertical: gsh(10),
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: '#afafaf',
          marginVertical: gsh(5),
          // height: gsh(57)
        }}>
        <Box flexDirection={'row'} justifyContent={'space-between'}>
          <Text
            style={{
              fontSize: gsw(8),
              lineHeight: gsh(12),
              fontFamily: 'MTNBrighterSans-Regular',
              color: '#AFAFAF',
            }}>
            {date}
          </Text>
          <Text
            style={{
              fontSize: gsw(10),
              lineHeight: gsh(12),
              fontFamily: 'MTNBrighterSans-Bold',
              color: '#AF0000',
            }}>
            {amount}
          </Text>
        </Box>
        <Text
          style={{
            fontSize: gsw(10),
            lineHeight: gsh(12),
            fontFamily: 'MTNBrighterSans-Regular',
            color: 'black',
          }}>
          {transaction}
        </Text>
        <Text
          style={{
            fontSize: gsw(8),
            lineHeight: gsh(12),
            fontFamily: 'MTNBrighterSans-Regular',
            color: '#AFAFAF',
          }}>{`Transaction ID: ${transactionId}`}</Text>
      </TouchableOpacity>
    );
  }
  const keyExtractor = useCallback(
    (item: historyDataType, index: number) => `${item.transactionId}-${index}`,
    [],
  );
  return (
    <>
      <FlatList
        data={historyData}
        bounces={false}
        contentContainerStyle={{
          // flexGrow: 1,
          paddingBottom: 20,
          // backgroundColor: 'red'
        }}
        style={{
          // backgroundColor: 'red'
        }}
        renderItem={renderTransactionItem}
        keyExtractor={keyExtractor}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={historyHeader ? historyHeader : <></>}
        // ListHeaderComponentStyle={{ paddingTop: gsh(10) }}
      />
    </>
  );
};

export default TransactionHistory;
