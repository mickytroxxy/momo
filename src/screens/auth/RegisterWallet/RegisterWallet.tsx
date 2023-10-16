import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import RegisterWalletHeader from './Component/RegisterWalletHeader';
import {useNavigation} from '@react-navigation/native';
import {Box, Button, SafeAreaContainer, Text, TextButton} from '@atom';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {CheckBox} from '@molecule';
import {fontFamily} from '@/style/theme';
import TandC from './TandC';
import SimCardComp from '../component/SimCardComp';
import OTPTimerComp from '../component/OTPTimerComp';
import CreatePin from './CreatePin';

const RegisterWallet = () => {
  const {goBack} = useNavigation();
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [showSim, setShowSim] = useState(false);
  const showSimScreen = () => setShowSim(true);
  const handleNext = () => {
    setShowSim(false);
    setStep(1);
  };
  const handleOTPSuccess = () => {
    setStep(2);
  };
  const HeaderTitle = {
    0: 'Terms and Conditions',
    1: 'OTP',
    2: 'Create PIN',
  };
  const RegisterComp = {
    0: <TandC {...{showSimScreen}} />,
    1: <OTPTimerComp {...{handleOTPSuccess}} />,
    2: <CreatePin />,
  };
  const title = HeaderTitle[step];
  const renderScreen = RegisterComp[step];
  return (
    <SafeAreaContainer>
      {showSim ? (
        <SimCardComp {...{handleNext}} />
      ) : (
        <>
          <RegisterWalletHeader {...{step, setStep, title}} />
          {renderScreen}
        </>
      )}
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  labelText: {
    fontSize: gpsw('12'),
    lineHeight: gpsh('15.6'),
    color: '#5F5F5F',
    fontFamily: fontFamily('Regular'),
  },
  labelTextLink: {
    color: '#003654',
    fontSize: gpsw('12'),
    lineHeight: gpsh('15.6'),
    fontFamily: fontFamily('Regular'),
  },
  terms: {
    fontSize: gpsw('16'),
    lineHeight: gpsh('20.8'),
    color: '#5F5F5F',
    fontFamily: fontFamily('Regular'),
    marginBottom: gpsh(24),
  },
});

export default RegisterWallet;
