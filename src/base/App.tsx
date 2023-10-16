/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import React, {useEffect, useRef} from 'react';
import {
  Alert,
  Platform,
  StatusBar,
  StyleProp,
  useColorScheme,
} from 'react-native';

import {ThemeContext} from '@/context/themeContext';
import useThemeColor from '@/hooks/useThemeColor';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootStackNavigator from '../navigation/RootStackNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import CodePush from 'react-native-code-push';
import {Provider} from 'react-redux';
import store, {persistor} from '@/store/store';
import {ClickOutsideProvider} from 'react-native-click-outside';
import {DarkStatusBar} from '@/component/molecule/StausBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStackParams} from '@/typings/navigation';
import analytics from '@react-native-firebase/analytics';
import {log, recordError, setUserId} from '@/utils/firebase/crashlytics';
import messaging from '@react-native-firebase/messaging';
import {AFInit} from '@/utils/appflyer';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {theme, setTheme, setPrimaryColor, themeToBeUsed} = useThemeColor();
  const navigationRef = useNavigationContainerRef<RootStackParams>();
  const routeNameRef = useRef<string | undefined>('');
  useEffect(() => {
    Platform.OS === 'ios' ? setUserId('USER0002') : setUserId('USER0001');
    log('App mounted.');
    recordError('Login Error', 'Error generated from login click');
  }, []);
  useEffect(() => {
    pushNotification();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  useEffect(() => {
    AFInit();
    return () => {};
  }, []);

  async function pushNotification() {
    let fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('token', fcmToken);
    }
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ClickOutsideProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeContext.Provider value={[theme, setTheme, setPrimaryColor]}>
              <ThemeProvider theme={themeToBeUsed}>
                <SafeAreaProvider>
                  <NavigationContainer
                    ref={navigationRef}
                    onReady={() => {
                      routeNameRef.current =
                        navigationRef.getCurrentRoute()?.name;
                    }}
                    onStateChange={async () => {
                      const previousRouteName = routeNameRef.current;
                      const currentRouteName =
                        navigationRef.getCurrentRoute()?.name;
                      const trackScreenView = async () => {
                        // Your implementation of analytics goes here!
                        await analytics().logScreenView({
                          screen_name: currentRouteName,
                          screen_class: currentRouteName,
                        });
                      };

                      if (previousRouteName !== currentRouteName) {
                        // Save the current route name for later comparison
                        routeNameRef.current = currentRouteName;

                        // Replace the line below to add the tracker from a mobile analytics SDK
                        await trackScreenView();
                      }
                    }}
                    >
                    <DarkStatusBar />
                    <RootStackNavigator />
                  </NavigationContainer>
                </SafeAreaProvider>
              </ThemeProvider>
            </ThemeContext.Provider>
          </PersistGate>
        </Provider>
      </ClickOutsideProvider>
    </GestureHandlerRootView>
  );
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
