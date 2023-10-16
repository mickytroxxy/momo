import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParams = {
  Auth: NavigatorScreenParams<AuthStackParams>;
  Main: NavigatorScreenParams<MainDrawerParams>;
};

export type MainStackParams = {
  bottomtab: NavigatorScreenParams<BottomTabParams>;
  momouser: undefined;
  banktransfer: undefined;
  AccountTransfer: undefined;
  Transactions: undefined;
  Search: undefined;
  Filter: undefined;
  beneficiarydetailscreen: {
    data: {
      name: string;
      phoneNumber: string;
      transactionType: string;
      reason: string;
    };
  };
  paybeneficiaryscreen: {
    name: string;
    phoneNumber: string;
  };
  confirmpaymentscreen: {
    data: {
      name: string;
      phoneNumber: string;
      searchBank?: string;
      accountNumber?: string;
      amount: string;
      reason: string;
    };
  };
  momotransfer: {
    type: string;
  };
  paymentdetailscreen: {
    data: any;
  };
  statementscreen: undefined;
  transactionscreen: undefined;
  beneficiariesscreen: undefined;
  addbeneficiary: undefined;
  recenttransactionscreen: undefined;
  transactiondetailscreen: undefined;
  // transfermomo: undefined
  // transferschedule: undefined
  // transferconfirmation: undefined
};

export type BottomTabParams = {
  Home: NavigatorScreenParams<HomeStackParams>;
  Transfer: NavigatorScreenParams<TransferStackParams>;
  'Scan QR': undefined;
  Offers: NavigatorScreenParams<OffersStackParams>;
  More: NavigatorScreenParams<MoreStackParams>;
};

export type AuthStackParams = {
  Onboarding: undefined;
  login: undefined;
  signup: undefined;
  tandc: undefined;
  privacypolicy: undefined;
  SelectCountry: undefined;
  registerwallet: undefined;
  authstatus: {
    type?: 'success' | 'blockedotp' | 'blockedfraud' | 'nowallet';
  };
  simcard: undefined;
  otpscreen: undefined;
  otptimer: undefined;
  signin: undefined;
  siginpin: undefined;
};

// TABS
export type HomeStackParams = {
  homescreen: undefined;
  schedulepaymentscreen: undefined;
  ayoscreen: undefined;
  empty: undefined;
};
export type TransferStackParams = {
  transferscreen: undefined;
  transactionshistoryscreen: undefined;
  beneficiariesscreen: undefined;
  empty: undefined;
};
export type ScanQRParams = {
  empty: undefined;
};
export type OffersStackParams = {
  empty: undefined;
};
export type MoreStackParams = {
  empty: undefined;
};

// DRAWERSCREENS

export type MainDrawerParams = {
  mainstack: NavigatorScreenParams<MainStackParams>;
  Settings: NavigatorScreenParams<SettingsParams>;
  Help: NavigatorScreenParams<HelpParams>;
  RecommendMomo: NavigatorScreenParams<RecommendMomoParams>;
};

export type SettingsParams = {
  SettingsMain: undefined;
  ChangePin: undefined;
  RecoverNumber: undefined;
  ChangePinStatus: undefined;
};

export type HelpParams = {
  HelpMain: undefined;
  LocalAgent: undefined;
};

export type RecommendMomoParams = {
  RecommendMain: undefined;
  ReferaFriend: undefined;
  LearnMore: undefined;
  RecommendStatus: undefined;
};
// Screens

// AUTH SCREENS
export type SelectCountryScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'SelectCountry'
>;
export type OnboardScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'Onboarding'
>;
export type AuthStatusScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'authstatus'
>;
type NestedScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParams>,
  CompositeScreenProps<
    NativeStackScreenProps<MainStackParams>,
    CompositeScreenProps<
      DrawerScreenProps<MainDrawerParams>,
      NativeStackScreenProps<RootStackParams>
    >
  >
>;

// TransferScreen
export type TransferScreenProps = CompositeScreenProps<
  NativeStackScreenProps<TransferStackParams, 'transferscreen'>,
  NestedScreenProps
>;
export type HomeScreenProps = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParams, 'homescreen'>,
  NestedScreenProps
>;

// TransferScreen
export type SchedulePaymentsScreenProps = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParams, 'schedulepaymentscreen'>,
  NestedScreenProps
>;

// TransferScreen

type MainStackParamsList = CompositeScreenProps<
  DrawerScreenProps<MainDrawerParams>,
  NativeStackScreenProps<RootStackParams>
>;
export type MoMoUserScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'momouser'>,
  MainStackParamsList
>;

export type BankTransferScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'banktransfer'>,
  MainStackParamsList
>;

export type BenefeciaryDetailScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'beneficiarydetailscreen'>,
  MainStackParamsList
>;

export type PayBeneficiaryScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'paybeneficiaryscreen'>,
  MainStackParamsList
>;

export type ConfirmPaymentScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'confirmpaymentscreen'>,
  MainStackParamsList
>;

// Payment details
export type PaymentDetailsScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'paymentdetailscreen'>,
  MainStackParamsList
>;
// statementscreen
export type MoMoTransferScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'momotransfer'>,
  MainStackParamsList
>;

export type TransactionScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'transactionscreen'>,
  MainStackParamsList
>;
export type RecentTransactionScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'recenttransactionscreen'>,
  MainStackParamsList
>;
