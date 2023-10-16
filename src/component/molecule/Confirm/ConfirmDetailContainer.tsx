import {View, Text} from 'react-native';
import React from 'react';
import {Box} from '@atom';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';

const ConfirmDetailContainer = ({children, total}: any) => {
  return (
    <Box
      borderWidth={gsh(1)}
      bg={total ? 'extraLightGrey' : 'backgroundShading'}
      borderColor={total ? 'transparent' : 'lightGrey'}
      borderRadius={gsh(9)}
      pt={'vsm'}
      px={'hsm'}>
      {children}
    </Box>
  );
};

export default ConfirmDetailContainer;
