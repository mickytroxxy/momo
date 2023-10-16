import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import CurvedHeader from '../../Header/CurvedHeader';
import TopHeaderContent from '../../Header/TopHeaderContent';
import {Box, Button, Icon, Illustration} from '@atom';
import {globalMoMoBlue, headerInJourneyFontColour} from '@/style-dictionary-dist/momoStyle';
import {gpmsh, gpsh, gpsw} from '@/utils/parseTokenStyle';
import Illustrate from '@/constants/illustration';
import {fontFamily} from '@/style/theme';
import {color} from '@shopify/restyle';
import CurvedHeaderBg from '../../Header/CurvedHeaderBg';
import { IllustrationImages } from '@/constants/images';
import TextCarousel from '../Card/TextCarousel';
import { ChooseCountryCard } from '../Card/Cards.stories';
import ChooseCountry from '../Card/ChooseCountry';
import { ScrollView } from 'react-native-gesture-handler';
// import Ase from './suksex.png';

const {Soxsex} = Illustrate;

const TextToLogo = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#00496a'} />
      <CurvedHeaderBg image={IllustrationImages.bg} height={345}>
        <Box px={'vs'} style={{paddingTop:gpsh('50')}}>
          <View style={{alignItems:'center'}}><Icon name="MomoIcon" size={66} /></View>
          <TextCarousel/>
        </Box>
      </CurvedHeaderBg>
      <View
        style={{
          justifyContent: 'center',
          marginTop: '-32%',
          flex:1
        }}>
          <ScrollView contentContainerStyle={{flexGrow:1}}><ChooseCountry/></ScrollView>
          <View style={{marginBottom:10}}>
            <Button
                  bStyle={{alignItems:'center',alignSelf:'center',width:'90%'}}
                  onPress={() => {}}
                  label='GET STARTED'
                  variant='primary'
                  size="fullWidth"
                  disabled
              />
          </View>
      </View>
    </View>
  );
};

export default TextToLogo;
