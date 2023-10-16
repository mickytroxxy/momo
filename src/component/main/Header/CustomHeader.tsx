import {HeaderBgTypeType} from '@/assets/Headerbackgrounds';
import {IconType, TitleType} from '@/component/ComponentTypings';
import {headerInJourneyBg} from '@/style-dictionary-dist/momoStyle';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {HomeScreenProps} from '@/typings/navigation';
import {Box, Icon, Text, TouchableOpacity} from '@atom';
import {BackHeadingX, CurvedHeader, Header, TopHeaderContent} from '@molecule';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

type HeaderProps = {
  variant:
    | 'Default'
    | 'CurvedHeader'
    | 'BackHeader'
    | 'NormalHeader'
    | 'SubHeader';
  data: {
    left?: {
      type: 'Icon' | 'Title';
      data: IconType | TitleType;
    };
    right?: {
      type: 'Icon' | 'Title';
      data: IconType | TitleType;
    };
    center?: {
      type: 'Icon' | 'Title';
      data: IconType | TitleType;
    };
  };
  background?: HeaderBgTypeType;
  height?: number;
};

export default function CustomHeader({
  variant,
  data,
  background = 'DashboardHeaderBg',
  height,
}: HeaderProps) {
  const {left, right, center} = data;
  const {openDrawer, goBack, navigate} =
    useNavigation<HomeScreenProps['navigation']>();

  const renderOnPress = (functionName: string) => {
    if (functionName == 'openDrawer') {
      return openDrawer();
    } else if (functionName == 'goBack') {
      return goBack();
    } else {
      return null;
    }
  };

  const renderComponent = (
    d:
      | {
          type: 'Icon' | 'Title';
          data: IconType | TitleType;
        }
      | undefined,
  ) => {
    if (d) {
      const {Icon: icon, size, label = '', onPress, route} = d?.data;

      if (d?.type == 'Icon') {
        return (
          <Icon
            name={icon}
            color={'white'}
            size={size ? 40 : 24}
            onPress={() => {
              route && navigate(route);
              onPress && renderOnPress(onPress);
            }}
          />
        );
      } else if (d?.type == 'Title') {
        return (
          <Text
            variant={'medium18'}
            color={'white'}
            style={[
              {
                fontFamily: 'MTNBrighterSans-Medium',
                fontSize: gsw(16),
                lineHeight: gsh(24),
              },
            ]}
            onPress={() => {
              route && navigate(route);
              onPress && renderOnPress(onPress);
            }}>
            {label}
          </Text>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  if (variant == 'Default') {
    return (
      <Header
        zIndex={1}
        py={'vm'}
        style={{
          backgroundColor: headerInJourneyBg,
        }}>
        <TopHeaderContent
          containerStyle={{
            paddingVertical: gsw(13),
            alignItems: 'center',
          }}
          right={{
            rightComp: renderComponent(right),
          }}
          left={{
            leftComp: renderComponent(left),
          }}
          center={{
            centerComp: renderComponent(center),
          }}
        />
      </Header>
    );
  } else if (variant == 'CurvedHeader') {
    return (
      <CurvedHeader name={background} h={height} status>
        <TopHeaderContent
          containerStyle={{
            paddingVertical: gsw(20),
            // backgroundColor: 'green',
            alignItems: 'center',
          }}
          right={{
            rightComp: renderComponent(right),
          }}
          left={{
            leftComp: renderComponent(left),
          }}
          center={{
            centerComp: renderComponent(center),
          }}
        />
      </CurvedHeader>
    );
  } else if (variant == 'SubHeader') {
    return (
      <Box px={'hm'}>
        <Box
          mb={'vsm'}
          flexDirection={'row'}
          zIndex={1}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Text
            fontFamily="MTNBrighterSans-Medium"
            fontSize={gsw(10)}
            lineHeight={gsh(13)}
            style={{
              color: '#888888',
            }}>
            RECENT TRANSACTIONS
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigate('recenttransactionscreen');
            }}>
            <Text
              fontFamily="MTNBrighterSans-Medium"
              fontSize={gsw(12)}
              lineHeight={gsh(15.6)}
              color={'momoBlue'}>
              See more
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    );
  } else if (variant == 'BackHeader') {
    return <BackHeadingX title="BackHeader" />;
  } else {
    return null;
  }
}
