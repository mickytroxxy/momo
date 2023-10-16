import {View, Text} from 'react-native';
import React from 'react';
import ActionButtonIcons, {
  ActionButtonIconsType,
} from '@/assets/icons/business/ActionButton/ActionButton';
import {SvgProps} from 'react-native-svg';
import {globalMoMoBlue} from '@/style-dictionary-dist/momoStyle';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import LinearGradient from 'react-native-linear-gradient';
import {fontFamily} from '@/style/theme';

type ActionButtonsType = SvgProps & {
  name: ActionButtonIconsType;
  h?: number;
  w?: number;
  size?: number;
  color?: string;
  gradient?: boolean;
};
const ActionButtons = ({
  name,
  h = 40,
  w = 40,
  size = 40,
  color = globalMoMoBlue,
  gradient,
  ...props
}: ActionButtonsType) => {
  const ActionButtonComponent = ActionButtonIcons[name];
  color = gradient ? '#FFCB05' : globalMoMoBlue;
  const textColor = gradient ? '#fff' : globalMoMoBlue;
  const borderColor = gradient ? '#30708b' : '#ccd7dc';
  let bgcolor = gradient ? ['#004F71', '#003654'] : ['#fff', '#fff'];
  return (
    <View
      style={{
        height: gpsw('86'),
        // height: gpsh(86),
        width: gpsw('86'),
        paddingHorizontal: 1,
        paddingVertical: 1,
        // borderWidth: 1,
        borderColor,
        borderRadius: gpsw('20'),
        // backgroundColor: '#004F71'
        justifyContent: 'center',
        backgroundColor: borderColor,
      }}>
      <LinearGradient
        colors={bgcolor}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: gpsh('5.38'),
          //   height: '98%',
          height: '100%',
          //   width: '100%',
          borderRadius: gpsw('19'),
          //   borderWidth: 1,
          borderColor,
        }}>
        <ActionButtonComponent
          width={gpsw(size.toString() || w.toString())}
          height={gpsw(size.toString() || h.toString())}
          // height={gpsh(size || h)}
          color={color}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
          {...props}
        />
        <Text
          style={{
            color: textColor,
            fontSize: gpsw('10'),
            lineHeight: gpsh('13'),
            textAlign: 'center',
            fontFamily: fontFamily('Bold'),
          }}>
          {name}
        </Text>
      </LinearGradient>
    </View>
  );
};

export default ActionButtons;
