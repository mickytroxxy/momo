import {LightStatusBar} from '@/component/molecule/StausBar';
import {onBoardingImage} from '@/constants/images';
import {Theme} from '@/typings/globalTheme';
import {gpmsh, gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Box, Button, SafeAreaContainer} from '@atom';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@shopify/restyle';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, FlatList, View, useWindowDimensions} from 'react-native';
import Slide from './Component/Slide';
import {OnboardScreenProps} from '@/typings/navigation';
import { useDispatch } from 'react-redux';
import { updateToken } from '@/features/auth/authSlice';

const Onboard = () => {
  const {height, width} = useWindowDimensions();
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const scrollX = useRef<any>(new Animated.Value(0)).current;
  const fRef = useRef<FlatList>(null);
  const {navigate} = useNavigation<OnboardScreenProps['navigation']>();
  type onBoarding = {
    name: string;
    description: string;
    Source: any;
    dimension: any;
  };
  useEffect(() =>{
    //dispatch(updateToken({ accessToken: null }))
  },[])
  const slideData: onBoarding[] = [
    {
      name: 'TopUp',
      description:
        'Buy airtime, data and voice bundles and prepaid electricity ​',
      Source: 'Onboard1',
      // dimension: {width: '188.2', height: '240'},
      // dimension: {width: '117.33', height: '267.59'},
      dimension: {width: '166', height: '216'},
    },
    {
      name: 'Pay Bills',
      description:
        'You can pay your electricity, TV subscriptions, water, school fees and taxes bills using MoMo',
      Source: 'Onboard2',
      dimension: {width: '216', height: '197'},
    },
    {
      name: 'Scan to Pay',
      description:
        'Make payments to merchants and retailers by scanning a QR code on the MoMo app',
      Source: 'Onboard3',
      dimension: {width: '216', height: '216'},
    },
    {
      name: 'Send & Receive Money',
      description:
        'Send and receive money from and to any MTN mobile number and receive money from abroad',
      Source: 'Onboard4',
      dimension: {width: '230', height: '230'},
    },
  ];

  return (
    // <View style={{flex: 1, backgroundColor: 'white'}}>
    <SafeAreaContainer bgColor="white">
      {/* <DarkStatusBar /> */}
      <LightStatusBar />
      <View
        style={{
          flex: 3,
          backgroundColor: 'white',
        }}>
        <Animated.FlatList
          ref={fRef}
          data={slideData}
          renderItem={({item, index}: {item: onBoarding; index: number}) => (
            <Slide
              text={item.name}
              description={item.description}
              Source={item.Source}
              dimension={item.dimension}
            />
          )}
          horizontal
          // initialScrollIndex={sindex}
          decelerationRate={'fast'}
          snapToAlignment="center"
          pagingEnabled
          // scrollEventThrottle={32}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          // viewabilityConfig={viewConfig}
          bounces={false}
          // scrollEnabled={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
              // listener
            },
          )}
        />
      </View>
      <View
        style={{
          position: 'relative',
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        {/* DOT */}
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            gap: gpsw('10'),
            marginBottom: gpsh(15),
            marginTop: gpsh(5),
            width: gpsw('54'),
          }}>
          {slideData.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const indicatorWidth = scrollX.interpolate({
              inputRange,
              outputRange: [gpsw('4'), gpsw('12'), gpsw('4')],
              extrapolate: 'clamp',
            });
            const indicatorColor = scrollX.interpolate({
              inputRange,
              outputRange: ['#AFAFAF', '#FFCB05', '#AFAFAF'],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={`${i}-dot`}
                style={{
                  height: gpsh('4'),
                  width: indicatorWidth,
                  borderRadius: 20,
                  backgroundColor: indicatorColor,
                }}
              />
            );
          })}
        </View>
        <Box
          px={'hm'}
          pb={'hm'}
          gap={'hs'}
          style={
            {
              // marginTop: 'auto',
              // marginBottom: 'auto',
            }
          }>
          <Button
            onPress={() => {
              let index = Math.ceil(Number(scrollX._value / width));
              if (index >= 3) {
                navigate('SelectCountry');
                return;
              }
              console.log('yes');
              console.log('sindex', index);
              // setSindex(v => v + 1);
              fRef.current?.scrollToIndex({
                animated: true,
                index: index + 1,
              });
              // if (index >= 2) {
              //   setShow(false) : setShow(true)
              // }
              // index >= 2 ? setShow(false) : setShow(true);
            }}
            //   onPress={scrollTo}
            label="NEXT"
            variant="primary"
          />
          {show && (
            <Button
              onPress={() => {
                navigate('SelectCountry');
              }}
              label="SKIP"
              variant="tertiary"
            />
          )}
        </Box>
      </View>
    </SafeAreaContainer>
    // </View>
  );
};

export default Onboard;
