import React, {ReactNode} from 'react';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth,
} from '@/style/theme';
import {SvgProps} from 'react-native-svg';
import HeaderBg, {HeaderBgTypeType} from '@/assets/Headerbackgrounds';
import {StyleSheet} from 'react-native';
import {Box} from '@atom';

type CurvedHeaderType = {
  name: HeaderBgTypeType;
  status?: boolean
  h?: number;
  w?: number;
  children?: ReactNode;
};

const CurvedHeader = ({
  name,
  status,
  h = 180,
  w = 320,
  children,
  ...props
}: CurvedHeaderType) => {
  const CurvedHeaderComponent = HeaderBg[name];
  const statusbarHeight = status ? 0 : 20;
  return (
    <Box height={gsh(h - statusbarHeight)}>
      <CurvedHeaderComponent
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
        preserveAspectRatio="YMin slice"
        width={'100%'}
        height={'100%'}
        viewBox={`0 0 320 ${h + statusbarHeight}`}
        {...props}
      />
      {children}
    </Box>
  );
};

export default CurvedHeader;
