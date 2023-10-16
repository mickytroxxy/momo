import {Box} from '@atom';
import {Menu, MenuContentType} from '@molecule';
import React from 'react';

const menuArray: MenuContentType[] = [
  {
    icon: 'MomotransferIcon',
    label: 'MoMo transfer',
    // screen: 'momotransfer',
    screen: {
      route: 'momotransfer',
      nest: {
        type: 'momotransfer',
      },
    },
  },
  {
    icon: 'CalendarScheduleIcon',
    label: 'Schedule payments',
    screen: 'schedulepaymentscreen',
  },
];
const menuArray2: MenuContentType[] = [
  {
    icon: 'BillsIcon',
    label: 'Bills',
  },
  {
    icon: 'BettingIcon',
    label: 'Betting',
  },
];

const Pay = () => {
  return (
    <Box py={'vsm'} gap={'vsm'} flex={1} bg={'extraLightGrey'} px={'hm'}>
      <Menu content={menuArray} />
      <Menu content={menuArray2} />
    </Box>
  );
};

export default Pay;
