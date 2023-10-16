import React, {useState} from 'react';
import {Box, Text} from '@atom';
import CustomAccordion from 'react-native-collapsible/Accordion';
import {accordionData} from '@/fixtures/dummyData';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/typings/globalTheme';
import icon from '@/constants/icon';
import { moderateScale } from 'react-native-size-matters';
import { fontFamily, getFontSizeByWindowWidth } from '@/style/theme';
import HorizontalCardSeparator from '../Card/HorizontalCardSeparator';
import { View } from 'react-native';
import { gpsh } from '@/utils/parseTokenStyle';

type AccordionDataProps = {
  propData:{
    id: number,
    title: string,
    content?:string,
    renderScene?: () => JSX.Element;
  }[]
}
const Accordion = (props:AccordionDataProps) => {
  const {propData} = props;
  const [activeSections, setactiveSections] = useState([]);
  const {colors, spacing} = useTheme<Theme>();
  const {DropIcon, UpIcon} = icon;
  const renderHeaders = (content: any, index: any, isActive: boolean) => {
    return (
      <View>
        <Box
        style={{
          flexDirection: 'row',
          paddingVertical: getFontSizeByWindowWidth(12.5),
          justifyContent: 'space-between',
          paddingHorizontal: gpsh('20'),
          backgroundColor: colors.white,
          alignItems: 'center',
          borderTopWidth: index === 0 ? 0 : 1,
          borderColor: '#0000001A',
        }}>
        <Text
          style={{
            fontSize: gpsh('16'),
            lineHeight: gpsh('18'),
            color: colors.black,
            fontFamily: fontFamily('Regular'),
          }}>
          {content.title}
        </Text>
        {isActive ? (
          <UpIcon width={18} height={18} color={colors.black} />
        ) : (
          <DropIcon width={18} height={18} color={colors.black} />
        )}
      </Box>
      <View style={{paddingVertical:gpsh('4')}}><HorizontalCardSeparator w={1} /></View>
      </View>
    );
  };
  const renderContent = (section: any) => {
    return (
      <Box
        style={{
          paddingHorizontal: getFontSizeByWindowWidth(0),
          paddingTop: getFontSizeByWindowWidth(10),
          paddingBottom: getFontSizeByWindowWidth(20),
          marginTop:-20
          // paddingRight: getFontSizeByWindowWidth(50),
        }}>
        {section.renderScene && section.renderScene()}
      </Box>
    );
  };

  const updateSections = (activeSections: any) => {
    setactiveSections(activeSections);
  };

  return (
    <Box>
      {/* <Text>Accordion</Text> */}
      <CustomAccordion
        sections={propData?.length > 0 ? propData : accordionData}
        activeSections={activeSections}
        // renderSectionTitle={renderSectionTitle}
        renderHeader={renderHeaders}
        renderContent={renderContent}
        onChange={updateSections}
        underlayColor={'transparent'}
        // customIcon={() => <ChevronDownIcon />}
      />
      {/* <View style={{}}><HorizontalCardSeparator w={0.7}/></View> */}
    </Box>
  );
};

export default Accordion;
