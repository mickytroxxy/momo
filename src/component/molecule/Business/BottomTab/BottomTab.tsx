import EmptyScreen from '@/screens/EmptyScreen';
import {Theme} from '@/typings/globalTheme';
import {gpmsh, gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Box, Icon, Text} from '@atom';
import {
  BottomTabBarButtonProps,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useTheme} from '@shopify/restyle';
import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {
  bottomNavBusinessBackground,
  bottomNavBusinessBottomMargin,
  bottomNavBusinessFontColour1,
  bottomNavBusinessFontColour2,
  bottomNavBusinessIcon,
  bottomNavBusinessTopMargin,
} from '@/style-dictionary-dist/momoStyle';
import {useCallback, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useSharedValue} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AddButton} from './AddButton';
import Dashboard from '@/screens/Dashboard';
const Tab = createBottomTabNavigator();
//git push --set-upstream origin feature/Dashboard
type CustomButtonProps = BottomTabBarButtonProps & {
  containerStyle?: ViewStyle;
  isFloat?: boolean;
  label: 'Home' | 'Transfer' | 'More' | 'Profile' | 'Transact';
};

type tabIconProp = {
  label: CustomButtonProps['label'];
  focused: boolean;
};

type TabarRoutesProps = {
  route: 'Home' | 'Transfer' | 'More' | 'Profile' | 'Transact';
  // component: any;
  component: () => React.JSX.Element;
  containerStyle?: ViewStyle;
  isFloat?: boolean;
};

const Tabs = () => {
  const mode = useSharedValue(0);
  const [open, setOpen] = useState(false);
  const {colors} = useTheme<Theme>();
  const {bottom} = useSafeAreaInsets();

  const toggleView = () => {
    mode.value = mode.value === 0 ? 1 : 0;
    if (mode.value === 1) {
      setTimeout(() => {
        setOpen(v => !v);
      }, 50);
      return;
    }
    setOpen(v => !v);
  };

  function renderTabIcon({label, focused}: tabIconProp) {
    switch (label) {
      case 'Home':
        return (
          <Icon
            name="HomeFilledIcon"
            size={parseInt(bottomNavBusinessIcon)}
            color={focused ? colors.sunshineYellow : colors.transparent}
            stroke={focused ? colors.transparent : colors.white}
          />
        );
      case 'Transfer':
        return (
          <Icon
            name="DashTransferIcon"
            size={parseInt(bottomNavBusinessIcon)}
            color={focused ? colors.sunshineYellow : colors.white}
          />
        );
      case 'Transact':
        return (
          <Icon
            name="DashTransferIcon"
            size={parseInt(bottomNavBusinessIcon)}
            color={colors.transparent}
          />
        );
      case 'Profile':
        return (
          <Icon
            name="DashProfileIcon"
            size={parseInt(bottomNavBusinessIcon)}
            color={focused ? colors.sunshineYellow : colors.white}
          />
        );
      case 'More':
        return (
          <Icon
            name="DashMenuIcon"
            size={parseInt(bottomNavBusinessIcon)}
            color={focused ? colors.sunshineYellow : colors.white}
          />
        );
      default:
        return 'foo';
    }
  }

  const TabarRoutes: TabarRoutesProps[] = [
    {
      route: 'Home',
      component: Dashboard as any,
    },
    {
      route: 'Transfer',
      component: EmptyScreen,
    },
    {
      route: 'Transact',
      component: EmptyScreen,
      isFloat: true,
    },
    {
      route: 'Profile',
      component: EmptyScreen,
    },
    {
      route: 'More',
      component: EmptyScreen,
    },
  ];
  function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
    return (
      <LinearGradient
        colors={['#004F71', '#003654']}
        style={[
          styles.bottomTabContainer,

          {
            paddingBottom: gpmsh(
              bottom + parseInt(bottomNavBusinessBottomMargin).toString(),
            ),
            borderTopLeftRadius: gpsw('9'),
            borderTopRightRadius: gpsw('9'),
          },
        ]}
        // style={style}
      >
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = route.name as tabIconProp['label'];

          const isFocused = state.index === index;

          // Focus state for managing the color of the tab icon/text
          const focused = !open && isFocused;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
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
              style={[styles.tabButtonStyle]}>
              {renderTabIcon({label, focused})}
              <View
                style={{
                  position: 'absolute',
                  top: gpmsh('15'),
                  alignItems: 'center',
                }}>
                {/* <AddButton {...{mode, toggleView}} dummy /> */}
              </View>
              <Text
                style={{
                  color: open
                    ? bottomNavBusinessFontColour2
                    : bottomNavBusinessFontColour1,
                  fontSize: gpsw('10'),
                  lineHeight: gpsh('13'),
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
              style={[styles.tabButtonStyle]}>
              {renderTabIcon({label, focused})}
              <Text
                style={{
                  color: focused ? colors.sunshineYellow : colors.white,
                  fontSize: gpsw('10'),
                  lineHeight: gpsh('13'),
                }}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </LinearGradient>
    );
  }

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => <MyTabBar {...props} />}>
        {TabarRoutes.map((_, index) => (
          <Tab.Screen
            key={index}
            name={_.route}
            component={_.component}
            listeners={({}) => ({
              tabPress: e => {
                if (_.route === 'Transact') {
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
      {open && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            console.log('yessss');
            toggleView();
          }}
          style={[
            StyleSheet.absoluteFill,
            {
              position: 'absolute',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              // bottom: gpmsh(50.3),
              // bottom: gpmsh(58),
              bottom: gpmsh('59'),
              // bottom: '9.2%',
              zIndex: 0,
            },
          ]}>
          <AddButton {...{mode, toggleView}} dummy />
          <Box
            bg={'white'}
            height={10}
            width={'100%'}
            style={{
              position: 'absolute',
              bottom: -10,
              backgroundColor: '#797979',
              // backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}>
            <LinearGradient
              colors={['#004e72', '#004b6f']}
              style={{
                borderTopLeftRadius: gpsw('9'),
                borderTopRightRadius: gpsw('9'),
                width: "100%",
                height: 12
              }}/>
            {/* <Box
              bg={'momoBlue'}
              height={10}
              width={'100%'}
              style={{
                borderTopLeftRadius: gpsw(9),
                borderTopRightRadius: gpsw(9),
              }}
            /> */}
          </Box>
        </TouchableOpacity>
      )}
      <View
        style={{
          zIndex: 1,
        }}>
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: gpsh('26'),
            alignSelf: 'center',
            zIndex: 30,
          }}>
          <TouchableOpacity
            onPress={toggleView}
            activeOpacity={1}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: gpsh('46'),
              width: gpsh('46'),
              borderRadius: gpsh('35'),
              backgroundColor: '#FFCB05',
              // backgroundColor: open ? 'red' : '#FFCB05',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View>
                <Icon
                  name={open ? 'BottomTabCloseIcon' : 'TransactIcon'}
                  size={open ? 20 : 30.67}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bottomTabContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: gpmsh(bottomNavBusinessTopMargin),
    backgroundColor: bottomNavBusinessBackground,
    height: gpmsh('58'),
    // paddingRight: parseInt(bottomNavBusinessRightMargin),
    // paddingLeft: parseInt(bottomNavBusinessLeftMargin),
    justifyContent: 'space-between',
    flex: 1,
    zIndex: 20,
  },
  tabButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 2,
  },
});

export default Tabs;


// import EmptyScreen from '@/screens/EmptyScreen';
// import Transact from '@/screens/main/SettingScreen';
// import {Theme} from '@/typings/globalTheme';
// import {gpmsh, gpmsw, gpsh, gpsw} from '@/utils/parseTokenStyle';
// import {Icon, Text} from '@atom';
// import {
//   BottomTabBarButtonProps,
//   BottomTabBarProps,
//   createBottomTabNavigator,
// } from '@react-navigation/bottom-tabs';
// import {useTheme} from '@shopify/restyle';
// import {Pressable, StyleSheet, View, ViewStyle, Dimensions, TouchableOpacity} from 'react-native';
// // import {Animated, Pressable, StyleSheet, View, ViewStyle} from 'react-native';
// import {
//   bottomNavBusinessBackground,
//   bottomNavBusinessBottomMargin,
//   bottomNavBusinessFontColour1,
//   bottomNavBusinessFontColour2,
//   bottomNavBusinessIcon,
//   bottomNavBusinessLeftMargin,
//   bottomNavBusinessRightMargin,
//   bottomNavBusinessTopMargin,
//   bottomNavBusinessTransactIcon,
// } from '@/style-dictionary-dist/momoStyle';
// import {useState} from 'react';
// import {useSharedValue} from 'react-native-reanimated';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {AddButton} from './AddButton';
// import LinearGradient from 'react-native-linear-gradient';
// import HomeScreen from '@/screens/main/Business/Home';
// import TransferScreen from '@/screens/main/Business/TransferScreen';
// import { Shadow } from 'react-native-shadow-2';
// import { TransactBtn } from './Transact';
// import * as Animatable from 'react-native-animatable';
// const {height} = Dimensions.get('window')
// const Tab = createBottomTabNavigator();
// type CustomButtonProps = BottomTabBarButtonProps & {
//   containerStyle?: ViewStyle;
//   isFloat?: boolean;
//   label: 'Home' | 'Transfer' | 'More' | 'Profile' | 'Transact';
// };

// type tabIconProp = {
//   label: CustomButtonProps['label'];
//   focused: boolean;
// };

// type TabarRoutesProps = {
//   route: 'Home' | 'Transfer' | 'More' | 'Profile' | 'Transact';
//   // component: any;
//   component: (args:any) => React.JSX.Element;
//   containerStyle?: ViewStyle;
//   isFloat?: boolean;
// };

// const Tabs = () => {
//   const mode = useSharedValue(0);
//   const [open, setOpen] = useState(false);
//   const {colors, spacing} = useTheme<Theme>();
//   const {bottom} = useSafeAreaInsets();
//   const toggleView = () => {
//     mode.value = mode.value === 0 ? 1 : 0;
//     setOpen(v => !v);
//   };

//   function renderTabIcon({label, focused}: tabIconProp) {
//     switch (label) {
//       case 'Home':
//         return (
//           <Icon
//             name="HomeFilledIcon"
//             size={parseInt(bottomNavBusinessIcon)}
//             color={focused ? colors.sunshineYellow : colors.transparent}
//             stroke={focused ? colors.transparent : colors.white}
//           />
//         );
//       case 'Transfer':
//         return (
//           <Icon
//             name="DashTransferIcon"
//             size={parseInt(bottomNavBusinessIcon)}
//             color={focused ? colors.sunshineYellow : colors.white}
//           />
//         );
//       case 'Transact':
//         return (
//           <Icon
//             name="DashTransferIcon"
//             size={parseInt(bottomNavBusinessIcon)}
//             color={colors.transparent}
//           />
//         );
//       case 'Profile':
//         return (
//           <Icon
//             name="DashProfileIcon"
//             size={parseInt(bottomNavBusinessIcon)}
//             color={focused ? colors.sunshineYellow : colors.white}
//           />
//         );
//       case 'More':
//         return (
//           <Icon
//             name="MoreIcon"
//             size={parseInt(bottomNavBusinessIcon)}
//             color={focused ? colors.sunshineYellow : colors.white}
//           />
//         );
//       default:
//         return 'foo';
//     }
//   }

//   const TabarRoutes: TabarRoutesProps[] = [
//     {
//       route: 'Home',
//       component: HomeScreen,
//     },
//     {
//       route: 'Transfer',
//       component: TransferScreen,
//     },
//     {
//       route: 'Transact',
//       component: Transact,
//       isFloat: true,
//     },
//     {
//       route: 'Profile',
//       component: EmptyScreen,
//     },
//     {
//       route: 'More',
//       component: EmptyScreen,
//     },
//   ];
//   function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
//     return (
//       <Shadow distance={gpmsh('48')} startColor={'#00000030'} offset={[10, -60]} containerStyle={{flexDirection: 'row'}}>
//         <LinearGradient
//           colors={['#004F71', '#003654']}
//           // start={{x: 0, y: 0}}
//           // end={{x: 1, y: 1}}
//           style={[
//             styles.bottomTabContainer,
//             {
//               paddingBottom: gpmsh(
//                 bottom + parseInt(bottomNavBusinessBottomMargin).toString(),
//               ),
//             },
//             {borderTopLeftRadius:gpsw('9'),borderTopRightRadius:gpsw('9')}
//           ]}
//           // style={style}
//         >
//           {state.routes.map((route, index) => {
//             const {options} = descriptors[route.key];
//             const label = route.name as tabIconProp['label'];

//             const isFocused = state.index === index;

//             // Focus state for managing the color of the tab icon/text
//             const focused = !open && isFocused;

//             const onPress = () => {
//               const event = navigation.emit({
//                 type: 'tabPress',
//                 target: route.key,
//                 canPreventDefault: true,
//               });

//               if (!isFocused && !event.defaultPrevented) {
//                 // The `merge: true` option makes sure that the params inside the tab screen are preserved
//                 // @ts-ignore
//                 navigation.navigate({name: route.name, merge: true});
//               }
//             };

//             const onLongPress = () => {
//               navigation.emit({
//                 type: 'tabLongPress',
//                 target: route.key,
//               });
//             };

//             return index === 2 ? (
//               <Pressable
//                 accessibilityRole="button"
//                 accessibilityState={isFocused ? {selected: true} : {}}
//                 accessibilityLabel={options.tabBarAccessibilityLabel}
//                 testID={options.tabBarTestID}
//                 onPress={onPress}
//                 key={`index-${index}`}
//                 onLongPress={onLongPress}
//                 style={[
//                   {
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     // backgroundColor: 'green',
//                     flex: 1,
//                     gap: 2,
//                   },
//                 ]}>
//                 {renderTabIcon({label, focused})}
//                 <View
//                   style={{
//                     top: gpmsh('-35'),
//                     alignItems: 'center',
//                   }}>
//                   <AddButton {...{mode, toggleView, open}} />
//                 </View>
//                 <Text
//                   style={{
//                     color: open
//                       ? bottomNavBusinessFontColour2
//                       : bottomNavBusinessFontColour1,
//                     fontSize: gpsw('10'),
//                     lineHeight: gpsh('13'),
//                   }}>
//                   {label}
//                 </Text>
//               </Pressable>
//             ) : (
//               <Pressable
//                 accessibilityRole="button"
//                 accessibilityState={isFocused ? {selected: true} : {}}
//                 accessibilityLabel={options.tabBarAccessibilityLabel}
//                 testID={options.tabBarTestID}
//                 key={`index-${index}`}
//                 onPress={onPress}
//                 onLongPress={onLongPress}
//                 style={[
//                   {
//                     // justifyContent: 'space-between',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     gap: 2,
//                     // backgroundColor: 'red',
//                     flex: 1,

//                   },
//                 ]}>
//                 {renderTabIcon({label, focused})}
//                 <Text
//                   style={{
//                     color: focused ? colors.sunshineYellow : colors.white,
//                     fontSize: gpsw('10'),
//                     lineHeight: gpsh('13'),
//                   }}>
//                   {label}
//                 </Text>
//               </Pressable>
//             );
//           })}
//         </LinearGradient>
//       </Shadow>
//     );
//   }

//   return (
//     <View style={{flex:1}}>
//       <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//       tabBar={props => <MyTabBar {...props} />}>
//       {TabarRoutes.map((_, index) => (
//         <Tab.Screen
//           key={index}
//           name={_.route}
//           component={_.component}
//           listeners={({}) => ({
//             tabPress: e => {
//               if (_.route === 'Transact') {
//                 e.preventDefault();
//                 toggleView();
//                 return;
//               }
//               // console.log('mode.value ', mode.value, opened);
//               mode.value = 0;
//               setOpen(false);
//             },
//           })}
//         />
//       ))}
//     </Tab.Navigator>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   bottomTabContainer: {
//     flexDirection: 'row',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     zIndex:10,
//     paddingTop: gpmsh(bottomNavBusinessTopMargin),
//     backgroundColor: bottomNavBusinessBackground,
//     height: gpmsh('63'),
//     // paddingRight: parseInt(bottomNavBusinessRightMargin),
//     // paddingLeft: parseInt(bottomNavBusinessLeftMargin),
//     // paddingHorizontal: 20,
//     justifyContent: 'space-between',
//     flex: 1,
//   },
// });

// export default Tabs;



