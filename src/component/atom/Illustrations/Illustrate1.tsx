import Illustrate, {IllustrateType} from '@/constants/illustration';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import Box from '../Box';

type IllustrationType = SvgProps & {
  name: IllustrateType;
  h?: number;
  w?: number;
  size?: number;
  color?: string;
};

const Illustration1 = ({
  name,
  h = 230,
  w = 230,
  size = 230,
  ...props
}: IllustrationType) => {
  const IllustrationComponent = Illustrate[name];
  return (
      <IllustrationComponent
        width={w}
        height={h}
        color={'#004F71'}
        {...props}
      />
  );
};

export default Illustration1;
