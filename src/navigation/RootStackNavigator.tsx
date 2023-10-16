import {selectMessage} from '@/features/alert/alertSlice';
import {RootState, useTypedSelector} from '@/store/store';
import {RootStackParams} from '@/typings/navigation';
import {Alert} from '@molecule';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackNavigator from './AuthNavigator';
import MainDrawerNavigator from './DrawerNavigator';
import { useSelector } from 'react-redux';

const RootStack = createNativeStackNavigator<RootStackParams>();
const RootStackNavigator = () => {
  const message = useTypedSelector(selectMessage);
  const { accessToken } = useSelector((state: RootState) => state.auth);
  console.log('message--', accessToken);
  return (
    <>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {accessToken ? (
        // {false ? (
          <RootStack.Screen name="Main" component={MainDrawerNavigator} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthStackNavigator} />
        )}
      </RootStack.Navigator>
      {message.length !== 0 && <Alert />}
    </>
  );
};

export default RootStackNavigator;
