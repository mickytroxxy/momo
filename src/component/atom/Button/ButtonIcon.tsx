import {SvgIconType} from '@/constants/icon';
import Text from '../Text';
import TouchableOpacity from '../TouchableOpacity';
import Icon from '../Icons/Icon';
import {StyleProp, TextStyle} from 'react-native';
import {
  getFontSizeByWindowWidth as gsw,
  getFontSizeByWindowHeight as gsh,
} from '@/style/theme';

type ButtonIconType = {
  title: string;
  icon: SvgIconType;
  titleStyle?: StyleProp<TextStyle>;
  iconColor?: string;
  onPress?: () => void;
};
const ButtonIcon = ({title, icon, onPress}: ButtonIconType) => {
  return (
    <TouchableOpacity
      onPress={() => onPress && onPress()}
      gap={'hsm'}
      py={'vsm'}
      px={'hsm'}
      flexDirection={'row'}
      bg={'momoBlue'}
      borderRadius={gsh(18)}>
      <Icon name={icon} size={16} />
      <Text variant={'regular12'} color={'white'}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
