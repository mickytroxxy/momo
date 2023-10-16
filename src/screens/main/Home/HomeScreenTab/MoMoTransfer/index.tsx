import {Box, SafeAreaContainer} from '@atom';
import {MoMoTransferHeader} from '@molecule';
import {StatusAction} from '@organisms';
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import TransferConfirmation from './Forms/TransferConfirmation';
import TransferMoMo from './Forms/TransferMoMo';
import TransferSchedule from './Forms/TransferSchedule';
import {useTransferFormState} from './MoMoTransferContext';
import {MoMoTransferScreenProps} from '@/typings/navigation';

const MoMoTransfer = () => {
  const {step, finished, resetStep, setFinished} = useTransferFormState();
  const {goBack} = useNavigation<MoMoTransferScreenProps['navigation']>();
  const {
    params: {type},
  } = useRoute<MoMoTransferScreenProps['route']>();
  const getTitleFromStep = () => {
    // console.log('step', step)
    switch (step) {
      case 0:
        return 'MoMo Transfers';
      case 1:
        return 'Schedule';
      case 2:
        return 'Confirmation';
      default:
        return '';
    }
  };
  const HeaderTitle = {
    0: 'MoMo Transfers',
    1: 'Schedule',
    2: 'Confirmation',
  };
  return finished ? (
    <StatusAction
      title="Transaction successful"
      subtitle="Your transaction of ₦ 560.00 to +233 076676789 was successful."
      share
      onPress={() => {
        resetStep();
        goBack();
        setFinished(false);
      }}
    />
  ) : (
    <SafeAreaContainer bg={'white'}>
      <MoMoTransferHeader title={getTitleFromStep()} />
      <Box flex={1} bg={'white'}>
        {step === 0 && <TransferMoMo {...{type}} />}
        {step === 1 && <TransferSchedule />}
        {step === 2 && <TransferConfirmation />}
      </Box>
    </SafeAreaContainer>
  );
};

export default MoMoTransfer;
