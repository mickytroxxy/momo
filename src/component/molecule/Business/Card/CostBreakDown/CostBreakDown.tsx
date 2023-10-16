import HorizontalCardSeparator from '@/component/molecule/Card/HorizontalCardSeparator';
import {
  globalBlack,
  globalGrey,
  globalWhite,
} from '@/style-dictionary-dist/momoStyle';
import {fontFamily} from '@/style/theme';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import { Text } from '@atom';
import React from 'react';
import {StyleSheet, View} from 'react-native';

type CostBreakDownProps = {
  amount: number;
  currency: string;
  fees: number;
};

export default function CostBreakDown({
  amount,
  currency,
  fees,
}: CostBreakDownProps) {
  function converToFloat(value: number, decimals = 2) {
    const floatValue = value.toFixed(decimals);
    return floatValue;
  }

  const data = {
    Amount: `${currency} ${converToFloat(amount, 2)}`,
    Fees: `${currency} ${converToFloat(fees, 2)}`,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.MainTitle}>Cost Breakdown</Text>
      <HorizontalCardSeparator w={1} />
      {Object.entries(data).map(([key, value]) => (
        <View
          key={key}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>{key}</Text>
          <Text style={styles.titleValue}>{value}</Text>
        </View>
      ))}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.totalValue}>
          {currency} {converToFloat(amount + fees, 2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: gpsw('24'),
    paddingVertical: gpsh('16'),
    backgroundColor: globalWhite,
    borderRadius: gpsw('15'),
    gap: gpsh('10'),
  },
  MainTitle: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('14'),
    letterSpacing: -0.5,
    color: globalBlack,
  },
  title: {
    fontFamily: fontFamily('Medium'),
    fontSize: gpsw('12'),
    letterSpacing: -0.5,
    color: globalBlack,
  },
  titleValue: {
    fontFamily: fontFamily('Light'),
    fontSize: gpsw('12'),
    fontStyle: 'normal',
    letterSpacing: -0.5,
    color: globalGrey,
  },
  total: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('14'),
    letterSpacing: -0.5,
    color: 'rgba(28, 27, 31, 1)',
  },
  totalValue: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('14'),
    letterSpacing: -0.5,
    color: 'rgba(28, 27, 31, 1)',
    textTransform: 'uppercase',
  },
});
