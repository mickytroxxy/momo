import SafeAreaContainer from '@/component/atom/SafeAreaContainer';
import {getFontSizeByWindowHeight as gsh} from '@/style/theme';
import {Box} from '@atom';
import {BackHeadingX, Tab} from '@molecule';
import React from 'react';
import {momousertabData} from './MoMoUserTabs';

const MomOUser = () => {
  return (
    <SafeAreaContainer flex={1} flexGrow={1}>
      <Box flex={1} bg={'white'}>
        <BackHeadingX title="MoMo user" />
        <Tab mT={gsh(20)} mH={gsh(20)} tabData={momousertabData} />
      </Box>
    </SafeAreaContainer>
  );
};

export default MomOUser;
