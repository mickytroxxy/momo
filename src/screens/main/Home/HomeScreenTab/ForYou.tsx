import {SvgIconType} from '@/constants/icon';
import {bannerImage} from '@/constants/images';
import {getFontSizeByWindowHeight} from '@/style/theme';
import {Box, Icon, ScrollView} from '@atom';
import {Card, Menu, MenuContent, VerticalSeparator} from '@molecule';
import React from 'react';
import {Image} from 'react-native';

const {recmomobanner} = bannerImage;
type MenuContentType = {
  icon: SvgIconType;
  label: string;
  screen: any;
};
const menuArray: MenuContentType[] = [
  {
    icon: 'MomotransferIcon',
    label: 'MoMo transfer',
    screen: undefined,
  },
  {
    icon: 'BillsIcon',
    label: 'Bills',
    screen: undefined,
  },
];
const menuArray2: MenuContentType[] = [
  {
    icon: 'DatabundlesIcon',
    label: 'Data Bundles',
    screen: undefined,
  },
  {
    icon: 'AirtimeIcon',
    label: 'Airtime',
    screen: undefined,
  },
];
// ScrollView
const ForYou = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 100,
      }}
      py={'vsm'}
      flexGrow={1}
      flex={1}
      bg={'extraLightGrey'}
      px={'hm'}>
      <Box gap={'vsm'}>
        <Menu content={menuArray} />
        <Menu content={menuArray2} />
        <Box
          height={104}
          borderRadius={16}
          overflow={'hidden'}
          alignItems={'center'}>
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            source={recmomobanner}
          />
        </Box>
      </Box>
    </ScrollView>
  );
};

export default ForYou;
