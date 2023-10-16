import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import {Box, Icon} from '@atom';
import useDimension from '@/hooks/useDimension';

type BottomModalType = {
  children: ReactNode;
};

const BottomModal = ({children}: BottomModalType) => {
  const {width, height} = useDimension();
  return (
    <Box flex={1} justifyContent={'flex-end'}>
      <Box
        style={{
          // flex: 1,
          backgroundColor: 'white',
          height: 0.5 * height,
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,
        }}>
        <Box alignItems={'center'} py={'vsm'}>
          <Icon name="UpIcon" size={24} />
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default BottomModal;
