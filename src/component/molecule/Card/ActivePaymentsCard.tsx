import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {SchedulePaymentsScreenProps} from '@/typings/navigation';
import {Box, Text, TouchableOpacity} from '@atom';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Card from './Card';

type ActivePaymentCardType = {
  name: string;
  payments: string;
  nextPayment: string;
  amount: string | number;
  data: any;
};

const ActivePaymentCard = (props: ActivePaymentCardType) => {
  const {name, payments, amount, nextPayment, data} = props;
  const {navigate} = useNavigation<SchedulePaymentsScreenProps['navigation']>();
  return (
    <Card variant={'shadow'}>
      <TouchableOpacity
        style={[
          {
            paddingVertical: gsh(10),
            paddingHorizontal: gsw(10),
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        ]}
        onPress={() => {
          navigate('paymentdetailscreen', {
            data,
          });
        }}>
        <Box>
          <Text
            color={'black'}
            style={{
              fontFamily: 'MTNBrighterSans-Regular',
              fontSize: gsw(10),
              lineHeight: gsh(12),
            }}>
            {name}
          </Text>
          <Text
            color={'grey'}
            style={{
              fontFamily: 'MTNBrighterSans-Regular',
              fontSize: gsw(8),
              lineHeight: gsh(12),
            }}>
            Payments: {payments}
          </Text>
          <Text
            color={'grey'}
            style={{
              fontFamily: 'MTNBrighterSans-Regular',
              fontSize: gsw(9),
              lineHeight: gsh(12),
            }}>
            {`Next payment: ${nextPayment}`}
          </Text>
        </Box>
        <Text
          color={'momoDarkBlue'}
          style={{
            fontFamily: 'MTNBrighterSans-Medium',
            fontSize: gsw(10),
            lineHeight: gsh(12),
          }}>
          {amount}
        </Text>
      </TouchableOpacity>
    </Card>
  );
};

export default ActivePaymentCard;
