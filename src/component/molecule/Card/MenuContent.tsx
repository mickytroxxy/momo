import React from 'react';
import Card from './Card';
import {Box, Icon, Text} from '@atom';
import icons, {SvgIconType} from '@/constants/icon';
import {
  getFontSizeByWindowHeight,
  getFontSizeByWindowWidth,
} from '@/style/theme';
import TouchableOpacity from '@/component/atom/TouchableOpacity';
import {MenuContentType} from './Menu';
import {useNavigation} from '@react-navigation/native';
import {
  initialTransferFormState,
  useTransferFormState,
} from '@/screens/main/Home/HomeScreenTab/MoMoTransfer/MoMoTransferContext';
import {logClickEvent} from '@/utils/analytics';

const MenuContent = ({
  label,
  icon = 'TvIcon',
  onPress,
  screen,
}: MenuContentType) => {
  const {navigate} = useNavigation();
  const {setTransferFormData} = useTransferFormState();
  const nav = () => {};
  return (
    <TouchableOpacity
      onPress={() => {
        if (!screen) return;
        if (typeof screen === 'string') {
          // @ts-ignore
          navigate(screen);
          logClickEvent(`card_${screen}`);
          return;
        }
        // @ts-ignore
        navigate(screen?.route, screen?.nest);
        logClickEvent(`card_${screen?.route}`);
        setTransferFormData(initialTransferFormState);
      }}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'vxxs'}
      flex={1}>
      {<Icon name={icon} size={24} />}
      <Text
        fontSize={getFontSizeByWindowWidth(9)}
        lineHeight={getFontSizeByWindowHeight(11.7)}
        color={'grey'}
        fontFamily="MTNBrighterSans-Regular">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuContent;
