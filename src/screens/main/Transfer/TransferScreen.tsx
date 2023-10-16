import SafeAreaContainer from '@/component/atom/SafeAreaContainer';
import {DarkStatusBar} from '@/component/molecule/StausBar';
import {getFontSizeByWindowWidth} from '@/style/theme';
import {Box, ScrollView} from '@atom';
import {BackHeadingNotif, LinearTab, Menu, MenuContentType} from '@molecule';
import React from 'react';
import TransferTabData from './TransferTabs';
import { gpsw } from '@/utils/parseTokenStyle';

const Transfer = () => {
  // const {navigate} = useNavigation<TransferScreenProps['navigation']>();
  const menuArray: MenuContentType[] = [
    {
      icon: 'Cardmomo',
      label: 'MTN MoMo',
      screen: 'momouser',
    },
    {
      icon: 'Banktransfer',
      label: 'Bank Transfer',
      screen: 'banktransfer',
    },
  ];
  return (
    <SafeAreaContainer bgColor="#135b7b">
      <DarkStatusBar backgroundColor={'#135b7b'} />
      <Box bg={'white'} flexGrow={1}>
        <BackHeadingNotif title="Transfers" />
        <Box px={'hm'}>
          <Menu
            variant="shadow"
            style={{
              marginTop: '-23%',
            }}
            content={menuArray}
          />
        </Box>
        <Box flexGrow={1} mt={'vm'} mb={'vxl'}>
          <LinearTab
            headerStyle={{gap: gpsw(25)}}
            tabData={TransferTabData}
            pH={30}
          />
        </Box>
      </Box>
    </SafeAreaContainer>
  );
};

export default Transfer;
