import TouchableOpacity from '@/component/atom/TouchableOpacity';
import { SvgIconType } from '@/constants/icon';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {Theme} from '@/typings/globalTheme';
import {Box, Icon,Text} from '@atom';
import {useTheme} from '@shopify/restyle';
import React from 'react';
import {StyleSheet} from 'react-native';

type BalanceHeaderType = {
  showBalance: boolean;
  //   toggleBalance: React.Dispatch<React.SetStateAction<boolean>>;
  toggleBalance: () => void;
  phoneNumber: string;
  balnce: string;
  activeIcon?: SvgIconType;
  inactiveIcon?: SvgIconType;
};
const BalanceHeader = ({
  showBalance,
  toggleBalance,
  phoneNumber,
  balnce,
  activeIcon = 'EyeIcon',
  inactiveIcon = 'EyeslashIcon'
}: BalanceHeaderType) => {
  const { colors } = useTheme<Theme>();
  return (
    <Box
      style={{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: gsw(10),
        // paddingTop: getFontSizeByWindowHeight(parseInt(cardsWalletCardSingleBalanceTopMargin)),
        // paddingBottom:
      }}>
      <Text
        style={{
          fontSize: gsw(12),
          fontFamily: 'MTNBrighterSans-Medium',
          color: colors.momoBlue,
          lineHeight: gsw(15.6),
        }}>
        {phoneNumber}
      </Text>
      <Box
        flexDirection={'row'}
        px={'hsm'}
        // style={{paddingHorizontal: 13}}
        justifyContent={'space-between'}
        gap={'hsm'}>
        <Box
          flex={1}
        // width={'94%'}
        // bg={'red100'}
        >
          <Text
            style={{
              fontSize: gsw(20),
              lineHeight: gsw(25),
              fontFamily: 'MTNBrighterSans-Medium',
              color: colors.momoBlue,
              textAlign: 'center',
              // flex: 1
            }}>
            {showBalance ? 'FCFA ************' : balnce}
          </Text>
        </Box>
        <TouchableOpacity alignItems={'flex-end'} onPress={toggleBalance}>
          {showBalance ? (
            <Icon name={activeIcon} stroke={colors.momoBlue}
             size={24} />
          ) : (
            <Icon name={inactiveIcon} stroke={colors.momoBlue}
            size={24} />
          )}
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default BalanceHeader;
