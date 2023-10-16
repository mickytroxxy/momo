import SvgIcons from '@/constants/icon';
import { ViewStyle } from 'react-native';


/* ##############################################################################################*/
/* ##############################################################################################*/
/* ##################################    Components     #########################################*/
/* ##############################################################################################*/
/* ##############################################################################################*/

export type SvgIconType = keyof typeof SvgIcons

export type ScreenName = 'RecentTransactions' | 'Home' | 'Send' | 'Market' | 'More' | 'Map'

export type keyboardType = 'default' | 'number-pad' | 'decimal-pad' | 'numberic' | 'email-address' | 'phone-pad' | 'url';

export type Function = 'openDrawer' | 'goBack' | 'openDialler' | 'closeDrawer' | 'hideBalance' | 'showBalance'

export type TitleType = {
    id: string,
    label: string,
    onPress?: Function | any,
    route?: string
}

export type TextType = {
    variant: 'body' | 'header' | 'subtitle',
    text: string
}

export type IconType = {
    id: string;
    Icon: SvgIconType;
    label?: string;
    route?: string;
    onPress?: Function | any;
    size?: number | 24
}

export type MenuButtonsType =
    {
        id: string;
        label: string;
        icon: SvgIconType;
        screen?: string;
        onPress?: Function | any;
    }[]


export type BannerImagesType =
    {
        id: string,
        image: string,
        route?: string;
        onPress?: Function;
    }[]

export type MainWalletCardType = {
    WalletHeader: {
        activeIcon: IconType,
        inactiveIcon: IconType
    },
    WalletFooter:
    {
        type: 'Icon',
        data: IconType
    }[]
    ,
    display?: 'hover' | 'default'
}

// type ProfileCardDataType = {
//     type: 'Icon'
// }

export type PillDataType = {
    id: string;
    label: string | 'Switch Account';
    pillType: 'bundles' | 'alerts' | 'instructions' | 'packages' | 'filter' | 'input';
    outline?: boolean;
    position?: 'left' | 'right';
    onPress?: Function;
}

export type PillsDataType = {
    id: string;
    label: string | '30 Days' | '60 Days' | '90 Days';
    pillType: 'bundles' | 'alerts' | 'instructions' | 'packages' | 'filter' | 'input';
    outline?: boolean;
    position?: 'left' | 'right';
    onPress?: Function;
}[]

export type ActionCardDataType =
    {
        id: string,
        title: string,
        subject?: string,
        icon: SvgIconType,
        route?: string,
        onPress?: string,
    }[]


export type ButtonDataType = {
    id: string;
    title: string | 'Signout';
    icon: SvgIconType | 'SignoutIcon';
    onPress: Function;
}

export type IllustrationDataType = {
    imageUrl: string
}

export type BalanceCardDataType = {
    keys?: ['Current Balance' | 'Money on' | 'Money out'],
    display?: 'default' | 'hover'
}

export type InputType = {
    id: string;
    label: string;
    name: string;
    maxLength?: number;
    keyboardType?: keyboardType;
    isPassword?: boolean;
    readOnly?: boolean;
}

export type HeaderDataType = {
    type: 'Default' | 'CurvedHeader' | 'BackHeader' | 'NormalHeader' | 'SubHeader',
    data: {
        left?: {
            type: 'Icon' | 'Title',
            data: IconType | TitleType
        },
        right?: {
            type: 'Icon' | 'Title',
            data: IconType | TitleType
        },
        center?: {
            type: 'Icon' | 'Title',
            data: IconType | TitleType
        }
    },
    background?: "InfoHeaderBg" | "DashboardHeaderBg" | "TransferHeaderBg" | "AyoHeaderBg" | "BusinessResponseBg",
    height?: number | 180
}

export type SubHeaderDataType = {
    headerLeft: TitleType,
    headerRight: TitleType
}

export type LinearTabDataType =
    {
        title: string,
        data: LinearTabScreenDataType
    }[]

export type LinearTabScreenDataType =
    {
        type: 'MenuButton' | 'Banner' | 'Screen',
        data: MenuButtonsType | BannerImagesType | ScreenName
    }[]


export type CheckBoxType = {
    label?: string | "Save as beneficiary";
    onChange?: Function
}

export type TabButtonsType = {
    title: string;
    renderScene: ScreenName;
}

export type countryDataType = {
    label: string,
    value: string,
    icon: SvgIconType
}

export type DropDown_InputDataType = {
    data: [countryDataType]
    placeHolder?: string
    label: string | "Phone Number"
    animationDuration?: number
    required?: boolean
    maxInput?: number
    mask?: "9999 999 9999" | string
    maskType?: 'currency' | 'phone' | 'date' | 'card'
    keyboardType?: keyboardType
}

export type DropDownDataType = {
    label: string,
    value: string
}

export type DropDownType = {
    data: [DropDownDataType];
    label: string | 'Search Bank';
    placeholder: string | 'Select your Option';
    location?: boolean;
    search?: boolean;
    calendar?: boolean;
    required?: boolean;
    loading?: boolean;
}

export type ConfirmDetailsType =
    {
        title: string | 'Name' | 'Transaction Type' | 'Mobile Number'
        value: string | 'name' | 'transactionType' | 'mobileNumber'
    }[]

export type RadioOptionDataType = {
    label: string,
    value: string
}

export type RadioOptionType = {
    options: [RadioOptionDataType],
    showLabel?: boolean,
    disabled?: boolean,
}


/* ##############################################################################################*/
/* ##############################################################################################*/
/* ##################################    Screens     ############################################*/
/* ##############################################################################################*/
/* ##############################################################################################*/




/*****************************************/
/*********** DashBoard & Accounts ************/
/*****************************************/

/*********** DashBoard ************/

export type DashBoardDataType =
    {
        type: 'Header' | 'MainWalletCard' | 'LinearTabButton';
        data: HeaderDataType | MainWalletCardType | LinearTabDataType,
    }[]

/*********** SIDE BAR ************/

export type SideBarScreen =
    {
        type: 'Profile' | 'Pill' | 'QrCode' | 'ActionCards' | 'Button',
        data?: PillDataType | ActionCardDataType | ButtonDataType
    }[]

/*********** ActionCardScreen ************/

export type ActionCardScreenDataType =
    {
        type: 'Header' | 'Illustration' | 'ActionCards',
        data: HeaderDataType | IllustrationDataType | ActionCardDataType
    }[]

/*********** ChangePinScreen ************/

export type ChangePinScreenDataType =
    {
        type: 'Header' | 'Paragraph' | 'Input' | 'Button';
        data?: HeaderDataType | TextType | InputType | ButtonDataType
    }[]

/*********** LocateAgentScreen ************/

export type LocateAgentScreenDataType =
    {
        type: 'Header' | 'Input' | 'Screen';
        data?: HeaderDataType | InputType | ScreenName
    }[]


/*****************************************/
/*********** BottomTabs ************/
/*****************************************/

export type BottomTabsDataType =
    {
        route: 'Home' | 'Send' | 'ScanQr' | 'Market' | 'More' | string;
        component: JSX.Element | ScreenName;
        containerStyle?: ViewStyle;
        isFloat?: boolean;
    }[]



/*****************************************/
/*********** Statements ************/
/*****************************************/

/*********** StatementsLandingScreen ************/

export type StatementsLandingScreenDataType =
    {
        type: 'Header' | 'BalanceCard' | 'MenuButton' | 'Header' | 'Screen' | 'TransactionHistory',
        data?: HeaderDataType | BalanceCardDataType | MenuButtonsType | HeaderDataType | ScreenName | SubHeaderDataType,
    }[]


/*********** StatementsScreen ************/

export type StatementsScreenDataType =
    {
        type: 'Header' | 'Paragraph' | 'Pills' | 'Input' | 'Button',
        data: HeaderDataType | TextType | PillsDataType | InputType | ButtonDataType
    }[]



/*****************************************/
/*********** SendMoney ************/
/*****************************************/

/*********** SendmoneyLandingScreen ************/

export type SendMoneyLandingScreenDataType =
    {
        type: 'Header' | 'MenuButton' | 'LinearTabButton',
        data: HeaderDataType | MenuButtonsType | LinearTabDataType
    }[]

/*********** SendmoneyMoMoScreen ************/

export type SendMoneyMoMoScreenDataType =
    {
        type: 'Header' | 'TabButtons',
        data: HeaderDataType | TabButtonsType
    }[]

/*********** SendmoneyMoMoNewUserScreen ************/

export type SendMoneyMoMoNewUserScreenDataType =
    {
        type: 'Input' | 'DropDown_Input' | 'CheckBox' | 'Button',
        data: InputType | DropDown_InputDataType | CheckBoxType | ButtonDataType
    }[]

/*********** SendmoneyBankTransferScreen ************/

export type SendMoneyBankTransferScreenDataType =
    {
        type: 'Header' | 'TabButtons',
        data: HeaderDataType | TabButtonsType
    }[]

/*********** SendmoneyBankTransferNewUserScreen ************/

export type SendMoneyBankTransferNewUserScreenDataType =
    {
        type: 'Input' | 'DropDown' | 'CheckBox' | 'Button',
        data: InputType | DropDownType | CheckBoxType | ButtonDataType
    }[]



/*****************************************/
/*********** Beneficiaries ************/
/*****************************************/

/*********** AddBeneficiariesScreen ************/

export type AddBeneficiariesScreenDataType =
    {
        type: 'Header' | 'Input' | 'DropDown' | 'Button',
        data: HeaderDataType | InputType | DropDownType | ButtonDataType
    }[]

/*********** BeneficiaryDetailsScreen ************/

export type BeneficiaryDetailsScreenDataType =
    {
        type: 'Header' | 'ConfirmDetails' | 'DropDown' | 'Button',
        data: HeaderDataType | ConfirmDetailsType | DropDownType | ButtonDataType
    }[]

/*********** PayBeneficiaryScreen ************/

export type PayBeneficiaryScreenDataType =
    {
        type: 'Header' | 'Input' | 'DropDown' | 'Button',
        data: HeaderDataType | InputType | DropDownType | ButtonDataType
    }[]

/*********** EditBeneficiaryScreen ************/

export type EditBeneficiaryScreenDataType =
    {
        type: 'Header' | 'Input' | 'DropDown' | 'Button',
        data: HeaderDataType | InputType | DropDownType | ButtonDataType
    }[]



/*****************************************/
/*********** BankTransfers ************/
/*****************************************/


/*********** BankTransferLandingScreen ************/

export type BankTransferLandingScreenDataType =
    {
        type: 'Header' | 'MenuButton' | 'LinearTabButton',
        data: HeaderDataType | MenuButtonsType | LinearTabDataType
    }[]


/*********** MomoToBankScreen *******/

export type MomoToBankScreenDataType =
    {
        type: 'Header' | 'Input' | 'DropDown' | 'CheckBox' | 'Button',
        data: HeaderDataType | InputType | DropDownType | CheckBoxType | ButtonDataType
    }[]

/*********** MomoToBankConfirmationScreen *******/

export type MomoToBankConfirmationScreenDataType =
    {
        type: 'Header' | 'ConfirmDetails' | 'Button',
        data: HeaderDataType | ConfirmDetailsType | ButtonDataType
    }[]

/*********** BankToMomoScreen *******/

export type BankToMomoScreenDataType =
    {
        type: 'Header' | 'Input' | 'DropDown' | 'CheckBox' | 'Button',
        data: HeaderDataType | InputType | DropDownType | CheckBoxType | ButtonDataType
    }[]

/*********** BankToMomoConfirmationScreen *******/

export type BankToMomoConfirmationScreenDataType =
    {
        type: 'Header' | 'ConfirmDetails' | 'Button',
        data: HeaderDataType | ConfirmDetailsType | ButtonDataType
    }[]



/*****************************************/
/*********** ScanQr ************/
/*****************************************/


/*********** ScanQrScreen ************/

export type ScanQrScreenDataType =
    {
        type: 'Header' | 'QrScanner'
        data: HeaderDataType
    }[]

/*********** ScanQrAmountScreen ************/

export type ScanQrAmountScreenDataType =
    {
        type: 'Header' | 'Alert' | 'Input' | 'Pills' | 'Button'
        data: HeaderDataType | InputType | PillsDataType | ButtonDataType
    }[]

/*********** ScanQrManualAmountScreen ************/

export type ScanQrManualAmountScreenDataType =
    {
        type: 'Header' | 'Alert' | 'Input' | 'Pills' | 'Button'
        data: HeaderDataType | InputType | PillsDataType | ButtonDataType
    }[]

/*********** ScanQrConfirmationScreen ************/

export type ScanQrConfirmationScreenDataType =
    {
        type: 'Header' | 'Text' | 'ConfirmDetails' | 'RadioOption' | 'Button'
        data: HeaderDataType | TextType | ConfirmDetailsType | RadioOptionType | ButtonDataType
    }[]



/*****************************************/
/*********** Schedue payments ************/
/*****************************************/


/*********** ScheduleSendLandingScreen ************/

export type ScheduleSendLandingScreenDataType =
    {
        type: 'Header' | 'MenuButton' | 'LinearTabButton'
        data: HeaderDataType | MenuButtonsType | LinearTabDataType
    }[]

/*********** SchedulePaymentsScreen ************/

export type SchedulePaymentsScreenDataType =
    {
        type: 'Header' | 'Pills'
        data: HeaderDataType | PillsDataType
    }[]

/*********** SchedulePaymentDetailsScreen ************/

export type SchedulePaymentDetailsDataType =
    {
        type: 'Header' | 'ConfirmDetails' | 'Button'
        data: HeaderDataType | ConfirmDetailsType | ButtonDataType
    }[]















