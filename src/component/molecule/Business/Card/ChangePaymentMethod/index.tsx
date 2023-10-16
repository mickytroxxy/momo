//ChangePaymentMethod

import HorizontalCardSeparator from '@/component/molecule/Card/HorizontalCardSeparator';
import {
  globalBlack,
  globalGrey,
  globalWhite,
} from '@/style-dictionary-dist/momoStyle';
import {fontFamily} from '@/style/theme';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import { Button, Text } from '@atom';
import React from 'react';
import {StyleSheet, View} from 'react-native';

type CostBreakDownProps = {
  amount?: number;
  currency?: string;
  fees?: number;
};

export default function ChangePaymentMethod({
  amount,
  currency,
  fees,
}: CostBreakDownProps) {


  const data = {
    Type: `DSTV`,
    For: `033 123 4563`,
  };

  return (
    <View style={styles.container}>
      {Object.entries(data).map(([key, value]) => (
        <View
          key={key}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.titleValue}>{key}</Text>
          <Text style={styles.title}>{value}</Text>
        </View>
      ))}
      <View style={{marginTop:gpsh('10'),width:'100%',justifyContent:'flex-end'}}>
        <Button
          bStyle={{alignSelf:'flex-end',alignItems:'center'}}
          onPress={() => {}}
          label='Change'
          variant='secondary'
          size="small"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: gpsh('24'),
    paddingVertical: gpsh('20'),
    backgroundColor: globalWhite,
    borderRadius: gpsw('20'),
    gap: gpsh('10'),
    borderWidth:gpsh('2'),
    borderColor:'rgba(232, 232, 232, 0.50)'
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
