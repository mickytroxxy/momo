import Accordion from '@/component/molecule/Accordion/Accordion';
import {privacyPolicyContent} from '@/fixtures/dummyData';
import {fontFamily} from '@/style/theme';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {SafeAreaContainer} from '@atom';
import {BackHeadingX} from '@molecule';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';

const PrivacyPolicy = () => {
  return (
    <SafeAreaContainer>
      <BackHeadingX title="Privacy Policy" />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150,
        }}>
        <View
          style={{
            paddingVertical: gpsh('20'),
            paddingHorizontal: gpsw('20'),
          }}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: gpsw('16'),
              lineHeight: gpsh('24'),
              color: '#5F5F5F',
              fontFamily: fontFamily('Regular'),
            }}>
            MTN Ghana data protection and privacy policy stamtent
          </Text>
        </View>
        <Accordion content={privacyPolicyContent} />
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default PrivacyPolicy;
