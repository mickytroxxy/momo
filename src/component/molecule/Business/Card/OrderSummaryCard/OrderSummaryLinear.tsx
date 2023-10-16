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

type OrderSummarryLinearProps = {
    data: Record<string, any>;
};

export default function OrderSummarryLinear({
  data
}: OrderSummarryLinearProps) {
    console.log(data.attr.length)
  return (
    <View style={styles.container}>
      <Text style={styles.MainTitle}>{data.headertitle}</Text>
      {data.attr.map((obj:any) =>{
        return (
            <View style={{gap: gpsh('10'),}}>
                {Object.entries(obj).map(([key, value]) => {
                    return(
                        <View key={key} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.titleValue}>{key}</Text>
                            <Text style={styles.title}>{value}</Text>
                        </View>
                    )
                })}
                {data.attr.length > 1 && <View style={{paddingVertical:gpsh('16')}}><HorizontalCardSeparator w={1} /></View>}
            </View>
        )
      })}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.total}>{data.attr.length > 1 ? 'Total' : 'Amount Due'}</Text>
        <Text style={styles.totalValue}>
          GHc {data.amount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: gpsw('24'),
    paddingVertical: gpsh('24'),
    backgroundColor: globalWhite,
    borderRadius: gpsw('20'),
    gap: gpsh('10'),
    borderWidth:2,
    borderColor:'rgba(232, 232, 232, 0.50)',
    elevation:30
  },
  MainTitle: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('18'),
    letterSpacing: -0.5,
    color: globalBlack,
    marginBottom:gpsh('12')
  },
  title: {
    fontFamily: fontFamily('Medium'),
    fontSize: gpsw('14'),
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
