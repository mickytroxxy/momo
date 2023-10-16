import SvgIcons, {SvgIconType} from '@/constants/icon';
import { globalMoMoBlue } from '@/style-dictionary-dist/momoStyle';
import {
  getFontSizeByWindowHeight,
  getFontSizeByWindowWidth,
} from '@/style/theme';
import React from 'react';
import {SvgProps} from 'react-native-svg';

type IconType = SvgProps & {
  name: SvgIconType;
  h?: number;
  w?: number;
  size?: number;
  color?: string;
};

const Icon = ({
  name,
  h = 18,
  w = 18,
  size,
  color = globalMoMoBlue,
  ...props
}: IconType) => {
  const IconComponent = SvgIcons[name];
  return (
    <IconComponent
      width={getFontSizeByWindowWidth(size || w)}
      height={getFontSizeByWindowHeight(size || h)}
      color={color}
      hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
      {...props}
    />
  );
};

export default Icon;
