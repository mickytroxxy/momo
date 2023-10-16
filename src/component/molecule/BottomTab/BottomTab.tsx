import icon from '@/constants/icon';
import {AddButton} from '@/navigation/bottomTab/AnimatedTransactButton';
import {
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {Theme} from '@/typings/globalTheme';
import {Box, Icon, Text} from '@atom';
import {
  BottomTabBarButtonProps,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useTheme} from '@shopify/restyle';
import {Pressable, TouchableOpacity, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Shadow} from 'react-native-shadow-2';
import EmptyScreen from './EmptyScreen';
import {useSharedValue} from 'react-native-reanimated';
import {useState} from 'react';
import {gpmsh} from '@/utils/parseTokenStyle';

const Tab = createBottomTabNavigator();
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
  const [open, setOpen] = useState(false);
  const mode = useSharedValue(0);
  const {bottom} = useSafeAreaInsets();
  const toggleView = () => {
    mode.value = mode.value === 0 ? 1 : 0;
    setOpen(v => !v);
  };
  const {
    HomeIcon,
    TransactIcon,
    HomeFilledIcon,
    TransferIcon,
    OffersIcon,
    MoreIcon,
  } = icon;

  function renderTabIcon({label, focused}: tabIconProp) {
    switch (label) {
      case 'Home':
        return (
          <HomeFilledIcon
            width={gsw(18)}
            height={gsw(18)}
            strokeWidth={1.5}
            stroke={focused ? colors.momoBlue : colors.lightGrey}
            fill={focused ? colors.momoBlue : colors.white}
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

        break;
      case 'Scan QR':
        return (
          <TransactIcon
            width={gsw(18)}
            height={gsw(18)}
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
      component: EmptyScreen,
    },
    {
      route: 'Transfer',
      component: EmptyScreen,
    },
    {
      route: 'Scan QR',
      component: EmptyScreen,
      isFloat: true,
    },
    {
      route: 'Offers',
      component: EmptyScreen,
    },
    {
      route: 'More',
      component: EmptyScreen,
    },
  ];
  function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
    // console.log('state', state)
    return (
      <Shadow
        distance={gpmsh('30')}
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
          style={{
            flexDirection: 'row',
            paddingTop: gpmsh('16'),
            paddingBottom: gpmsh('16'),
            // paddingBottom: spacing.vs,
            // paddingBottom: spacing.vs + bottom,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
          }}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            // const label =
            //   options.tabBarLabel !== undefined
            //     ? options.tabBarLabel
            //     : options.title !== undefined
            //     ? options.title
            //     : route.name;
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
                    top: -33,
                    backgroundColor: colors.sunshineYellow,
                    width: 51,
                    height: 51,
                    borderRadius: 25,
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
  );
};

export default Tabs;
