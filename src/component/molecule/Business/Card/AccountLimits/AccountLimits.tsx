import {globalMoMoBlue, globalWhite} from '@/style-dictionary-dist/momoStyle';
import {fontFamily} from '@/style/theme';
import {gpmsh, gpsh, gpsw} from '@/utils/parseTokenStyle';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type AccountLimitsItemType = {
  limit: string;
  value: string;
  index: number;
};

const AccountLimitData = [
  {
    limit: 'Data Limit',
    value: '10 000 GHc',
  },
  {
    limit: 'Maximum amount to send per transaction',
    value: '10 000 GHc',
  },
  {
    limit: 'Maximum Wallet Size',
    value: '30 000 GHc',
  },
  {
    limit: 'Maximum amout to receive  per transaction',
    value: '5 000 GHc',
  },
];
const AccountLimitsItem = ({limit, value, index}: AccountLimitsItemType) => {
  return (
    <View
      style={[
        styles.item,
        index === 0 && {alignItems: 'flex-start', height: gpmsh('44')},
        // index === AccountLimitData.length - 1 && {
        index === 3 && {
          alignItems: 'flex-end',
          borderBottomWidth: 0,
          height: gpmsh('51'),
        },
      ]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <Text style={styles.itemTitle}>{limit}</Text>
        <Text style={styles.itemValue}>{value}</Text>
      </View>
    </View>
  );
};

const AccountLimits = () => {
  return (
    <View>
      <Text style={styles.title}>Accounts Limits</Text>
      <View style={styles.container}>
        {AccountLimitData.map(({limit, value}, index) => {
          return <AccountLimitsItem key={index} {...{limit, value, index}} />;
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: gpsw('24'),
    paddingHorizontal: 24,
    paddingVertical: gpmsh('24'),
    backgroundColor: globalWhite,
    borderRadius: gpsw('15'),
    gap: gpmsh('10'),
    borderWidth: 2,
    borderColor: '#f3f3f3',
    marginTop:gpsh('12')
    // height: gpmsh(314),
  },
  title: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw('18'),
    lineHeight: gpsw('23.4'),
    color: globalMoMoBlue,
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ECECEC',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    height: gpmsh('68'),
    // pa
  },
  itemTitle: {
    fontFamily: fontFamily('Regular'),
    fontSize: gpsw('12'),
    lineHeight: gpsw('15.6'),
    color: '#888888',
    flex: 0.9,
  },
  itemValue: {
    fontFamily: fontFamily('Medium'),
    fontSize: gpsw('12'),
    lineHeight: gpsw('23.4'),
    color: 'black',
    // flex: 1,
  },
});
export default AccountLimits;
