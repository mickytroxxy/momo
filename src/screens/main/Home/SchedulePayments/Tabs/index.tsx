import ActivePayments from './ActivePayments';


type tabdataType = {
  title: string;
  renderScene: () => React.JSX.Element;
}[];
const SchedulePaymentsTabData: tabdataType = [
  {
    title: 'ACTIVE PAYMENTS',
    renderScene: () => <ActivePayments />,
  },
];

export default SchedulePaymentsTabData;
