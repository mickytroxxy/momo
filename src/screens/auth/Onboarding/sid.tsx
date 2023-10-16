import {View, useWindowDimensions, Image} from 'react-native';
import React from 'react';
import {onBoardingImage} from '@/constants/images';
import icon from '@/constants/icon';
import {Box, Text} from '@/component/atom';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/typings/globalTheme';
import {gpmsh, gpsh, gpsw} from '@/utils/parseTokenStyle';
import {fontFamily} from '@/style/theme';
import {SvgXml} from 'react-native-svg';

const Slide = ({
  text,
  description,
  Source,
  dimension: {width: SVGWidth, height: SVGHeight},
}: {
  text: string;
  description: string;
  Source: string;
  dimension: any;
}) => {
  const {height, width} = useWindowDimensions();
  const {Onboard1, Onboard2, Onboard3, Onboard4} = onBoardingImage;
  const {BottomTabIcon} = icon;
  const {colors, spacing} = useTheme<Theme>();

  return (
    <View
      style={{
        width,
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        position: 'relative',
        marginTop: gpsh('30'),
      }}>
      <View
        style={{
          alignItems: 'center',
          // backgroundColor: 'red',
        }}>
        <View
          style={{
            position: 'relative',
            // width: gpsh('230'),
            // height: gpsh('230'),
            width: gpsh('215'),
            height: gpsh('215'),
            // backgroundColor: 'green',
            borderRadius: gpsh('115'),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            elevation: 2,
          }}>
          {/* @ts-ignore */}
          {/* <View
            style={{
              position: 'absolute',
              backgroundColor: '#F2F2F2',
              borderRadius: gpsh('127'),
              width: gpsh('216'),
              height: gpsh('216'),
            }}
          /> */}
          {/* <Source width={230} height={230} /> */}
          {/* <Source width={gpsw('230')} height={gpsw('230')} /> */}
          <Source width={gpsh('230')} height={gpsh('230')} />
        </View>
      </View>
      {/* <Text style={{fontSize: 30}}>{text}</Text> */}
      <Box mt={'vm'} px={'hm'}>
        <Text
          style={{
            fontSize: gpsw('21'),
            lineHeight: gpsh('27'),
            color: '#004F71',
            fontFamily: fontFamily('Medium'),
            marginBottom: gpsh('10'),
          }}
          textAlign={'center'}>
          {text}
        </Text>
        <Text
          style={{
            fontSize: gpsw('16'),
            lineHeight: gpsh('24'),
            color: '#5F5F5F',
            fontFamily: fontFamily('Regular'),
            marginBottom: gpsh('10'),
          }}
          variant={'body'}
          textAlign={'center'}>
          {description}
        </Text>
      </Box>
    </View>
  );
};

export default Slide;
