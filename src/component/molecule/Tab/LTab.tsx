import TouchableOpacity from '@/component/atom/TouchableOpacity';
import React, {useState} from 'react';
import {Box, Text} from '../../atom';
import {getFontSizeByWindowHeight} from '@/style/theme';

const tabData = [
  {title: 'SUGGESTED', content: 'SUGGESTED CONTENT'},
  {title: 'PAY', content: 'PAY CONTENT'},
  {title: 'RECHARGE', content: 'RECHARGE CONTENT'},
  // Add more tabs here if needed
];
type LTabType = {
  spaceEvenly?: boolean;
  tabData: {
    title: string;
    renderScene: () => JSX.Element;
  }[];
};

const LTab = ({tabData, spaceEvenly}: LTabType) => {
  const [tabIndex, setTabIndex] = useState(0);
  const toggleTab = (index: number) => {
    setTabIndex(index);
  };

  function renderHeader() {
    return (
      <Box
        flexDirection={'row'}
        px={'hm'}
        style={[spaceEvenly && {justifyContent: 'space-between'}]}>
        {tabData.map((tab, index) => (
          <TouchableOpacity
            key={tab.title}
            onPress={() => toggleTab(index)}
            activeOpacity={0.7}>
            <Box gap={'vsm'}>
              <Text
                variant={'medium12'}
                textAlign={'center'}
                color={index === tabIndex ? 'momoBlue' : 'lightGrey'}>
                {tab.title}
              </Text>
              <Box
                borderTopLeftRadius={6}
                borderTopRightRadius={6}
                height={getFontSizeByWindowHeight(4)}
                bg={index === tabIndex ? 'sunshineYellow' : 'transparent'}
              />
            </Box>
          </TouchableOpacity>
        ))}
      </Box>
    );
  }

  function renderCard({renderScene}: {renderScene: () => JSX.Element}) {
    return renderScene();
  }

  return (
    <Box flexGrow={1}>
      {renderHeader()}
      {tabData.map((tab, index) => (
        <React.Fragment key={tab.title}>
          {tabIndex === index && renderCard({renderScene: tab.renderScene})}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default LTab;
