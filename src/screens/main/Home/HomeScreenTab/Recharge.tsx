import {SvgIconType} from '@/constants/icon';
import {bannerImage} from '@/constants/images';
import {getFontSizeByWindowHeight} from '@/style/theme';
import {Box, Icon, Text} from '@atom';
import {Card, Menu, MenuContent, VerticalSeparator} from '@molecule';
import React from 'react';
import {Image} from 'react-native';

type MenuContentType = {
  icon: SvgIconType;
  label: string;
  screen: any;
};
const menuArray: MenuContentType[] = [
  {
    icon: 'DatabundlesIcon',
    label: 'Data Bundles',
    screen: undefined,
  },
  {
    icon: 'AirtimeIcon',
    label: 'Airtime',
    screen: undefined,
  },
];
const Recharge = () => {
  return (
    <Box py={'vsm'} gap={'vsm'} flex={1} bg={'extraLightGrey'} px={'hm'}>
      <Menu content={menuArray} />
    </Box>
  );
};

export default Recharge;
