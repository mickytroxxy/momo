import React from 'react';
import { StyleSheet, View } from 'react-native';
import HorizontalCardSeparator from '@/component/molecule/Card/HorizontalCardSeparator';
import { globalBlack, globalGrey, globalMoMoBlue, globalWhite } from '@/style-dictionary-dist/momoStyle';
import { fontFamily } from '@/style/theme';
import { gpsh, gpsw } from '@/utils/parseTokenStyle';
import { Text } from '@atom';

export type ConfirmationDetailsProps = {
  data: Record<string, any>;
  headerTitle?:string;
  subTitle?:string;
};

export function ConfirmationDetails(props: ConfirmationDetailsProps) {
  const { data, headerTitle } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.MainTitle}>{headerTitle}</Text>
      <View style={{marginTop:5}}><HorizontalCardSeparator w={1} /></View>
      {Object.entries(data).map(([key, value]) => (
        <View key={key} style={styles.row}>
          <Text style={styles.title}>{key}</Text>
          <Text style={styles.titleValue}>{value}</Text>
        </View>
      ))}
    </View>
  );
}
export function ConfirmBankingDetails(props: ConfirmationDetailsProps) {
    const { data, headerTitle, subTitle } = props;
    return (
      <View style={styles.container}>
        {headerTitle && <Text style={styles.MainTitle2}>{headerTitle}</Text>}
        {subTitle && <Text style={styles.SubTitle}>{subTitle}</Text>}
        {Object.entries(data).map(([key, value]) => (
          <View key={key} style={{}}>
            <Text style={styles.titleValue}>{key}</Text>
            <Text style={styles.title}>{value}</Text>
          </View>
        ))}
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: gpsw('24'),
    paddingBottom: gpsw('36'),
    paddingTop: gpsw('18'),
    backgroundColor: globalWhite,
    borderRadius: gpsw('15'),
    gap: gpsh('10'),
    borderWidth:1,borderColor:'rgba(232, 232, 232, 1)'
  },
  MainTitle: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('18'),
    letterSpacing: -0.5,
    color: globalBlack,
    paddingVertical:gpsh('10')
  },
  MainTitle2: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('16'),
    letterSpacing: -0.5,
    color: globalBlack,
    paddingVertical:gpsh('0')
  },
  SubTitle: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('14'),
    letterSpacing: -0.5,
    color: globalMoMoBlue,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
