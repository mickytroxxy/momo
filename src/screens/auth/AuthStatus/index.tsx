import {AuthStatusScreenProps, OnboardScreenProps} from '@/typings/navigation';
import {SafeAreaContainer} from '@atom';
import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import BlockedOTP from './BlockedOTP';
import BlockedFraud from './BlockedFraud';
import NoWallet from './NoWallet';
import Success from './Success';
// import { CurvedHeader } from '@molecule';
import {DarkStatusBar} from '@molecule/StausBar';
import {CurvedHeader} from '@molecule';

const AuthStatus = () => {
  const {goBack} = useNavigation<AuthStatusScreenProps['navigation']>();
  const {params} = useRoute<AuthStatusScreenProps['route']>();
  // const {type} = params || {};
  const {type} = params;
  const Screens = {
    success: <Success />,
    blockedotp: <BlockedOTP />,
    blockedfraud: <BlockedFraud />,
    nowallet: <NoWallet />,
  };

  return (
    <SafeAreaContainer>
      <DarkStatusBar />
      <CurvedHeader name="AuthBg" h={250} />
      {/* <Success /> */}
      {type && Screens[type]}
    </SafeAreaContainer>
  );
};

export default AuthStatus;
