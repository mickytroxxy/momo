import icon from '@/constants/icon';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {Meta, StoryObj} from '@storybook/react-native';
import React from 'react';
import {Box, Icon, Text} from '../../atom';
import Header from './Header';
import TopHeaderContent from './TopHeaderContent';
import {Platform} from 'react-native';
import SafeAreaContainer from '@/component/atom/SafeAreaContainer';
import {moderateScale} from 'react-native-size-matters';
import {getFontSizeByWindowWidth} from '@/style/theme';
import {DashboardHeader} from '@molecule';
import {
  headerDashboardLeftMargin,
  headerDashboardRightMargin,
  headerInJourneyBg,
  headerInJourneyFontColour,
} from '@/style-dictionary-dist/momoStyle';
import {gpsw} from '@/utils/parseTokenStyle';
// import { Box, Text } from '@/component/atom';

const {
  NotifIcon,
  HeaderXIcon,
  NotifoutlineIcon,
  PersonroundIcon,
  MomoIcon,
  BackIcon,
} = icon;

const HeaderMeta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  // args: {
  //   label: 'Add Label Here',
  // },
  decorators: [
    withBackgrounds,
    Story =>
      Platform.select({
        ios: <Story />,
        android: (
          <SafeAreaContainer>
            <Story />
          </SafeAreaContainer>
        ),
      }),
  ],
};

type story = StoryObj<typeof HeaderMeta>;

export const HeaderInJourneyBg: StoryObj<typeof HeaderMeta> = {
  render: args => (
    <Box gap={'vxl'}>
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
                name="HeaderXIcon"
                size={16}
                color={headerInJourneyFontColour}
              />
            ),
          }}
          left={{
            leftComp: (
              <Icon
                name="BackIcon"
                color={headerInJourneyFontColour}
                size={16}
              />
            ),
          }}
          title={'Headings'}
          containerStyle={{
            paddingLeft: gpsw(headerDashboardLeftMargin),
            paddingRight: gpsw(headerDashboardRightMargin),
          }}
        />
      </Header>
    </Box>
  ),
};

export const HeaderDashboard: StoryObj<typeof HeaderMeta> = {
  render: args => (
    <Box gap={'vxl'}>
      <DashboardHeader story />
    </Box>
  ),
};

export default HeaderMeta;
