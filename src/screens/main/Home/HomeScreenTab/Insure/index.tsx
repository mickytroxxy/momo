import {SvgIconType} from '@/constants/icon';
import {Box} from '@atom';
import {Menu} from '@molecule';
import React from 'react';
type MenuContentType = {
  icon: SvgIconType;
  label: string;
  screen: any;
};
const menuArray: MenuContentType[] = [
  {
    icon: 'AyoIcon',
    label: 'aYo',
    screen: 'ayoscreen',
  },
];

const Insure = () => {
  return (
    <Box py={'vsm'} gap={'vsm'} flex={1} bg={'extraLightGrey'} px={'hm'}>
      <Menu content={menuArray} />
    </Box>
  );
};

export default Insure;
