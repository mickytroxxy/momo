import TouchableOpacity from '@/component/atom/TouchableOpacity';
import icons from '@/constants/icon';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {Theme} from '@/typings/globalTheme';
import {Box, Text} from '@atom';
import {useTheme} from '@shopify/restyle';
import Card from './Card';

type QuickActionType = {
  title?: string;
  subtitle?: string;
  icon?: any;
  bg?: 'white' | 'colored';
  width?: number;
  disabled?: boolean;
  onPress?: () => void;
  variant?: 'shadow' | 'noShadow';
};

const QuickAction = ({
  title,
  subtitle,
  icon,
  bg,
  disabled,
  onPress,
  width,
  variant = 'noShadow',
}: QuickActionType) => {
  const {colors, spacing} = useTheme<Theme>();
  const {RightIcon, SettingsIcon} = icons;
  return (
    <Card variant={variant}>
      <TouchableOpacity
        activeOpacity={0.8}
        alignItems={'center'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        onPress={onPress}
        //   opacity={0.7}
        style={[
          {
            backgroundColor: disabled
              ? '#4D849C'
              : bg === 'colored'
              ? colors.momoBlue
              : 'white',
            paddingHorizontal: gsw(10),
            // paddingVertical: 10,
            borderRadius: 15,
          },
          // @ts-ignore
          width && {width: gsw(width)},
        ]}>
        <Box alignItems={'center'} flexDirection={'row'} style={{gap: gsw(10)}}>
          {icon && (
            <SettingsIcon
              width={gsw(24)}
              height={gsh(24)}
              color={colors.sunshineYellow}
            />
          )}
          <Box>
            <Text
              style={{
                fontSize: gsw(12),
                lineHeight: gsw(15.6),
                color: bg !== 'colored' ? colors.momoBlue : 'white',
                fontFamily: 'MTNBrighterSans-Medium',
              }}>
              {title}
            </Text>
            {subtitle && (
              <Text
                style={{
                  fontSize: gsw(9),
                  lineHeight: gsw(11.6),
                  color: bg !== 'colored' ? '#5F5F5F' : 'white',
                }}>
                {subtitle}
              </Text>
            )}
          </Box>
        </Box>
        <RightIcon
          width={gsw(16)}
          height={gsh(16)}
          style={{
            marginVertical: gsh(16),
            //   backgroundColor:'red'
          }}
          color={colors.sunshineYellow}
        />
      </TouchableOpacity>
    </Card>
  );
};

export default QuickAction;

//    // <Shadow
//   distance={gsh(7)}
//   startColor={'#ececec'}
//   offset={[1,5]}
//   style={{
//     width: '100%',
//   }}
//   containerStyle={{
//     width: '100%',
//     backgroundColor: 'white',
//   }}>
