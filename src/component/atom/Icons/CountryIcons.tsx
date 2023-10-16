import {CountryIconType, country} from '@/constants/icon';
import {globalMoMoBlue} from '@/style-dictionary-dist/momoStyle';
import {
  getFontSizeByWindowHeight,
  getFontSizeByWindowWidth,
} from '@/style/theme';
import React from 'react';
import {SvgProps} from 'react-native-svg';

type IconType = SvgProps & {
  name: CountryIconType;
  h?: number;
  w?: number;
  size?: number;
  color?: string;
};

const CountryIcons = ({
  name,
  h = 24,
  w = 24,
  size,
  color = globalMoMoBlue,
  ...props
}: IconType) => {
  const IconComponent = country[name];
  return (
    <IconComponent
      width={getFontSizeByWindowWidth(size || w)}
      height={getFontSizeByWindowHeight(size || h)}
    //   color={color}
      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
      {...props}
    />
  );
};

export default CountryIcons;
