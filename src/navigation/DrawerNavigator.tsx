import useDimension from '@/hooks/useDimension';
import SideBar from '@/screens/drawer/SideBar';
import {MainDrawerParams} from '@/typings/navigation';
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {FC} from 'react';
import HelpNavigator from './DrawerNavigations/HelpNavigator';
import RecommendNavigator from './DrawerNavigations/RecommendNavigator';
import SettingsNavigator from './DrawerNavigations/SettingsNavigator';
import MainStackNavigator from './MainStackNavigator';

const Drawer = createDrawerNavigator<MainDrawerParams>();

type drawerScreenType = {
  name: string;
  component: FC;
  options?: DrawerNavigationOptions;
};

const DrawerNavigator = ({navigation}: any) => {
  const {width: ScreenWidth, height: ScreenHeight} = useDimension();

  const drawerScreens: drawerScreenType[] = [
    {
      name: 'mainstack',
      component: MainStackNavigator,
    },
    {
      name: 'Settings',
      component: SettingsNavigator,
    },
    {
      name: 'Help',
      component: HelpNavigator,
    },
    {
      name: 'RecommendMomo',
      component: RecommendNavigator,
    },
  ];

  return (
    <Drawer.Navigator
    // useLegacyImplementation={true}
    useLegacyImplementation={false}
      drawerContent={props => <SideBar {...props} />}
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'transparent',
          width: '90%',
          height: '100%',
          padding: 0,
        },
        swipeEdgeWidth: ScreenWidth / 2,
        drawerType: 'front', //front , slide, back, permanet
        overlayColor: 'rgba(0,0,0,0.6)',
        swipeEnabled: false,
      }}>
      {drawerScreens.map((item: drawerScreenType) => {
        return (
          <Drawer.Screen
            key={item.name}
            // @ts-ignore
            name={item.name}
            component={item.component}
            options={item.options}
          />
        );
      })}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
