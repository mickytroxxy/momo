import {SvgIconType} from '@/constants/icon';

type MenuContentType = {
  icon: SvgIconType;
  label: string;
  screen: any;
};
type tabType = {
  title: string;
  renderScene: string;
  menu: MenuContentType[][];
  banner?: boolean
};
type resDataType = {
  linearTabs: tabType[];
};

export const HomeScreenData: resDataType = {
  linearTabs: [
    {
      title: 'FOR WES',
      renderScene: 'ForYou',
      menu: [
        [
          {
            icon: 'MomotransferIcon',
            label: 'Ikon transfer',
            screen: undefined,
          },
          {
            icon: 'BillsIcon',
            label: 'Bills',
            screen: undefined,
          },
        ],
        [
          {
            icon: 'DatabundlesIcon',
            label: 'Data Bundles',
            screen: undefined,
          },
          {
            icon: 'AirtimeIcon',
            label: 'Airtime',
            screen: undefined,
          },
        ],
      ],
      banner: true
    },
    {
      title: 'PAY NOW',
      renderScene: 'Pay',
      menu: [
        [
          {
            icon: 'MomotransferIcon',
            label: 'MoMo transfer',
            screen: {
              route: 'momotransfer',
              nest: {
                type: 'momotransfer',
              },
            },
          },
          {
            icon: 'CalendarScheduleIcon',
            label: 'Schedule payments',
            screen: 'schedulepaymentscreen',
          },
        ],
        [
          {
            icon: 'BillsIcon',
            label: 'Bills',
            screen: undefined,
          },
          {
            icon: 'BettingIcon',
            label: 'Betting',
            screen: undefined,
          },
        ],
      ],
    },
    {
      title: 'RECHARGE',
      renderScene: 'Recharge',
      menu: [
        [
          {
            icon: 'DatabundlesIcon',
            label: 'Data Bundles',
            screen: undefined,
          },
          {
            icon: 'AirtimeIcon',
            label: 'Airtime',
            screen: undefined,
          },
        ],
      ],
    },
    {
      title: 'INSURE',
      renderScene: 'Insure',
      menu: [
        [
          {
            icon: 'AyoIcon',
            label: 'aYo',
            screen: 'ayoscreen',
          },
        ],
      ],
    },
    // {
    //   title: 'INSURE',
    //   renderScene: 'Insure',
    //   menu: [
    //     [
    //       {
    //         icon: 'AyoIcon',
    //         label: 'aYo',
    //         screen: 'ayoscreen',
    //       },
    //     ],
    //   ],
    // },
  ],
};

const lTabs = {
  'FOR YOU': 'ForYou',
  PAY: 'Pay',
  RECHARGE: 'Recharge',
  INSURE: 'Insure',
};
