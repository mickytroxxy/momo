import OptionsScreen, {OptionsType} from '@/component/molecule/OptionsScreen';
import icon from '@/constants/icon';
import {globalMoMoBlue} from '@/style-dictionary-dist/momoStyle';
import {Box, SafeAreaContainer} from '@atom';
import {BackHeadingX} from '@molecule';
import React from 'react';

export default function Settings() {
  const {LockIcon, MobileIcon} = icon;

  const settingOptions: OptionsType[] = [
    {
      id: 0,
      name: `Change PIN`,
      Icon: <LockIcon fill={globalMoMoBlue} />,
      route: 'ChangePin',
    },
    {
      id: 1,
      name: `Recovery number`,
      Icon: <MobileIcon stroke={globalMoMoBlue} />,
      route: 'RecoverNumber',
    },
  ];

  return (
    <SafeAreaContainer flex={1}>
      <BackHeadingX title='Settings' />
      <OptionsScreen options={settingOptions} IllustrationType="Settings" />
    </SafeAreaContainer>
  );
}
