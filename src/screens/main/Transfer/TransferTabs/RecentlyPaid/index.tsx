import TransactionCard from '@/component/molecule/Card/TransactionCard';
import {TransferScreenProps} from '@/typings/navigation';
import {Box, Text, TextButton} from '@atom';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const RecentlyPaid = () => {
  const {navigate} = useNavigation<TransferScreenProps['navigation']>();
  return (
    <Box width={'100%'} flexGrow={1} flex={1} pt={'vsm'} px={'hm'}>
      <TextButton
        onPress={() => navigate('transactionshistoryscreen')}
        title="See All"
        mb={'vsm'}
        alignSelf={'flex-end'}
      />
      <Box gap={'vxs'}>
        {[1, 2, 3].map(v => (
          <TransactionCard
            key={v.toString()}
            title="Oriental food & gift..."
            amount="₦ 500"
            date="15 Feb 2022 | 13:37"
            type="bank transfer"
            credit
          />
        ))}
      </Box>
    </Box>
  );
};

export default RecentlyPaid;
