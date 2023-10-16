import SafeAreaContainer from '@/component/atom/SafeAreaContainer';
import {DarkStatusBar} from '@/component/molecule/StausBar';
import {Box, ScrollView} from '@atom';
import {BackHeadingNotif, LTab, Menu, MenuContentType} from '@molecule';
import React from 'react';
import SchedulePaymentsTabData from './Tabs';

const SchedulePayments = () => {
  // const {navigate} = useNavigation<TransferScreenProps['navigation']>();
  const menuArray: MenuContentType[] = [
    {
      icon: 'CalendarScheduleIcon',
      label: 'Scheduled payments',
      // screen: 'momotransfer',
      screen: {
        route: 'momotransfer',
        nest: {
          type: 'spayment',
        },
      },
    },
  ];
  return (
    <SafeAreaContainer bgColor={'#135b7b'}>
      <DarkStatusBar backgroundColor={'#135b7b'} />
      <Box bg={'white'} flexGrow={1}>
        <BackHeadingNotif title="Scheduled payments" />
        {/* navigate('momouser'); */}
        <Box px={'hm'}>
          <Menu
            variant="shadow"
            style={{
              marginTop: '-23%',
            }}
            content={menuArray}
          />
        </Box>
        <Box flex={1} mt={'vm'}>
          <LTab tabData={SchedulePaymentsTabData} />
        </Box>
      </Box>
    </SafeAreaContainer>
  );
};

export default SchedulePayments;
