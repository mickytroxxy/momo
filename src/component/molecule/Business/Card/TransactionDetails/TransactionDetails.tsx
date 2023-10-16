import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Box, Text} from '@atom';
import React from 'react';
import TransactionDetailItem from './TransactionDetailItem';
import HorizontalCardSeparator from '@/component/molecule/Card/HorizontalCardSeparator';
import { cardsPaymentSummaryBg, cardsPaymentSummaryBorder, cardsPaymentSummaryBorderColour, cardsPaymentSummaryBorderRadius, cardsPaymentSummaryFontColour1, cardsPaymentSummaryFontSize3, cardsPaymentSummaryFontWeight1, cardsPaymentSummaryHeight, cardsPaymentSummaryRowTopPading, cardsPaymentSummaryWidth } from '@/style-dictionary-dist/momoStyle';
import { fontFamily } from '@/style/theme';

const TransactionDetails = () => {
  return (
    <Box
      style={{
        backgroundColor: cardsPaymentSummaryBg,
        borderRadius: gpsw(cardsPaymentSummaryBorderRadius),
        paddingTop: gpsh('36'),
        borderWidth: parseInt(cardsPaymentSummaryBorder.width),
        borderColor: cardsPaymentSummaryBorderColour,
        width: gpsw(cardsPaymentSummaryWidth),
        // height: gpsh(cardsPaymentSummaryHeight)
      }}>
      <Box
        style={{
          paddingHorizontal: gpsw('24'),
        }}>
        <Text
          style={{
            paddingBottom: gpsw('24'),
            fontSize: gpsw(cardsPaymentSummaryFontSize3),
            fontFamily: fontFamily(cardsPaymentSummaryFontWeight1),
            color: cardsPaymentSummaryFontColour1,
            lineHeight: gpsh('23.4')
          }}
          >
          Transaction Details
        </Text>
        <HorizontalCardSeparator w={1} />
      </Box>

      <Box
        style={{
          paddingTop: gpsh(cardsPaymentSummaryRowTopPading),
          paddingHorizontal: gpsw('24'),
        }}>
        <TransactionDetailItem title="Date" value="07 March 2022" />
        <TransactionDetailItem title="Time" value="11:35" />
        <TransactionDetailItem title="From" value="23 635 4691" />
        <TransactionDetailItem title="Transaction Type" value="Payment" />
        <TransactionDetailItem title="Transaction ID" value="1234567890" />
        <TransactionDetailItem title="Reference" value="Adwena Owusu" />
      </Box>
      <Box
        style={{
          backgroundColor: '#F4F4F4',
          // backgroundColor: '#F4F4F4',
          paddingTop: gpsh('15'),
          paddingBottom: gpsh('5'),
          paddingHorizontal: gpsw('12'),
          marginHorizontal: gpsw('12'),
          marginBottom: gpsw('12'),
          borderRadius: gpsw('10'),
        }}>
        <TransactionDetailItem title="Amount" value="GHc 989.00" />
        <TransactionDetailItem icon title="Fees" value="GHc 9.99" />
        <TransactionDetailItem total title="Total" value="GHc 999.99" />
      </Box>
    </Box>
  );
};

export default TransactionDetails;
