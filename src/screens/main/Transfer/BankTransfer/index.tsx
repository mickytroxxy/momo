import SafeAreaContainer from '@/component/atom/SafeAreaContainer';
import {getFontSizeByWindowHeight as gsh } from '@/style/theme';
import {Theme} from '@/typings/globalTheme';
import {Box, Icon} from '@atom';
import {BackHeadingX,Header, Tab, TopHeaderContent} from '@molecule';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@shopify/restyle';
import React from 'react';
import { BankTransferTabs } from './BankTransferTabs';

const BankTransfer = () => {
  const {goBack} = useNavigation();
  const {spacing} = useTheme<Theme>();
  return (
    <SafeAreaContainer bg={'white'} flex={1}>
      <BackHeadingX title='Bank Transfer' />
      <Box bg={'white'} flex={1} >
        <Tab mT={gsh(20)} mH={gsh(20)} tabData={BankTransferTabs} />
      </Box>
    </SafeAreaContainer>
  );
};

export default BankTransfer;
