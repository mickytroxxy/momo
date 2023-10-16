import useDimension from '@/hooks/useDimension';
import SideBar from '@/screens/drawer/SideBar';
import { MainDrawerParams } from '@/typings/navigation';
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { FC } from 'react';
import EmptyScreen from './EmptyScreen';
import BusinessSideBar from './BusinessSideBar';
import { gpsh, gpsw } from '@/utils/parseTokenStyle';
import { menuDrawerOverlayHeight, menuDrawerOverlayWidth, menuDrawerWidth } from '@/style-dictionary-dist/momoStyle';

const Drawer = createDrawerNavigator<MainDrawerParams>();

type drawerScreenType = {
  name: string;
  component: FC;
  options?: DrawerNavigationOptions;
};

const DrawerNavigator = ({ navigation }: any) => {
  const { width: ScreenWidth, height: ScreenHeight } = useDimension();

  const drawerScreens: drawerScreenType[] = [
    {
      name: 'EmptyScreen',
      component: EmptyScreen,
    }
  ];

  return (
    <Drawer.Navigator
      // useLegacyImplementation={true}
      useLegacyImplementation={false}
      drawerContent={props => <BusinessSideBar {...props} />}
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'rgba(0,0,0,0)',
          width: gpsw(menuDrawerOverlayWidth),
          height: gpsh(menuDrawerOverlayHeight),
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
