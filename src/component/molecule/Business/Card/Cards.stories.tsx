import {Box, ScrollView, Text} from '@atom';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {Meta, StoryObj} from '@storybook/react-native';
import React from 'react';
import AccountBalanceCard from './AccountBalanceCard';
import ActionButtons from './ActionButtons/ActionButtons';
import CostBreakDown from './CostBreakDown/CostBreakDown';
import DashboardCardComp from './DasboardCard/DashboardCard';
import MoneyFlowComp from './MoneyFlow/MoneyFlow';
import TransactionDetails from './TransactionDetails/TransactionDetails';
import PostPaid from './postpaid.svg';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import ContactCardComp from './ContactCard/ContactCard';
import AccountStatusComp from './AccountStatus/AccountStatus';
import ContactCustomerComp from './ContactCustomer/ContactCustomer';
import ProfileCardComp from './ProfileCard/ProfileCard';
import OrderSummaryCardComp from './OrderSummaryCard/OrderSummaryCard';
import AccountLimits from './AccountLimits/AccountLimits';
import OrderSummarry from './OrderSummary';
import NoTransaction from './NoTransaction';
import Elevypopup from './Elevypopup';
import RecentTransfers from './TransactionHistory/RecentTransfers';
import BankAccountCard from './BankAccountCard';
import ManageAccountCard from './ManageAccountCard';
import DropdownCard from './DropdownCard';
import RecentTransaction from './RecentTransaction';
import WhatFees from './WhatFees';
import PaySupplierQrViewPort from './PaySupplierQrViewPort';
import ImageBanners from './ImageBanners';
import PinMust from './PinMust';
import TakePicture from './TakePicture';
import TopHeader from './TopHeader';
import KYC from './KYC';
import TextCarousel from './TextCarousel';
import PinInput from './PinInput';
import PhotoClosed from './PhotoClosed';
import Welcome from './Welcome';
import ChooseCountry from './ChooseCountry';
import ChangePaymentMethod from './ChangePaymentMethod';
import FailedTransaction from './FailedTransaction';
import ListOfInvoices from './ListOfInvoices';

const CardsMeta: Meta<typeof AccountBalanceCard> = {
  title: 'Business/Cards',
  component: AccountBalanceCard,
  argTypes: {
    disabled: {
      label: 'disabled',
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    withBackgrounds,
    Story => (
      <ScrollView
        py={'vm'}
        flex={1}
        flexGrow={1}
        style={{backgroundColor:'#F6F6F6'}}
        contentContainerStyle={{
          justifyContent: 'center',
        }}>
        <Text
          textAlign={'center'}
          variant={'header'}
          mb={'vxl'}
          textDecorationLine={'underline'}>
          Business Cards
        </Text>
        <Story />
      </ScrollView>
    ),
  ],
};

type story = StoryObj<typeof CardsMeta>;

export const TotalBalance: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box px={'hm'} gap={'vxl'}>
        <Box gap={'xxs'}>
          <Text
            textAlign={'center'}
            textDecorationLine={'underline'}
            color={'black'}
            variant={'headings'}>
            Total Balance
          </Text>
          <Text textAlign={'center'}>
            Change background color to view component -- click the first icon at
            the bottom right to open panel
          </Text>
        </Box>
        <Box gap={'vxs'} alignItems={'center'}>
          <AccountBalanceCard />
        </Box>
      </Box>
    );
  },
};

export const DashBoardCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box gap={'vxl'}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          DashBoard Card
        </Text>
        <Box bg={'extraLightGrey'} px={'hm'} py={'hl'} gap={'vl'} pb={'hxl'}>
          <DashboardCardComp />
          <DashboardCardComp empty />
        </Box>
      </Box>
    );
  },
};

export const TransactionDetailsCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Transaction Details Card
        </Text>
        <Box bg={'extraLightGrey'} px={'hm'} py={'hl'} pb={'hxl'}>
          <TransactionDetails />
        </Box>
      </Box>
    );
  },
};
export const NoTransactionCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          No Transaction Card
        </Text>
        <Box bg={'extraLightGrey'} px={'hm'} py={'hl'} pb={'hxl'}>
          <NoTransaction />
        </Box>
      </Box>
    );
  },
};
export const DropdownCards: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Dropdown Card
        </Text>
        <Box zIndex={-1} height={700}>
          <DropdownCard />
        </Box>
      </Box>
    );
  },
};
export const ElevypopupCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          E-Levy pop up
        </Text>
        <Box bg={'extraLightGrey'} px={'hm'} py={'hl'} pb={'hxl'}>
          <Elevypopup />
        </Box>
      </Box>
    );
  },
};
export const CostBreakDownCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Cost Breakdown
        </Text>
        <Box bg={'extraLightGrey'} px={'hm'} py={'hl'} pb={'hxl'}>
          <CostBreakDown amount={950} fees={9.5} currency="GHc" />
        </Box>
      </Box>
    );
  },
};
export const RecentTransfersCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Recent Transfers
        </Text>
        <Box bg={'extraLightGrey'}>
          <RecentTransfers  />
        </Box>
      </Box>
    );
  },
};
export const BankAccountCards: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Bank Account Card
        </Text>
        <Box bg={'extraLightGrey'}>
          <BankAccountCard  />
        </Box>
      </Box>
    );
  },
};
export const MangeAccountCards: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Manage Account Card
        </Text>
        <Box bg={'extraLightGrey'}>
          <ManageAccountCard  />
        </Box>
      </Box>
    );
  },
};
export const MoneyFlow: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Money In and Out
        </Text>
        <Box bg={'extraLightGrey'} px={'hm'} py={'hl'} pb={'hxl'} gap={'vxl'}>
          <MoneyFlowComp
            currency="GHc"
            amount="876340.00"
            direction="Received"
          />
          <MoneyFlowComp currency="GHc" amount="876340.00" direction="Spent" />
        </Box>
      </Box>
    );
  },
};
export const ActionButton: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Action Buttons
        </Text>
        <ScrollView
          flexGrow={1}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 50,
          }}>
          <Box px={'hm'} gap={'hsm'} flexWrap={'wrap'} flexDirection={'row'}>
            <ActionButtons name="Postpaid" gradient />
            <ActionButtons name="Get Money" gradient />
            <ActionButtons name="Electricity" gradient />
            <ActionButtons name="Postpaid" gradient />
            <ActionButtons name="Recharge" gradient />
            <ActionButtons name="Postpaid" gradient />
            <ActionButtons name="Water" gradient />
            <ActionButtons name="Utilities" />
            <ActionButtons name="Wallet" />
            <ActionButtons name="Water" />
            <ActionButtons name="School Fees" />
            <ActionButtons name="Salaries" />
            <ActionButtons name="Supplier" />
            <ActionButtons name="Supplier" gradient />
            <ActionButtons name="Banking Services" gradient />
          </Box>
        </ScrollView>
      </Box>
    );
  },
};
export const AccountStatus: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Account Status
        </Text>
        <Box
          style={{
            paddingHorizontal: 20,
            paddingBottom: 100,
            gap: 10,
          }}>
          <AccountStatusComp title="MoMo Pay Account 1" status="Active" />
          <AccountStatusComp title="MoMo Pay Account 2" status="Inactive" />
          <AccountStatusComp title="MoMo Pay Account 3" status="Suspended" />
        </Box>
      </Box>
    );
  },
};
export const AccountLimit: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Account Limits Card
        </Text>
        <Box
          style={{
            paddingHorizontal: 20,
          }}>
          <AccountLimits />
        </Box>
      </Box>
    );
  },
};
export const ProfileCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Profile Card
        </Text>
        <Box
          style={{
            paddingHorizontal: 20,
            paddingBottom: 50,
          }}>
          <ProfileCardComp
            name="Michael’s Food Store (PTY) LTD"
            merchantId="5647 346 2847"
            mobileNumber="+23 33 589 5011"
            packageName="MTN Bronze Merchant"
          />
        </Box>
      </Box>
    );
  },
};
export const OrderSummaryCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Order Summary
        </Text>
        <Box
          style={{
            paddingHorizontal: 20,
          }}>
          <OrderSummaryCardComp variant='table' />
        </Box>
      </Box>
    );
  },
};
export const ContactCustomer: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Contact Customer
        </Text>
        <Box
          bg={'extraLightGrey'}
          style={{
            paddingHorizontal: 20,
            paddingBottom: 100,
            gap: 10,
            paddingVertical:30
          }}>
          <ContactCustomerComp icon="Lock" title="Change Pin" />
          <ContactCustomerComp icon="Headphone" title="Change Pin" />
          <ContactCustomerComp icon="Headphone" title="Contact Customer Care" />
          <ContactCustomerComp icon="Headphone" title="Change Pin" />
        </Box>
      </Box>
    );
  },
};
export const ContactCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Contact Card
        </Text>
        <Box
          bg={'extraLightGrey'}
          style={{
            // paddingHorizontal: gpsw(20),
            // paddingHorizontal: gpsw(24),
            paddingHorizontal: 24,
            padding:24
          }}>
          <ContactCardComp />
        </Box>
      </Box>
    );
  },
};

export const OrderSummary: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Order Summary
        </Text>
        <Box
          style={{
            // paddingHorizontal: gpsw(20),
            // paddingHorizontal: gpsw(24),
            paddingHorizontal: 24,
          }}>
            <OrderSummarry/>
        </Box>
      </Box>
    );
  },
};

export const RecentTransactionCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Recent Transaction Card
        </Text>
        <Box
          bg={'extraLightGrey'}
          style={{
            // paddingHorizontal: gpsw(20),
            // paddingHorizontal: gpsw(24),
            paddingHorizontal: 24,
          }}>
            <RecentTransaction/>
        </Box>
      </Box>
    );
  },
};
export const WhatFeesCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          What Fees Card
        </Text>
        <Box
           bg={'extraLightGrey'}
          style={{
            // paddingHorizontal: gpsw(20),
            // paddingHorizontal: gpsw(24),
            paddingHorizontal: 24,
          }}>
            <WhatFees/>
        </Box>
      </Box>
    );
  },
};

export const PaySupplierQrViewPortCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Pay Supplier QR Card
        </Text>
        <Box>
          <PaySupplierQrViewPort/>
        </Box>
      </Box>
    );
  },
};

export const ImageBannersCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Image Banners Card
        </Text>
        <Box>
          <ImageBanners/>
        </Box>
      </Box>
    );
  },
};

export const PinMustCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Pin Must Card
        </Text>
        <Box>
          <PinMust/>
        </Box>
      </Box>
    );
  },
};

export const TakePictureCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Take a picture Card
        </Text>
        <Box>
          <TakePicture/>
        </Box>
      </Box>
    );
  },
};


export const TopHeaderCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Top Header Card
        </Text>
        <Box>
          <TopHeader/>
        </Box>
      </Box>
    );
  },
};

export const KYCCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          KYC Card
        </Text>
        <Box>
          <KYC/>
        </Box>
      </Box>
    );
  },
};


export const TextCarouselCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Text Carousel Card
        </Text>
        <Box>
          <TextCarousel/>
        </Box>
      </Box>
    );
  },
};

export const PinInputCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Pin Input Card
        </Text>
        <Box>
          <PinInput/>
        </Box>
      </Box>
    );
  },
};
export const WelcomeCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Welcome Card
        </Text>
        <Box>
          <Welcome/>
        </Box>
      </Box>
    );
  },
};
export const PhotoClosedCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Photo Closed Card
        </Text>
        <Box>
          <PhotoClosed/>
        </Box>
      </Box>
    );
  },
};

export const ChooseCountryCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Choose Country Card
        </Text>
        <Box>
          <ChooseCountry/>
        </Box>
      </Box>
    );
  },
};
export const ChangePaymentMethodCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Change Payment Method
        </Text>
        <Box bg={'extraLightGrey'} px={'hm'} py={'hl'} pb={'hxl'}>
          <ChangePaymentMethod/>
        </Box>
      </Box>
    );
  },
};
export const FailedTransactionCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          Failed Transaction
        </Text>
        <Box bg={'extraLightGrey'} px={'hm'} py={'hl'} pb={'hxl'}>
          <FailedTransaction/>
        </Box>
      </Box>
    );
  },
};
export const ListOfInvooicesCard: StoryObj<typeof CardsMeta> = {
  render: args => {
    return (
      <Box
        gap={'hsm'}
        style={{
          marginTop: -38,
        }}>
        <Text
          textAlign={'center'}
          textDecorationLine={'underline'}
          color={'black'}
          variant={'headings'}>
          List Of Invoices
        </Text>
        <Box>
          <ListOfInvoices/>
        </Box>
      </Box>
    );
  },
};

export default CardsMeta;
