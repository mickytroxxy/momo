import {SubHeaderDataType} from '@/component/ComponentTypings';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {Box, Text} from '@atom';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

type SubHeaderProps = SubHeaderDataType;

export default function SubHeader({headerLeft, headerRight}: SubHeaderProps) {
  const {navigate} = useNavigation();

  return (
    <Box
      py={'vsm'}
      flexDirection={'row'}
      zIndex={1}
      alignItems={'center'}
      justifyContent={'space-between'}
      bg={'extraLightGrey'}
      >
      {headerLeft && (
        <Text
          fontFamily="MTNBrighterSans-Medium"
          fontSize={gsw(10)}
          lineHeight={gsh(13)}
          style={{
            color: '#888888',
          }}
          onPress={() => {
            headerLeft?.route && navigate(headerLeft.route);
          }}>
          {headerLeft.label}
        </Text>
      )}

      {headerRight && (
        <Text
          fontFamily="MTNBrighterSans-Medium"
          fontSize={gsw(12)}
          lineHeight={gsh(15.6)}
          color={'momoBlue'}
          onPress={() => {
            headerRight?.route && navigate(headerRight?.route);
          }}>
          {headerRight.label}
        </Text>
      )}
    </Box>
  );
}
