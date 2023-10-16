import ActivePaymentCard from '@/component/molecule/Card/ActivePaymentsCard';
import {ActivePaymentsData} from '@/fixtures/dummyData';
import {Box, Text} from '@atom';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';


const ActivePayments = () => {
  const navigation = useNavigation();
  return (
    <Box
      width={'100%'}
      minHeight={500}
      flexGrow={1}
      bg={'extraLightGrey'}
      // flex={1}
      pt={'vm'}
      px={'hm'}>
      <TouchableOpacity
        onPress={() => {
          // @ts-ignore
          //   navigation.navigate('transactionsscreen');
        }}>
        <Text
          color={'momoBlue'}
          mb={'vsm'}
          variant={'regular12'}
          textAlign={'right'}>
          See All
        </Text>
      </TouchableOpacity>
      <Box gap={'vxs'}>
        {ActivePaymentsData.map((v, index) => (
          <ActivePaymentCard
            key={`${index}-${v.Amount}`}
            name={v?.['Recipient name']}
            payments={v?.Payments}
            nextPayment={v?.['Next payment']}
            amount={v?.Amount}
            data={v}
          />
        ))}
      </Box>
      {/* <Text>RecentlyPsssaid</Text> */}
    </Box>
  );
};

export default ActivePayments;
