import {
  headerDashboardLeftMargin,
  headerDashboardRightMargin,
  headerInJourneyBg,
  headerInJourneyFontColour,
} from '@/style-dictionary-dist/momoStyle';
import {gpmsh, gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Icon} from '@atom';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Header from './Header';
import TopHeaderContent from './TopHeaderContent';

type BackHeadingXType = {
  title: string;
};

const BackHeadingX = ({title}: BackHeadingXType) => {
  const {goBack} = useNavigation();
  return (
    <Header
      zIndex={1}
      py={'vm'}
      style={{
        backgroundColor: headerInJourneyBg,
        // paddingVertical: gpmsh(20)
      }}>
      <TopHeaderContent
        right={{
          rightComp: (
            <Icon
              onPress={() => goBack()}
              name="HeaderXIcon"
              size={16}
              color={headerInJourneyFontColour}
            />
          ),
        }}
        left={{
          leftComp: (
            <Icon
              onPress={() => goBack()}
              name="BackIcon"
              color={headerInJourneyFontColour}
              size={16}
            />
          ),
        }}
        title={title}
        containerStyle={{
          paddingLeft: gpsw(headerDashboardLeftMargin),
          paddingRight: gpsw(headerDashboardRightMargin),
        }}
      />
    </Header>
  );
};

export default BackHeadingX;
