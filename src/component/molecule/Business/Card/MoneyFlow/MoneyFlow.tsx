import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Icon, Text} from '@atom';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {fontFamily} from '@/style/theme';
import { globalGrey } from '@/style-dictionary-dist/momoStyle';

type MoneyFlowType = {
  amount: string;
  direction: 'Received' | 'Spent';
  currency: string;
};
const MoneyFlow = ({amount, direction, currency}: MoneyFlowType) => {
  return (
    <View style={styles.flowContainer}>
      <Icon name={direction === 'Received' ? 'GreenDownIcon' : 'RedUpIcon'} size={20} />
      <View>
        <Text color={'momoBlue'} style={styles.title}>Total {direction}</Text>
        <Text style={styles.value}>
          {currency} {amount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: gpsw('13'),
  },
  title: {
    fontFamily: fontFamily('Light'),
    fontSize: gpsw('12'),
    lineHeight: gpsh('15.6'),
    color:globalGrey
  },
  value: {
    fontFamily: fontFamily('Bold'),
    color: 'black',
    fontSize: gpsw('18'),
    lineHeight: gpsh('23.4'),
  },
});

export default MoneyFlow;
