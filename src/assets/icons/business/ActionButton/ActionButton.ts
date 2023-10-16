import AccountTransfer from './accounttransfer.svg';
import BuyAirtime from './buyairtime.svg';
import BuyData from './buydata.svg';
import BuyVoice from './buyvoice.svg';
import Electricity from './electricity.svg';
import GetMoney from './getmoney.svg';
import MakeMoney from './makemoney.svg';
import MomoGrow from './momogrow.svg';
import Postpaid from './postpaid.svg';
import Recharge from './recharge.svg';
import Refuse from './refuse.svg';
import SchoolFees from './schoolfees.svg';
import Utilities from './utilities.svg';
import Water from './water.svg';
import Wallet from './wallet.svg';
import Supplier from './supplier.svg';
import BankingServices from './bankingservices.svg';
import Tv from './tv.svg';
import Salaries from './salaries.svg';

const ActionButtonIcons = {
  'Account Transfer': AccountTransfer,
  'Buy Airtime': BuyAirtime,
  'Buy Data': BuyData,
  'Buy Voice': BuyVoice,
  Electricity,
  'Get Money': GetMoney,
  'Make Money': MakeMoney,
  'Momo Grow': MomoGrow,
  Postpaid,
  Recharge,
  Refuse,
  'School Fees': SchoolFees,
  Utilities,
  Water,
  Wallet,
  Supplier,
  'Banking Services': BankingServices,
  Salaries,
  Tv,
};

export default ActionButtonIcons;
export type ActionButtonIconsType = keyof typeof ActionButtonIcons;
