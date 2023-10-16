import {Box, Text} from '@/component/atom';
import icon from '@/constants/icon';
import {onBoardingImage} from '@/constants/images';
import {fontFamily} from '@/style/theme';
import {Theme} from '@/typings/globalTheme';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {useTheme} from '@shopify/restyle';
import React from 'react';
import {View, useWindowDimensions} from 'react-native';

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

  return (
    <View
      style={{
        width,
        flex: 1,
        position: 'relative',
        marginTop: gpsh('30'),
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'relative',
            width: gpsh('230'),
            height: gpsh('230'),
            // backgroundColor: 'green',
            borderRadius: gpsh('115'),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            elevation: 2,
          }}>
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#F2F2F2',
              borderRadius: gpsh('127'),
              width: gpsh('216'),
              height: gpsh('216'),
              // zIndex: 100
            }}
          />
          {/* @ts-ignore */}
          <Source width={gpsh(SVGWidth)} height={gpsh(SVGHeight)} />
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
