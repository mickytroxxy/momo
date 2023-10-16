import {fontFamily} from '@/style/theme';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import HorizontalCardSeparator from '../../../Card/HorizontalCardSeparator';
import {Icon, Text} from '@atom';

type DashBoardCardType = {
  Balance?: string;
  currency?: string;
  empty?: boolean;
};

type DashBoardMoneyFlowType = {
  credit?: boolean;
  time: string;
  currency: string;
  balance: string;
  amount: string;
};
const DashBoardCardFooter = ({
  credit,
  time,
  currency,
  balance,
  amount,
}: DashBoardMoneyFlowType) => (
  <View style={styles.moneyFlowContainer}>
    <View style={styles.moneyFlowLeft}>
      <Icon name={credit ? 'GreenDownIcon' : 'RedUpIcon'} size={14} />
      <View>
        <Text style={styles.moneyFlowLeftTopText}>
          {credit ? '+' : '-'}
          {balance}
        </Text>
        <Text style={styles.moneyFlowLeftBottomText}>
          {time} • Money {credit ? 'In' : 'Out'}
        </Text>
      </View>
    </View>
    <Text
      style={[styles.moneyFlowRightText, !credit && styles.moneyFlowDebitText]}>
      {credit ? '+' : '-'} {currency} {amount}
    </Text>
  </View>
);

const DashBoardCard = ({empty}: DashBoardCardType) => {
  return (
    <View style={styles.container}>
      <View style={styles.tag}>
        <Text style={styles.tagText}>Account Name</Text>
      </View>
      <View style={styles.balanceBody}>
        <View style={styles.balanceHeader}>
          <View style={styles.balanceHeaderLeft}>
            <Text style={styles.headerCurrency}>GHc</Text>
            <Text style={styles.headerValue}>{empty ? '0' : '0000000.00'}</Text>
          </View>
          <View style={styles.balanceHeaderRight}>
            <Icon name="CircleRightIcon" size={24} />
          </View>
        </View>
        <HorizontalCardSeparator w={1} />
        <View style={styles.balanceFooter}>
          {empty ? (
            <View style={styles.balanceFooterEmptyContainer}>
              <Icon name="MoneyFlowEmptyIcon" size={14} color="#AFAFAF" />
              <Text style={styles.emptyText}>No payments received yet</Text>
            </View>
          ) : (
            <>
              <DashBoardCardFooter
                amount="000000.00"
                currency="GHc"
                balance="000 000 0000"
                credit
                time="9:30 AM"
              />
              <DashBoardCardFooter
                amount="000000.00"
                currency="GHc"
                balance="000 000 0000"
                time="9:30 AM"
              />
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: gpsh('12'),
    backgroundColor: 'white',
    width: gpsw('280'),
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: gpsw('20'),
  },
  tag: {
    backgroundColor: '#E8E8E8',
    paddingLeft: gpsw('24'),
    width: gpsw('200'),
    height: gpsh('28'),
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  tagText: {
    fontSize: gpsw('12'),
    lineHeight: gpsh('15.6'),
    color: '#004f71',
    fontFamily: fontFamily('Bold'),
  },
  balanceBody: {
    paddingHorizontal: gpsw('24'),
    paddingTop: gpsh('4'),
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: gpsh('4'),
    gap: gpsw('4'),
    justifyContent: 'space-between',
  },
  balanceHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: gpsw('4'),
  },
  headerCurrency: {
    fontSize: gpsw('14'),
    lineHeight: gpsh('18.2'),
    color: '#004f71',
    fontFamily: fontFamily('Bold'),
  },
  headerValue: {
    fontSize: gpsw('24'),
    lineHeight: gpsh('31.2'),
    fontFamily: fontFamily('Bold'),
    color: '#004f71',
  },
  balanceHeaderRight: {
    position: 'absolute',
    right: 0,
    top: '-40%',
  },
  bHCurrency: {},
  bHValue: {},
  balanceFooter: {
    gap: gpsh('4'),
    paddingBottom: gpsh('12'),
  },
  moneyFlowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: gpsh('4'),
  },
  moneyFlowLeft: {flexDirection: 'row', gap: gpsw('12'), alignItems: 'center'},
  moneyFlowLeftTopText: {
    fontFamily: fontFamily('Medium'),
    fontSize: gpsw('12'),
    lineHeight: gpsh('15.6'),
    letterSpacing: -0.5,
    color: 'black',
  },
  moneyFlowLeftBottomText: {
    fontFamily: fontFamily('Regular'),
    fontSize: gpsw('10'),
    lineHeight: gpsh('13'),
    color: '#AFAFAF',
    letterSpacing: -0.5,
  },
  moneyFlowRightText: {
    fontFamily: fontFamily('Medium'),
    fontSize: gpsw('12'),
    lineHeight: gpsh('28'),
    color: '#0FAF4B',
  },
  moneyFlowDebitText: {
    color: '#ED3434',
  },
  emptyText: {
    fontFamily: fontFamily('Regular'),
    fontSize: gpsw('10'),
    lineHeight: gpsh('13'),
    color: '#AFAFAF',
  },
  balanceFooterEmptyContainer: {
    flexDirection: 'row',
    gap: gpsw('12'),
    alignItems: 'center',
    paddingVertical: gpsh('4'),
    marginTop: gpsh('4'),
  },
});

export default DashBoardCard;
