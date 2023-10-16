import Stepper from '@/component/molecule/Stepper/Stepper';
import {
  headerDashboardLeftMargin,
  headerDashboardRightMargin,
  headerInJourneyBg,
  headerInJourneyFontColour,
} from '@/style-dictionary-dist/momoStyle';
import {gpsw} from '@/utils/parseTokenStyle';
import {Box, Icon} from '@atom';
import {Header, TopHeaderContent} from '@molecule';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

type RegisterWalletHeaderType = {
  step: number;
  title: string;
  setStep: React.Dispatch<React.SetStateAction<0 | 1 | 2>>;
};
const RegisterWalletHeader = ({
  step,
  setStep,
  title,
}: RegisterWalletHeaderType) => {
  const {goBack} = useNavigation();
  const onHandlePrevious = () => {
    if (step === 0) {
      goBack();
    }
    // @ts-ignore
    setStep(v => v - 1);
  };
  return (
    <Box>
      <Header
        zIndex={1}
        py={'vm'}
        style={{
          backgroundColor: headerInJourneyBg,
        }}>
        <TopHeaderContent
          right={{
            rightComp: (
              <Icon
                onPress={() => {
                  goBack();
                }}
                name="HeaderXIcon"
                size={16}
                color={headerInJourneyFontColour}
              />
            ),
          }}
          left={{
            leftComp:
              step === 0 ? (
                <></>
              ) : (
                <Icon
                  onPress={onHandlePrevious}
                  name="BackIcon"
                  color={headerInJourneyFontColour}
                  size={16}
                />
              ),
          }}
          title={title}
          containerStyle={{
            paddingLeft: gpsw(headerDashboardLeftMargin),
            paddingRight: gpsw(headerDashboardRightMargin),
          }}
        />
      </Header>
      <Stepper segments={4} progress={step} />
    </Box>
  );
};

export default RegisterWalletHeader;
