import React from 'react';
import {Box, SafeAreaContainer, Text} from '@atom';
import {BackHeadingX, ConfirmDetail} from '@molecule';

const tDetails = {
  'Date & time': '15 Feb 2022 | 13:24',
  Beneficiary: 'Precious Modise',
  Amount: 'GHC 500.00',
  'Transaction ID': '33457622',
  'Payment type': 'Adjustment',
  'Txn Fees': 'GHC 0.20',
  Status: 'Successful',
};

const TransactionDetails = () => {
  return (
    <SafeAreaContainer flex={1} bg={'white'}>
      <BackHeadingX title="Receipts" />
      <Box flex={1} pb={'vxl'} px={'hm'}>
        <Text py={'vm'} textAlign={'center'} variant={'medium18'}>
          Transaction details
        </Text>
        <ConfirmDetail data={tDetails} />
      </Box>
    </SafeAreaContainer>
  );
};

export default TransactionDetails;
