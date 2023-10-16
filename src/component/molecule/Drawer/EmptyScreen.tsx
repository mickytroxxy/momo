import {Box, Text} from '@atom';
import React from 'react';

import icon from '@/constants/icon';
import {TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Header from '../Header/Header';
import TopHeaderContent from '../Header/TopHeaderContent';
import { DarkStatusBar } from '../StausBar';

const EmptyScreen = ({navigation}: any) => {
  const {NotifoutlineIcon, MomoIcon, PersonroundIcon} = icon;
  return (
    <Box gap={'vxl'}>
      <DarkStatusBar />
      <Header style={{paddingVertical: moderateScale(13)}}>
        <TopHeaderContent
          ph="hsm"
          right={{
            rightComp: (
              <Box alignItems={'center'}>
                <NotifoutlineIcon />
                <Text fontSize={8} color={'white'} style={{gap: 2}}>
                  Notification
                </Text>
              </Box>
            ),
          }}
          left={{
            leftComp: (
              <Box alignItems={'center'} style={{gap: 2}}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <PersonroundIcon />
                </TouchableOpacity>
                <Text
                  lineHeight={10}
                  // fontFamily={'MTNBrighterSans-Light'}
                  fontSize={moderateScale(8)}
                  color={'white'}>
                  Account
                </Text>
              </Box>
            ),
          }}
          center={{centerComp: <MomoIcon width={32} height={32} />}}
          title="Headings"
        />
      </Header>
    </Box>
  );
};

export default EmptyScreen;
