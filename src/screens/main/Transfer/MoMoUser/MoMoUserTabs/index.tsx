import {Box} from '@atom';
import NewUser from './NewUser';
import Beneficiaries from './Beneficiaries';

export const momousertabData = [
  {
    title: 'New Users',
    renderScene: () => <NewUser />,
  },
  {
    title: 'Beneficiaries',
    renderScene: () => <Beneficiaries/>,
  },
];
