import TouchableOpacity from '@/component/atom/TouchableOpacity';
import icon from '@/constants/icon';
import {getFontSizeByWindowWidth} from '@/style/theme';
import {Box, Text} from '@atom';
import React from 'react';

type balanceFooterType = {
  label: string;
  icon?: any;
  onPress?: () => void;
};
const BalanceFooter = ({label, icon, onPress}: balanceFooterType) => {
  return (
    <TouchableOpacity
      justifyContent={'center'}
      alignItems={'center'}
      onPress={onPress}
      py={'vsm'}
      style={{
        gap: 2,
        flex: 1
      }}
      >
      {icon && icon}
      <Text
        fontSize={getFontSizeByWindowWidth(9)}
        lineHeight={getFontSizeByWindowWidth(11.7)}
        color={'momoBlue'}
        fontFamily="MTNBrighterSans-Medium">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default BalanceFooter;
