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

const Illustration = ({
  name,
  h = 230,
  w = 230,
  size = 230,
  ...props
}: IllustrationType) => {
  const IllustrationComponent = Illustrate[name];
  return (
    <Box width={gsw(w)} height={gsh(h)}>
      <IllustrationComponent
        preserveAspectRatio="XMinYMin slice"
        width={'100%'}
        height={'100%'}
        {...props}
      />
    </Box>
  );
};

export default Illustration;
