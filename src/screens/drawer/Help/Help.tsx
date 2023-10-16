import icon from '@/constants/icon';
import {globalMoMoBlue} from '@/style-dictionary-dist/momoStyle';
import {Box, SafeAreaContainer} from '@atom';
import OptionsScreen, {OptionsType} from '@/component/molecule/OptionsScreen';
import React from 'react';
import {Linking, Platform} from 'react-native';
import {BackHeadingX} from '@molecule';

export default function Help() {
  const {ReportIcon, LocationIcon} = icon;

  const dialCall = (number: number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  const helpOptions: OptionsType[] = [
    {
      id: 0,
      name: `Locate Agent`,
      Icon: <LocationIcon color={globalMoMoBlue} />,
      route: 'LoacateAgent',
    },
    {
      id: 1,
      name: `Report Fraud`,
      Icon: <ReportIcon stroke={globalMoMoBlue} />,
      onPress: () => dialCall(1234567890),
    },
    {
      id: 2,
      name: `Contact customer care`,
      Icon: <LocationIcon color={globalMoMoBlue} />,
      onPress: () => dialCall(1234567890),
    },
  ];

  return (
    <SafeAreaContainer flex={1}>
      <BackHeadingX title="Help" />
      <OptionsScreen options={helpOptions} IllustrationType="CallCenter" />
    </SafeAreaContainer>
  );
}
