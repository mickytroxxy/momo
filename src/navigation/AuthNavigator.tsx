import AuthStatus from '@/screens/auth/AuthStatus';
import OTPTimer from '@/screens/auth/Onboarding/OTPTimer';
import Onboard from '@/screens/auth/Onboarding/Onboarding';
import PrivacyPolicy from '@/screens/auth/Onboarding/PrivacyPolicy';
import SelectCountry from '@/screens/auth/Onboarding/SelectCountry';
import SignInPin from '@/screens/auth/Onboarding/SignInPin';
import SimCard from '@/screens/auth/Onboarding/SimCard';
import TandC from '@/screens/auth/Onboarding/TandC';
import RegisterWallet from '@/screens/auth/RegisterWallet/RegisterWallet';
import {AuthStackParams} from '@/typings/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MockSigninPin from '@/screens/auth/Onboarding/MockSigninPin';
import MockSelectCountry from '@/screens/auth/Onboarding/MockSelectCountry';
const AuthStack = createNativeStackNavigator<AuthStackParams>();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Onboarding" component={Onboard} />
      <AuthStack.Screen name="SelectCountry" component={MockSelectCountry} />
      <AuthStack.Screen name="registerwallet" component={RegisterWallet} />
      <AuthStack.Screen name="tandc" component={TandC} />
      <AuthStack.Screen name="privacypolicy" component={PrivacyPolicy} />
      <AuthStack.Screen name="authstatus" component={AuthStatus} />
      <AuthStack.Screen name="simcard" component={SimCard} />
      <AuthStack.Screen name="otptimer" component={OTPTimer} />
      <AuthStack.Screen name="siginpin" component={MockSigninPin} />
      <AuthStack.Screen name="otpscreen" component={SimCard} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;

// import AuthStatus from '@/screens/auth/AuthStatus';
// import MockSelectCountry from '@/screens/auth/Onboarding/MockSelectCountry';
// import MockSigninPin from '@/screens/auth/Onboarding/MockSigninPin';
// import More from '@/screens/auth/Onboarding/More';
// import OTPTimer from '@/screens/auth/Onboarding/OTPTimer';
// import Onboard from '@/screens/auth/Onboarding/Onboarding';
// import PrivacyPolicy from '@/screens/auth/Onboarding/PrivacyPolicy';
// import SelectCountry from '@/screens/auth/Onboarding/SelectCountry';
// import SignInPin from '@/screens/auth/Onboarding/SignInPin';
// import SimCard from '@/screens/auth/Onboarding/SimCard';
// import TandC from '@/screens/auth/Onboarding/TandC';
// import RegisterWallet from '@/screens/auth/RegisterWallet/RegisterWallet';
// import {AuthStackParams} from '@/typings/navigation';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const AuthStack = createNativeStackNavigator<AuthStackParams>();
// const AuthStackNavigator = () => {
//   return (
//     <AuthStack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <AuthStack.Screen name="Onboarding" component={Onboard} />
//       <AuthStack.Screen name="SelectCountry" component={MockSelectCountry} />
//       <AuthStack.Screen name="siginpin" component={MockSigninPin} />
//       {/* <AuthStack.Screen name="SelectCountry" component={SelectCountry} /> */}
//       <AuthStack.Screen name="registerwallet" component={RegisterWallet} />
//       <AuthStack.Screen name="privacypolicy" component={PrivacyPolicy} />
//       <AuthStack.Screen name="authstatus" component={AuthStatus} />
//       <AuthStack.Screen name="simcard" component={SimCard} />
//       <AuthStack.Screen name="otptimer" component={OTPTimer} />
//       {/* <AuthStack.Screen name="siginpin" component={SignInPin} /> */}
//       <AuthStack.Screen name="otpscreen" component={SimCard} />
//       <AuthStack.Group>

//       </AuthStack.Group>
//     </AuthStack.Navigator>
//   );
// };

// export default AuthStackNavigator;

