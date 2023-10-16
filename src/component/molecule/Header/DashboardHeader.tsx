import {getFontSizeByWindowHeight as gsw} from '@/style/theme';
import {Icon} from '@atom';
import React from 'react';
import CurvedHeader from './CurvedHeader';
import TopHeaderContent from './TopHeaderContent';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenProps} from '@/typings/navigation';

const DashboardHeading = ({story}: any) => {
  const {openDrawer} = useNavigation<HomeScreenProps['navigation']>();
  return (
    <CurvedHeader name="DashboardHeaderBg" h={180} status>
      <TopHeaderContent
        containerStyle={{
          paddingVertical: gsw(13),
          alignItems: 'flex-start',
        }}
        right={{
          rightComp: <Icon name="NotifoutlineIcon" size={24} />,
        }}
        left={{
          leftComp: (
            <Icon
              onPress={() => (story ? {} : openDrawer())}
              name="PersonroundIcon"
              size={24}
            />
          ),
        }}
        center={{
          centerComp: <Icon name="MomoIcon" size={40} />,
        }}
        // title="Headings"
        titleStyle={{
          color: '#FFCB05',
        }}
      />
    </CurvedHeader>
  );
};

export default DashboardHeading;
