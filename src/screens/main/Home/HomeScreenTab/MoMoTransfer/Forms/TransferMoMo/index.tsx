import {getFontSizeByWindowHeight as gsh} from '@/style/theme';
import {Box} from '@atom';
import {Tab} from '@molecule';
import React from 'react';
import {momoTransderTabData} from './Tab';
import NewRecipient from './Tab/NewRecipient';
import SchedulePayment from './SchedulePayment';

type TransferMoMoType = {
  type: string;
};

const TransferMoMo = ({type}: TransferMoMoType) => {
  let content;
  switch (type) {
    case 'spayment':
      content = <SchedulePayment />;
      break;
    case 'momotransfer':
      content = <Tab mH={gsh(20)} mT={gsh(20)} tabData={momoTransderTabData} />;
      break;
    default:
      break;
  }
  return (
      <>{content}</>
  );
};

export default TransferMoMo;
