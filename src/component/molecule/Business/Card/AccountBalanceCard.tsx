import {
  headerDashboardMoMoBusinessAccountBalanceFontColour1,
  headerDashboardMoMoBusinessAccountBalanceFontColour2,
  headerDashboardMoMoBusinessAccountBalanceFontSize1,
  headerDashboardMoMobusinessAccountBalanceFontWeight,
} from '@/style-dictionary-dist/momoStyle';
import { fontFamily } from '@/style/theme';
import { gpsw } from '@/utils/parseTokenStyle';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
type propsType = {
currency?:string;
balance?:string | number;
}
const AccountBalanceCard = (props:propsType) => {
const {currency,balance} = props
return (
  <View style={styles.container}>
    <Text style={styles.title}>Total Balance</Text>
    <View style={styles.balance}>
      <Text style={styles.currency}>{currency}</Text>
      <Text style={styles.balanceValue}>{balance}</Text>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  alignItems: 'center',
},
title: {
  color: headerDashboardMoMoBusinessAccountBalanceFontColour2,
  textAlign: 'center',
  fontSize: gpsw('16'),
  fontFamily: fontFamily(headerDashboardMoMobusinessAccountBalanceFontWeight),
},
balance: {
  flexDirection: 'row',
  alignItems: 'center',
},
balanceValue: {
  color: headerDashboardMoMoBusinessAccountBalanceFontColour1,
  fontFamily: fontFamily(headerDashboardMoMobusinessAccountBalanceFontWeight),
  fontSize: gpsw(headerDashboardMoMoBusinessAccountBalanceFontSize1),
},
currency: {
  color: headerDashboardMoMoBusinessAccountBalanceFontColour1,
  fontSize: gpsw('20'),
  fontFamily: fontFamily(headerDashboardMoMobusinessAccountBalanceFontWeight)
},
});

export default AccountBalanceCard;
