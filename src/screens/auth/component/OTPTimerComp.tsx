import {View, Text} from 'react-native';
import React from 'react';
import {Box, Button} from '@atom';

type OTPTimerCompType = {
  handleOTPSuccess: () => void;
};
const OTPTimerComp = ({handleOTPSuccess}: OTPTimerCompType) => {
  return (
    <Box px={'hm'} py={'hxl'} flexGrow={1} justifyContent={'space-between'}>
      <Box />
      <Button label="Next" onPress={handleOTPSuccess} />
    </Box>
  );
};

export default OTPTimerComp;
