import HomeScreenNavigator from '@/screens/main/Home';
import More from '@/screens/main/More';
import Profile from '@/screens/main/Offer';
import Transact from '@/screens/main/SettingScreen';
import TransferScreenNavigator from '@/screens/main/Transfer';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {Theme} from '@/typings/globalTheme';
import {BottomTabParams} from '@/typings/navigation';
import {Box, Icon, Text} from '@atom';
import {
  BottomTabBarButtonProps,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useTheme} from '@shopify/restyle';
import {useState} from 'react';
import {Animated, Pressable, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Shadow} from 'react-native-shadow-2';
import {AddButton} from './AnimatedTransactButton';
import {useSharedValue} from 'react-native-reanimated';
import {gpmsh} from '@/utils/parseTokenStyle';

const Tab = createBottomTabNavigator<BottomTabParams>();
type CustomButtonProps = BottomTabBarButtonProps & {
  containerStyle?: ViewStyle;
  isFloat?: boolean;
  label: 'Home' | 'Transfer' | 'More' | 'Offers' | 'Scan QR';
};

type tabIconProp = {
  label: CustomButtonProps['label'];
  focused: boolean;
};

const Tabs = () => {
  const {colors, spacing} = useTheme<Theme>();
  const mode = useSharedValue(0);
  const {bottom} = useSafeAreaInsets();
  const [open, setOpen] = useState(false);

  const toggleView = () => {
    mode.value = mode.value === 0 ? 1 : 0;
    setOpen(v => !v);
  };
  //@ts-ignore
  // const opened = mode._value;
  function renderTabIcon({label, focused}: tabIconProp) {
    switch (label) {
      case 'Home':
        return (
          <Icon
            name="HomeFilledIcon"
            width={gsw(18)}
            height={gsw(18)}
            strokeWidth={1.5}
            color={focused ? colors.momoBlue : colors.white}
            stroke={focused ? colors.momoBlue : colors.lightGrey}
          />
        );
      case 'Transfer':
        return (
          <Icon
            name={focused ? 'TransferNairaFilled' : 'TransferNaira'}
            size={18}
            color={focused ? colors.momoBlue : colors.lightGrey}
          />
        );
      case 'Scan QR':
        return (
          <Icon
            name="TransactIcon"
            size={18}
            fill={colors.momoBlue}
            color={focused ? colors.lightGrey : colors.momoBlue}
          />
        );
      case 'Offers':
        return (
          <Icon
            name="OffersIcon"
            size={18}
            color={focused ? colors.momoBlue : colors.lightGrey}
          />
        );
      case 'More':
        return (
          <Icon
            name="MoreIcon"
            size={18}
            color={focused ? colors.momoBlue : colors.lightGrey}
          />
        );
      default:
        return 'foo';
    }
  }

  type TabarRoutesProps = {
    route: 'Home' | 'Transfer' | 'More' | 'Offers' | 'Scan QR';
    // component: any;
    component: () => React.JSX.Element;
    containerStyle?: ViewStyle;
    isFloat?: boolean;
  };

  const TabarRoutes: TabarRoutesProps[] = [
    {
      route: 'Home',
      component: HomeScreenNavigator,
    },
    {
      route: 'Transfer',
      component: TransferScreenNavigator,
    },
    {
      route: 'Scan QR',
      component: Transact,
      isFloat: true,
    },
    {
      route: 'Offers',
      component: Profile,
    },
    {
      route: 'More',
      component: More,
    },
  ];
  function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
    return (
      <Shadow
        distance={bottom === 0 ? gpmsh(25) : gpmsh(bottom + 10)}
        // distance={30}
        startColor={'#00000020'}
        offset={[10, -60]}
        containerStyle={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
        }}>
        <Box
          borderTopLeftRadius={gsw(9)}
          borderTopRightRadius={gsw(9)}
          py={'vs'}
          style={{
            flexDirection: 'row',
            paddingTop: gpmsh('16'),
            paddingBottom: bottom === 0 ? gpmsh(16) : gpmsh(bottom),
            // paddingBottom: spacing.vs + bottom,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
          }}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label = route.name as tabIconProp['label'];

            const isFocused = state.index === index;
            const focused = !open && isFocused;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                // @ts-ignore
                navigation.navigate({name: route.name, merge: true});
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return index === 2 ? (
              <Pressable
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                key={`index-${index}`}
                onLongPress={onLongPress}
                style={[
                  {
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: 1,
                    position: 'relative',
                    // backgroundColor: "red"
                  },
                ]}>
                <Box
                  style={{
                    position: 'absolute',
                    top: gsh(-36),
                    backgroundColor: colors.sunshineYellow,
                    width: 65,
                    height: 65,
                    borderRadius: 33,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AddButton {...{mode, toggleView}} />
                </Box>
                <Text
                  fontSize={gsw(9)}
                  lineHeight={gsw(11.7)}
                  style={{
                    color: open ? colors.momoBlue : colors.lightGrey,
                    // color: opened !== 1 ? colors.momoBlue : colors.lightGrey,
                  }}>
                  {label}
                </Text>
              </Pressable>
            ) : (
              <Pressable
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                key={`index-${index}`}
                onPress={onPress}
                onLongPress={onLongPress}
                style={[
                  {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1,
                  },
                  index === 0 && {
                    borderTopLeftRadius: gsw(9),
                  },
                  index === 4 && {
                    borderTopRightRadius: gsw(9),
                  },
                ]}>
                {renderTabIcon({label, focused})}

                <Text
                  fontSize={gsw(9)}
                  lineHeight={gsw(11.7)}
                  style={{
                    color: focused ? colors.momoBlue : colors.lightGrey,
                  }}>
                  {label}
                </Text>
              </Pressable>
            );
          })}
        </Box>
      </Shadow>
    );
  }

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
        tabBar={props => <MyTabBar {...props} />}>
        {TabarRoutes.map((_, index) => (
          <Tab.Screen
            key={index}
            name={_.route}
            component={_.component}
            listeners={({}) => ({
              tabPress: e => {
                if (_.route === 'Scan QR') {
                  e.preventDefault();
                  toggleView();
                  return;
                }
                mode.value = 0;
                setOpen(false);
              },
            })}
          />
        ))}
      </Tab.Navigator>

      {/* <Overlay animationIn={'fadeIn'} setModalVisible={closeView} {...{open}}>
        <Box
          position={'absolute'}
          alignItems={'center'}
          bottom={'5%'}
          left={0}
          right={0}>
          <AddButton {...{mode, toggleView}} />
        </Box>
      </Overlay> */}
    </>
  );
};

export default Tabs;
