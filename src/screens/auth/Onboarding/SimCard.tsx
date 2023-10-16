import {OnboardScreenProps} from '@/typings/navigation';
import {SafeAreaContainer} from '@atom';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import SimCardComp from '../component/SimCardComp';

const SimCard = () => {
  const {navigate} = useNavigation<OnboardScreenProps['navigation']>();
  const handleNext = () => {
    navigate('otptimer');
  };
  return (
    <SafeAreaContainer>
      {/* <DarkStatusBar /> */}
      {/* <StatusBar barStyle={'light-content'}  /> */}
      {/* <CurvedHeader name="AuthBg" h={250}  /> */}
      <SimCardComp {...{handleNext}} />
    </SafeAreaContainer>
  );
};

export default SimCard;
