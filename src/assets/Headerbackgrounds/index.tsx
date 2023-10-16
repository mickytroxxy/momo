import InfoHeaderBg from './InfoHeaderBg';
import DashboardHeaderBg from './DashboardHeaderBg';
import TransferHeaderBg from './TransferHeaderBg';
import AyoHeaderBg from './AyoHeaderBg';
import AuthBg from './AuthBg';
import BusinessResponseBg from './BusinessResponseBg';
import StatementBg from './StatementBg';

const HeaderBg = {
  InfoHeaderBg,
  DashboardHeaderBg,
  TransferHeaderBg,
  AyoHeaderBg,
  BusinessResponseBg,
  AuthBg,
  StatementBg,
};

export default HeaderBg;
export type HeaderBgTypeType = keyof typeof HeaderBg;
