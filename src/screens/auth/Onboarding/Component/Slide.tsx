import {Box, IllustrateCircle, Text} from '@/component/atom';
import {fontFamily} from '@/style/theme';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {IllustrateType} from '@/constants/illustration';

const Slide = ({
  text,
  description,
  Source,
  dimension: {width: SVGWidth, height: SVGHeight},
}: {
  text: string;
  description: string;
  Source: IllustrateType;
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
        <IllustrateCircle
          w={gpsh(SVGWidth)}
          h={gpsh(SVGHeight)}
          name={Source}
        />
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
