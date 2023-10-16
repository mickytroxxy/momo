import React from 'react';
import {Box, Text} from '@atom';
import {moderateScale} from 'react-native-size-matters';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/typings/globalTheme';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {
  getFontSizeByWindowHeight,
  getFontSizeByWindowWidth,
} from '@/style/theme';
import TouchableOpacity from '@/component/atom/TouchableOpacity';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';

type pillsType = {
  label: string;
  size?: 'large' | 'medium' | 'small';
  pillType:
    | 'bundles'
    | 'alerts'
    | 'instructions'
    | 'packages'
    | 'filter'
    | 'input';
  alertColor?: 'inactive' | 'active' | 'suspended';
  outline?: boolean;
  cancel?: boolean;
  position?: 'left' | 'right';
  onPress?: any;
};
const Alert = {
  inactive: '#FF9400',
  active: '#5CB85C',
  suspended: '#C2334D',
};
const Pills = ({
  label,
  size,
  pillType,
  alertColor,
  outline,
  cancel,
  position,
  onPress,
}: pillsType) => {
  const {colors} = useTheme<Theme>();
  let fontSize;
  let lineHeight;
  let bg: StyleProp<ViewStyle>;
  let tStyle: StyleProp<TextStyle>;
  switch (size) {
    case 'large':
      fontSize = getFontSizeByWindowWidth(14);
      lineHeight = gpsh(18.2);
      break;
    case 'medium':
      fontSize = getFontSizeByWindowWidth(10);
      lineHeight = gpsh(13);
      break;
    case 'small':
      fontSize = getFontSizeByWindowWidth(8);
      lineHeight = gpsh(10.4);
      break;

    default:
      fontSize = getFontSizeByWindowWidth(12);
      lineHeight = gpsh(15.6);
      break;
  }
  switch (pillType) {
    case 'bundles':
      bg = {
        backgroundColor: colors.sunshineYellow,
        paddingHorizontal: getFontSizeByWindowWidth(10),
        paddingVertical: getFontSizeByWindowHeight(2),
      };
      tStyle = {
        color: colors.black,
        // fontWeight: '400'
      };
      break;
    case 'alerts':
      bg = {
        // backgroundColor: colors.sunshineYellow,
        paddingHorizontal: gpsw(10),
        paddingVertical: gpsh(2),
        // height: gpsh(17),
        borderWidth: 1, //#5CB85C
        borderColor: Alert[label.toLowerCase() as keyof typeof Alert],
      };
      tStyle = {
        color: Alert[label.toLowerCase() as keyof typeof Alert],
      };
      break;
    case 'instructions':
      bg = {
        // backgroundColor: colors.sunshineYellow,
        paddingHorizontal: getFontSizeByWindowWidth(10),
        borderWidth: 1, //#5CB85C
        borderColor: '#C2334D',
      };
      tStyle = {
        color: '#C2334D',
      };
      break;
    case 'packages':
      bg = {
        paddingHorizontal: getFontSizeByWindowWidth(27),
        backgroundColor: colors.sunshineYellow,
        borderRadius: 10,
        paddingVertical: getFontSizeByWindowHeight(6),
      };
      tStyle = {
        fontFamily: 'MTNBrighterSans-Medium',
        color: colors.black,
        fontSize: 12,
        lineHeight: 15.6,
      };
      break;
    case 'input':
      if (outline) {
        bg = {
          paddingHorizontal: getFontSizeByWindowWidth(28),
          paddingVertical: getFontSizeByWindowHeight(5),
          borderWidth: 1,
          borderRadius: 150,
          borderColor: 'black',
          gap: cancel ? 12 : 0,
          flexDirection: 'row',
        };
        tStyle = {
          fontFamily: 'MTNBrighterSans-Regular',
          color: 'black',
        };
        break;
      }
      bg = {
        paddingHorizontal: getFontSizeByWindowWidth(28),
        paddingVertical: getFontSizeByWindowHeight(5),
        backgroundColor: colors.momoBlue,
        borderWidth: 1,
        borderRadius: 150,
        gap: cancel ? 12 : 0,
        flexDirection: 'row',
      };
      tStyle = {
        fontFamily: 'MTNBrighterSans-Regular',
        color: 'white',
      };
      break;

    case 'filter':
      if (outline) {
        bg = {
          paddingHorizontal: getFontSizeByWindowWidth(15),
          paddingVertical: getFontSizeByWindowHeight(5),
          borderRadius: 70,
          borderWidth: 1,
          borderColor: colors.momoBlue,
          gap: cancel ? 12 : 0,
          flexDirection: 'row',
          // flexBasis: 'auto'
          // flex:0,
          // backgroundColor: 'red',
          // flexGrow: 0
        };
        tStyle = {
          fontFamily: 'MTNBrighterSans-Regular',
          color: colors.momoBlue,
        };
        break;
      }
      bg = {
        paddingHorizontal: getFontSizeByWindowWidth(15),
        paddingVertical: getFontSizeByWindowHeight(5),
        borderRadius: 70,
        backgroundColor: colors.momoBlue,
        borderWidth: 1,
        gap: cancel ? 12 : 0,
        flexDirection: 'row',
      };
      tStyle = {
        fontFamily: 'MTNBrighterSans-Regular',
        color: 'white',
      };
      break;

    default:
      break;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      borderRadius={18}
      onPress={() => {
        onPress && onPress();
      }}
      // px={'hsm'}
      justifyContent={'center'}
      alignItems={'center'}
      // alignSelf={'auto'}
      // alignSelf={'baseline'}
      alignSelf={position === 'left' ? 'flex-start' : 'flex-end'}
      style={[bg]}>
      <Text
        fontSize={fontSize}
        lineHeight={lineHeight}
        fontFamily={'MTNBrighterSans-Regular'}
        style={[tStyle]}>
        {label}
      </Text>
      {pillType === 'filter' && cancel && <Text>x</Text>}
    </TouchableOpacity>
  );
};

export default Pills;
