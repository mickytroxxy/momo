import TouchableOpacity from '@/component/atom/TouchableOpacity';
import QuickAction from '@/component/molecule/Card/QuickAction';
import Overlay from '@/component/molecule/Overlay';
import Pills from '@/component/molecule/Pills/Pills';
import { SvgIconType } from '@/constants/icon';
import { Accounts } from '@/constants/images';
import { globalSunshineYellow } from '@/style-dictionary-dist/momoStyle';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import { Box, Icon, Text } from '@atom';
import { BottomModal } from '@molecule';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

type drawerTabsType = {
  id: number;
  title: string;
  subject: string;
  drawerIcon: SvgIconType;
  route: string;
  screen: string;
};

function SideBar(props: any) {
  const {qrcode} = Accounts;
  const insets = useSafeAreaInsets();
  const [isModalVisible, setModalVisible] = useState(false);
  const closeModal = () => setModalVisible(false);

  const drawerTabs: drawerTabsType[] = [
    {
      id: 0,
      title: 'Settings',
      subject: 'Change Pin',
      drawerIcon: 'SettingsIcon',
      route: 'Settings',
      screen: 'SettingsMain',
    },
    {
      id: 1,
      title: 'Help',
      subject: 'Locate Agent,Report Fraud...',
      drawerIcon: 'HelpIcon',
      route: 'Help',
      screen: 'HelpMain',
    },
    {
      id: 2,
      title: 'Recommend MoMo',
      subject: 'Refer a friend, Share this app',
      drawerIcon: 'RecommendIcon',
      route: 'RecommendMomo',
      screen: 'RecommendMain',
    },
  ];

  const _renderDrawerTab = (item: drawerTabsType) => {
    const {drawerIcon, route, screen} = item;
    return (
      <Box my={'vxxs'} key={item.id}>
        <QuickAction
          onPress={() => {
            props.navigation.navigate(route, {
              screen,
            });
          }}
          title={item.title}
          bg="colored"
          subtitle={item.subject}
          icon={
            <Icon
              name={drawerIcon}
              color={globalSunshineYellow}
              width={24}
              height={24}
            />
          }
        />
      </Box>
    );
  };


  const generateQrCode = (qrData: any, qrSize: number) => {
    const qrServerBaseUrl = `https://api.qrserver.com/v1/create-qr-code/`
    const qrImageUrl = `${qrServerBaseUrl}?data=${encodeURIComponent(qrData)}&size=${qrSize}`
    return qrImageUrl
  }


  return (
    <DrawerContentScrollView
      {...props}
      //   style={{padding: 0}}
      contentContainerStyle={[
        styles.container,
        {
          paddingTop: insets.top,
          // backgroundColor: 'green'
        },
      ]}>
      {/* <Text>skjksj</Text> */}
      <Box
        mx={'hm'}
        pt={'vm'}
        width={'100%'}
        // bg={'red40'}
        style={{
          width: gsw(242),
          justifyContent: 'space-between',
          height: '100%',
          paddingBottom: 20,
        }}>
        <Box>
          <Box flexDirection="row" width="100%" alignItems={'flex-start'}>
            <Icon name="ProfilePicIcon" size={30} />
            <Box ml={'hsm'}>
              <Text
                color={'momoBlue'}
                style={{
                  fontSize: gsw(12),
                  fontWeight: '500',
                  fontFamily: 'MTNBrighterSans-Medium',
                }}>
                Phathutshedzo
              </Text>
              <Text
                variant={'medium16'}
                color={'momoBlue'}
                style={{
                  fontSize: gsw(12),
                  fontWeight: '500',
                  fontFamily: 'MTNBrighterSans-Medium',
                }}>
                097 123 4567
              </Text>
              <Box mt={'vsm'}>
                <Pills
                  outline={true}
                  pillType="filter"
                  label="Switch Account"
                  position="left"
                />
              </Box>
            </Box>
            <Icon
              onPress={() => props.navigation.closeDrawer()}
              name="TabCloseIcon"
              size={16}
              style={{
                marginLeft: 'auto',
              }}
            />
          </Box>
          {/* <Box pl={'hs'}>
        
          </Box> */}
          <Box alignSelf={'center'} my={'vl'}>
            <FastImage
              source={qrcode}
              style={{ width: gsw(110), height: gsh(110) }}
              resizeMode="contain"
            />
            {/* <Image
              source={{ uri: generateQrCode('https://www.mtn.com', 200) }}
              style={{ width: gsw(110), height: gsh(110) }}
              resizeMode="contain"
            /> */}
          </Box>

          <Box width={'100%'}>
            {drawerTabs.map(item => {
              return _renderDrawerTab(item);
            })}
          </Box>
        </Box>

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            // marginBottom: 30,
            alignItems: 'center',
          }}
          onPress={() => {
            props.navigation.closeDrawer();
            setModalVisible(true);
          }}>
          <Icon
            name="SignoutIcon"
            strokeWidth={1.5}
            stroke={globalSunshineYellow}
            size={24}
          />
          <Text
            color={'momoBlue'}
            variant={'body'}
            ml={'xxs'}
            style={{
              fontFamily: `MTNBrighterSans-Medium`,
              fontSize: gsw(12),
            }}>
            Sign out
          </Text>
        </TouchableOpacity>
      </Box>
      <Overlay swipe open={isModalVisible} setModalVisible={closeModal}>
        <BottomModal>
          <Box
            flex={1}
            px={'hm'}
            pb={'vxl'}
            justifyContent={'center'}
            alignItems={'center'}>
            <Text variant={'storyHead'}>Testing this out</Text>
          </Box>
        </BottomModal>
      </Overlay>
    </DrawerContentScrollView>
  );
}

export default SideBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 0,
    padding: 30,
    color: '#fff',
    borderTopRightRadius: moderateScale(18),
    borderBottomRightRadius: moderateScale(18),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
    color: 'blue',
    backgroundColor: '#888',
  },
});
