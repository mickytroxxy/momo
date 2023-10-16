import crashlytics from '@react-native-firebase/crashlytics';
import SafeAreaContainer from '@/component/atom/SafeAreaContainer';
import CurvedHeaders from '@/component/molecule/Header/CurvedHeader';
import {Box, Button, Icon, Text} from '@atom';
import {ScaledSheet} from 'react-native-size-matters';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import BottomSheet, {BottomSheetModal} from '@gorhom/bottom-sheet';
import PullTray from '@/component/molecule/Overlay/PullTray';
import {StyleSheet} from 'react-native';

import Camera, {useCameraDevices} from 'react-native-vision-camera';
import {
  BalanceFooter,
  BalanceHeader,
  Card,
  HorizontalCardSeparator,
  LinearTab,
  VerticalSeparator,
} from '@molecule';
import {
  getFontSizeByWindowHeight,
  getFontSizeByWindowWidth,
} from '@/style/theme';
import SvgIcons from '@/constants/icon';
import {ScrollLTabs} from '@/component/molecule/Tab/Tab.stories';
import ScrollLinearTab from '@/component/molecule/Tab/AnimatedScrollviewLinearTab';
import {gpsw} from '@/utils/parseTokenStyle';

const {InfoCardIcon} = SvgIcons;
const Profile = () => {
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  // callbacks
  const handlePresentPullTray = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const [showBalance, setshowBalance] = useState(false);
  const toggleBalance = () => {
    setshowBalance(v => !v);
  };
  const tabData = [
    {
      title: 'FOR YOU',
      renderScene: () => (
        <Box width={'100%'} bg={'green100'} pt={'vl'} flex={1}>
          {/* <Box width={'100%'} bg={'green100'} pt={'vl'} height={'100%'}> */}
          <Text>You don't like this right</Text>
        </Box>
      ),
    },
    {
      title: 'PAY',
      renderScene: () => (
        <Box height={100}>
          <Text>You don't like this left</Text>
        </Box>
      ),
    },
    {
      title: 'TOPUP',
      renderScene: () => (
        <Box height={100}>
          <Text>but you like it center </Text>
        </Box>
      ),
    },
    {
      title: 'SERVICES',
      renderScene: () => (
        <Box height={100}>
          <Text>but you like it center </Text>
        </Box>
      ),
    },
    // {
    //   title: 'ASSERVICES',
    //   renderScene: () => (
    //     <Box height={100}>
    //       <Text>but you like it center </Text>
    //     </Box>
    //   ),
    // },
    // {
    //   title: 'LOVE',
    //   renderScene: () => (
    //     <Box height={100}>
    //       <Text>but you like it center </Text>
    //     </Box>
    //   ),
    // },
  ];
  return (
    <SafeAreaContainer bgColor={'#004f71'}>
      <Box
        mb={'vxl'}
        style={{
          marginTop: 280,
        }}
      />
      {/* <CurvedHeaders name="TransferHeaderBg" h={120}>
        <Box pt="vm" px={'hsm'}>
          <Text textAlign={'center'} color={'white'}>
            Testing Out Codepush
          </Text>
          <Text mt={'hxxs'} textAlign={'center'} color={'white'}>
            If you can see this, it means that it's working
          </Text>
        </Box>
      </CurvedHeaders> */}
      {/* <Box px={'hm'} mt={'vm'}>
        <Button
          onPress={() => {
            crashlytics().crash();
            // crash();
          }}
          label="Crash"
        />
        <Button
          onPress={() => {
            // crash();
            handlePresentPullTray();
          }}
          label="Pull Tray"
        />
      </Box>

      <PullTray
        handleSheetChanges={handleSheetChanges}
        handlePresentPullTray={handlePresentPullTray}
        trayRef={bottomSheetModalRef}>
        <Text>dhdhjhj</Text>
      </PullTray> */}
      {/* <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} /> */}

      {/* ADD HEADERSTYLE: GAP IF YOU ARE NOT SPACING EVENLY.... HEADERSTYLE AND SPACE EVENLY DOESN'T WORK TOGETHER FINE */}
      <ScrollLinearTab
        // headerStyle={{gap: gpsw(40)}}
        tabData={tabData}
        pH={gpsw(20)}
        spaceEvenly
      />
      {/* <LinearTab
        // headerStyle={{gap: gpsw(40)}}
        tabData={tabData}
        pH={gpsw(20)}
        spaceEvenly
      /> */}
    </SafeAreaContainer>
  );
};

const styles = ScaledSheet.create({
  inputStyles: {
    width: '40@ms',
    height: '40@ms',
    borderColor: '#004F71',
    paddingHorizontal: 10,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'MTNBrighterSans-Bold',
  },
  inputContainerStyles: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#004F71',
  },
  otpViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  focusStyles: {
    borderRadius: 10,
  },
});

export default Profile;
