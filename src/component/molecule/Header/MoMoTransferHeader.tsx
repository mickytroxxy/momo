import {
  headerDashboardLeftMargin,
  headerDashboardRightMargin,
  headerInJourneyBg,
  headerInJourneyFontColour,
} from '@/style-dictionary-dist/momoStyle';
import {gpsw} from '@/utils/parseTokenStyle';
import {Box, Icon} from '@atom';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Header from './Header';
import TopHeaderContent from './TopHeaderContent';
import Stepper from '../Stepper/Stepper';
import {useTransferFormState} from '@/screens/main/Home/HomeScreenTab/MoMoTransfer/MoMoTransferContext';

type MoMoTransferHeaderType = {
  title: string;
};

const MoMoTransferHeader = ({title}: MoMoTransferHeaderType) => {
  const {goBack} = useNavigation();
  const {onHandlePrevious, step, setTransferFormData, resetStep} =
    useTransferFormState();
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
                  resetStep();
                  setTransferFormData({});
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
      <Stepper segments={3} progress={step} />
    </Box>
  );
};

export default MoMoTransferHeader;
