// import {selectMessage} from '@/features/alert/alertSlice';
// import MoMoTransferForm from '@/screens/main/Home/HomeScreenTab/MoMoTransfer';
// import MoMoTransferFormProvider from '@/screens/main/Home/HomeScreenTab/MoMoTransfer/MoMoTransferContext';
// import PaymentDetails from '@/screens/main/Home/SchedulePayments/PaymentDetails';
// import {useTypedSelector} from '@/store/store';
// import {PaymentStackParams} from '@/typings/navigation';
// import {Alert} from '@molecule';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const PaymentStack = createNativeStackNavigator<PaymentStackParams>();
// const PaymentStackNavigator = () => {
//   return (
//     <MoMoTransferFormProvider>
//       <PaymentStack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}>
//         {/* HomeStack MoMo Transfer Flow */}
//         {/* <PaymentStack.Group screenOptions={{animation: 'none'}}> */}
//           <PaymentStack.Screen
//             name="momotransfer"
//             component={MoMoTransferForm}
//           />
//           {/* SCHEDULE PAYMENTSTACKS */}
//           <PaymentStack.Screen
//             name="paymentdetailscreen"
//             component={PaymentDetails}
//           />
//         {/* </PaymentStack.Group> */}
//       </PaymentStack.Navigator>
//     </MoMoTransferFormProvider>
//   );
// };

// export default PaymentStackNavigator;
