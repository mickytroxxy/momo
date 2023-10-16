import icon from '@/constants/icon';
import useDimension from '@/hooks/useDimension';
import {
  globalMoMoBlue,
  menuDrawerOverlayWidth,
} from '@/style-dictionary-dist/momoStyle';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import EmptyScreen from './EmptyScreen';
import EmptyScreen2 from './EmptyScreen2';
import SidebarScreen from './SideBarScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}: any) => {
  const {HomeIcon, HomeFilledIcon, TransferFilledIcon, TransferIcon} = icon;
  const {width: ScreenWidth, height: ScreenHeight} = useDimension();
  return (
    // <SafeAreaView style={{flex: 1}}>
      <Drawer.Navigator
        drawerContent={props => <SidebarScreen {...props} />}
        screenOptions={{
          headerShown: false,
          drawerInactiveBackgroundColor: '#e8e8e8',
          drawerActiveBackgroundColor: '#444',
          drawerType: 'front', //front , slide, back, permanet
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#222',
          drawerLabelStyle: {
            fontWeight: '800',
            fontSize: 16,
          },
          headerTintColor: '#fff',
          drawerStyle: {
            backgroundColor: 'transparent',
            width: moderateScale(parseInt(menuDrawerOverlayWidth)),
            // height: moderateScale(parseInt(menuDrawerOverlayHeight)),
          },
          swipeEdgeWidth: -1000,
          swipeEnabled: false
        //   swipeEdgeWidth: ScreenWidth / 2,
        }}>
        <Drawer.Screen
          name="Home"
          component={EmptyScreen}
          options={{
            drawerIcon: ({focused}) =>
              focused ? (
                <HomeFilledIcon fill={'#fff'} />
              ) : (
                <HomeIcon stroke={'#000'} />
              ),
          }}
        />
        <Drawer.Screen
          name="Transactions"
          component={EmptyScreen2}
          options={{
            drawerIcon: ({focused}) =>
              focused ? (
                <TransferFilledIcon fill={'#fff'} />
              ) : (
                <TransferIcon stroke={'#000'} />
              ),
            headerTitleStyle: {color: '#fff'},
            headerShown: true,
            headerStyle: {
              height: 60,
              backgroundColor: globalMoMoBlue,
            },
          }}
        />
      </Drawer.Navigator>
    // {/* </SafeAreaView> */}
  );
};

export default DrawerNavigator;
