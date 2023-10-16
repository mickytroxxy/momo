import {Theme} from '@/typings/globalTheme';
import {useTheme} from '@shopify/restyle';
import React, {useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';

type Props = {};

import {Box, ScrollView, Text} from '@/component/atom';
import SafeAreaContainer from '@/component/atom/SafeAreaContainer';
import TouchableOpacity from '@/component/atom/TouchableOpacity';
import icon from '@/constants/icon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import {BackHeadingX, Card} from '@molecule';
import {QrCodeDynamic, QrCodeStatic, QrCodeSticker} from '@organisms';
import FileUploader from '@/component/molecule/Card/FileUploader';

const More = () => {
  const {height, width} = useWindowDimensions();
  const {top} = useSafeAreaInsets();
  const {MomoIcon, NotifIcon, HeaderBackground} = icon;
  const {colors, spacing} = useTheme<Theme>();
  const {EyeIcon, EyeslashIcon, TvIcon} = icon;
  const [showBalance, setshowBalance] = useState(false);
  const toggleBalance = () => {
    setshowBalance(v => !v);
  };
  // const {width} = useDimension()
  return (
    <SafeAreaContainer bg={'primaryColor'}>
      {/* <BackHeadingX title='Love' /> */}
      <ScrollView
        style={{
          flex: 1,
          flexGrow: 1,
        }}
        contentContainerStyle={{
          paddingBottom: 200,
          paddingTop: 20,
        }}>
        <Box alignItems={'center'}>
          <FileUploader />
          {/* <QrCodeStatic
            ussd="*172#"
            merchantId="1000083"
            merchantName=" Michael’s Food Store (PTY) LTD"
            value="Tell me softly me wella"
          /> */}

          {/* <QrCodeSticker
            merchantId="1000083"
            merchantName=" Michael’s Food Store"
            value="lick me wella"
          /> */}
          {/* <QrCodeDynamic
            ussd="*102#"
            merchantId="1000083"
            merchantName=" Michael’s Food Store (PTY) LTD"
            value="Tell me softly me wella"
          /> */}
        </Box>
      </ScrollView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 20,
    // backgroundColor: '#fff',
  },
  cardContainer: {
    // backgroundColor: '#fff',
    // backgroundColor: 'red',
    borderRadius: 10,
    overflow: 'hidden',
    // height: '100%',
    // flex: 1,
  },
});

export default More;
