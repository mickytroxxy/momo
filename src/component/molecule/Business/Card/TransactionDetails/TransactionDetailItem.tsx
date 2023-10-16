import { cardsPaymentSummaryFontColour1, cardsPaymentSummaryFontSize1, cardsPaymentSummaryFontWeight2 } from '@/style-dictionary-dist/momoStyle';
import { fontFamily } from '@/style/theme';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Box, Icon, Text} from '@atom';
import { StyleSheet } from 'react-native';

const TransactionDetailItem = ({title, value, total, icon}: any) => {
  return (
    <Box
      flex={1}
      justifyContent={'space-between'}
      flexDirection={'row'}
      mb={'vsm'}>
      <Box gap={'hsm'} flexDirection={'row'} mr={'hsm'}>
        <Text
          style={{
            fontSize: gpsw(cardsPaymentSummaryFontSize1),
            fontFamily: fontFamily(cardsPaymentSummaryFontWeight2),
            color: cardsPaymentSummaryFontColour1,
            lineHeight: gpsh('15.6'),
          }}
          >
          {title}
        </Text>
        {icon && <Icon name="InfoIcon" size={16} />}
      </Box>
      <Text
        textAlign={'right'}
        variant={total ? 'medium12' : 'light12'}
        color={total ? 'black' : 'grey'}>
        {title === 'Amount' ? `${value}` : value}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
    
})

export default TransactionDetailItem;
