import React, {ReactNode} from 'react';
import {ImageBackground} from 'react-native';

type Props = {};

import {Box} from '@/component/atom';
import {getFontSizeByWindowHeight as gsh} from '@/style/theme';

const CurvedHeaderBg = ({
  children,
  height = 180,
  image,
}: {
  children?: ReactNode;
  height?: number;
  image?: any;
}) => {
  return (
    <Box>
      <ImageBackground
        source={image}
        style={{
          width: '100%',
          height: gsh(height),
        }}>
        {children}
      </ImageBackground>
    </Box>
  );
};

export default CurvedHeaderBg;
