import {
  buttonCornerRadius,
  buttonDefault,
  buttonExtraSmallFontSize,
  buttonExtraSmallHeight,
  buttonExtraSmallWidth,
  buttonInactive,
  buttonSmalHeight,
  buttonSmalWidth,
  buttonSmall,
  globalExtraLightGrey,
  globalMoMoBlue,
} from '@/style-dictionary-dist/momoStyle';
import {Theme} from '@/typings/globalTheme';
import {useTheme} from '@shopify/restyle';
import {
  ActivityIndicator,
  Pressable,
  RegisteredStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {getFontSizeByWindowHeight as gsh} from '@/style/theme';
import {PressableProps} from '../Pressable';
// import Pressable, {PressableProps} from '../Pressable';
import Text from '../Text';
import SvgIcons from '@/constants/icon';
import Icon from '../Icons/Icon';
import {gpmsh, gpsh, gpsw} from '@/utils/parseTokenStyle';

type PressableVariants = Exclude<keyof Theme['buttonVariants'], 'defaults'>;
type TextVariants = keyof Theme['textVariants'];

type PressProps = PressableProps & {
  bStyle?: ViewStyle;
  labelStyle?: TextStyle;
  variant?: PressableVariants;
  textVariant?: TextVariants;
  label: string;
  iconLeft?: keyof typeof SvgIcons;
  iconRight?: keyof typeof SvgIcons;
  iconSize?: number;
  iconColor?: string;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: 'extraSmall' | 'small' | 'medium' | 'fullWidth';
};

export default ({
  onPressIn,
  onPressOut,
  bStyle,
  variant = 'primary',
  textVariant,
  label,
  width,
  iconLeft,
  iconRight,
  iconSize,
  iconColor,
  loading,
  disabled,
  onPress,
  fullWidth,
  size = 'fullWidth',
  labelStyle,
  ...rest
}: PressProps) => {
  const {colors} = useTheme<Theme>();
  let buttonSizeStyle: object;
  switch (size) {
    case 'extraSmall':
      buttonSizeStyle = styles.extraSmall;
      break;
    case 'small':
      buttonSizeStyle = styles.small;
      break;
    case 'medium':
      buttonSizeStyle = styles.medium;
      break;
    case 'fullWidth':
      buttonSizeStyle =
        variant === 'secondary' ? styles.fullWidthOutline : styles.fullWidth;
      break;

    default:
      buttonSizeStyle = styles.extraSmall;
      break;
  }

  //@ts-ignore
  //
  const buttonStyle = {
    ...buttonSizeStyle,
    ...(styles[variant] as object),
    flexDirection: (iconLeft || iconRight) && 'row',
    ...bStyle,
    ...((disabled
      ? variant === 'primary'
        ? styles.primaryInActive
        : styles.secondaryInActive
      : {}) as {}),
  };
  const buttonTextStyle = {
    ...(styles[`${size}Text`] as object),
  };
  // const theme = useTheme<Theme>();
  return (
    <Pressable
      onPress={!disabled ? onPress : () => {}}
      // @ts-ignore
      style={({pressed: isPressed}) =>
        isPressed && !disabled ? [buttonStyle, styles.pressed] : [buttonStyle]
      }>
      <>
        {iconLeft && (
          <Icon
            name={iconLeft}
            size={iconSize || 24}
            color={iconColor || globalMoMoBlue}
          />
        )}
        <Text
          numberOfLines={1}
          style={[
            labelStyle,
            buttonTextStyle,
            {
              color:
                variant === 'primary'
                  ? 'white'
                  : !disabled
                  ? buttonDefault
                  : variant === 'secondary'
                  ? buttonInactive
                  : globalExtraLightGrey,
            },
          ]}>
          {label}
        </Text>
        {iconRight && (
          <Icon
            name={iconRight}
            size={iconSize || 24}
            color={iconColor || globalMoMoBlue}
          />
        )}
      </>
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  extraSmall: {
    paddingHorizontal: 14,
    paddingVertical: 3,
    alignSelf: 'flex-start',
    minWidth: parseInt(buttonExtraSmallWidth),
    maxHeight: parseInt(buttonExtraSmallHeight),
  },
  small: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    minWidth: parseInt(buttonSmalWidth),
    height: parseInt(buttonSmalHeight),
  },
  medium: {
    paddingHorizontal: 36,
    paddingVertical: gsh(12),
    alignSelf: 'flex-start',
  },
  fullWidth: {
    paddingHorizontal: 24,
    paddingVertical: gpmsh('11'),
    // paddingVertical: gpsh('11'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidthOutline: {
    paddingHorizontal: 24,
    paddingVertical: gpmsh('11') - 2,
    // paddingVertical: gpsh('11') - 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  secondaryInActive: {borderColor: buttonInactive},
  primaryInActive: {
    backgroundColor: buttonInactive,
  },
  pressed: {
    opacity: 0.8,
    transform: [{scale: 0.998}],
  },
  primary: {
    backgroundColor: buttonDefault,
    borderRadius: gpsw(buttonCornerRadius),
  },
  secondary: {
    borderColor: buttonDefault,
    borderRadius: gpsw(buttonCornerRadius),
    borderWidth: 2,
  },
  tertiary: {
    borderRadius: gpsw(buttonCornerRadius),
  },
  extraSmallText: {
    fontFamily: 'MTNBrighterSans-Regular',
    fontSize: gpsw(buttonExtraSmallFontSize),
  },
  smallText: {
    fontFamily: 'MTNBrighterSans-Medium',
    fontSize: gpsw(buttonSmall.fontSize),
  },
  mediumText: {
    fontFamily: 'MTNBrighterSans-Medium',
    fontSize: gpsw('14'),
    lineHeight: gpsh('18.2'),
  },
  fullWidthText: {
    fontFamily: 'MTNBrighterSans-Medium',
    fontSize: gpsw('14'),
    lineHeight: gpsh('18.2'),
  },
});
