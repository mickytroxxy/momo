import {Box, Button} from '@atom';
import {ConfirmDetail} from '@molecule';
import React from 'react';
import {useTransferFormState} from '../MoMoTransferContext';

const TransferConfirmation = () => {
  const {transferFormData, onHandlePrevious, setFinished} =
    useTransferFormState();
  const {setEndDate, beneficiary, schedulepayment, ...others} =
    transferFormData;
  return (
    <Box py={'vm'} pb={'vxl'} px={'hs'} flex={1}>
      <Box gap={'vsm'}>
        <ConfirmDetail data={others} total="₦ 560.00" />
      </Box>

      <Box justifyContent={'flex-end'} flex={1}>
        <Box gap={'vsm'}>
          <Button label="Send" onPress={() => setFinished(true)} />
          <Button label="Edit" variant="secondary" />
        </Box>
      </Box>
    </Box>
  );
};

export default TransferConfirmation;
